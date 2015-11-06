Package.describe({
  name: 'praneybehl:react-conditionals',
  version: '0.1.5',
  summary: 'React component for easy conditional logic packaged for Meteor',
  git: 'https://github.com/praneybehl/meteor-react-conditionals',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('react@0.1.13');
  api.use('cosmos:browserify@0.8.3', 'client');
  api.addFiles('package.browserify.js', 'client');
  api.addFiles('package.browserify.options.json', 'client');
  api.export('Conditional');
});


Npm.depends({
  "react-conditional-component": "0.1.5",
  "exposify": "0.5.0"
});
