const hljs = require("highlight.js/lib/core");
hljs.registerLanguage("json", require("highlight.js/lib/languages/json"));

module.exports = hljs;
