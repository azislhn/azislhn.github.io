"use strict";

function Navbar() {
  $(document).ready(function () {
    // $(".nav-link span").addClass("hide");
    $(".nav-link").on("hover", function () {
      $(".nav-link>i").addClass("glow");
    });
    $(".nav-link").on("click", function () {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
    });
  });
  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navlinks"
  }, /*#__PURE__*/React.createElement("li", {
    "data-page": "hero",
    className: "nav-link active"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-lg fa-home"
  }), /*#__PURE__*/React.createElement("span", {
    className: "link-text"
  }, "Home")), /*#__PURE__*/React.createElement("li", {
    "data-page": "about",
    className: "nav-link"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-lg fa-user"
  }), /*#__PURE__*/React.createElement("span", {
    className: "link-text"
  }, "About")), /*#__PURE__*/React.createElement("li", {
    "data-page": "projects",
    className: "nav-link"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-lg fa-file-code"
  }), /*#__PURE__*/React.createElement("span", {
    className: "link-text"
  }, "Projects")), /*#__PURE__*/React.createElement("li", {
    "data-page": "contacts",
    className: "nav-link"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-lg fa-id-badge"
  }), /*#__PURE__*/React.createElement("span", {
    className: "link-text"
  }, "Contacts")))));
}