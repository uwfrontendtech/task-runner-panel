function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function main() {
  var appComponent= "<h1>My Awesome App</h1>"
  document.getElementById('app').innerHTML = appComponent;
}

ready(main);
