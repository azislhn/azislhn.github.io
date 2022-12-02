"use strict";

var Hero = function Hero() {
  $(document).ready(function () {
    $("#hero h2").css("transform", "translateY(0)");
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello, mate!"), /*#__PURE__*/React.createElement("p", null, "UI/UX Designer | Front-end Web Developer")));
};