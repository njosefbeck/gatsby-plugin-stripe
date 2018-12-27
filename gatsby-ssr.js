"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, options) {
  var setPostBodyComponents = _ref.setPostBodyComponents;

  return setPostBodyComponents([_react2.default.createElement("script", {
    id: "stripe-js",
    key: "gatsby-plugin-stripe",
    src: "https://js.stripe.com/v3/",
    async: options.async
  })]);
};