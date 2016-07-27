require.config({
  baseUrl: '/scripts',
  paths: {
    angular: '../vendor/angular/angular'  
  },
  shim: {
    angular: { exports: 'angular' }
  }
});