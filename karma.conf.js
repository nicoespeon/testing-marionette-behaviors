module.exports = function ( config ) {
  config.set( {

    frameworks: [ 'jasmine' ],

    files: [
      'public/vendor.js',
      'public/app.js',
      'public/test.js',
      //{pattern: 'app/**/*.js', included: false},
      //{pattern: 'test/**/*.test.js', included: false},
      'test/run-all.js'
    ],

    exclude: [
      '**/karma.conf.js'
    ],

    browsers: [ 'PhantomJS' ],
    reporters: [ 'mocha' ],

    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: false,
    logLevel: config.LOG_INFO

  } );
};
