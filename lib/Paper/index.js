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
  var _class, _temp2;

  var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { style: {} };
  return _temp2 = _class = function (_Component) {
    _inherits(Paper, _Component);

    function Paper() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Paper);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Paper.__proto__ || Object.getPrototypeOf(Paper)).call.apply(_ref, [this].concat(args))), _this), _this.getProps = function () {
        var state = _this.props.state;

        var _ref2 = _this.props[state] || {};

        var style = _ref2.style;

        var others = _objectWithoutProperties(_ref2, ['style']);

        return _extends({
          style: style ? _extends({}, init['style'], style) : init['style']
        }, others);
      }, _this.setChildProps = function (state) {
        var childProps = _this.props.childProps;

        if (childProps[state]) {
          return _defineProperty({}, state, childProps[state] || {});
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Paper, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        if (this.props.render) {
          this.props.render(this.props);
        }

        var _props = this.props;
        var style = _props.style;
        var state = _props.state;

        var children = _react.Children.toArray(this.props.children);

        return _react2.default.createElement(element, _extends({}, init, this.getProps()), children.length > 0 && _react2.default.Children.map(children, function (child) {
          if (_react2.default.isValidElement(child)) {
            return child.props.state && _this2.props.childProps ? _react2.default.cloneElement(child, _extends({}, _this2.setChildProps(child.props.state))) : _react2.default.cloneElement(child);
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
  }, _temp2;
};