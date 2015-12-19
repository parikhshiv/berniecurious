(function () {
  var Video = window.Video = function () {
    this.element = document.createElement("div");
    this.element.className = "video";
  }

  Video.prototype.create = function () {
    addYoutube.call(this);
    addLinks.call(this);
    return this.element;
  }

  var addYoutube = function () {
    var youtube = document.createElement("embed")
    youtube.setAttribute("src", "https://www.youtube.com/v/SsDSbgEZswY");
    youtube.setAttribute("width", 420);
    youtube.setAttribute("height", 315);

    this.element.appendChild(youtube);
  }

  var addLinks = function () {
    var floatLeft = document.createElement("div")
    var floatRight = document.createElement("div")
    floatLeft.classList.add("left", "links");
    floatRight.classList.add("right", "links");

    var leftLink = document.createElement("a");
    var rightLink = document.createElement("a");
    leftLink.setAttribute("href", "http://berniesanders.com");
    rightLink.setAttribute("href", "http://google.com");
    leftLink.textContent = "BernieSanders.com";
    rightLink.textContent = "Google";

    floatLeft.appendChild(leftLink);
    floatRight.appendChild(rightLink);

    this.element.appendChild(floatLeft);
    this.element.appendChild(floatRight);
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
  var Contribute = window.Contribute = function () {
    this.element = document.createElement("div");
    this.element.className = "navbar";
  }

  var addHeader = function () {
    var header = document.createElement("h1");
    header.textContent = "Curious About Bernie";
    this.element.appendChild(header);
  }

  Contribute.prototype.create = function () {
    addHeader.call(this);
    return this.element;
  }
}());

(function () {
  var Footer = window.Footer = function () {
    this.element = document.createElement("div");
    this.element.classList.add("footer", "container-fluid");
    this.videos = [["Wealth Inequality", 'one'], ["Democratic Socialism", 'two'],
    ["Bernie's Solution", 'three'], ["Contribute", 'four']];
  }

  Footer.prototype.create = function () {
    addSections.call(this, {"videos": this.videos});
    addLinks.call(this);
    return this.element;
  }

  var addSections = function (opts) {
    var footerRow = document.createElement("div")
    footerRow.classList.add("row");
    var num = (12 % opts.videos.length === 0) ? opts.videos.length : 3;
    for (var i = 0; i < num; i++) {
      var label = opts.videos[i][0].split(" ")[0];
      this[label] = document.createElement("div");
      this[label].classList.add("col-md-" + (12 / num), "footer-section");
      this[label].setAttribute("id", label);

      var span = document.createElement("div")
      span.textContent = opts.videos[i][0];

      this[label].appendChild(span)
      footerRow.appendChild(this[label]);
    }

    this.element.appendChild(footerRow);
  }

  var createPage = function (topic) {
    var youtube = document.getElementsByTagName('embed')[0];
    youtube.setAttribute("src", "https://www.youtube.com/v/" + topic);
  };

  var addLinks = function () {
    for (var i = 0; i < this.videos.length; i++) {
      var label = this.videos[i][0].split(" ")[0];
      this[label].addEventListener('click', createPage.bind(null, this.videos[i][1]));
    }
  };
}());

(function() {
  var createMainPage = function () {
    var app = document.getElementById('container');
    app.textContent = "";

    app.appendChild(new window.Navbar().create());
    app.appendChild(new window.Video().create());
    app.appendChild(new window.Footer().create());
  };
  createMainPage();
}());
