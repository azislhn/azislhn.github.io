"use strict";

function Footer(props) {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "foot-wrapper row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement("h4", null, "Social Media"), /*#__PURE__*/React.createElement("div", {
    className: "socials-list"
  }, /*#__PURE__*/React.createElement("a", {
    href: props.ig,
    target: "blank",
    className: "social-link"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-lg fa-instagram"
  }), /*#__PURE__*/React.createElement("span", null, "Instagram")), /*#__PURE__*/React.createElement("a", {
    href: props.fb,
    target: "blank",
    className: "social-link"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-lg fa-facebook"
  }), /*#__PURE__*/React.createElement("span", null, "Facebook")), /*#__PURE__*/React.createElement("a", {
    href: props.github,
    target: "blank",
    className: "social-link"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-lg fa-github"
  }), /*#__PURE__*/React.createElement("span", null, "Github")), /*#__PURE__*/React.createElement("a", {
    href: props.linked,
    target: "blank",
    className: "social-link"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-lg fa-linkedin"
  }), /*#__PURE__*/React.createElement("span", null, "LinkedIn")))), /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement("h4", null, "Form"))), /*#__PURE__*/React.createElement("div", {
    className: "bottom"
  }, /*#__PURE__*/React.createElement("p", null, "Last update on December 2nd"), /*#__PURE__*/React.createElement("p", null, "\xA9 2022")));
}