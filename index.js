const parser = require('posthtml-parser');
const fs = require('fs');
const path = require('path');

module.exports = function(options) {
  const root = options.root || './';
  const encoding = options.encoding || 'utf-8';
  return function posthtmlInclude(tree) {
    let content;
    tree.match({ tag: 'link', attrs: { expand: 'true', rel: 'stylesheet' } }, function(node) {
      const href = node.attrs.href;
      if (href) {
        const src = path.resolve(root, href);
        content = `<style is="custom-style">${parser(fs.readFileSync(src, encoding))}</style>`;
      }
      return {
        tag: 'custom-style',
        content: content,
        id: 'inlined'
      };
    });
    return tree;
  };
};
