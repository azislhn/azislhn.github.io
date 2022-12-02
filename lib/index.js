"use strict";

function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Hero, {
    data: "Helo say"
  }), /*#__PURE__*/React.createElement(About, {
    data: "Helo say"
  }), /*#__PURE__*/React.createElement(Projects, {
    data: "Helo say"
  }), /*#__PURE__*/React.createElement(Contacts, {
    data: "Helo say"
  })), /*#__PURE__*/React.createElement(Footer, null));
}
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));