import { jsx, css } from '@emotion/core';
import { createElement } from 'react';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background: none;\n    color: #f23c4c;\n    svg {\n      fill: #f23c4c;\n    }\n    &:hover:enabled {\n      background: #ffdde0;\n    }\n    &:active:enabled {\n      background: #ffdde0;\n    }\n    &:disabled {\n      color: #ffb4b8;\n      svg {\n        fill: #ffb4b8;\n      }\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background: #e9ecef;\n    color: #343a40;\n    svg {\n      fill: #343a40;\n    }\n    &:hover:enabled {\n      background: #f1f3f5;\n    }\n    &:active:enabled {\n      background: #dee2e6;\n    }\n    &:disabled {\n      color: #c6d3e1;\n      svg {\n        fill: #c6d3e1;\n      }\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background: #f23c4c;\n    color: white;\n    svg {\n      fill: white;\n    }\n    &:hover:enabled {\n      background: #ff6870;\n    }\n    &:active:enabled {\n      background: #ff6870;\n    }\n    &:disabled {\n      background: #ff6870;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  outline: none;\n  border: none;\n  box-sizing: border-box;\n  height: 2.4rem;\n  font-size: 0.875rem;\n  padding: 0 1rem;\n  border-radius: 0.25rem;\n  line-height: 1;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  &:focus {\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);\n  }\n  &:disabled {\n    &:hover {\n      cursor: not-allowed;\n    }\n  }\n  &:hover {\n    cursor: pointer;\n  }\n\n  svg {\n    width: 1em;\n    margin-right: 1em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** `Button` 은 기본적인 버튼입니다. */
function Button(_ref) {
  var children = _ref.children,
      _ref$themeType = _ref.themeType,
      themeType = _ref$themeType === void 0 ? "primary" : _ref$themeType,
      isDisabled = _ref.isDisabled,
      width = _ref.width,
      onClick = _ref.onClick;
  return jsx("button", {
    css: [defaultStyle, themeTypeStyle[themeType], {
      width: width
    }],
    onClick: onClick,
    disabled: isDisabled
  }, children);
}

var defaultStyle = css(_templateObject());
var themeTypeStyle = {
  primary: css(_templateObject2()),
  secondary: css(_templateObject3()),
  tertiary: css(_templateObject4())
};

function _templateObject4$1() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n        color: #f23c4c;\n        &:hover {\n          background-color: #edf0f7;\n          .item {\n            transform: translateX(8px);\n            color: #f23c4c;\n          }\n        }\n      "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  font-size: 1rem;\n  font-weight: 600;\n  padding: 0 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  transform: translateX(0);\n  transition: transform 0.5s cubic-bezier(0, 0, 0.2, 1) 0.0001s;\n  svg {\n    width: 1.3em;\n    margin-right: 1em;\n  }\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  color: #dde3ef;\n  border-radius: 6px;\n  outline: none;\n  border: none;\n  box-sizing: border-box;\n  height: 2.6rem;\n  &:hover {\n    cursor: pointer;\n    background-color: #edf0f7;\n    .item {\n      transform: translateX(8px);\n      color: #bdc6d8;\n    }\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

/** `NavButton` 은 페이지 이동 및 호버 애니메이션을 가진 버튼입니다. */
function NavButton(_ref) {
  var children = _ref.children,
      width = _ref.width,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      onClick = _ref.onClick;
  return jsx("div", {
    css: [areaStyle, {
      width: width
    }, focusSelector(isSelected)],
    onClick: onClick
  }, jsx("div", {
    className: "item",
    css: itemStyle
  }, children));
}

var areaStyle = css(_templateObject$1()); // #F23C4C

var itemStyle = css(_templateObject2$1());

