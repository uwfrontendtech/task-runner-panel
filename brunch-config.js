/*eslint-env node */

module.exports = {
  config: {
    files: {
      javascripts: {
        joinTo: {
          'scripts/app.js': /^app/,
          'scripts/vendor.js': /^vendor/
        }
      },
      stylesheets: {
        joinTo: {
          'styles/app.css': 'app/styles/**',
          'styles/vendor.css': /^vendor/
        }
      }
    },
    server: {
      command: 'live-server public --port=3000'
    }
  }
}
