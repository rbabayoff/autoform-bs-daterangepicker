Package.describe({
  name: 'antalakas:autoform-bs-daterangepicker',
  version: '2.0.6_1',
  summary: 'bootstrap daterangepicker autoform add-on.',
  git: 'https://github.com/antalakas/autoform-bs-daterangepicker',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);

  api.use('meteor-platform');
  api.use('momentjs:moment');
  api.use('practicalmeteor:loglevel@1.2.0_2');
  api.use('aldeed:autoform@5.3.1');
  api.use('rbabayoff:bootstrap-daterangepicker@2.0.6_1');

  api.imply([
    'jquery',
    'momentjs:moment',
    'rbabayoff:bootstrap-daterangepicker@2.0.6_1'
  ]);

 api.addFiles('autoform-bs-daterangepicker.html', 'client');
  api.addFiles('autoform-bs-daterangepicker.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('antalakas:autoform-bs-daterangepicker');
  api.addFiles('tests/autoform-bs-daterangepicker-tests.js');
});
