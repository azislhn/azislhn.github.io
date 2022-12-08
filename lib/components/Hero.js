"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Hero = /*#__PURE__*/function (_React$Component) {
  _inherits(Hero, _React$Component);
  var _super = _createSuper(Hero);
  function Hero(props) {
    var _this;
    _classCallCheck(this, Hero);
    _this = _super.call(this, props);
    _this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    return _this;
  }
  _createClass(Hero, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      fetch("//api.github.com/users/azislhn").then(function (res) {
        return res.json();
      }).then(function (result) {
        _this2.setState({
          isLoaded: true,
          items: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        error = _this$state.error,
        isLoaded = _this$state.isLoaded,
        items = _this$state.items;
      console.log(items);
      $('.avatar').click(function () {
        window.open(items.html_url);
      });
      $('.avatar').hover(function () {
        $('figcaption').toggleClass('show');
      });
      return /*#__PURE__*/React.createElement("section", {
        id: "hero"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/React.createElement("h2", null, "Greetings, mate!"), /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
        src: items.avatar_url,
        className: "avatar",
        alt: "..."
      }), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("small", null, "Click avatar to see my Github"))), /*#__PURE__*/React.createElement("p", null, "UI/UX Designer | Front-end Web Developer")));
    }
  }]);
  return Hero;
}(React.Component);