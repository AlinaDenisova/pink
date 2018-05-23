var header = document.querySelector(".page-header");
var toggle = document.querySelector(".page-header__toggle");

header.classList.remove("page-header--nojs");

toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (header.classList.contains("page-header--closed")) {
    header.classList.remove("page-header--closed");
    header.classList.add("page-header--opened");
  } else {
    header.classList.add("page-header--closed");
    header.classList.remove("page-header--opened");
  }
});

var tool = document.querySelectorAll(".new-photo__tool");

if (tool) {
  for (var i = 0; i < tool.length; i++) {
    tool[i].addEventListener ("click", function (evt) {
      evt.preventDefault();
      tool.classList.add("new-photo__tool--active");
    });
  }
}

var link = document.querySelector(".contest-form__btn");
var modalSuccess = document.querySelector(".modal--success");
var modalFailure = document.querySelector(".modal--failure");
var overlay = document.querySelector(".overlay");
var form = document.querySelector(".contest-form__form");
var username = document.getElementById("name");
var userLastname = document.getElementById("last-name");
var email = document.getElementById("email");
var close = document.querySelectorAll(".modal__btn");

if (form) {
  form.addEventListener("submit", function (evt) {
    if (!username.value || !userLastname.value || !email.value) {
      evt.preventDefault();
      modalFailure.classList.add("modal--show");
      overlay.classList.add("overlay--show");
    } else {
      evt.preventDefault();
      modalSuccess.classList.add("modal--show");
      overlay.classList.add("overlay--show");
    }
  });
}

if (close) {
  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modalSuccess.classList.remove("modal--show");
      modalFailure.classList.remove("modal--show");
      overlay.classList.remove("overlay--show");
    });
  }
}

if (overlay) {
  overlay.addEventListener("click", function(event) {
    event.preventDefault();
    modalSuccess.classList.remove("modal--show");
    modalFailure.classList.remove("modal--show");
    overlay.classList.remove("overlay--show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalSuccess || modalFailure.classList.contains("modal--show")) {
      modalSuccess.classList.remove("modal--show");
      modalFailure.classList.remove("modal--show");
      overlay.classList.remove("overlay--show");
    }
  }
});

function initMap() {
var centerLatLng = new google.maps.LatLng(59.938827, 30.323073);
var mapOptions = {
      center: centerLatLng,
      zoom: 16
};

var map = new google.maps.Map(document.querySelector(".contacts__map"), mapOptions);
var addressLatLng = new google.maps.LatLng(59.938827, 30.323073);

var isIE11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));
var marker = new google.maps.Marker({
  position: addressLatLng,
  map: map,
  title: "ул. Большая Конюшенная 19/8, Санкт-Петербург",
  icon: isIE11 ? "img/map-marker.png" : "img/icon-map-marker.svg"
});
}
