// Hello = require('hello');

(function () {

  window.Hello = {
    hello: "hello"
  };
}());


(function () {
  var app = document.getElementById('container');
  app.textContent = "";
  var start = document.createElement("h1");
  start.textContent = window.Hello.hello;
  app.appendChild(start)
}());
