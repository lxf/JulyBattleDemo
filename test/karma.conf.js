module.exports = function (config) {
  config.set({
    basePath: '../..',
    frameworks: ['jasmine', 'requirejs'],
    files: [
      'app/test/test-main.js',
      { pattern: 'app/vendor/**/*.js', included: false },
      { pattern: 'app/scripts/**/*.js', included: false },
      { pattern: 'app/test/spec/**/*.js', included: false }
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};