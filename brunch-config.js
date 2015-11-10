exports.config = {

  files: {
    javascripts: {
      joinTo: {
        'app.js': /^app/,
        'vendor.js': /^(bower_components|vendor)/,
        'test.js': /^test/
      },
      order: {
        before: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/lodash/lodash.js',
          'bower_components/backbone/backbone.js',
          'bower_components/marionette/lib/backbone.marionette.js'
        ]
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },

  plugins: {
    babel: {
      ignore: [ /^(bower_components|vendor)/ ],
      loose: "all"
    },
    autoReload: {
      port: [ 3030, 4040 ]
    }
  }

};
