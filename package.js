Package.describe({
  summary: 'A simple box with text that gets copied on click',
  version:'1.0.0',
  git:'https://github.com/gsabran/meteor-copy-text',
  name:'gsabran:copy-text',
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.1');
  api.use(['jquery', 'ecmascript'], ['client']);
  // Client
  api.addFiles('client.jsx', 'client');
  api.export('CopyText');
});

// var reactVersion = "0.14.0";

// Npm.depends({
//   "react": "0.14.0",
// });
