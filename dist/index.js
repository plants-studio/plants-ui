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
      themeType = _ref.themeType,
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

Button.defaultProps = {
  themeType: "primary"
};
var defaultStyle = css(_templateObject());
var themeTypeStyle = {
  primary: css(_templateObject2()),
  secondary: css(_templateObject3()),
  tertiary: css(_templateObject4())
};

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
      isSelected = _ref.isSelected,
      onClick = _ref.onClick;
  return jsx("div", {
    css: [areaStyle, {
      width: width
    }],
    onMouseO: true
  }, jsx("div", {
    className: "item",
    css: itemStyle
  }, children));
}

var areaStyle = css(_templateObject$1()); // #F23C4C

var itemStyle = css(_templateObject2$1());

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _ref = /*#__PURE__*/createElement("path", {
  "data-name": "\\uD328\\uC2A4 625",
  className: "community_svg__cls-1",
  d: "M5.484 16.452V9.14H2.742A2.742 2.742 0 000 11.882v16.452a.893.893 0 001.426.722l4.707-3.464h12.284a2.532 2.532 0 002.6-2.623V21.94H10.968a5.484 5.484 0 01-5.484-5.484z"
});

var _ref2 = /*#__PURE__*/createElement("path", {
  "data-name": "\\uD328\\uC2A4 626",
  className: "community_svg__cls-1",
  d: "M25.43 11.425a6.837 6.837 0 01-6.599-8.683h-8.025a2.742 2.742 0 00-2.742 2.742v10.968a2.742 2.742 0 002.742 2.742h12.385l4.373 3.391a.894.894 0 001.435-.722V10.392a6.809 6.809 0 01-3.569 1.033z"
});

var _ref3 = /*#__PURE__*/createElement("path", {
  "data-name": "\\uD328\\uC2A4 627",
  className: "community_svg__cls-1",
  d: "M30 4.57A4.57 4.57 0 1125.43 0 4.57 4.57 0 0130 4.57z"
});

function SvgCommunity(props) {
  return /*#__PURE__*/createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 30,
    height: 29.23
  }, props), _ref, _ref2, _ref3);
}

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var _ref$1 = /*#__PURE__*/createElement("path", {
  className: "trophy_svg__cls-1",
  d: "M8.749 14.422a16.884 16.884 0 01-1.413-7.086H2.445V9.17a4.384 4.384 0 001.8 3.095 9.5 9.5 0 004.504 2.157zm20.593-5.253V7.335h-4.89a16.88 16.88 0 01-1.414 7.087 9.5 9.5 0 004.5-2.159 4.382 4.382 0 001.8-3.095zm2.445-2.445v2.445a5.437 5.437 0 01-.793 2.732 9.114 9.114 0 01-2.139 2.484 11.867 11.867 0 01-3.3 1.862 12.989 12.989 0 01-4.116.85 10.22 10.22 0 01-1.814 1.814 3.578 3.578 0 00-1 1.385 4.833 4.833 0 00-.277 1.709 2.644 2.644 0 00.583 1.739 2.275 2.275 0 001.862.706 4.041 4.041 0 012.55.869 2.667 2.667 0 011.118 2.188v1.223a.589.589 0 01-.612.612H7.947a.589.589 0 01-.612-.612v-1.222a2.663 2.663 0 011.118-2.187 4.049 4.049 0 012.547-.87 2.277 2.277 0 001.862-.706 2.648 2.648 0 00.583-1.739 4.833 4.833 0 00-.277-1.709 3.578 3.578 0 00-1-1.385 10.181 10.181 0 01-1.814-1.812 12.95 12.95 0 01-4.116-.85 11.914 11.914 0 01-3.3-1.862A9.076 9.076 0 01.793 11.9 5.45 5.45 0 010 9.17V6.724a1.768 1.768 0 01.535-1.3 1.768 1.768 0 011.3-.535h5.5V3.056A2.943 2.943 0 018.234.9a2.939 2.939 0 012.158-.9h11a2.943 2.943 0 012.159.9 2.943 2.943 0 01.9 2.159v1.832h5.5a1.827 1.827 0 011.834 1.834z"
});

function SvgTrophy(props) {
  return /*#__PURE__*/createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 31.787,
    height: 29.342
  }, props), _ref$1);
}

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var _ref$2 = /*#__PURE__*/createElement("path", {
  className: "gameController_svg__cls-1",
  d: "M30.653 10.853C29.261 4.561 27.166 1.202 24.059.284A7.031 7.031 0 0022.048 0a9.048 9.048 0 00-2.513.452 12.825 12.825 0 01-3.787.6 12.826 12.826 0 01-3.79-.6A9.053 9.053 0 009.448 0a7.6 7.6 0 00-2.082.284C4.273 1.197 2.181 4.555.773 10.849-.746 17.623.002 21.9 2.873 22.892a3.715 3.715 0 001.224.211c1.964 0 3.539-1.636 4.615-2.975 1.216-1.516 2.639-2.285 7.044-2.285 3.934 0 5.563.534 6.968 2.285a9.6 9.6 0 002.549 2.356 3.849 3.849 0 003.292.418c1.694-.578 2.666-2.107 2.888-4.543a25.673 25.673 0 00-.8-7.506zM12.598 10.5h-2.1v2.1a1.05 1.05 0 01-2.1 0v-2.1h-2.1a1.05 1.05 0 110-2.1h2.1V6.3a1.05 1.05 0 112.1 0v2.1h2.1a1.05 1.05 0 110 2.1zm5.512.262a1.312 1.312 0 111.312-1.312 1.312 1.312 0 01-1.312 1.312zm2.888 2.888a1.312 1.312 0 111.312-1.309 1.312 1.312 0 01-1.312 1.309zm0-5.775a1.312 1.312 0 111.312-1.312 1.312 1.312 0 01-1.312 1.312zm2.888 2.888a1.312 1.312 0 111.312-1.312 1.312 1.312 0 01-1.312 1.311z"
});

function SvgGameController(props) {
  return /*#__PURE__*/createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    width: 31.498,
    height: 23.103
  }, props), _ref$2);
}

var icons = /*#__PURE__*/Object.freeze({
  __proto__: null,
  community: SvgCommunity,
  trophy: SvgTrophy,
  gameController: SvgGameController
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

export { Button, Icon, NavButton };
