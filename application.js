(function () {
  var Video = window.Video = function (infoTuple) {
    this.element = document.createElement("div");
    this.element.className = "modal fade video";
    this.element.setAttribute("id", infoTuple[1]);
    this.topic = infoTuple[1];
    this.header = infoTuple[0];
  }

  Video.prototype.create = function () {
    this.addHeader();
    this.addYoutube();
    return this.element;
  }

  Video.prototype.addYoutube = function () {
    var youtube = document.createElement("embed")
    youtube.setAttribute("src", "https://www.youtube.com/v/" + this.topic);
    youtube.setAttribute("width", window.innerWidth / 2.5);

    this.element.appendChild(youtube);
  }

  Video.prototype.addHeader = function () {
    var header = document.createElement("h1");
    header.classList.add("modal-header");
    header.textContent = this.header;
    this.element.appendChild(header);
  }
}());

(function () {
  var Navbar = window.Navbar = function () {
    this.element = document.createElement("div");
    this.element.className = "navbar";
  }

  var addHeader = function () {
    var header = document.createElement("h1");
    header.textContent = "Curious About Bernie?";
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
    this.videos = [["Wealth Inequality", 'Ui-fHDUnZDg'], ["Democratic Socialism", 'SsDSbgEZswY'],
    ["The Solution", 'awXB5Ulaehk'], ["Poverty", 'wk0-eKo5rIk']];
  }

  Footer.prototype.create = function () {
    addSubHeader.call(this, "See What He Has To Say About:");
    addSections.call(this, {"videos": this.videos});
    addLinks.call(this);
    return this.element;
  }

  var addSections = function (opts) {
    var sectionsContainer = document.createElement("div");
    sectionsContainer.classList.add("container-fluid");

    var num = (12 % opts.videos.length === 0) ? opts.videos.length : 3;
    for (var i = 0; i < num; i++) {
      if (i % 2 == 0) {
        var footerRow = document.createElement("div")
        footerRow.classList.add("row");
      }
      var label = opts.videos[i][0].split(" ")[0];
      this[label] = document.createElement("div");
      this[label].classList.add("col-md-6", "footer-section");
      this[label].setAttribute("id", label);

      $(this[label]).text(opts.videos[i][0])
      footerRow.appendChild(this[label]);
      if (i % 2 == 1) {
        sectionsContainer.appendChild(footerRow);
      }
    }

    sectionsContainer.appendChild(footerRow);
    this.element.appendChild(sectionsContainer);
  }

  var toggleModal = function (topic) {
    $("#" + topic).modal('toggle');
  };

  var addLinks = function () {
    for (var i = 0; i < this.videos.length; i++) {
      var label = this.videos[i][0].split(" ")[0];

      $("#container").append(new window.Video(this.videos[i]).create());
      this[label].addEventListener('click', toggleModal.bind(null, this.videos[i][1]));
    }
  };

  var addSubHeader = function (text) {
    $subHeader = $("<h3></h3>");
    $subHeader.addClass("sub-head");
    $subHeader.text(text);

    $(this.element).append($subHeader);
  };
}());

(function() {
  var createMainPage = function () {
    var $app = $('#container');
    $app.text("");

    $app.append(new window.Navbar().create());
    $app.append(new window.Footer().create());
  };
  createMainPage();
}());
