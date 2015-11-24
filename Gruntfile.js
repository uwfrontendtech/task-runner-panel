module.exports = function(grunt) {

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
      options: { },
      all: [
        'js/**/*.js'
      ]
    },

    uglify: {
      dev: {
        files: {
          'main.min.js': [
            'js/main.js'
          ]
        }
      }
    },

    sass: {
      dev: {
        options: {
          style: 'compressed'
        },
        files: {
          'main.min.css': 'scss/main.scss'
        }
      }
    }

  });

  // Load Stuff
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  // Register Tasks
  grunt.registerTask('build', [
    'jshint',
    'uglify',
    'sass'
  ]);

  grunt.registerTask('default', ['watch']);

};
