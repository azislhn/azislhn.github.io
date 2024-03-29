"use strict";

function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Projects, null), /*#__PURE__*/React.createElement(Contacts, null)), /*#__PURE__*/React.createElement(Footer, {
    ig: "https://www.instagram.com/ziz.slhn/",
    fb: "https://www.facebook.com/azizslhn1105",
    github: "https://github.com/azislhn",
    linked: "https://www.linkedin.com/in/aziz-solihin-03071622b/"
  }));
}
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));