var focusSelector = function focusSelector(props) {
  return props ? css(_templateObject3$1()) : css(_templateObject4$1());
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _ref = /*#__PURE__*/createElement("path", {
  "data-name": "path 625",
  className: "community_svg__cls-1",
  d: "M5.484 16.452V9.14H2.742A2.742 2.742 0 000 11.882v16.452a.893.893 0 001.426.722l4.707-3.464h12.284a2.532 2.532 0 002.6-2.623V21.94H10.968a5.484 5.484 0 01-5.484-5.484z"
});

var _ref2 = /*#__PURE__*/createElement("path", {
  "data-name": "path 626",
  className: "community_svg__cls-1",
  d: "M25.43 11.425a6.837 6.837 0 01-6.599-8.683h-8.025a2.742 2.742 0 00-2.742 2.742v10.968a2.742 2.742 0 002.742 2.742h12.385l4.373 3.391a.894.894 0 001.435-.722V10.392a6.809 6.809 0 01-3.569 1.033z"
});

var _ref3 = /*#__PURE__*/createElement("path", {
  "data-name": "path 627",
  className: "community_svg__cls-1",
  d: "M30 4.57A4.57 4.57 0 1125.43 0 4.57 4.57 0 0130 4.57z"
});

function SvgCommunity(props) {
  return /*#__PURE__*/createElement("svg", _extends({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "community",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 30 29.23"
  }, props), _ref, _ref2, _ref3);
}

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var _ref$1 = /*#__PURE__*/createElement("path", {
  d: "M8.749 14.422a16.884 16.884 0 01-1.413-7.086H2.445V9.17a4.384 4.384 0 001.8 3.095 9.5 9.5 0 004.504 2.157zm20.593-5.253V7.335h-4.89a16.88 16.88 0 01-1.414 7.087 9.5 9.5 0 004.5-2.159 4.382 4.382 0 001.8-3.095zm2.445-2.445v2.445a5.437 5.437 0 01-.793 2.732 9.114 9.114 0 01-2.139 2.484 11.867 11.867 0 01-3.3 1.862 12.989 12.989 0 01-4.116.85 10.22 10.22 0 01-1.814 1.814 3.578 3.578 0 00-1 1.385 4.833 4.833 0 00-.277 1.709 2.644 2.644 0 00.583 1.739 2.275 2.275 0 001.862.706 4.041 4.041 0 012.55.869 2.667 2.667 0 011.118 2.188v1.223a.589.589 0 01-.612.612H7.947a.589.589 0 01-.612-.612v-1.222a2.663 2.663 0 011.118-2.187 4.049 4.049 0 012.547-.87 2.277 2.277 0 001.862-.706 2.648 2.648 0 00.583-1.739 4.833 4.833 0 00-.277-1.709 3.578 3.578 0 00-1-1.385 10.181 10.181 0 01-1.814-1.812 12.95 12.95 0 01-4.116-.85 11.914 11.914 0 01-3.3-1.862A9.076 9.076 0 01.793 11.9 5.45 5.45 0 010 9.17V6.724a1.768 1.768 0 01.535-1.3 1.768 1.768 0 011.3-.535h5.5V3.056A2.943 2.943 0 018.234.9a2.939 2.939 0 012.158-.9h11a2.943 2.943 0 012.159.9 2.943 2.943 0 01.9 2.159v1.832h5.5a1.827 1.827 0 011.834 1.834z"
});

function SvgTrophy(props) {
  return /*#__PURE__*/createElement("svg", _extends$1({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "trophy",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 31.787 29.342"
  }, props), _ref$1);
}

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var _ref$2 = /*#__PURE__*/createElement("path", {
  d: "M30.653 10.853C29.261 4.561 27.166 1.202 24.059.284A7.031 7.031 0 0022.048 0a9.048 9.048 0 00-2.513.452 12.825 12.825 0 01-3.787.6 12.826 12.826 0 01-3.79-.6A9.053 9.053 0 009.448 0a7.6 7.6 0 00-2.082.284C4.273 1.197 2.181 4.555.773 10.849-.746 17.623.002 21.9 2.873 22.892a3.715 3.715 0 001.224.211c1.964 0 3.539-1.636 4.615-2.975 1.216-1.516 2.639-2.285 7.044-2.285 3.934 0 5.563.534 6.968 2.285a9.6 9.6 0 002.549 2.356 3.849 3.849 0 003.292.418c1.694-.578 2.666-2.107 2.888-4.543a25.673 25.673 0 00-.8-7.506zM12.598 10.5h-2.1v2.1a1.05 1.05 0 01-2.1 0v-2.1h-2.1a1.05 1.05 0 110-2.1h2.1V6.3a1.05 1.05 0 112.1 0v2.1h2.1a1.05 1.05 0 110 2.1zm5.512.262a1.312 1.312 0 111.312-1.312 1.312 1.312 0 01-1.312 1.312zm2.888 2.888a1.312 1.312 0 111.312-1.309 1.312 1.312 0 01-1.312 1.309zm0-5.775a1.312 1.312 0 111.312-1.312 1.312 1.312 0 01-1.312 1.312zm2.888 2.888a1.312 1.312 0 111.312-1.312 1.312 1.312 0 01-1.312 1.311z"
});

function SvgGameController(props) {
  return /*#__PURE__*/createElement("svg", _extends$2({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "gamecontroller",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 31.498 23.103"
  }, props), _ref$2);
}

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var _ref$3 = /*#__PURE__*/createElement("path", {
  fill: "currentColor",
  d: "M477.7 186.1L309.5 18.3c-3.1-3.1-8.2-3.1-11.3 0l-34 33.9c-3.1 3.1-3.1 8.2 0 11.3l11.2 11.1L33 316.5c-38.8 38.7-45.1 102-9.4 143.5 20.6 24 49.5 36 78.4 35.9 26.4 0 52.8-10 72.9-30.1l246.3-245.7 11.2 11.1c3.1 3.1 8.2 3.1 11.3 0l34-33.9c3.1-3 3.1-8.1 0-11.2zM318 256H161l148-147.7 78.5 78.3L318 256z"
});

function SvgVialSolid(props) {
  return /*#__PURE__*/createElement("svg", _extends$3({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "vial",
    className: "vial-solid_svg__svg-inline--fa vial-solid_svg__fa-vial vial-solid_svg__fa-w-15",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 480 512"
  }, props), _ref$3);
}

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

var _ref$4 = /*#__PURE__*/createElement("path", {
  fill: "currentColor",
  d: "M570.69 236.27L512 184.44V48a16 16 0 00-16-16h-64a16 16 0 00-16 16v51.67L314.78 10.3C308.5 4.61 296.53 0 288 0s-20.46 4.61-26.74 10.3l-256 226A18.27 18.27 0 000 248.2a18.64 18.64 0 004.09 10.71L25.5 282.7a21.14 21.14 0 0012 5.3 21.67 21.67 0 0010.69-4.11l15.9-14V480a32 32 0 0032 32H480a32 32 0 0032-32V269.88l15.91 14a21.94 21.94 0 0010.72 4.12 20.89 20.89 0 0011.87-5.31l21.41-23.81a21.64 21.64 0 004.09-10.69 21 21 0 00-5.31-11.92zM288 176a64 64 0 11-64 64 64 64 0 0164-64zm112 272H176a16 16 0 01-16-16 96 96 0 0196-96h64a96 96 0 0196 96 16 16 0 01-16 16z"
});

function SvgHome(props) {
  return /*#__PURE__*/createElement("svg", _extends$4({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "house-user",
    className: "home_svg__svg-inline--fa home_svg__fa-house-user home_svg__fa-w-18",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, props), _ref$4);
}

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

var _ref$5 = /*#__PURE__*/createElement("path", {
  fill: "currentColor",
  d: "M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"
});

function SvgDiscordSolid(props) {
  return /*#__PURE__*/createElement("svg", _extends$5({
    "aria-hidden": "true",
    "data-prefix": "fab",
    "data-icon": "discord",
    className: "discordSolid_svg__svg-inline--fa discordSolid_svg__fa-discord discordSolid_svg__fa-w-14",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, props), _ref$5);
}

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

var _ref$6 = /*#__PURE__*/createElement("path", {
  fill: "currentColor",
  d: "M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
});

function SvgPowerOffSolid(props) {
  return /*#__PURE__*/createElement("svg", _extends$6({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "power-off",
    className: "powerOffSolid_svg__svg-inline--fa powerOffSolid_svg__fa-power-off powerOffSolid_svg__fa-w-16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, props), _ref$6);
}

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

var _ref$7 = /*#__PURE__*/createElement("path", {
  fill: "currentColor",
  d: "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
});

function SvgCogSolid(props) {
  return /*#__PURE__*/createElement("svg", _extends$7({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "cog",
    className: "cogSolid_svg__svg-inline--fa cogSolid_svg__fa-cog cogSolid_svg__fa-w-16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, props), _ref$7);
}

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

var _ref$8 = /*#__PURE__*/createElement("path", {
  fill: "currentColor",
  d: "M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
});

function SvgBellSolid(props) {
  return /*#__PURE__*/createElement("svg", _extends$8({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "bell",
    className: "bellSolid_svg__svg-inline--fa bellSolid_svg__fa-bell bellSolid_svg__fa-w-14",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, props), _ref$8);
}

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

var _ref$9 = /*#__PURE__*/createElement("path", {
  fill: "currentColor",
  d: "M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"
});

function SvgBellRegular(props) {
  return /*#__PURE__*/createElement("svg", _extends$9({
    "aria-hidden": "true",
    "data-prefix": "far",
    "data-icon": "bell",
    className: "bellRegular_svg__svg-inline--fa bellRegular_svg__fa-bell bellRegular_svg__fa-w-14",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, props), _ref$9);
}

var icons = /*#__PURE__*/Object.freeze({
  __proto__: null,
  community: SvgCommunity,
  trophy: SvgTrophy,
  gameController: SvgGameController,
  vialSolid: SvgVialSolid,
  Home: SvgHome,
  DiscordSolid: SvgDiscordSolid,
  powerOffSolid: SvgPowerOffSolid,
  cogSolid: SvgCogSolid,
  bellSolid: SvgBellSolid,
  bellRegular: SvgBellRegular
});

/** @jsx jsx */

/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 *
 * 스타일로 모양새를 설정 할 때에는 `color`로 색상을 설정하고 `width`로 크기를 설정하세요.
 */
var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className;
  var SVGIcon = icons[icon];
  return jsx(SVGIcon, {
    css: {
      fill: color || "currentColor",
      width: size,
      height: "auto"
    },
    className: className
  });
};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  outline: none;\n  border: none;\n  box-sizing: border-box;\n  width: 4.5rem;\n  height: 4.5rem;\n  padding: 0;\n  border-radius: 35%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(237, 240, 247, 0.4);\n\n  &:hover {\n    background-color: rgba(237, 240, 247, 1);\n    svg {\n      color: #bdc6d8;\n    }\n  }\n\n  svg {\n    width: 40%;\n    color: #dde3ef;\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

/** `IconButton` 은 아이콘이 있는 버튼입니다. */
function IconButton(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "4.5rem" : _ref$size,
      icon = _ref.icon,
      onClick = _ref.onClick;
  var width = size,
      height = size;
  return jsx("button", {
    onClick: onClick,
    css: [defaultStyle$1, {
      width: width,
      height: height
    }]
  }, jsx(Icon, {
    icon: icon
  }));
}

var defaultStyle$1 = css(_templateObject$2());

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n        padding: 0;\n      "]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n        padding: 1rem 1rem;\n      "]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  padding-bottom: 1rem;\n  font-size: 0.875rem;\n  font-weight: normal;\n  color: #858997;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0px 6px 25px #d1d5df;\n  overflow: hidden;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

function Card(_ref) {
  var children = _ref.children,
      width = _ref.width,
      height = _ref.height,
      cardTitle = _ref.cardTitle,
      _ref$isPadding = _ref.isPadding,
      isPadding = _ref$isPadding === void 0 ? true : _ref$isPadding;
  return jsx("div", {
    css: [defaultStyle$2, {
      width: width
    }, {
      height: height
    }, paddingSelector(isPadding)]
  }, cardTitle != null && jsx("span", {
    css: cardTitleStyle
  }, cardTitle), children);
}

var defaultStyle$2 = css(_templateObject$3());
var cardTitleStyle = css(_templateObject2$2());

var paddingSelector = function paddingSelector(props) {
  return props ? css(_templateObject3$2()) : css(_templateObject4$2());
};

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  padding: 0.25rem 0.5rem;\n  width: max-content;\n  word-break: keep-all;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: bold;\n  color: white;\n  z-index: 99;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

function Sticker(_ref) {
  var children = _ref.children,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? "gray" : _ref$backgroundColor,
      top = _ref.top,
      left = _ref.left,
      right = _ref.right,
      bottom = _ref.bottom;
  return jsx("div", {
    css: [defaultStyle$3, {
      backgroundColor: backgroundColor
    }, {
      top: top
    }, {
      left: left
    }, {
      right: right
    }, {
      bottom: bottom
    }]
  }, children);
}

var defaultStyle$3 = css(_templateObject$4());

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-size: 0.875rem;\n  font-weight: bold;\n  color: #f23c4c;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}

/** `ContentType` 는 콘텐츠의 타입을 알려주는 텍스트입니다 */
function ContentType(_ref) {
  var children = _ref.children,
      width = _ref.width;
  return jsx("p", {
    css: [defaultStyle$4, {
      width: width
    }]
  }, children);
}

var defaultStyle$4 = css(_templateObject$5());

function _templateObject8() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      word-break: keep-all;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      display: block;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.5rem;\n  "]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.125rem;\n  "]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1rem;\n    font-weight: bold;\n    line-height: 1.3;\n  "]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}

/** `Header` 는 기본적인 헤더입니다 */
function Header(_ref) {
  var children = _ref.children,
      width = _ref.width,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "medium" : _ref$size,
      _ref$isOverflowMode = _ref.isOverflowMode,
      isOverflowMode = _ref$isOverflowMode === void 0 ? false : _ref$isOverflowMode,
      _ref$isWordKeepMode = _ref.isWordKeepMode,
      isWordKeepMode = _ref$isWordKeepMode === void 0 ? true : _ref$isWordKeepMode;
  return jsx("h1", {
    css: [defaultStyle$5, sizes[size], {
      width: width
    }, setOverflow(isOverflowMode), setWordKeepMode(isWordKeepMode)]
  }, children);
}

var defaultStyle$5 = css(_templateObject$6());
var sizes = {
  small: css(_templateObject2$3()),
  medium: css(_templateObject3$3()),
  large: css(_templateObject4$3())
};

var setOverflow = function setOverflow(isOverflowMode) {
  if (isOverflowMode) {
    return css(_templateObject5());
  } else {
    return css(_templateObject6());
  }
};

var setWordKeepMode = function setWordKeepMode(isWordKeepMode) {
  if (isWordKeepMode) {
    return css(_templateObject7());
  } else {
    return css(_templateObject8());
  }
};

function _templateObject6$1() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n      word-break: keep-all;\n    "]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n      display: block;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    "]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n    font-size: 0.875rem;\n  "]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: #5d5d5d;\n  font-weight: normal;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}

/** `SubHeader` 는 보조적인 설명이 있는 헤더입니다 */
function subHeader(_ref) {
  var children = _ref.children,
      width = _ref.width,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "small" : _ref$size,
      _ref$isOverflowMode = _ref.isOverflowMode,
      isOverflowMode = _ref$isOverflowMode === void 0 ? false : _ref$isOverflowMode,
      _ref$isWordKeepMode = _ref.isWordKeepMode,
      isWordKeepMode = _ref$isWordKeepMode === void 0 ? true : _ref$isWordKeepMode;
  return jsx("h3", {
    css: [defaultStyle$6, sizes$1[size], {
      width: width
    }, setOverflow$1(isOverflowMode), setWordKeepMode$1(isWordKeepMode)]
  }, children);
}

var defaultStyle$6 = css(_templateObject$7());
var sizes$1 = {
  small: css(_templateObject2$4())
};

var setOverflow$1 = function setOverflow(isOverflowMode) {
  if (isOverflowMode) {
    return css(_templateObject3$4());
  } else {
    return css(_templateObject4$4());
  }
};

var setWordKeepMode$1 = function setWordKeepMode(isWordKeepMode) {
  if (isWordKeepMode) {
    return css(_templateObject5$1());
  } else {
    return css(_templateObject6$1());
  }
};

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  background: red;\n  opacity: 1;\n"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  background: red;\n  opacity: 0.3;\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  border-radius: 2px;\n  overflow: hidden;\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}

/** `Progress` 는 기본적인 프로그래스바 입니다. */
function Progress(_ref) {
  var _ref$percentage = _ref.percentage,
      percentage = _ref$percentage === void 0 ? 0 : _ref$percentage,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? "100%" : _ref$width,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#f23c4c" : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? "0.5rem" : _ref$height;
  var background = color;
  return jsx("div", {
    className: "area",
    css: [areaStyle$1, {
      width: width
    }, {
      height: height
    }]
  }, jsx("div", {
    className: "progress",
    css: [fillStyle, "width: ".concat(percentage, "%;"), {
      background: background
    }]
  }), jsx("div", {
    className: "back",
    css: [backStyle, {
      background: background
    }]
  }));
}

var areaStyle$1 = css(_templateObject$8());
var backStyle = css(_templateObject2$5());
var fillStyle = css(_templateObject3$5());

export { Button, Card, ContentType, Header, Icon, IconButton, NavButton, Progress, Sticker, subHeader as SubHeader };
