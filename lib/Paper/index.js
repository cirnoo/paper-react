'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (element) {
  var _class, _temp, _initialiseProps;

  var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { style: {} };
  return _temp = _class = function (_Component) {
    _inherits(Paper, _Component);

    function Paper(props) {
      _classCallCheck(this, Paper);

      var _this = _possibleConstructorReturn(this, (Paper.__proto__ || Object.getPrototypeOf(Paper)).call(this, props));

      _initialiseProps.call(_this);

      return _this;
    }

    _createClass(Paper, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props;
        var style = _props.style;
        var state = _props.state;
        var props = _props.props;

        var children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];

        return _react2.default.createElement(element, props && _extends({}, init, this.getProps()), children.length > 0 && _react2.default.Children.map(children, function (child) {
          if (_react2.default.isValidElement(child)) {
            return _react2.default.cloneElement(child, child.props.state && _this2.props.childProps ? _extends({}, _this2.setChildProps(child.props.state)) : child.props);
          } else {
            return child;
          }
        }));
      }
    }]);

    return Paper;
  }(_react.Component), _class.PropTypes = {
    state: _react.PropTypes.string,
    children: _react.PropTypes.node,
    childProps: _react.PropTypes.object
  }, _class.defaultProps = {
    childProps: {},
    props: {}
  }, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.getProps = function () {
      var _props2 = _this3.props;
      var state = _props2.state;
      var props = _props2.props;

      var _ref = props[state] || {};

      var style = _ref.style;

      var others = _objectWithoutProperties(_ref, ['style']);

      return _extends({
        style: style ? _extends({}, init['style'], style) : init['style']
      }, others);
    };

    this.setChildProps = function (state) {
      var childProps = _this3.props.childProps;

      return {
        props: _defineProperty({}, state, childProps[state] || {})
      };
    };
  }, _temp;
};