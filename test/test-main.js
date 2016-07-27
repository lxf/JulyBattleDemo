var allTestFiles = [];
var TEST_REGEXP = /(_spec|_test)\.js$/i;
for (var file in window.__karma__.files) {
  if (TEST_REGEXP.test(file)) allTestFiles.push(file);
}

require.config({
  baseUrl: '/base/app/scripts',
  deps: allTestFiles,
  callback: window.__karma__.start,
  paths: {
    angular: '/base/app/vendor/angular/angular',
    angularMocks: '/base/app/vendor/angular-mocks/angular-mocks'
  },
  shim: {
    angular: { exports: 'angular' },
    angularMocks: { deps: ['angular'] }
  }
});
