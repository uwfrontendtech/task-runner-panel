module.exports = function(grunt) {

  // Load Stuff
  require('load-grunt-tasks')(grunt);

  // Configure Stuff
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      js: {
        files: 'js/main.js',
        tasks: ['jshint', 'uglify']
      },
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },

    jshint: {
      options: {
        "curly": true,
        "eqnull": true,
        "eqeqeq": true,
        "undef": true,
        "node": true
      },
      all: [
        'js/**/*.js'
      ]
    },

    uglify: {
      build: {
        files: {
          'dist/main.min.js': [
            'js/main.js'
          ]
        }
      }
    },

    sass: {
      build: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'dist/main.min.css': 'scss/main.scss'
        }
      }
    }
  });

  // Load Stuff
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-sass');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register Tasks
  grunt.registerTask('build', [ 'jshint', 'uglify', 'sass' ]);

  grunt.registerTask('default', ['watch']);
};
