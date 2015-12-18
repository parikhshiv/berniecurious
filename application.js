(function () {
  var Video = window.Video = function () {
    this.element = document.createElement("div");
    this.element.className = "video";
  }

  Video.prototype.create = function () {
    addYoutube.call(this);
    return this.element;
  }

  var addYoutube = function () {
    var youtube = document.createElement("embed")
    youtube.setAttribute("src", "https://www.youtube.com/v/SsDSbgEZswY");
    youtube.setAttribute("width", 420);
    youtube.setAttribute("height", 315);

    this.element.appendChild(youtube);
  }
}());

(function () {
  var Navbar = window.Navbar = function () {
    this.element = document.createElement("div");
    this.element.className = "navbar";
  }

  var addHeader = function () {
    var header = document.createElement("h1");
    header.textContent = "Curious About Bernie";
    this.element.appendChild(header);
  }

  Navbar.prototype.create = function () {
    addHeader.call(this);
    return this.element;
  }
}());

(function () {
  var Footer = window.Footer = function () {
    this.element = document.createElement("div");
    this.element.classList.add("footer", "container-fluid");
  }

  var addSections = function (opts) {
    var footerRow = document.createElement("div")
    footerRow.classList.add("row");
    var num = (12 % opts.sections.length === 0) ? opts.sections.length : 3;
    for (var i = 0; i < num; i++) {
      var col = document.createElement("div");
      col.classList.add("col-md-" + (12 / num), "footer-section");
      col.setAttribute("id", opts.sections[i].split("")[0]);

      var span = document.createElement("div")
      span.textContent = opts.sections[i];

      col.appendChild(span)
      footerRow.appendChild(col);
    }

    this.element.appendChild(footerRow);
  }

  Footer.prototype.create = function () {
    addSections.call(this, {"sections": ["More Info", "Contribute", "Volunteer", "Learn"]});
    return this.element;
  }
}());

(function () {
  var app = document.getElementById('container');
  app.textContent = "";

  app.appendChild(new window.Navbar().create());
  app.appendChild(new window.Video().create());
  app.appendChild(new window.Footer().create());
}());
