var App = {
  ready: function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  },
  main: function main() {
    var appComponent= '<h1>My Awesome App</h1>';
    document.getElementById('app').innerHTML = appComponent;
  },
  init: function init() {
    this.ready(this.main);
  }
}

module.exports = App;
