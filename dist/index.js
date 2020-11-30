import { jsx, css } from '@emotion/core';
import { createElement } from 'react';
import util from 'util';

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

var icons = /*#__PURE__*/Object.freeze({
  __proto__: null,
  community: SvgCommunity,
  trophy: SvgTrophy,
  gameController: SvgGameController,
  vialSolid: SvgVialSolid,
  Home: SvgHome,
  DiscordSolid: SvgDiscordSolid
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
  var data = _taggedTemplateLiteral(["\n  display: block;\n  padding-bottom: 1rem;\n  font-size: 1rem;\n  font-weight: normal;\n  color: #858997;\n"]);

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
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  padding: 0.25rem 0.5rem;\n  width: max-content;\n  word-break: keep-all;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: bold;\n  color: white;\n"]);

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

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n    font-size: 2rem;\n  "]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.5rem;\n  "]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.125rem;\n    font-weight: bold;\n  "]);

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
      size = _ref$size === void 0 ? "medium" : _ref$size;
  return jsx("h1", {
    css: [defaultStyle$5, sizes[size], {
      width: width
    }]
  }, children);
}

var defaultStyle$5 = css(_templateObject$6());
var sizes = {
  small: css(_templateObject2$3()),
  medium: css(_templateObject3$3()),
  large: css(_templateObject4$3())
};

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1rem;\n  "]);

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
      size = _ref$size === void 0 ? "small" : _ref$size;
  return jsx("h3", {
    css: [defaultStyle$6, sizes$1[size], {
      width: width
    }]
  }, children);
}

var defaultStyle$6 = css(_templateObject$7());
var sizes$1 = {
  small: css(_templateObject2$4())
};

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  bottom: 0.5rem;\n  height: 100%;\n  background-color: #f23c4c;\n  opacity: 1;\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  background-color: #f23c4c;\n  opacity: 0.3;\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  height: 0.5rem;\n"]);

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
      color = _ref$color === void 0 ? "#f23c4c" : _ref$color;
  var background = color;
  return jsx("div", {
    className: "area",
    css: [areaStyle$1, {
      width: width
    }]
  }, jsx("div", {
    className: "back",
    css: [backStyle, {
      background: background
    }]
  }), jsx("div", {
    className: "progress",
    css: [defaultStyle$7, "width: ".concat(percentage, "%;"), {
      background: background
    }]
  }));
}

var areaStyle$1 = css(_templateObject$8());
var backStyle = css(_templateObject2$5());
var defaultStyle$7 = css(_templateObject3$4());

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global_1 =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var descriptors = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var document$1 = global_1.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document$1) && isObject(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

// Thank's IE8 for his funny defineProperty
var ie8DomDefine = !descriptors && !fails(function () {
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var anObject = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
var f = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var objectDefineProperty = {
	f: f
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;

var has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var setGlobal = function (key, value) {
  try {
    createNonEnumerableProperty(global_1, key, value);
  } catch (error) {
    global_1[key] = value;
  } return value;
};

var SHARED = '__core-js_shared__';
var store = global_1[SHARED] || setGlobal(SHARED, {});

var sharedStore = store;

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof sharedStore.inspectSource != 'function') {
  sharedStore.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource = sharedStore.inspectSource;

var WeakMap$1 = global_1.WeakMap;

var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource(WeakMap$1));

var shared = createCommonjsModule(function (module) {
(module.exports = function (key, value) {
  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.7.0',
  mode:  'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});
});

var id = 0;
var postfix = Math.random();

var uid = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var keys = shared('keys');

var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys = {};

var WeakMap$2 = global_1.WeakMap;
var set, get, has$1;

var enforce = function (it) {
  return has$1(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (nativeWeakMap) {
  var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$2());
  var wmget = store$1.get;
  var wmhas = store$1.has;
  var wmset = store$1.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store$1, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store$1, it) || {};
  };
  has$1 = function (it) {
    return wmhas.call(store$1, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return has(it, STATE) ? it[STATE] : {};
  };
  has$1 = function (it) {
    return has(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has$1,
  enforce: enforce,
  getterFor: getterFor
};

var redefine = createCommonjsModule(function (module) {
var getInternalState = internalState.get;
var enforceInternalState = internalState.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global_1) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});
});

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
var f$1 = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

var objectPropertyIsEnumerable = {
	f: f$1
};

var toString = {}.toString;

var classofRaw = function (it) {
  return toString.call(it).slice(8, -1);
};

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings



var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
var f$2 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (ie8DomDefine) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
};

var objectGetOwnPropertyDescriptor = {
	f: f$2
};

var path = global_1;

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
};

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
var toInteger = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
var toLength = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var indexOf = arrayIncludes.indexOf;


var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys$1);
};

var objectGetOwnPropertyNames = {
	f: f$3
};

var f$4 = Object.getOwnPropertySymbols;

var objectGetOwnPropertySymbols = {
	f: f$4
};

// all object keys, includes non-enumerable and symbols
var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var copyConstructorProperties = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

var isForced_1 = isForced;

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global_1;
  } else if (STATIC) {
    target = global_1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global_1[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
var objectKeys = Object.keys || function keys(O) {
  return objectKeysInternal(O, enumBugKeys);
};

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
var toObject = function (argument) {
  return Object(requireObjectCoercible(argument));
};

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
var objectAssign = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (descriptors && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  var propertyIsEnumerable = objectPropertyIsEnumerable.f;
  while (argumentsLength > index) {
    var S = indexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
_export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
  assign: objectAssign
});

var aFunction$1 = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

// optional / simple context binding
var functionBindContext = function (fn, that, length) {
  aFunction$1(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
var isArray = Array.isArray || function isArray(arg) {
  return classofRaw(arg) == 'Array';
};

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

var useSymbolAsUid = nativeSymbol
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';

var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global_1.Symbol;
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

var wellKnownSymbol = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod$1 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = indexedObject(O);
    var boundFunction = functionBindContext(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$1(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod$1(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod$1(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod$1(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod$1(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod$1(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$1(6)
};

var arrayMethodIsStrict = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

var defineProperty$1 = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

var arrayMethodUsesToLength = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !descriptors) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty$1(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};

var $forEach = arrayIteration.forEach;



var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
var arrayForEach = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
_export({ target: 'Array', proto: true, forced: [].forEach != arrayForEach }, {
  forEach: arrayForEach
});

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof = toStringTagSupport ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
var objectToString = toStringTagSupport ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!toStringTagSupport) {
  redefine(Object.prototype, 'toString', objectToString, { unsafe: true });
}

var propertyIsEnumerable = objectPropertyIsEnumerable.f;

// `Object.{ entries, values }` methods implementation
var createMethod$2 = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!descriptors || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

var objectToArray = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod$2(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod$2(false)
};

var $values = objectToArray.values;

// `Object.values` method
// https://tc39.github.io/ecma262/#sec-object.values
_export({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});

var nativePromiseConstructor = global_1.Promise;

var redefineAll = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};

var defineProperty$2 = objectDefineProperty.f;



var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

var setToStringTag = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG$2)) {
    defineProperty$2(it, TO_STRING_TAG$2, { configurable: true, value: TAG });
  }
};

var SPECIES$1 = wellKnownSymbol('species');

var setSpecies = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = objectDefineProperty.f;

  if (descriptors && Constructor && !Constructor[SPECIES$1]) {
    defineProperty(Constructor, SPECIES$1, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var anInstance = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};

var iterators = {};

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod = function (it) {
  return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

var ITERATOR$1 = wellKnownSymbol('iterator');

var getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$1]
    || it['@@iterator']
    || iterators[classof(it)];
};

var iteratorClose = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = functionBindContext(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

var ITERATOR$2 = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR$2] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$2] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var SPECIES$2 = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
var speciesConstructor = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES$2]) == undefined ? defaultConstructor : aFunction$1(S);
};

var html = getBuiltIn('document', 'documentElement');

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var engineIsIos = /(iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent);

var engineIsNode = classofRaw(global_1.process) == 'process';

var location = global_1.location;
var set$1 = global_1.setImmediate;
var clear = global_1.clearImmediate;
var process$1 = global_1.process;
var MessageChannel = global_1.MessageChannel;
var Dispatch = global_1.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global_1.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set$1 || !clear) {
  set$1 = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (engineIsNode) {
    defer = function (id) {
      process$1.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !engineIsIos) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = functionBindContext(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global_1.addEventListener &&
    typeof postMessage == 'function' &&
    !global_1.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global_1.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
    defer = function (id) {
      html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task = {
  set: set$1,
  clear: clear
};

var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
var macrotask = task.set;



var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
var document$2 = global_1.document;
var process$2 = global_1.process;
var Promise$1 = global_1.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor$2(global_1, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (engineIsNode && (parent = process$2.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  if (!engineIsIos && !engineIsNode && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (engineIsNode) {
    notify = function () {
      process$2.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global_1, flush);
    };
  }
}

var microtask = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction$1(resolve);
  this.reject = aFunction$1(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
var f$5 = function (C) {
  return new PromiseCapability(C);
};

var newPromiseCapability = {
	f: f$5
};

var promiseResolve = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var hostReportErrors = function (a, b) {
  var console = global_1.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};

var perform = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var process$3 = global_1.process;
var versions = process$3 && process$3.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;

var task$1 = task.set;











var SPECIES$3 = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = internalState.get;
var setInternalState = internalState.set;
var getInternalPromiseState = internalState.getterFor(PROMISE);
var PromiseConstructor = nativePromiseConstructor;
var TypeError$1 = global_1.TypeError;
var document$3 = global_1.document;
var process$4 = global_1.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability$1 = newPromiseCapability.f;
var newGenericPromiseCapability = newPromiseCapability$1;
var DISPATCH_EVENT = !!(document$3 && document$3.createEvent && global_1.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced_1(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (engineV8Version === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!engineIsNode && !NATIVE_REJECTION_EVENT) return true;
  }
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (engineV8Version >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES$3] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify$1 = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$3.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global_1.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global_1['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task$1.call(global_1, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (engineIsNode) {
          process$4.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = engineIsNode || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task$1.call(global_1, function () {
    var promise = state.facade;
    if (engineIsNode) {
      process$4.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify$1(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify$1(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction$1(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = engineIsNode ? process$4.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify$1(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapability.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if ( typeof nativePromiseConstructor == 'function') {
    nativeThen = nativePromiseConstructor.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(nativePromiseConstructor.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') _export({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global_1, arguments));
      }
    });
  }
}

_export({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
_export({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability$1(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

_export({ target: PROMISE, stat: true, forced:  FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve( this, x);
  }
});

_export({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction$1(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction$1(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

for (var COLLECTION_NAME in domIterables) {
  var Collection = global_1[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
  } catch (error) {
    CollectionPrototype.forEach = arrayForEach;
  }
}

var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof commonjsGlobal !== "undefined") {
    win = commonjsGlobal;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

var window_1 = win;

var SPECIES$4 = wellKnownSymbol('species');

var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return engineV8Version >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$4] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $filter = arrayIteration.filter;



var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH$1 = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH$1 }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var createProperty = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH$2 = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES$5 = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max$1 = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 || !USES_TO_LENGTH$2 }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES$5];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
  return O;
};

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
_export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
  defineProperties: objectDefineProperties
});

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
_export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
  defineProperty: objectDefineProperty.f
});

var freezing = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});

var internalMetadata = createCommonjsModule(function (module) {
var defineProperty = objectDefineProperty.f;



var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (freezing && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;
});
var internalMetadata_1 = internalMetadata.REQUIRED;
var internalMetadata_2 = internalMetadata.fastKey;
var internalMetadata_3 = internalMetadata.getWeakData;
var internalMetadata_4 = internalMetadata.onFreeze;

var onFreeze = internalMetadata.onFreeze;

var nativeFreeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { nativeFreeze(1); });

// `Object.freeze` method
// https://tc39.github.io/ecma262/#sec-object.freeze
_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !freezing }, {
  freeze: function freeze(it) {
    return nativeFreeze && isObject(it) ? nativeFreeze(onFreeze(it)) : it;
  }
});

var FAILS_ON_PRIMITIVES$1 = fails(function () { objectKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1 }, {
  keys: function keys(it) {
    return objectKeys(toObject(it));
  }
});

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var TO_STRING$1 = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING$1];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING$1;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING$1, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? regexpFlags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}

var FORCED$1 = !global_1.setImmediate || !global_1.clearImmediate;

// http://w3c.github.io/setImmediate/
_export({ global: true, bind: true, enumerable: true, forced: FORCED$1 }, {
  // `setImmediate` method
  // http://w3c.github.io/setImmediate/#si-setImmediate
  setImmediate: task.set,
  // `clearImmediate` method
  // http://w3c.github.io/setImmediate/#si-clearImmediate
  clearImmediate: task.clear
});

/**
 * For Node.js, simply re-export the core `util.deprecate` function.
 */

var node$1 = util.deprecate;

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.dedent = void 0;
function dedent(templ) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var strings = Array.from(typeof templ === 'string' ? [templ] : templ.raw);
    strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, '');
    var indentLengths = strings.reduce(function (arr, str) {
        var matches = str.match(/\n[\t ]+/g);
        if (matches) {
            return arr.concat(matches.map(function (match) { return match.length - 1; }));
        }
        return arr;
    }, []);
    if (indentLengths.length) {
        var pattern_1 = new RegExp("\n[\t ]{" + Math.min.apply(Math, indentLengths) + "}", 'g');
        strings = strings.map(function (str) { return str.replace(pattern_1, '\n'); });
    }
    strings[0] = strings[0].replace(/^\r?\n/, '');
    var string = strings[0];
    values.forEach(function (value, i) {
        string += value + strings[i + 1];
    });
    return string;
}
exports.dedent = dedent;
exports.default = dedent;

});

unwrapExports(dist);
var dist_1 = dist.dedent;

var dist$1 = createCommonjsModule(function (module, exports) {

























Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Channel = void 0;

var _utilDeprecate = _interopRequireDefault(node$1);

var _tsDedent = _interopRequireDefault(dist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      channel.addPeerListener is deprecated\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var generateRandomId = function generateRandomId() {
  // generates a random 13 character string
  return Math.random().toString(16).slice(2);
};

var Channel = /*#__PURE__*/function () {
  function Channel() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        transport = _ref.transport,
        _ref$async = _ref.async,
        async = _ref$async === void 0 ? false : _ref$async;

    _classCallCheck(this, Channel);

    this.isAsync = void 0;
    this.sender = generateRandomId();
    this.events = {};
    this.data = {};
    this.transport = void 0;
    this.addPeerListener = (0, _utilDeprecate["default"])(function (eventName, listener) {
      _this.addListener(eventName, listener);
    }, (0, _tsDedent["default"])(_templateObject()));
    this.isAsync = async;

    if (transport) {
      this.transport = transport;
      this.transport.setHandler(function (event) {
        return _this.handleEvent(event);
      });
    }
  }

  _createClass(Channel, [{
    key: "addListener",
    value: function addListener(eventName, listener) {
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(listener);
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      var _this2 = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var event = {
        type: eventName,
        args: args,
        from: this.sender
      };
      var options = {};

      if (args.length >= 1 && args[0] && args[0].options) {
        options = args[0].options;
      }

      var handler = function handler() {
        if (_this2.transport) {
          _this2.transport.send(event, options);
        }

        _this2.handleEvent(event);
      };

      if (this.isAsync) {
        // todo I'm not sure how to test this
        setImmediate(handler);
      } else {
        handler();
      }
    }
  }, {
    key: "last",
    value: function last(eventName) {
      return this.data[eventName];
    }
  }, {
    key: "eventNames",
    value: function eventNames() {
      return Object.keys(this.events);
    }
  }, {
    key: "listenerCount",
    value: function listenerCount(eventName) {
      var listeners = this.listeners(eventName);
      return listeners ? listeners.length : 0;
    }
  }, {
    key: "listeners",
    value: function listeners(eventName) {
      var listeners = this.events[eventName];
      return listeners || undefined;
    }
  }, {
    key: "once",
    value: function once(eventName, listener) {
      var onceListener = this.onceListener(eventName, listener);
      this.addListener(eventName, onceListener);
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(eventName) {
      if (!eventName) {
        this.events = {};
      } else if (this.events[eventName]) {
        delete this.events[eventName];
      }
    }
  }, {
    key: "removeListener",
    value: function removeListener(eventName, listener) {
      var listeners = this.listeners(eventName);

      if (listeners) {
        this.events[eventName] = listeners.filter(function (l) {
          return l !== listener;
        });
      }
    }
  }, {
    key: "on",
    value: function on(eventName, listener) {
      this.addListener(eventName, listener);
    }
  }, {
    key: "off",
    value: function off(eventName, listener) {
      this.removeListener(eventName, listener);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      var listeners = this.listeners(event.type);

      if (listeners && listeners.length) {
        listeners.forEach(function (fn) {
          fn.apply(event, event.args);
        });
      }

      this.data[event.type] = event.args;
    }
  }, {
    key: "onceListener",
    value: function onceListener(eventName, listener) {
      var _this3 = this;

      var onceListener = function onceListener() {
        _this3.removeListener(eventName, onceListener);

        return listener.apply(void 0, arguments);
      };

      return onceListener;
    }
  }, {
    key: "hasTransport",
    get: function get() {
      return !!this.transport;
    }
  }]);

  return Channel;
}();

exports.Channel = Channel;
var _default = Channel;
exports["default"] = _default;
});

unwrapExports(dist$1);
var dist_1$1 = dist$1.Channel;

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
_export({ target: 'Array', proto: true, forced: FORCED$2 }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

var UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

var BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
	UNSUPPORTED_Y: UNSUPPORTED_Y,
	BROKEN_CARET: BROKEN_CARET
};

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

var regexpExec = patchedExec;

_export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
  exec: regexpExec
});

// TODO: Remove from `core-js@4` since it's moved to entry points







var SPECIES$6 = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES$6] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod$3 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$3(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$3(true)
};

var charAt = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
var advanceStringIndex = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classofRaw(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};

var max$2 = Math.max;
var min$2 = Math.min;
var floor$1 = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regexpExecAbstract(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max$2(min$2(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor$1(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});

var dist$2 = createCommonjsModule(function (module, exports) {







Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pretty = exports.logger = void 0;



var levels = {
  trace: 1,
  debug: 2,
  info: 3,
  warn: 4,
  error: 5,
  silent: 10
};
var currentLogLevelString = window_1.LOGLEVEL;
var currentLogLevelNumber = levels[currentLogLevelString] || levels.info;
var logger = {
  trace: function trace(message) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    return currentLogLevelNumber <= levels.trace && window_1.console.trace.apply(window_1.console, [message].concat(rest));
  },
  debug: function debug(message) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }

    return currentLogLevelNumber <= levels.debug && window_1.console.debug.apply(window_1.console, [message].concat(rest));
  },
  info: function info(message) {
    for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      rest[_key3 - 1] = arguments[_key3];
    }

    return currentLogLevelNumber <= levels.info && window_1.console.info.apply(window_1.console, [message].concat(rest));
  },
  warn: function warn(message) {
    for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      rest[_key4 - 1] = arguments[_key4];
    }

    return currentLogLevelNumber <= levels.warn && window_1.console.warn.apply(window_1.console, [message].concat(rest));
  },
  error: function error(message) {
    for (var _len5 = arguments.length, rest = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      rest[_key5 - 1] = arguments[_key5];
    }

    return currentLogLevelNumber <= levels.error && window_1.console.error.apply(window_1.console, [message].concat(rest));
  },
  log: function log(message) {
    for (var _len6 = arguments.length, rest = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
      rest[_key6 - 1] = arguments[_key6];
    }

    return currentLogLevelNumber < levels.silent && window_1.console.log.apply(window_1.console, [message].concat(rest));
  }
};
exports.logger = logger;

var pretty = function pretty(type) {
  return function () {
    var argArray = [];

    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }

    if (args.length) {
      var startTagRe = /<span\s+style=(['"])([^'"]*)\1\s*>/gi;
      var endTagRe = /<\/span>/gi;
      var reResultArray;
      argArray.push(args[0].replace(startTagRe, '%c').replace(endTagRe, '%c')); // eslint-disable-next-line no-cond-assign

      while (reResultArray = startTagRe.exec(args[0])) {
        argArray.push(reResultArray[2]);
        argArray.push('');
      } // pass through subsequent args since chrome dev tools does not (yet) support console.log styling of the following form: console.log('%cBlue!', 'color: blue;', '%cRed!', 'color: red;');
      // eslint-disable-next-line no-plusplus


      for (var j = 1; j < args.length; j++) {
        argArray.push(args[j]);
      }
    } // eslint-disable-next-line prefer-spread


    logger[type].apply(logger, argArray);
  };
};

exports.pretty = pretty;
pretty.trace = pretty('trace');
pretty.debug = pretty('debug');
pretty.info = pretty('info');
pretty.warn = pretty('warn');
pretty.error = pretty('error');
});

unwrapExports(dist$2);
var dist_1$2 = dist$2.pretty;
var dist_2 = dist$2.logger;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : objectDefineProperties(result, Properties);
};

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  objectDefineProperty.f(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: objectCreate(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var $find = arrayIteration.find;



var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH$3 = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
_export({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH$3 }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);

var types_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSupportedType = isSupportedType;
exports.types = void 0;
var types;
exports.types = types;

(function (types) {
  types["TAB"] = "tab";
  types["PANEL"] = "panel";
  types["TOOL"] = "tool";
  types["TOOLEXTRA"] = "toolextra";
  types["PREVIEW"] = "preview";
  types["NOTES_ELEMENT"] = "notes-element";
})(types || (exports.types = types = {}));

function isSupportedType(type) {
  return !!Object.values(types).find(function (typeVal) {
    return typeVal === type;
  });
}
});

unwrapExports(types_1);
var types_2 = types_1.isSupportedType;
var types_3 = types_1.types;

var dist$3 = createCommonjsModule(function (module, exports) {













Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Channel", {
  enumerable: true,
  get: function get() {
    return dist$1.Channel;
  }
});
exports.addons = exports.AddonStore = void 0;

var _global = _interopRequireDefault(window_1);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddonStore = function AddonStore() {
  var _this = this;

  _classCallCheck(this, AddonStore);

  this.loaders = {};
  this.elements = {};
  this.config = {};
  this.channel = void 0;
  this.promise = void 0;
  this.resolve = void 0;

  this.getChannel = function () {
    // this.channel should get overwritten by setChannel. If it wasn't called (e.g. in non-browser environment), throw.
    if (!_this.channel) {
      throw new Error('Accessing non-existent addons channel, see https://storybook.js.org/basics/faq/#why-is-there-no-addons-channel');
    }

    return _this.channel;
  };

  this.ready = function () {
    return _this.promise;
  };

  this.hasChannel = function () {
    return !!_this.channel;
  };

  this.setChannel = function (channel) {
    _this.channel = channel;

    _this.resolve();
  };

  this.getElements = function (type) {
    if (!_this.elements[type]) {
      _this.elements[type] = {};
    }

    return _this.elements[type];
  };

  this.addPanel = function (name, options) {
    _this.add(name, Object.assign({
      type: types_1.types.PANEL
    }, options));
  };

  this.add = function (name, addon) {
    var type = addon.type;

    var collection = _this.getElements(type);

    collection[name] = Object.assign({
      id: name
    }, addon);
  };

  this.setConfig = function (value) {
    Object.assign(_this.config, value);
  };

  this.getConfig = function () {
    return _this.config;
  };

  this.register = function (name, registerCallback) {
    if (_this.loaders[name]) {
      dist$2.logger.warn("".concat(name, " was loaded twice, this could have bad side-effects"));
    }

    _this.loaders[name] = registerCallback;
  };

  this.loadAddons = function (api) {
    Object.values(_this.loaders).forEach(function (value) {
      return value(api);
    });
  };

  this.promise = new Promise(function (res) {
    _this.resolve = function () {
      return res(_this.getChannel());
    };
  });
}; // Enforce addons store to be a singleton


exports.AddonStore = AddonStore;
var KEY = '__STORYBOOK_ADDONS';

function getAddonsStore() {
  if (!_global["default"][KEY]) {
    _global["default"][KEY] = new AddonStore();
  }

  return _global["default"][KEY];
} // Exporting this twice in order to to be able to import it like { addons } instead of 'addons'
// prefer import { addons } from '@storybook/addons' over import addons from '@storybook/addons'
//
// See public_api.ts


var addons = getAddonsStore();
exports.addons = addons;
});

unwrapExports(dist$3);
var dist_1$3 = dist$3.addons;
var dist_2$1 = dist$3.AddonStore;

var defineProperty$3 = objectDefineProperty.f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (descriptors && !(NAME in FunctionPrototype)) {
  defineProperty$3(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}

var makeDecorator_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDecorator = void 0;

var makeDecorator = function makeDecorator(_ref) {
  var name = _ref.name,
      parameterName = _ref.parameterName,
      wrapper = _ref.wrapper,
      _ref$skipIfNoParamete = _ref.skipIfNoParametersOrOptions,
      skipIfNoParametersOrOptions = _ref$skipIfNoParamete === void 0 ? false : _ref$skipIfNoParamete;

  var decorator = function decorator(options) {
    return function (getStory, context) {
      var parameters = context.parameters && context.parameters[parameterName];

      if (parameters && parameters.disable) {
        return getStory(context);
      }

      if (skipIfNoParametersOrOptions && !options && !parameters) {
        return getStory(context);
      }

      return wrapper(getStory, context, {
        options: options,
        parameters: parameters
      });
    };
  };

  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Used without options as .addDecorator(decorator)
    if (typeof args[0] === 'function') {
      return decorator().apply(void 0, args);
    }

    return function () {
      // Used as [.]addDecorator(decorator(options))
      if (arguments.length > 1) {
        // Used as [.]addDecorator(decorator(option1, option2))
        if (args.length > 1) {
          return decorator(args).apply(void 0, arguments);
        }

        return decorator.apply(void 0, args).apply(void 0, arguments);
      }

      throw new Error("Passing stories directly into ".concat(name, "() is not allowed,\n        instead use addDecorator(").concat(name, ") and pass options with the '").concat(parameterName, "' parameter"));
    };
  };
};

exports.makeDecorator = makeDecorator;
});

unwrapExports(makeDecorator_1);
var makeDecorator_2 = makeDecorator_1.makeDecorator;

var storybookChannelMock = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockChannel = mockChannel;

var _channels = _interopRequireDefault(dist$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function mockChannel() {
  var transport = {
    setHandler: function setHandler() {},
    send: function send() {}
  };
  return new _channels["default"]({
    transport: transport
  });
}
});

unwrapExports(storybookChannelMock);
var storybookChannelMock_1 = storybookChannelMock.mockChannel;

var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;

var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var f$6 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};

var objectGetOwnPropertyNamesExternal = {
	f: f$6
};

var f$7 = wellKnownSymbol;

var wellKnownSymbolWrapped = {
	f: f$7
};

var defineProperty$4 = objectDefineProperty.f;

var defineWellKnownSymbol = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty$4(Symbol, NAME, {
    value: wellKnownSymbolWrapped.f(NAME)
  });
};

var $forEach$1 = arrayIteration.forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE$1 = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState$1 = internalState.set;
var getInternalState$1 = internalState.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE$1];
var $Symbol = global_1.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var nativeDefineProperty$1 = objectDefineProperty.f;
var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore$1 = shared('wks');
var QObject = global_1.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = descriptors && fails(function () {
  return objectCreate(nativeDefineProperty$1({}, 'a', {
    get: function () { return nativeDefineProperty$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty$1(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty$1(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty$1;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
  setInternalState$1(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!descriptors) symbol.description = description;
  return symbol;
};

var isSymbol = useSymbolAsUid ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = objectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty$1(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach$1(keys, function (key) {
    if (!descriptors || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable$1.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames$1(toIndexedObject(O));
  var result = [];
  $forEach$1(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach$1(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!nativeSymbol) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
    return getInternalState$1(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  objectPropertyIsEnumerable.f = $propertyIsEnumerable;
  objectDefineProperty.f = $defineProperty;
  objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
  objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

  wellKnownSymbolWrapped.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (descriptors) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState$1(this).description;
      }
    });
    {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

_export({ global: true, wrap: true, forced: !nativeSymbol, sham: !nativeSymbol }, {
  Symbol: $Symbol
});

$forEach$1(objectKeys(WellKnownSymbolsStore$1), function (name) {
  defineWellKnownSymbol(name);
});

_export({ target: SYMBOL, stat: true, forced: !nativeSymbol }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

_export({ target: 'Object', stat: true, forced: !nativeSymbol, sham: !descriptors }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

_export({ target: 'Object', stat: true, forced: !nativeSymbol }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
_export({ target: 'Object', stat: true, forced: fails(function () { objectGetOwnPropertySymbols.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return objectGetOwnPropertySymbols.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !nativeSymbol || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  _export({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;

var defineProperty$5 = objectDefineProperty.f;


var NativeSymbol = global_1.Symbol;

if (descriptors && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty$5(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  _export({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');

var $every = arrayIteration.every;



var STRICT_METHOD$1 = arrayMethodIsStrict('every');
var USES_TO_LENGTH$4 = arrayMethodUsesToLength('every');

// `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every
_export({ target: 'Array', proto: true, forced: !STRICT_METHOD$1 || !USES_TO_LENGTH$4 }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};

var INCORRECT_ITERATION$1 = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
_export({ target: 'Array', stat: true, forced: INCORRECT_ITERATION$1 }, {
  from: arrayFrom
});

var $includes = arrayIncludes.includes;



var USES_TO_LENGTH$5 = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
_export({ target: 'Array', proto: true, forced: !USES_TO_LENGTH$5 }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
_export({ target: 'Array', stat: true }, {
  isArray: isArray
});

var correctPrototypeGetter = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var IE_PROTO$1 = sharedKey('IE_PROTO');
var ObjectPrototype$1 = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO$1)) return O[IE_PROTO$1];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype$1 : null;
};

var ITERATOR$3 = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ( !has(IteratorPrototype, ITERATOR$3)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR$3, returnThis);
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





var returnThis$1 = function () { return this; };

var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
  iterators[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var aPossiblePrototype = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$4 = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis$2 = function () { return this; };

var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$4]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
      if ( objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
        if (objectSetPrototypeOf) {
          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
        } else if (typeof CurrentIteratorPrototype[ITERATOR$4] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$4, returnThis$2);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ( IterablePrototype[ITERATOR$4] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR$4, defaultIterator);
  }
  iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$2 = internalState.set;
var getInternalState$2 = internalState.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState$2(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$2(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
iterators.Arguments = iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var $map = arrayIteration.map;



var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH$6 = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 || !USES_TO_LENGTH$6 }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
var functionBind = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction$1(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};

// `Function.prototype.bind` method
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
_export({ target: 'Function', proto: true }, {
  bind: functionBind
});

var $entries = objectToArray.entries;

// `Object.entries` method
// https://tc39.github.io/ecma262/#sec-object.entries
_export({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    objectSetPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) objectSetPrototypeOf($this, NewTargetPrototype);
  return $this;
};

var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global_1[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced_1(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    internalMetadata.REQUIRED = true;
  } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  _export({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};

var defineProperty$6 = objectDefineProperty.f;








var fastKey = internalMetadata.fastKey;


var setInternalState$3 = internalState.set;
var internalStateGetterFor = internalState.getterFor;

var collectionStrong = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState$3(that, {
        type: CONSTRUCTOR_NAME,
        index: objectCreate(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!descriptors) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (descriptors) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (descriptors) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (descriptors) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (descriptors) defineProperty$6(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState$3(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
var es_set = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
};

var notARegexp = function (it) {
  if (isRegexp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};

var MATCH$1 = wellKnownSymbol('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH$1] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
_export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});

var charAt$1 = stringMultibyte.charAt;



var STRING_ITERATOR = 'String Iterator';
var setInternalState$4 = internalState.set;
var getInternalState$3 = internalState.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState$4(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$3(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt$1(string, index);
  state.index += point.length;
  return { value: point, done: false };
});

var getWeakData = internalMetadata.getWeakData;








var setInternalState$5 = internalState.set;
var internalStateGetterFor$1 = internalState.getterFor;
var find = arrayIteration.find;
var findIndex = arrayIteration.findIndex;
var id$1 = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) this.entries.splice(index, 1);
    return !!~index;
  }
};

var collectionWeak = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState$5(that, {
        type: CONSTRUCTOR_NAME,
        id: id$1++,
        frozen: undefined
      });
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && has(data, state.id) && delete data[state.id];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has$1(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && has(data, state.id);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // 23.4.3.1 WeakSet.prototype.add(value)
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return C;
  }
};

var es_weakMap = createCommonjsModule(function (module) {






var enforceIternalState = internalState.enforce;


var IS_IE11 = !global_1.ActiveXObject && 'ActiveXObject' in global_1;
var isExtensible = Object.isExtensible;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.github.io/ecma262/#sec-weakmap-constructor
var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak);

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (nativeWeakMap && IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  internalMetadata.REQUIRED = true;
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeDelete = WeakMapPrototype['delete'];
  var nativeHas = WeakMapPrototype.has;
  var nativeGet = WeakMapPrototype.get;
  var nativeSet = WeakMapPrototype.set;
  redefineAll(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete.call(this, key) || state.frozen['delete'](key);
      } return nativeDelete.call(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) || state.frozen.has(key);
      } return nativeHas.call(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
      } return nativeGet.call(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
      } else nativeSet.call(this, key, value);
      return this;
    }
  });
}
});

var ITERATOR$5 = wellKnownSymbol('iterator');
var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
var ArrayValues = es_array_iterator.values;

for (var COLLECTION_NAME$1 in domIterables) {
  var Collection$1 = global_1[COLLECTION_NAME$1];
  var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;
  if (CollectionPrototype$1) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype$1[ITERATOR$5] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype$1, ITERATOR$5, ArrayValues);
    } catch (error) {
      CollectionPrototype$1[ITERATOR$5] = ArrayValues;
    }
    if (!CollectionPrototype$1[TO_STRING_TAG$3]) {
      createNonEnumerableProperty(CollectionPrototype$1, TO_STRING_TAG$3, COLLECTION_NAME$1);
    }
    if (domIterables[COLLECTION_NAME$1]) for (var METHOD_NAME in es_array_iterator) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype$1[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype$1, METHOD_NAME, es_array_iterator[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype$1[METHOD_NAME] = es_array_iterator[METHOD_NAME];
      }
    }
  }
}

var dist$4 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NAVIGATE_URL = exports.SHARED_STATE_SET = exports.SHARED_STATE_CHANGED = exports.DOCS_RENDERED = exports.STORIES_EXPAND_ALL = exports.STORIES_COLLAPSE_ALL = exports.SELECT_STORY = exports.PREVIEW_KEYDOWN = exports.REGISTER_SUBSCRIPTION = exports.GLOBALS_UPDATED = exports.UPDATE_GLOBALS = exports.RESET_STORY_ARGS = exports.STORY_ARGS_UPDATED = exports.UPDATE_STORY_ARGS = exports.STORY_THREW_EXCEPTION = exports.STORY_ERRORED = exports.STORY_MISSING = exports.STORY_RENDERED = exports.STORY_UNCHANGED = exports.STORY_CHANGED = exports.FORCE_RE_RENDER = exports.CURRENT_STORY_WAS_SET = exports.SET_CURRENT_STORY = exports.SET_STORIES = exports.STORY_SPECIFIED = exports.CHANNEL_CREATED = exports["default"] = void 0;
var events; // Enables: `import Events from ...`

(function (events) {
  events["CHANNEL_CREATED"] = "channelCreated";
  events["STORY_SPECIFIED"] = "storySpecified";
  events["SET_STORIES"] = "setStories";
  events["SET_CURRENT_STORY"] = "setCurrentStory";
  events["CURRENT_STORY_WAS_SET"] = "currentStoryWasSet";
  events["FORCE_RE_RENDER"] = "forceReRender";
  events["STORY_CHANGED"] = "storyChanged";
  events["STORY_UNCHANGED"] = "storyUnchanged";
  events["STORY_RENDERED"] = "storyRendered";
  events["STORY_MISSING"] = "storyMissing";
  events["STORY_ERRORED"] = "storyErrored";
  events["STORY_THREW_EXCEPTION"] = "storyThrewException";
  events["UPDATE_STORY_ARGS"] = "updateStoryArgs";
  events["STORY_ARGS_UPDATED"] = "storyArgsUpdated";
  events["RESET_STORY_ARGS"] = "resetStoryArgs";
  events["UPDATE_GLOBALS"] = "updateGlobals";
  events["GLOBALS_UPDATED"] = "globalsUpdated";
  events["REGISTER_SUBSCRIPTION"] = "registerSubscription";
  events["PREVIEW_KEYDOWN"] = "previewKeydown";
  events["SELECT_STORY"] = "selectStory";
  events["STORIES_COLLAPSE_ALL"] = "storiesCollapseAll";
  events["STORIES_EXPAND_ALL"] = "storiesExpandAll";
  events["DOCS_RENDERED"] = "docsRendered";
  events["SHARED_STATE_CHANGED"] = "sharedStateChanged";
  events["SHARED_STATE_SET"] = "sharedStateSet";
  events["NAVIGATE_URL"] = "navigateUrl";
})(events || (events = {}));

var _default = events; // Enables: `import * as Events from ...` or `import { CHANNEL_CREATED } as Events from ...`
// This is the preferred method

exports["default"] = _default;
var CHANNEL_CREATED = events.CHANNEL_CREATED,
    STORY_SPECIFIED = events.STORY_SPECIFIED,
    SET_STORIES = events.SET_STORIES,
    SET_CURRENT_STORY = events.SET_CURRENT_STORY,
    CURRENT_STORY_WAS_SET = events.CURRENT_STORY_WAS_SET,
    FORCE_RE_RENDER = events.FORCE_RE_RENDER,
    STORY_CHANGED = events.STORY_CHANGED,
    STORY_UNCHANGED = events.STORY_UNCHANGED,
    STORY_RENDERED = events.STORY_RENDERED,
    STORY_MISSING = events.STORY_MISSING,
    STORY_ERRORED = events.STORY_ERRORED,
    STORY_THREW_EXCEPTION = events.STORY_THREW_EXCEPTION,
    UPDATE_STORY_ARGS = events.UPDATE_STORY_ARGS,
    STORY_ARGS_UPDATED = events.STORY_ARGS_UPDATED,
    RESET_STORY_ARGS = events.RESET_STORY_ARGS,
    UPDATE_GLOBALS = events.UPDATE_GLOBALS,
    GLOBALS_UPDATED = events.GLOBALS_UPDATED,
    REGISTER_SUBSCRIPTION = events.REGISTER_SUBSCRIPTION,
    PREVIEW_KEYDOWN = events.PREVIEW_KEYDOWN,
    SELECT_STORY = events.SELECT_STORY,
    STORIES_COLLAPSE_ALL = events.STORIES_COLLAPSE_ALL,
    STORIES_EXPAND_ALL = events.STORIES_EXPAND_ALL,
    DOCS_RENDERED = events.DOCS_RENDERED,
    SHARED_STATE_CHANGED = events.SHARED_STATE_CHANGED,
    SHARED_STATE_SET = events.SHARED_STATE_SET,
    NAVIGATE_URL = events.NAVIGATE_URL;
exports.NAVIGATE_URL = NAVIGATE_URL;
exports.SHARED_STATE_SET = SHARED_STATE_SET;
exports.SHARED_STATE_CHANGED = SHARED_STATE_CHANGED;
exports.DOCS_RENDERED = DOCS_RENDERED;
exports.STORIES_EXPAND_ALL = STORIES_EXPAND_ALL;
exports.STORIES_COLLAPSE_ALL = STORIES_COLLAPSE_ALL;
exports.SELECT_STORY = SELECT_STORY;
exports.PREVIEW_KEYDOWN = PREVIEW_KEYDOWN;
exports.REGISTER_SUBSCRIPTION = REGISTER_SUBSCRIPTION;
exports.GLOBALS_UPDATED = GLOBALS_UPDATED;
exports.UPDATE_GLOBALS = UPDATE_GLOBALS;
exports.RESET_STORY_ARGS = RESET_STORY_ARGS;
exports.STORY_ARGS_UPDATED = STORY_ARGS_UPDATED;
exports.UPDATE_STORY_ARGS = UPDATE_STORY_ARGS;
exports.STORY_THREW_EXCEPTION = STORY_THREW_EXCEPTION;
exports.STORY_ERRORED = STORY_ERRORED;
exports.STORY_MISSING = STORY_MISSING;
exports.STORY_RENDERED = STORY_RENDERED;
exports.STORY_UNCHANGED = STORY_UNCHANGED;
exports.STORY_CHANGED = STORY_CHANGED;
exports.FORCE_RE_RENDER = FORCE_RE_RENDER;
exports.CURRENT_STORY_WAS_SET = CURRENT_STORY_WAS_SET;
exports.SET_CURRENT_STORY = SET_CURRENT_STORY;
exports.SET_STORIES = SET_STORIES;
exports.STORY_SPECIFIED = STORY_SPECIFIED;
exports.CHANNEL_CREATED = CHANNEL_CREATED;
});

unwrapExports(dist$4);
var dist_1$4 = dist$4.NAVIGATE_URL;
var dist_2$2 = dist$4.SHARED_STATE_SET;
var dist_3 = dist$4.SHARED_STATE_CHANGED;
var dist_4 = dist$4.DOCS_RENDERED;
var dist_5 = dist$4.STORIES_EXPAND_ALL;
var dist_6 = dist$4.STORIES_COLLAPSE_ALL;
var dist_7 = dist$4.SELECT_STORY;
var dist_8 = dist$4.PREVIEW_KEYDOWN;
var dist_9 = dist$4.REGISTER_SUBSCRIPTION;
var dist_10 = dist$4.GLOBALS_UPDATED;
var dist_11 = dist$4.UPDATE_GLOBALS;
var dist_12 = dist$4.RESET_STORY_ARGS;
var dist_13 = dist$4.STORY_ARGS_UPDATED;
var dist_14 = dist$4.UPDATE_STORY_ARGS;
var dist_15 = dist$4.STORY_THREW_EXCEPTION;
var dist_16 = dist$4.STORY_ERRORED;
var dist_17 = dist$4.STORY_MISSING;
var dist_18 = dist$4.STORY_RENDERED;
var dist_19 = dist$4.STORY_UNCHANGED;
var dist_20 = dist$4.STORY_CHANGED;
var dist_21 = dist$4.FORCE_RE_RENDER;
var dist_22 = dist$4.CURRENT_STORY_WAS_SET;
var dist_23 = dist$4.SET_CURRENT_STORY;
var dist_24 = dist$4.SET_STORIES;
var dist_25 = dist$4.STORY_SPECIFIED;
var dist_26 = dist$4.CHANNEL_CREATED;

var hooks = createCommonjsModule(function (module, exports) {





















































Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMemo = useMemo;
exports.useCallback = useCallback;
exports.useRef = useRef;
exports.useState = useState;
exports.useReducer = useReducer;
exports.useEffect = useEffect;
exports.useChannel = useChannel;
exports.useStoryContext = useStoryContext;
exports.useParameter = useParameter;
exports.useArgs = useArgs;
exports.useGlobals = useGlobals;
exports.applyHooks = exports.HooksContext = void 0;

var _global = _interopRequireDefault(window_1);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RenderEvents = [dist$4.STORY_RENDERED, dist$4.DOCS_RENDERED];

var HooksContext = /*#__PURE__*/function () {
  function HooksContext() {
    var _this = this;

    _classCallCheck(this, HooksContext);

    this.hookListsMap = void 0;
    this.mountedDecorators = void 0;
    this.prevMountedDecorators = void 0;
    this.currentHooks = void 0;
    this.nextHookIndex = void 0;
    this.currentPhase = void 0;
    this.currentEffects = void 0;
    this.prevEffects = void 0;
    this.currentDecoratorName = void 0;
    this.hasUpdates = void 0;
    this.currentContext = void 0;

    this.renderListener = function () {
      _this.triggerEffects();

      _this.currentContext = null;

      _this.removeRenderListeners();
    };

    this.init();
  }

  _createClass(HooksContext, [{
    key: "init",
    value: function init() {
      this.hookListsMap = new WeakMap();
      this.mountedDecorators = new Set();
      this.prevMountedDecorators = this.mountedDecorators;
      this.currentHooks = [];
      this.nextHookIndex = 0;
      this.currentPhase = 'NONE';
      this.currentEffects = [];
      this.prevEffects = [];
      this.currentDecoratorName = null;
      this.hasUpdates = false;
      this.currentContext = null;
    }
  }, {
    key: "clean",
    value: function clean() {
      this.prevEffects.forEach(function (effect) {
        if (effect.destroy) {
          effect.destroy();
        }
      });
      this.init();
      this.removeRenderListeners();
    }
  }, {
    key: "getNextHook",
    value: function getNextHook() {
      var hook = this.currentHooks[this.nextHookIndex];
      this.nextHookIndex += 1;
      return hook;
    }
  }, {
    key: "triggerEffects",
    value: function triggerEffects() {
      var _this2 = this;

      // destroy removed effects
      this.prevEffects.forEach(function (effect) {
        if (!_this2.currentEffects.includes(effect) && effect.destroy) {
          effect.destroy();
        }
      }); // trigger added effects

      this.currentEffects.forEach(function (effect) {
        if (!_this2.prevEffects.includes(effect)) {
          // eslint-disable-next-line no-param-reassign
          effect.destroy = effect.create();
        }
      });
      this.prevEffects = this.currentEffects;
      this.currentEffects = [];
    }
  }, {
    key: "addRenderListeners",
    value: function addRenderListeners() {
      var _this3 = this;

      this.removeRenderListeners();

      var channel = dist$3.addons.getChannel();

      RenderEvents.forEach(function (e) {
        return channel.on(e, _this3.renderListener);
      });
    }
  }, {
    key: "removeRenderListeners",
    value: function removeRenderListeners() {
      var _this4 = this;

      var channel = dist$3.addons.getChannel();

      RenderEvents.forEach(function (e) {
        return channel.removeListener(e, _this4.renderListener);
      });
    }
  }]);

  return HooksContext;
}();

exports.HooksContext = HooksContext;

var hookify = function hookify(fn) {
  return function () {
    var _ref = typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'function' ? arguments.length <= 1 ? undefined : arguments[1] : arguments.length <= 0 ? undefined : arguments[0],
        hooks = _ref.hooks;

    var prevPhase = hooks.currentPhase;
    var prevHooks = hooks.currentHooks;
    var prevNextHookIndex = hooks.nextHookIndex;
    var prevDecoratorName = hooks.currentDecoratorName;
    hooks.currentDecoratorName = fn.name;

    if (hooks.prevMountedDecorators.has(fn)) {
      hooks.currentPhase = 'UPDATE';
      hooks.currentHooks = hooks.hookListsMap.get(fn) || [];
    } else {
      hooks.currentPhase = 'MOUNT';
      hooks.currentHooks = [];
      hooks.hookListsMap.set(fn, hooks.currentHooks);
      hooks.prevMountedDecorators.add(fn);
    }

    hooks.nextHookIndex = 0;
    var prevContext = _global["default"].STORYBOOK_HOOKS_CONTEXT;
    _global["default"].STORYBOOK_HOOKS_CONTEXT = hooks;
    var result = fn.apply(void 0, arguments);
    _global["default"].STORYBOOK_HOOKS_CONTEXT = prevContext;

    if (hooks.currentPhase === 'UPDATE' && hooks.getNextHook() != null) {
      throw new Error('Rendered fewer hooks than expected. This may be caused by an accidental early return statement.');
    }

    hooks.currentPhase = prevPhase;
    hooks.currentHooks = prevHooks;
    hooks.nextHookIndex = prevNextHookIndex;
    hooks.currentDecoratorName = prevDecoratorName;
    return result;
  };
}; // Counter to prevent infinite loops.


var numberOfRenders = 0;
var RENDER_LIMIT = 25;

var applyHooks = function applyHooks(applyDecorators) {
  return function (getStory, decorators) {
    var decorated = applyDecorators(hookify(getStory), decorators.map(hookify));
    return function (context) {
      var hooks = context.hooks;
      hooks.prevMountedDecorators = hooks.mountedDecorators;
      hooks.mountedDecorators = new Set([getStory].concat(_toConsumableArray(decorators)));
      hooks.currentContext = context;
      hooks.hasUpdates = false;
      var result = decorated(context);
      numberOfRenders = 1;

      while (hooks.hasUpdates) {
        hooks.hasUpdates = false;
        hooks.currentEffects = [];
        result = decorated(context);
        numberOfRenders += 1;

        if (numberOfRenders > RENDER_LIMIT) {
          throw new Error('Too many re-renders. Storybook limits the number of renders to prevent an infinite loop.');
        }
      }

      hooks.addRenderListeners();
      return result;
    };
  };
};

exports.applyHooks = applyHooks;

var areDepsEqual = function areDepsEqual(deps, nextDeps) {
  return deps.length === nextDeps.length && deps.every(function (dep, i) {
    return dep === nextDeps[i];
  });
};

var invalidHooksError = function invalidHooksError() {
  return new Error('Storybook preview hooks can only be called inside decorators and story functions.');
};

function getHooksContextOrNull() {
  return _global["default"].STORYBOOK_HOOKS_CONTEXT || null;
}

function getHooksContextOrThrow() {
  var hooks = getHooksContextOrNull();

  if (hooks == null) {
    throw invalidHooksError();
  }

  return hooks;
}

function useHook(name, callback, deps) {
  var hooks = getHooksContextOrThrow();

  if (hooks.currentPhase === 'MOUNT') {
    if (deps != null && !Array.isArray(deps)) {
      dist$2.logger.warn("".concat(name, " received a final argument that is not an array (instead, received ").concat(deps, "). When specified, the final argument must be an array."));
    }

    var _hook = {
      name: name,
      deps: deps
    };
    hooks.currentHooks.push(_hook);
    callback(_hook);
    return _hook;
  }

  if (hooks.currentPhase === 'UPDATE') {
    var _hook2 = hooks.getNextHook();

    if (_hook2 == null) {
      throw new Error('Rendered more hooks than during the previous render.');
    }

    if (_hook2.name !== name) {
      dist$2.logger.warn("Storybook has detected a change in the order of Hooks".concat(hooks.currentDecoratorName ? " called by ".concat(hooks.currentDecoratorName) : '', ". This will lead to bugs and errors if not fixed."));
    }

    if (deps != null && _hook2.deps == null) {
      dist$2.logger.warn("".concat(name, " received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders."));
    }

    if (deps != null && _hook2.deps != null && deps.length !== _hook2.deps.length) {
      dist$2.logger.warn("The final argument passed to ".concat(name, " changed size between renders. The order and size of this array must remain constant.\nPrevious: ").concat(_hook2.deps, "\nIncoming: ").concat(deps));
    }

    if (deps == null || _hook2.deps == null || !areDepsEqual(deps, _hook2.deps)) {
      callback(_hook2);
      _hook2.deps = deps;
    }

    return _hook2;
  }

  throw invalidHooksError();
}

function useMemoLike(name, nextCreate, deps) {
  var _useHook = useHook(name, function (hook) {
    // eslint-disable-next-line no-param-reassign
    hook.memoizedState = nextCreate();
  }, deps),
      memoizedState = _useHook.memoizedState;

  return memoizedState;
}
/* Returns a memoized value, see https://reactjs.org/docs/hooks-reference.html#usememo */


function useMemo(nextCreate, deps) {
  return useMemoLike('useMemo', nextCreate, deps);
}
/* Returns a memoized callback, see https://reactjs.org/docs/hooks-reference.html#usecallback */


function useCallback(callback, deps) {
  return useMemoLike('useCallback', function () {
    return callback;
  }, deps);
}

function useRefLike(name, initialValue) {
  return useMemoLike(name, function () {
    return {
      current: initialValue
    };
  }, []);
}
/* Returns a mutable ref object, see https://reactjs.org/docs/hooks-reference.html#useref */


function useRef(initialValue) {
  return useRefLike('useRef', initialValue);
}

function triggerUpdate() {
  var hooks = getHooksContextOrNull(); // Rerun getStory if updates were triggered synchronously, force rerender otherwise

  if (hooks != null && hooks.currentPhase !== 'NONE') {
    hooks.hasUpdates = true;
  } else {
    try {
      dist$3.addons.getChannel().emit(dist$4.FORCE_RE_RENDER);
    } catch (e) {
      dist$2.logger.warn('State updates of Storybook preview hooks work only in browser');
    }
  }
}

function useStateLike(name, initialState) {
  var stateRef = useRefLike(name, // @ts-ignore S type should never be function, but there's no way to tell that to TypeScript
  typeof initialState === 'function' ? initialState() : initialState);

  var setState = function setState(update) {
    // @ts-ignore S type should never be function, but there's no way to tell that to TypeScript
    stateRef.current = typeof update === 'function' ? update(stateRef.current) : update;
    triggerUpdate();
  };

  return [stateRef.current, setState];
}
/* Returns a stateful value, and a function to update it, see https://reactjs.org/docs/hooks-reference.html#usestate */


function useState(initialState) {
  return useStateLike('useState', initialState);
}
/* A redux-like alternative to useState, see https://reactjs.org/docs/hooks-reference.html#usereducer */


function useReducer(reducer, initialArg, init) {
  var initialState = init != null ? function () {
    return init(initialArg);
  } : initialArg;

  var _useStateLike = useStateLike('useReducer', initialState),
      _useStateLike2 = _slicedToArray(_useStateLike, 2),
      state = _useStateLike2[0],
      setState = _useStateLike2[1];

  var dispatch = function dispatch(action) {
    return setState(function (prevState) {
      return reducer(prevState, action);
    });
  };

  return [state, dispatch];
}
/*
  Triggers a side effect, see https://reactjs.org/docs/hooks-reference.html#usestate
  Effects are triggered synchronously after rendering the story
*/


function useEffect(create, deps) {
  var hooks = getHooksContextOrThrow();
  var effect = useMemoLike('useEffect', function () {
    return {
      create: create
    };
  }, deps);

  if (!hooks.currentEffects.includes(effect)) {
    hooks.currentEffects.push(effect);
  }
}

/* Accepts a map of Storybook channel event listeners, returns an emit function */
function useChannel(eventMap) {
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var channel = dist$3.addons.getChannel();

  useEffect(function () {
    Object.entries(eventMap).forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          type = _ref3[0],
          listener = _ref3[1];

      return channel.on(type, listener);
    });
    return function () {
      Object.entries(eventMap).forEach(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            type = _ref5[0],
            listener = _ref5[1];

        return channel.removeListener(type, listener);
      });
    };
  }, [].concat(_toConsumableArray(Object.keys(eventMap)), _toConsumableArray(deps)));
  return useCallback(channel.emit.bind(channel), [channel]);
}
/* Returns current story context */


function useStoryContext() {
  var _getHooksContextOrThr = getHooksContextOrThrow(),
      currentContext = _getHooksContextOrThr.currentContext;

  if (currentContext == null) {
    throw invalidHooksError();
  }

  return currentContext;
}
/* Returns current value of a story parameter */


function useParameter(parameterKey, defaultValue) {
  var _useStoryContext = useStoryContext(),
      parameters = _useStoryContext.parameters;

  if (parameterKey) {
    return parameters[parameterKey] || defaultValue;
  }

  return undefined;
}
/* Returns current value of story args */


function useArgs() {
  var channel = dist$3.addons.getChannel();

  var _useStoryContext2 = useStoryContext(),
      storyId = _useStoryContext2.id,
      args = _useStoryContext2.args;

  var updateArgs = useCallback(function (updatedArgs) {
    return channel.emit(dist$4.UPDATE_STORY_ARGS, {
      storyId: storyId,
      updatedArgs: updatedArgs
    });
  }, [channel, storyId]);
  var resetArgs = useCallback(function (argNames) {
    return channel.emit(dist$4.RESET_STORY_ARGS, {
      storyId: storyId,
      argNames: argNames
    });
  }, [channel, storyId]);
  return [args, updateArgs, resetArgs];
}
/* Returns current value of global args */


function useGlobals() {
  var channel = dist$3.addons.getChannel();

  var _useStoryContext3 = useStoryContext(),
      globals = _useStoryContext3.globals;

  var updateGlobals = useCallback(function (newGlobals) {
    return channel.emit(dist$4.UPDATE_GLOBALS, {
      globals: newGlobals
    });
  }, [channel]);
  return [globals, updateGlobals];
}
});

unwrapExports(hooks);
var hooks_1 = hooks.useMemo;
var hooks_2 = hooks.useCallback;
var hooks_3 = hooks.useRef;
var hooks_4 = hooks.useState;
var hooks_5 = hooks.useReducer;
var hooks_6 = hooks.useEffect;
var hooks_7 = hooks.useChannel;
var hooks_8 = hooks.useStoryContext;
var hooks_9 = hooks.useParameter;
var hooks_10 = hooks.useArgs;
var hooks_11 = hooks.useGlobals;
var hooks_12 = hooks.applyHooks;
var hooks_13 = hooks.HooksContext;

var public_api = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports["default"] = void 0;



Object.keys(dist$3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return dist$3[key];
    }
  });
});



Object.keys(makeDecorator_1).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return makeDecorator_1[key];
    }
  });
});



Object.keys(types_1).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return types_1[key];
    }
  });
});



Object.keys(storybookChannelMock).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return storybookChannelMock[key];
    }
  });
});



Object.keys(hooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return hooks[key];
    }
  });
});
// There can only be 1 default export per entry point and it has to be directly from public_api
// Exporting this twice in order to to be able to import it like { addons } instead of 'addons'
// prefer import { addons } from '@storybook/addons' over import addons from '@storybook/addons'
//
// See index.ts
var _default = dist$3.addons;
exports["default"] = _default;
});

unwrapExports(public_api);

var shared$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CLICK = exports.SET_OPTIONS = exports.CHANGE = exports.SET = exports.RESET = exports.PANEL_ID = exports.ADDON_ID = exports.PARAM_KEY = void 0;
// addons, panels and events get unique names using a prefix
var PARAM_KEY = 'knobs';
exports.PARAM_KEY = PARAM_KEY;
var ADDON_ID = 'storybookjs/knobs';
exports.ADDON_ID = ADDON_ID;
var PANEL_ID = "".concat(ADDON_ID, "/panel");
exports.PANEL_ID = PANEL_ID;
var RESET = "".concat(ADDON_ID, "/reset");
exports.RESET = RESET;
var SET = "".concat(ADDON_ID, "/set");
exports.SET = SET;
var CHANGE = "".concat(ADDON_ID, "/change");
exports.CHANGE = CHANGE;
var SET_OPTIONS = "".concat(ADDON_ID, "/set-options");
exports.SET_OPTIONS = SET_OPTIONS;
var CLICK = "".concat(ADDON_ID, "/click");
exports.CLICK = CLICK;
});

unwrapExports(shared$1);
var shared_1 = shared$1.CLICK;
var shared_2 = shared$1.SET_OPTIONS;
var shared_3 = shared$1.CHANGE;
var shared_4 = shared$1.SET;
var shared_5 = shared$1.RESET;
var shared_6 = shared$1.PANEL_ID;
var shared_7 = shared$1.ADDON_ID;
var shared_8 = shared$1.PARAM_KEY;

var $indexOf = arrayIncludes.indexOf;



var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD$2 = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH$7 = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
_export({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD$2 || !USES_TO_LENGTH$7 }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var FAILS_ON_PRIMITIVES$2 = fails(function () { objectGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$2, sham: !correctPrototypeGetter }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return objectGetPrototypeOf(toObject(it));
  }
});

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

var _arrayReduce = arrayReduce;

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

var _basePropertyOf = basePropertyOf;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = _basePropertyOf(deburredLetters);

var _deburrLetter = deburrLetter;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$2 = _root.Symbol;

var _Symbol = Symbol$2;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;

var isArray_1 = isArray$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString$1;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol$1;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString$1 = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString$1 ? symbolToString$1.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$2(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString$2;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString_1(string);
  return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
}

var deburr_1 = deburr;

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

var _asciiWords = asciiWords;

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

var _hasUnicodeWord = hasUnicodeWord;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo$1 = '[' + rsComboRange$1 + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo$1 + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

var _unicodeWords = unicodeWords;

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString_1(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
  }
  return string.match(pattern) || [];
}

var words_1 = words;

/** Used to compose unicode capture groups. */
var rsApos$1 = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos$1, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
  };
}

var _createCompounder = createCompounder;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice;

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : _baseSlice(array, start, end);
}

var _castSlice = castSlice;

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff',
    rsComboMarksRange$2 = '\\u0300-\\u036f',
    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
    rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ$1 = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1  + rsComboRange$2 + rsVarRange$1 + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

var _hasUnicode = hasUnicode;

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

var _asciiToArray = asciiToArray;

/** Used to compose unicode character classes. */
var rsAstralRange$2 = '\\ud800-\\udfff',
    rsComboMarksRange$3 = '\\u0300-\\u036f',
    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
    rsVarRange$2 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange$2 + ']',
    rsCombo$2 = '[' + rsComboRange$3 + ']',
    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
    rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ$2 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod$1 = rsModifier$1 + '?',
    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
    rsSymbol = '(?:' + [rsNonAstral$1 + rsCombo$2 + '?', rsCombo$2, rsRegional$1, rsSurrPair$1, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz$1 + '(?=' + rsFitz$1 + ')|' + rsSymbol + rsSeq$1, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

var _unicodeToArray = unicodeToArray;

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return _hasUnicode(string)
    ? _unicodeToArray(string)
    : _asciiToArray(string);
}

var _stringToArray = stringToArray;

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString_1(string);

    var strSymbols = _hasUnicode(string)
      ? _stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? _castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

var _createCaseFirst = createCaseFirst;

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = _createCaseFirst('toUpperCase');

var upperFirst_1 = upperFirst;

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = _createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + upperFirst_1(word);
});

var startCase_1 = startCase;

var dist$5 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isExportStory = isExportStory;
exports.parseKind = exports.storyNameFromExport = exports.toId = exports.sanitize = void 0;

var _startCase = _interopRequireDefault(startCase_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Remove punctuation and illegal characters from a story ID.
 *
 * See https://gist.github.com/davidjrice/9d2af51100e41c6c4b4a
 */
var sanitize = function sanitize(string) {
  return string.toLowerCase() // eslint-disable-next-line no-useless-escape
  .replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-').replace(/-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
};

exports.sanitize = sanitize;

var sanitizeSafe = function sanitizeSafe(string, part) {
  var sanitized = sanitize(string);

  if (sanitized === '') {
    throw new Error("Invalid ".concat(part, " '").concat(string, "', must include alphanumeric characters"));
  }

  return sanitized;
};
/**
 * Generate a storybook ID from a component/kind and story name.
 */


var toId = function toId(kind, name) {
  return "".concat(sanitizeSafe(kind, 'kind'), "--").concat(sanitizeSafe(name, 'name'));
};
/**
 * Transform a CSF named export into a readable story name
 */


exports.toId = toId;

var storyNameFromExport = function storyNameFromExport(key) {
  return (0, _startCase["default"])(key);
};

exports.storyNameFromExport = storyNameFromExport;

function matches(storyKey, arrayOrRegex) {
  if (Array.isArray(arrayOrRegex)) {
    return arrayOrRegex.includes(storyKey);
  }

  return storyKey.match(arrayOrRegex);
}
/**
 * Does a named export match CSF inclusion/exclusion options?
 */


function isExportStory(key, _ref) {
  var includeStories = _ref.includeStories,
      excludeStories = _ref.excludeStories;
  return (// https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs
    key !== '__esModule' && (!includeStories || matches(key, includeStories)) && (!excludeStories || !matches(key, excludeStories))
  );
}

/**
 * Parse out the component/kind name from a path, using the given separator config.
 */
var parseKind = function parseKind(kind, _ref2) {
  var rootSeparator = _ref2.rootSeparator,
      groupSeparator = _ref2.groupSeparator;

  var _kind$split = kind.split(rootSeparator, 2),
      _kind$split2 = _slicedToArray(_kind$split, 2),
      root = _kind$split2[0],
      remainder = _kind$split2[1];

  var groups = (remainder || kind).split(groupSeparator).filter(function (i) {
    return !!i;
  }); // when there's no remainder, it means the root wasn't found/split

  return {
    root: remainder ? root : null,
    groups: groups
  };
};

exports.parseKind = parseKind;
});

unwrapExports(dist$5);
var dist_1$5 = dist$5.isExportStory;
var dist_2$3 = dist$5.parseKind;
var dist_3$1 = dist$5.storyNameFromExport;
var dist_4$1 = dist$5.toId;
var dist_5$1 = dist$5.sanitize;

var hooks$1 = createCommonjsModule(function (module, exports) {































Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSharedState = useSharedState;
exports.useAddonState = useAddonState;
Object.defineProperty(exports, "HooksContext", {
  enumerable: true,
  get: function get() {
    return public_api.HooksContext;
  }
});
Object.defineProperty(exports, "applyHooks", {
  enumerable: true,
  get: function get() {
    return public_api.applyHooks;
  }
});
Object.defineProperty(exports, "useMemo", {
  enumerable: true,
  get: function get() {
    return public_api.useMemo;
  }
});
Object.defineProperty(exports, "useCallback", {
  enumerable: true,
  get: function get() {
    return public_api.useCallback;
  }
});
Object.defineProperty(exports, "useRef", {
  enumerable: true,
  get: function get() {
    return public_api.useRef;
  }
});
Object.defineProperty(exports, "useState", {
  enumerable: true,
  get: function get() {
    return public_api.useState;
  }
});
Object.defineProperty(exports, "useReducer", {
  enumerable: true,
  get: function get() {
    return public_api.useReducer;
  }
});
Object.defineProperty(exports, "useEffect", {
  enumerable: true,
  get: function get() {
    return public_api.useEffect;
  }
});
Object.defineProperty(exports, "useChannel", {
  enumerable: true,
  get: function get() {
    return public_api.useChannel;
  }
});
Object.defineProperty(exports, "useStoryContext", {
  enumerable: true,
  get: function get() {
    return public_api.useStoryContext;
  }
});
Object.defineProperty(exports, "useParameter", {
  enumerable: true,
  get: function get() {
    return public_api.useParameter;
  }
});
Object.defineProperty(exports, "useArgs", {
  enumerable: true,
  get: function get() {
    return public_api.useArgs;
  }
});
Object.defineProperty(exports, "useGlobals", {
  enumerable: true,
  get: function get() {
    return public_api.useGlobals;
  }
});





function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useSharedState(sharedId, defaultState) {
  var channel = public_api.addons.getChannel();

  var _ref = channel.last("".concat(dist$4.SHARED_STATE_CHANGED, "-manager-").concat(sharedId)) || channel.last("".concat(dist$4.SHARED_STATE_SET, "-manager-").concat(sharedId)) || [],
      _ref2 = _slicedToArray(_ref, 1),
      lastValue = _ref2[0];

  var _useState = (0, public_api.useState)(lastValue || defaultState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var allListeners = (0, public_api.useMemo)(function () {
    var _ref3;

    return _ref3 = {}, _defineProperty(_ref3, "".concat(dist$4.SHARED_STATE_CHANGED, "-manager-").concat(sharedId), function manager(s) {
      return setState(s);
    }), _defineProperty(_ref3, "".concat(dist$4.SHARED_STATE_SET, "-manager-").concat(sharedId), function manager(s) {
      return setState(s);
    }), _ref3;
  }, [sharedId]);
  var emit = (0, public_api.useChannel)(allListeners, [sharedId]);
  (0, public_api.useEffect)(function () {
    // init
    if (defaultState !== undefined && !lastValue) {
      emit("".concat(dist$4.SHARED_STATE_SET, "-client-").concat(sharedId), defaultState);
    }
  }, [sharedId]);
  return [state, function (s) {
    setState(s);
    emit("".concat(dist$4.SHARED_STATE_CHANGED, "-client-").concat(sharedId), s);
  }];
}

function useAddonState(addonId, defaultState) {
  return useSharedState(addonId, defaultState);
}
});

unwrapExports(hooks$1);
var hooks_1$1 = hooks$1.useSharedState;
var hooks_2$1 = hooks$1.useAddonState;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod$4 = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction$1(callbackfn);
    var O = toObject(that);
    var self = indexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

var arrayReduce$1 = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod$4(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod$4(true)
};

var $reduce = arrayReduce$1.left;





var STRICT_METHOD$3 = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH$8 = arrayMethodUsesToLength('reduce', { 1: 0 });
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !engineIsNode && engineV8Version > 79 && engineV8Version < 83;

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
_export({ target: 'Array', proto: true, forced: !STRICT_METHOD$3 || !USES_TO_LENGTH$8 || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var decorators = createCommonjsModule(function (module, exports) {











Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultDecorateStory = void 0;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultContext = {
  id: 'unspecified',
  name: 'unspecified',
  kind: 'unspecified',
  parameters: {},
  args: {},
  argTypes: {},
  globals: {}
};

var defaultDecorateStory = function defaultDecorateStory(storyFn, decorators) {
  return decorators.reduce(function (decorated, decorator) {
    return function () {
      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultContext;
      return decorator( // You cannot override the parameters key, it is fixed
      function () {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var parameters = _ref.parameters,
            innerContext = _objectWithoutProperties(_ref, ["parameters"]);

        return decorated(Object.assign(Object.assign({}, context), innerContext));
      }, context);
    };
  }, storyFn);
};

exports.defaultDecorateStory = defaultDecorateStory;
});

unwrapExports(decorators);
var decorators_1 = decorators.defaultDecorateStory;

var client_api = createCommonjsModule(function (module, exports) {



























Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addArgTypesEnhancer = exports.addParameters = exports.addDecorator = void 0;

var _utilDeprecate = _interopRequireDefault(node$1);

var _tsDedent = _interopRequireDefault(dist);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      `clearDecorators` is deprecated and will be removed in Storybook 7.0.\n\n      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-cleardecorators\n    "], ["\n      \\`clearDecorators\\` is deprecated and will be removed in Storybook 7.0.\n\n      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-cleardecorators\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      `setAddon` is deprecated and will be removed in Storybook 7.0.\n\n      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-setaddon\n    "], ["\n      \\`setAddon\\` is deprecated and will be removed in Storybook 7.0.\n\n      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-setaddon\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ClientApi (and StoreStore) are really singletons. However they are not created until the
// relevant framework instanciates them via `start.js`. The good news is this happens right away.
var singleton;
var addDecoratorDeprecationWarning = (0, _utilDeprecate["default"])(function () {}, "`addDecorator` is deprecated, and will be removed in Storybook 7.0.\nInstead, use `export const decorators = [];` in your `preview.js`.\nRead more at https://github.com/storybookjs/storybook/MIGRATION.md#deprecated-addparameters-and-adddecorator).");

var addDecorator = function addDecorator(decorator) {
  var deprecationWarning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!singleton) throw new Error("Singleton client API not yet initialized, cannot call addDecorator");
  if (deprecationWarning) addDecoratorDeprecationWarning();
  singleton.addDecorator(decorator);
};

exports.addDecorator = addDecorator;
var addParametersDeprecationWarning = (0, _utilDeprecate["default"])(function () {}, "`addParameters` is deprecated, and will be removed in Storybook 7.0.\nInstead, use `export const parameters = {};` in your `preview.js`.\nRead more at https://github.com/storybookjs/storybook/MIGRATION.md#deprecated-addparameters-and-adddecorator).");

var addParameters = function addParameters(parameters) {
  var deprecationWarning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!singleton) throw new Error("Singleton client API not yet initialized, cannot call addParameters");
  if (deprecationWarning) addParametersDeprecationWarning();
  singleton.addParameters(parameters);
};

exports.addParameters = addParameters;

var addArgTypesEnhancer = function addArgTypesEnhancer(enhancer) {
  if (!singleton) throw new Error("Singleton client API not yet initialized, cannot call addArgTypesEnhancer");
  singleton.addArgTypesEnhancer(enhancer);
};

exports.addArgTypesEnhancer = addArgTypesEnhancer;

var ClientApi = // React Native Fast refresh doesn't allow multiple dispose calls
function ClientApi(_ref) {
  var _this = this;

  var storyStore = _ref.storyStore,
      _ref$decorateStory = _ref.decorateStory,
      decorateStory = _ref$decorateStory === void 0 ? decorators.defaultDecorateStory : _ref$decorateStory,
      noStoryModuleAddMethodHotDispose = _ref.noStoryModuleAddMethodHotDispose;

  _classCallCheck(this, ClientApi);

  this._storyStore = void 0;
  this._addons = void 0;
  this._decorateStory = void 0;
  this._noStoryModuleAddMethodHotDispose = void 0;
  this.setAddon = (0, _utilDeprecate["default"])(function (addon) {
    _this._addons = Object.assign(Object.assign({}, _this._addons), addon);
  }, (0, _tsDedent["default"])(_templateObject()));

  this.addDecorator = function (decorator) {
    _this._storyStore.addGlobalMetadata({
      decorators: [decorator],
      parameters: {}
    });
  };

  this.clearDecorators = (0, _utilDeprecate["default"])(function () {
    _this._storyStore.clearGlobalDecorators();
  }, (0, _tsDedent["default"])(_templateObject2()));

  this.addParameters = function (parameters) {
    _this._storyStore.addGlobalMetadata({
      decorators: [],
      parameters: parameters
    });
  };

  this.addArgTypesEnhancer = function (enhancer) {
    _this._storyStore.addArgTypesEnhancer(enhancer);
  };

  this.storiesOf = function (kind, m) {
    if (!kind && typeof kind !== 'string') {
      throw new Error('Invalid or missing kind provided for stories, should be a string');
    }

    if (!m) {
      dist$2.logger.warn("Missing 'module' parameter for story with a kind of '".concat(kind, "'. It will break your HMR"));
    }

    if (m) {
      var proto = Object.getPrototypeOf(m);

      if (proto.exports && proto.exports["default"]) {
        // FIXME: throw an error in SB6.0
        dist$2.logger.error("Illegal mix of CSF default export and storiesOf calls in a single file: ".concat(proto.i));
      }
    }

    if (m && m.hot && m.hot.dispose) {
      m.hot.dispose(function () {
        var _storyStore = _this._storyStore; // If HMR dispose happens in a story file, we know that HMR will pass up to the configuration file (preview.js)
        // and be handled by the HMR.allow in config_api, leading to a re-run of configuration.
        // So configuration is about to happen--we can skip the safety check.

        _storyStore.removeStoryKind(kind, {
          allowUnsafe: true
        });
      });
    }

    var hasAdded = false;
    var api = {
      kind: kind.toString(),
      add: function add() {
        return api;
      },
      addDecorator: function addDecorator() {
        return api;
      },
      addParameters: function addParameters() {
        return api;
      }
    }; // apply addons

    Object.keys(_this._addons).forEach(function (name) {
      var addon = _this._addons[name];

      api[name] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        addon.apply(api, args);
        return api;
      };
    });

    api.add = function (storyName, storyFn) {
      var parameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      hasAdded = true;
      var id = parameters.__id || (0, dist$5.toId)(kind, storyName);

      if (typeof storyName !== 'string') {
        throw new Error("Invalid or missing storyName provided for a \"".concat(kind, "\" story."));
      }

      if (!_this._noStoryModuleAddMethodHotDispose && m && m.hot && m.hot.dispose) {
        m.hot.dispose(function () {
          var _storyStore = _this._storyStore; // See note about allowUnsafe above

          _storyStore.remove(id, {
            allowUnsafe: true
          });
        });
      }

      var fileName = m && m.id ? "".concat(m.id) : undefined;

      var decorators = parameters.decorators,
          storyParameters = _objectWithoutProperties(parameters, ["decorators"]);

      _this._storyStore.addStory({
        id: id,
        kind: kind,
        name: storyName,
        storyFn: storyFn,
        parameters: Object.assign({
          fileName: fileName
        }, storyParameters),
        decorators: decorators
      }, {
        applyDecorators: (0, hooks$1.applyHooks)(_this._decorateStory)
      });

      return api;
    };

    api.addDecorator = function (decorator) {
      if (hasAdded) throw new Error("You cannot add a decorator after the first story for a kind.\nRead more here: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#can-no-longer-add-decorators-parameters-after-stories");

      _this._storyStore.addKindMetadata(kind, {
        decorators: [decorator],
        parameters: []
      });

      return api;
    };

    api.addParameters = function (parameters) {
      if (hasAdded) throw new Error("You cannot add parameters after the first story for a kind.\nRead more here: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#can-no-longer-add-decorators-parameters-after-stories");

      _this._storyStore.addKindMetadata(kind, {
        decorators: [],
        parameters: parameters
      });

      return api;
    };

    return api;
  };

  this.getStorybook = function () {
    return _this._storyStore.getStorybook();
  };

  this.raw = function () {
    return _this._storyStore.raw();
  };

  this.store = function () {
    return _this._storyStore;
  };

  this._storyStore = storyStore;
  this._addons = {};
  this._noStoryModuleAddMethodHotDispose = noStoryModuleAddMethodHotDispose || false;
  this._decorateStory = decorateStory;
  if (!storyStore) throw new Error('storyStore is required');
  singleton = this;
};

exports["default"] = ClientApi;
});

unwrapExports(client_api);
var client_api_1 = client_api.addArgTypesEnhancer;
var client_api_2 = client_api.addParameters;
var client_api_3 = client_api.addDecorator;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$2.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

var parameters = createCommonjsModule(function (module, exports) {











































Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineParameters = void 0;

var _isPlainObject = _interopRequireDefault(isPlainObject_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Safely combine parameters recursively. Only copy objects when needed.
 * Algorithm = always overwrite the existing value UNLESS both values
 * are plain objects. In this case flag the key as "special" and handle
 * it with a heuristic.
 */
var combineParameters = function combineParameters() {
  for (var _len = arguments.length, parameterSets = new Array(_len), _key = 0; _key < _len; _key++) {
    parameterSets[_key] = arguments[_key];
  }

  var mergeKeys = {};
  var combined = parameterSets.reduce(function (acc, p) {
    Object.entries(p).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      var existing = acc[key];

      if (Array.isArray(value) || typeof existing === 'undefined') {
        acc[key] = value;
      } else if ((0, _isPlainObject["default"])(value) && (0, _isPlainObject["default"])(existing)) {
        // do nothing, we'll handle this later
        mergeKeys[key] = true;
      } else if (typeof value !== 'undefined') {
        acc[key] = value;
      }
    });
    return acc;
  }, {});
  Object.keys(mergeKeys).forEach(function (key) {
    var mergeValues = parameterSets.map(function (p) {
      return p[key];
    }).filter(function (value) {
      return typeof value !== 'undefined';
    });

    if (mergeValues.every(function (value) {
      return (0, _isPlainObject["default"])(value);
    })) {
      combined[key] = combineParameters.apply(void 0, _toConsumableArray(mergeValues));
    } else {
      combined[key] = mergeValues[mergeValues.length - 1];
    }
  });
  return combined;
};

exports.combineParameters = combineParameters;
});

unwrapExports(parameters);
var parameters_1 = parameters.combineParameters;

var test$1 = [];
var nativeSort = test$1.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test$1.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test$1.sort(null);
});
// Old WebKit
var STRICT_METHOD$4 = arrayMethodIsStrict('sort');

var FORCED$3 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$4;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
_export({ target: 'Array', proto: true, forced: FORCED$3 }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction$1(comparefn));
  }
});

var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;






var nativeStartsWith = ''.startsWith;
var min$3 = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG =  !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor$3(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
_export({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegexp(searchString);
    var index = toLength(min$3(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

function Similar() {
	this.list = [];
	this.lastItem = undefined;
	this.size = 0;

	return this;
}

Similar.prototype.get = function(key) {
	var index;

	if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
		return this.lastItem.val;
	}

	index = this.indexOf(key);
	if (index >= 0) {
		this.lastItem = this.list[index];
		return this.list[index].val;
	}

	return undefined;
};

Similar.prototype.set = function(key, val) {
	var index;

	if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
		this.lastItem.val = val;
		return this;
	}

	index = this.indexOf(key);
	if (index >= 0) {
		this.lastItem = this.list[index];
		this.list[index].val = val;
		return this;
	}

	this.lastItem = { key: key, val: val };
	this.list.push(this.lastItem);
	this.size++;

	return this;
};

Similar.prototype.delete = function(key) {
	var index;

	if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
		this.lastItem = undefined;
	}

	index = this.indexOf(key);
	if (index >= 0) {
		this.size--;
		return this.list.splice(index, 1)[0];
	}

	return undefined;
};


// important that has() doesn't use get() in case an existing key has a falsy value, in which case has() would return false
Similar.prototype.has = function(key) {
	var index;

	if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
		return true;
	}

	index = this.indexOf(key);
	if (index >= 0) {
		this.lastItem = this.list[index];
		return true;
	}

	return false;
};

Similar.prototype.forEach = function(callback, thisArg) {
	var i;
	for (i = 0; i < this.size; i++) {
		callback.call(thisArg || this, this.list[i].val, this.list[i].key, this);
	}
};

Similar.prototype.indexOf = function(key) {
	var i;
	for (i = 0; i < this.size; i++) {
		if (this.isEqual(this.list[i].key, key)) {
			return i;
		}
	}
	return -1;
};

// check if the numbers are equal, or whether they are both precisely NaN (isNaN returns true for all non-numbers)
Similar.prototype.isEqual = function(val1, val2) {
	return val1 === val2 || (val1 !== val1 && val2 !== val2);
};

var similar = Similar;

var mapOrSimilar = function(forceSimilar) {
	if (typeof Map !== 'function' || forceSimilar) {
		var Similar = similar;
		return new Similar();
	}
	else {
		return new Map();
	}
};

var memoizerific = function (limit) {
	var cache = new mapOrSimilar(process.env.FORCE_SIMILAR_INSTEAD_OF_MAP === 'true'),
		lru = [];

	return function (fn) {
		var memoizerific = function () {
			var currentCache = cache,
				newMap,
				fnResult,
				argsLengthMinusOne = arguments.length - 1,
				lruPath = Array(argsLengthMinusOne + 1),
				isMemoized = true,
				i;

			if ((memoizerific.numArgs || memoizerific.numArgs === 0) && memoizerific.numArgs !== argsLengthMinusOne + 1) {
				throw new Error('Memoizerific functions should always be called with the same number of arguments');
			}

			// loop through each argument to traverse the map tree
			for (i = 0; i < argsLengthMinusOne; i++) {
				lruPath[i] = {
					cacheItem: currentCache,
					arg: arguments[i]
				};

				// climb through the hierarchical map tree until the second-last argument has been found, or an argument is missing.
				// if all arguments up to the second-last have been found, this will potentially be a cache hit (determined later)
				if (currentCache.has(arguments[i])) {
					currentCache = currentCache.get(arguments[i]);
					continue;
				}

				isMemoized = false;

				// make maps until last value
				newMap = new mapOrSimilar(process.env.FORCE_SIMILAR_INSTEAD_OF_MAP === 'true');
				currentCache.set(arguments[i], newMap);
				currentCache = newMap;
			}

			// we are at the last arg, check if it is really memoized
			if (isMemoized) {
				if (currentCache.has(arguments[argsLengthMinusOne])) {
					fnResult = currentCache.get(arguments[argsLengthMinusOne]);
				}
				else {
					isMemoized = false;
				}
			}

			// if the result wasn't memoized, compute it and cache it
			if (!isMemoized) {
				fnResult = fn.apply(null, arguments);
				currentCache.set(arguments[argsLengthMinusOne], fnResult);
			}

			// if there is a cache limit, purge any extra results
			if (limit > 0) {
				lruPath[argsLengthMinusOne] = {
					cacheItem: currentCache,
					arg: arguments[argsLengthMinusOne]
				};

				if (isMemoized) {
					moveToMostRecentLru(lru, lruPath);
				}
				else {
					lru.push(lruPath);
				}

				if (lru.length > limit) {
					removeCachedResult(lru.shift());
				}
			}

			memoizerific.wasMemoized = isMemoized;
			memoizerific.numArgs = argsLengthMinusOne + 1;

			return fnResult;
		};

		memoizerific.limit = limit;
		memoizerific.wasMemoized = false;
		memoizerific.cache = cache;
		memoizerific.lru = lru;

		return memoizerific;
	};
};

// move current args to most recent position
function moveToMostRecentLru(lru, lruPath) {
	var lruLen = lru.length,
		lruPathLen = lruPath.length,
		isMatch,
		i, ii;

	for (i = 0; i < lruLen; i++) {
		isMatch = true;
		for (ii = 0; ii < lruPathLen; ii++) {
			if (!isEqual(lru[i][ii].arg, lruPath[ii].arg)) {
				isMatch = false;
				break;
			}
		}
		if (isMatch) {
			break;
		}
	}

	lru.push(lru.splice(i, 1)[0]);
}

// remove least recently used cache item and all dead branches
function removeCachedResult(removedLru) {
	var removedLruLen = removedLru.length,
		currentLru = removedLru[removedLruLen - 1],
		tmp,
		i;

	currentLru.cacheItem.delete(currentLru.arg);

	// walk down the tree removing dead branches (size 0) along the way
	for (i = removedLruLen - 2; i >= 0; i--) {
		currentLru = removedLru[i];
		tmp = currentLru.cacheItem.get(currentLru.arg);

		if (!tmp || !tmp.size) {
			currentLru.cacheItem.delete(currentLru.arg);
		} else {
			break;
		}
	}
}

// check if the numbers are equal, or whether they are both precisely NaN (isNaN returns true for all non-numbers)
function isEqual(val1, val2) {
	return val1 === val2 || (val1 !== val1 && val2 !== val2);
}

var stable = createCommonjsModule(function (module, exports) {
//! stable.js 0.1.8, https://github.com/Two-Screen/stable
//! © 2018 Angry Bytes and contributors. MIT licensed.

(function (global, factory) {
   module.exports = factory() ;
}(commonjsGlobal, (function () {
  // A stable array sort, because `Array#sort()` is not guaranteed stable.
  // This is an implementation of merge sort, without recursion.

  var stable = function (arr, comp) {
    return exec(arr.slice(), comp)
  };

  stable.inplace = function (arr, comp) {
    var result = exec(arr, comp);

    // This simply copies back if the result isn't in the original array,
    // which happens on an odd number of passes.
    if (result !== arr) {
      pass(result, null, arr.length, arr);
    }

    return arr
  };

  // Execute the sort using the input array and a second buffer as work space.
  // Returns one of those two, containing the final result.
  function exec(arr, comp) {
    if (typeof(comp) !== 'function') {
      comp = function (a, b) {
        return String(a).localeCompare(b)
      };
    }

    // Short-circuit when there's nothing to sort.
    var len = arr.length;
    if (len <= 1) {
      return arr
    }

    // Rather than dividing input, simply iterate chunks of 1, 2, 4, 8, etc.
    // Chunks are the size of the left or right hand in merge sort.
    // Stop when the left-hand covers all of the array.
    var buffer = new Array(len);
    for (var chk = 1; chk < len; chk *= 2) {
      pass(arr, comp, chk, buffer);

      var tmp = arr;
      arr = buffer;
      buffer = tmp;
    }

    return arr
  }

  // Run a single pass with the given chunk size.
  var pass = function (arr, comp, chk, result) {
    var len = arr.length;
    var i = 0;
    // Step size / double chunk size.
    var dbl = chk * 2;
    // Bounds of the left and right chunks.
    var l, r, e;
    // Iterators over the left and right chunk.
    var li, ri;

    // Iterate over pairs of chunks.
    for (l = 0; l < len; l += dbl) {
      r = l + chk;
      e = r + chk;
      if (r > len) r = len;
      if (e > len) e = len;

      // Iterate both chunks in parallel.
      li = l;
      ri = r;
      while (true) {
        // Compare the chunks.
        if (li < r && ri < e) {
          // This works for a regular `sort()` compatible comparator,
          // but also for a simple comparator like: `a > b`
          if (comp(arr[li], arr[ri]) <= 0) {
            result[i++] = arr[li++];
          }
          else {
            result[i++] = arr[ri++];
          }
        }
        // Nothing to compare, just flush what's left.
        else if (li < r) {
          result[i++] = arr[li++];
        }
        else if (ri < e) {
          result[i++] = arr[ri++];
        }
        // Both iterators are at the chunk ends.
        else {
          break
        }
      }
    }
  };

  return stable;

})));
});

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$2 = Function.prototype,
    objectProto$3 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$2.call(hasOwnProperty$3).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

var defineProperty$7 = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty$7;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

var _baseFor = baseFor;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$4.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') &&
    !propertyIsEnumerable$1.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$2 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$2;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag$1 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$5.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$6;

  return value === proto;
}

var _isPrototype = isPrototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$1(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys$1;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/* Built-in method references that are verified to be native. */
var Map$1 = _getNative(_root, 'Map');

var _Map = Map$1;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$7.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$8.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;

/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag$1 = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$1:
      var convert = _mapToArray;

    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$1;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$2 = objectProto$a.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$2.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$9.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Promise$2 = _getNative(_root, 'Promise');

var _Promise = Promise$2;

/* Built-in method references that are verified to be native. */
var Set$1 = _getNative(_root, 'Set');

var _Set = Set$1;

/* Built-in method references that are verified to be native. */
var WeakMap$3 = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap$3;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
    objectTag$2 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (_Map && getTag(new _Map) != mapTag$2) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$2) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$2 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    objectTag$3 = '[object Object]';

/** Used for built-in method references. */
var objectProto$c = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$c.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag$1 : _getTag(object),
      othTag = othIsArr ? arrayTag$1 : _getTag(other);

  objTag = objTag == argsTag$2 ? objectTag$3 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$3 : othTag;

  var objIsObj = objTag == objectTag$3,
      othIsObj = othTag == objectTag$3,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || isTypedArray_1(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$a.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$a.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _baseIsEqual = baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}

var _isStrictComparable = isStrictComparable;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get$1(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get$1;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get_1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn_1(object, path)
      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

var _baseMatchesProperty = baseMatchesProperty;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

var property_1 = property;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity_1;
  }
  if (typeof value == 'object') {
    return isArray_1(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return property_1(value);
}

var _baseIteratee = baseIteratee;

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = _baseIteratee(iteratee);

  _baseForOwn(object, function(value, key, object) {
    _baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

var mapValues_1 = mapValues;

/** Used for built-in method references. */
var objectProto$d = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$b = objectProto$d.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$b.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject_1(object)) {
    return object;
  }
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = _toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject_1(objValue)
          ? objValue
          : (_isIndex(path[index + 1]) ? [] : {});
      }
    }
    _assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

var _baseSet = baseSet;

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = _baseGet(object, path);

    if (predicate(value, path)) {
      _baseSet(result, _castPath(path, object), value);
    }
  }
  return result;
}

var _basePickBy = basePickBy;

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return _basePickBy(object, paths, function(value, path) {
    return hasIn_1(object, path);
  });
}

var _basePick = basePick;

/** Built-in value references. */
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray_1(value) || isArguments_1(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

var _baseFlatten = baseFlatten;

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? _baseFlatten(array, 1) : [];
}

var flatten_1 = flatten;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return _setToString(_overRest(func, undefined, flatten_1), func + '');
}

var _flatRest = flatRest;

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = _flatRest(function(object, paths) {
  return object == null ? {} : _basePick(object, paths);
});

var pick_1 = pick;

var store2 = createCommonjsModule(function (module) {
(function(window, define) {
    var _ = {
        version: "2.12.0",
        areas: {},
        apis: {},

        // utilities
        inherit: function(api, o) {
            for (var p in api) {
                if (!o.hasOwnProperty(p)) {
                    Object.defineProperty(o, p, Object.getOwnPropertyDescriptor(api, p));
                }
            }
            return o;
        },
        stringify: function(d) {
            return d === undefined || typeof d === "function" ? d+'' : JSON.stringify(d);
        },
        parse: function(s, fn) {
            // if it doesn't parse, return as is
            try{ return JSON.parse(s,fn||_.revive); }catch(e){ return s; }
        },

        // extension hooks
        fn: function(name, fn) {
            _.storeAPI[name] = fn;
            for (var api in _.apis) {
                _.apis[api][name] = fn;
            }
        },
        get: function(area, key){ return area.getItem(key); },
        set: function(area, key, string){ area.setItem(key, string); },
        remove: function(area, key){ area.removeItem(key); },
        key: function(area, i){ return area.key(i); },
        length: function(area){ return area.length; },
        clear: function(area){ area.clear(); },

        // core functions
        Store: function(id, area, namespace) {
            var store = _.inherit(_.storeAPI, function(key, data, overwrite) {
                if (arguments.length === 0){ return store.getAll(); }
                if (typeof data === "function"){ return store.transact(key, data, overwrite); }// fn=data, alt=overwrite
                if (data !== undefined){ return store.set(key, data, overwrite); }
                if (typeof key === "string" || typeof key === "number"){ return store.get(key); }
                if (typeof key === "function"){ return store.each(key); }
                if (!key){ return store.clear(); }
                return store.setAll(key, data);// overwrite=data, data=key
            });
            store._id = id;
            try {
                var testKey = '__store2_test';
                area.setItem(testKey, 'ok');
                store._area = area;
                area.removeItem(testKey);
            } catch (e) {
                store._area = _.storage('fake');
            }
            store._ns = namespace || '';
            if (!_.areas[id]) {
                _.areas[id] = store._area;
            }
            if (!_.apis[store._ns+store._id]) {
                _.apis[store._ns+store._id] = store;
            }
            return store;
        },
        storeAPI: {
            // admin functions
            area: function(id, area) {
                var store = this[id];
                if (!store || !store.area) {
                    store = _.Store(id, area, this._ns);//new area-specific api in this namespace
                    if (!this[id]){ this[id] = store; }
                }
                return store;
            },
            namespace: function(namespace, singleArea) {
                if (!namespace){
                    return this._ns ? this._ns.substring(0,this._ns.length-1) : '';
                }
                var ns = namespace, store = this[ns];
                if (!store || !store.namespace) {
                    store = _.Store(this._id, this._area, this._ns+ns+'.');//new namespaced api
                    if (!this[ns]){ this[ns] = store; }
                    if (!singleArea) {
                        for (var name in _.areas) {
                            store.area(name, _.areas[name]);
                        }
                    }
                }
                return store;
            },
            isFake: function(){ return this._area.name === 'fake'; },
            toString: function() {
                return 'store'+(this._ns?'.'+this.namespace():'')+'['+this._id+']';
            },

            // storage functions
            has: function(key) {
                if (this._area.has) {
                    return this._area.has(this._in(key));//extension hook
                }
                return !!(this._in(key) in this._area);
            },
            size: function(){ return this.keys().length; },
            each: function(fn, fill) {// fill is used by keys(fillList) and getAll(fillList))
                for (var i=0, m=_.length(this._area); i<m; i++) {
                    var key = this._out(_.key(this._area, i));
                    if (key !== undefined) {
                        if (fn.call(this, key, this.get(key), fill) === false) {
                            break;
                        }
                    }
                    if (m > _.length(this._area)) { m--; i--; }// in case of removeItem
                }
                return fill || this;
            },
            keys: function(fillList) {
                return this.each(function(k, v, list){ list.push(k); }, fillList || []);
            },
            get: function(key, alt) {
                var s = _.get(this._area, this._in(key)),
                    fn;
                if (typeof alt === "function") {
                    fn = alt;
                    alt = null;
                }
                return s !== null ? _.parse(s, fn) :
                    alt != null ? alt : s;
            },
            getAll: function(fillObj) {
                return this.each(function(k, v, all){ all[k] = v; }, fillObj || {});
            },
            transact: function(key, fn, alt) {
                var val = this.get(key, alt),
                    ret = fn(val);
                this.set(key, ret === undefined ? val : ret);
                return this;
            },
            set: function(key, data, overwrite) {
                var d = this.get(key);
                if (d != null && overwrite === false) {
                    return data;
                }
                return _.set(this._area, this._in(key), _.stringify(data), overwrite) || d;
            },
            setAll: function(data, overwrite) {
                var changed, val;
                for (var key in data) {
                    val = data[key];
                    if (this.set(key, val, overwrite) !== val) {
                        changed = true;
                    }
                }
                return changed;
            },
            add: function(key, data) {
                var d = this.get(key);
                if (d instanceof Array) {
                    data = d.concat(data);
                } else if (d !== null) {
                    var type = typeof d;
                    if (type === typeof data && type === 'object') {
                        for (var k in data) {
                            d[k] = data[k];
                        }
                        data = d;
                    } else {
                        data = d + data;
                    }
                }
                _.set(this._area, this._in(key), _.stringify(data));
                return data;
            },
            remove: function(key, alt) {
                var d = this.get(key, alt);
                _.remove(this._area, this._in(key));
                return d;
            },
            clear: function() {
                if (!this._ns) {
                    _.clear(this._area);
                } else {
                    this.each(function(k){ _.remove(this._area, this._in(k)); }, 1);
                }
                return this;
            },
            clearAll: function() {
                var area = this._area;
                for (var id in _.areas) {
                    if (_.areas.hasOwnProperty(id)) {
                        this._area = _.areas[id];
                        this.clear();
                    }
                }
                this._area = area;
                return this;
            },

            // internal use functions
            _in: function(k) {
                if (typeof k !== "string"){ k = _.stringify(k); }
                return this._ns ? this._ns + k : k;
            },
            _out: function(k) {
                return this._ns ?
                    k && k.indexOf(this._ns) === 0 ?
                        k.substring(this._ns.length) :
                        undefined : // so each() knows to skip it
                    k;
            }
        },// end _.storeAPI
        storage: function(name) {
            return _.inherit(_.storageAPI, { items: {}, name: name });
        },
        storageAPI: {
            length: 0,
            has: function(k){ return this.items.hasOwnProperty(k); },
            key: function(i) {
                var c = 0;
                for (var k in this.items){
                    if (this.has(k) && i === c++) {
                        return k;
                    }
                }
            },
            setItem: function(k, v) {
                if (!this.has(k)) {
                    this.length++;
                }
                this.items[k] = v;
            },
            removeItem: function(k) {
                if (this.has(k)) {
                    delete this.items[k];
                    this.length--;
                }
            },
            getItem: function(k){ return this.has(k) ? this.items[k] : null; },
            clear: function(){ for (var k in this.items){ this.removeItem(k); } }
        }// end _.storageAPI
    };

    var store =
        // safely set this up (throws error in IE10/32bit mode for local files)
        _.Store("local", (function(){try{ return localStorage; }catch(e){}})());
    store.local = store;// for completeness
    store._ = _;// for extenders and debuggers...
    // safely setup store.session (throws exception in FF for file:/// urls)
    store.area("session", (function(){try{ return sessionStorage; }catch(e){}})());
    store.area("page", _.storage("page"));

    if (typeof define === 'function' && define.amd !== undefined) {
        define('store2', [], function () {
            return store;
        });
    } else if ( module.exports) {
        module.exports = store;
    } else {
        // expose the primary store fn to the global object and save conflicts
        if (window.store){ _.conflict = window.store; }
        window.store = store;
    }

})(commonjsGlobal, commonjsGlobal && commonjsGlobal.define);
});

var arrayPush$1 = [].push;
var min$4 = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegexp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush$1.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min$4(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);

var storySort_1 = createCommonjsModule(function (module, exports) {









Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storySort = void 0;

var storySort = function storySort() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (a, b) {
    // If the two stories have the same story kind, then use the default
    // ordering, which is the order they are defined in the story file.
    if (a[1].kind === b[1].kind) {
      return 0;
    } // Get the StorySortParameter options.


    var method = options.method || 'configure';
    var order = options.order || []; // Examine each part of the story kind in turn.

    var storyKindA = a[1].kind.split('/');
    var storyKindB = b[1].kind.split('/');
    var depth = 0;

    while (storyKindA[depth] || storyKindB[depth]) {
      // Stories with a shorter depth should go first.
      if (!storyKindA[depth]) {
        return -1;
      }

      if (!storyKindB[depth]) {
        return 1;
      } // Compare the next part of the story kind.


      var nameA = storyKindA[depth];
      var nameB = storyKindB[depth];

      if (nameA !== nameB) {
        // Look for the names in the given `order` array.
        var indexA = order.indexOf(nameA);
        var indexB = order.indexOf(nameB); // If at least one of the names is found, sort by the `order` array.

        if (indexA !== -1 || indexB !== -1) {
          // If one of the names is not found in `order`, list it last.
          if (indexA === -1) {
            indexA = order.length;
          }

          if (indexB === -1) {
            indexB = order.length;
          }

          return indexA - indexB;
        } // Use the default configure() order.


        if (method === 'configure') {
          return 0;
        } // Otherwise, use alphabetical order.


        return nameA.localeCompare(nameB, options.locales ? options.locales : undefined, {
          numeric: true,
          sensitivity: 'accent'
        });
      } // If a nested array is provided for a name, use it for ordering.


      var index = order.indexOf(nameA);
      order = index !== -1 && Array.isArray(order[index + 1]) ? order[index + 1] : []; // We'll need to look at the next part of the name.

      depth += 1;
    } // Identical story kinds. The shortcut at the start of this function prevents
    // this from ever being used.

    /* istanbul ignore next */


    return 0;
  };
};

exports.storySort = storySort;
});

unwrapExports(storySort_1);
var storySort_2 = storySort_1.storySort;

var ensureArgTypes_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureArgTypes = void 0;

var _mapValues = _interopRequireDefault(mapValues_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ensureArgTypes = function ensureArgTypes(context) {
  var _context$parameters = context.parameters,
      _context$parameters$a = _context$parameters.argTypes,
      userArgTypes = _context$parameters$a === void 0 ? {} : _context$parameters$a,
      _context$parameters$a2 = _context$parameters.args,
      args = _context$parameters$a2 === void 0 ? {} : _context$parameters$a2;
  if (!args) return userArgTypes;
  var argTypes = (0, _mapValues["default"])(args, function (arg, name) {
    return arg !== null && typeof arg !== 'undefined' ? {
      name: name
    } : undefined;
  });
  return (0, parameters.combineParameters)(argTypes, userArgTypes);
};

exports.ensureArgTypes = ensureArgTypes;
});

unwrapExports(ensureArgTypes_1);
var ensureArgTypes_2 = ensureArgTypes_1.ensureArgTypes;

var inferArgTypes_1 = createCommonjsModule(function (module, exports) {

















Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inferArgTypes = void 0;

var _mapValues = _interopRequireDefault(mapValues_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var inferType = function inferType(value) {
  var type = _typeof(value);

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'function':
      return {
        name: type
      };
  }

  if (Array.isArray(value)) {
    var childType = value.length > 0 ? inferType(value[0]) : {
      name: 'other',
      value: 'unknown'
    };
    return {
      name: 'array',
      value: childType
    };
  }

  if (value) {
    var fieldTypes = (0, _mapValues["default"])(value, function (field) {
      return inferType(field);
    });
    return {
      name: 'object',
      value: fieldTypes
    };
  }

  return {
    name: 'other',
    value: 'unknown'
  };
};

var inferArgTypes = function inferArgTypes(context) {
  var _context$parameters = context.parameters,
      _context$parameters$a = _context$parameters.argTypes,
      userArgTypes = _context$parameters$a === void 0 ? {} : _context$parameters$a,
      _context$parameters$a2 = _context$parameters.args,
      args = _context$parameters$a2 === void 0 ? {} : _context$parameters$a2;
  if (!args) return userArgTypes;
  var argTypes = (0, _mapValues["default"])(args, function (arg) {
    if (arg !== null && typeof arg !== 'undefined') {
      return {
        type: inferType(arg)
      };
    }

    return undefined;
  });
  return (0, parameters.combineParameters)(argTypes, userArgTypes);
};

exports.inferArgTypes = inferArgTypes;
});

unwrapExports(inferArgTypes_1);
var inferArgTypes_2 = inferArgTypes_1.inferArgTypes;

var inferControls_1 = createCommonjsModule(function (module, exports) {







Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inferControls = void 0;

var _mapValues = _interopRequireDefault(mapValues_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var inferControl = function inferControl(argType) {
  var type = argType.type;

  if (!type) {
    // console.log('no sbtype', { argType });
    return null;
  }

  switch (type.name) {
    case 'array':
      {
        var value = type.value;

        if ((value === null || value === void 0 ? void 0 : value.name) && ['object', 'other'].includes(value.name)) {
          return {
            type: 'object',
            validator: function validator(obj) {
              return Array.isArray(obj);
            }
          };
        }

        return {
          type: 'array'
        };
      }

    case 'boolean':
      return {
        type: 'boolean'
      };

    case 'string':
      return {
        type: 'text'
      };

    case 'number':
      return {
        type: 'number'
      };

    case 'enum':
      {
        var _ref = type,
            _value = _ref.value;
        return {
          type: 'select',
          options: _value
        };
      }

    case 'function':
    case 'symbol':
    case 'void':
      return null;

    default:
      return {
        type: 'object'
      };
  }
};

var inferControls = function inferControls(context) {
  var _context$parameters = context.parameters,
      __isArgsStory = _context$parameters.__isArgsStory,
      argTypes = _context$parameters.argTypes;
  if (!__isArgsStory) return argTypes;
  var withControls = (0, _mapValues["default"])(argTypes, function (argType) {
    var control = argType && argType.type && inferControl(argType);
    return control ? {
      control: control
    } : undefined;
  });
  return (0, parameters.combineParameters)(withControls, argTypes);
};

exports.inferControls = inferControls;
});

unwrapExports(inferControls_1);
var inferControls_2 = inferControls_1.inferControls;

var story_store = createCommonjsModule(function (module, exports) {

































































Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _memoizerific = _interopRequireDefault(memoizerific);

var _tsDedent = _interopRequireDefault(dist);

var _stable = _interopRequireDefault(stable);

var _mapValues = _interopRequireDefault(mapValues_1);

var _pick = _interopRequireDefault(pick_1);

var _store = _interopRequireDefault(store2);

var _coreEvents = _interopRequireDefault(dist$4);















function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        Story with id ", " already exists in the store!\n\n        Perhaps you added the same story twice, or you have a name collision?\n        Story ids need to be unique -- ensure you aren't using the same names modulo url-sanitization.\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var STORAGE_KEY = '@storybook/preview/store';

var isStoryDocsOnly = function isStoryDocsOnly(parameters) {
  return parameters && parameters.docsOnly;
};

var includeStory = function includeStory(story) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    includeDocsOnly: false
  };

  if (options.includeDocsOnly) {
    return true;
  }

  return !isStoryDocsOnly(story.parameters);
};

var checkGlobals = function checkGlobals(parameters) {
  var globals = parameters.globals,
      globalTypes = parameters.globalTypes;

  if (globals || globalTypes) {
    dist$2.logger.error('Global args/argTypes can only be set globally', JSON.stringify({
      globals: globals,
      globalTypes: globalTypes
    }));
  }
};

var checkStorySort = function checkStorySort(parameters) {
  var options = parameters.options;
  if (options === null || options === void 0 ? void 0 : options.storySort) dist$2.logger.error('The storySort option parameter can only be set globally');
};

var toExtracted = function toExtracted(obj) {
  return Object.entries(obj).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (typeof value === 'function') {
      return acc;
    } // NOTE: We're serializing argTypes twice, at the top-level and also in parameters.
    // We currently rely on useParameters in the manager, so strip out the top-level argTypes
    // instead for performance.


    if (['hooks', 'argTypes'].includes(key)) {
      return acc;
    }

    if (Array.isArray(value)) {
      return Object.assign(acc, _defineProperty({}, key, value.slice().sort()));
    }

    return Object.assign(acc, _defineProperty({}, key, value));
  }, {});
};

var StoryStore = /*#__PURE__*/function () {
  // Keyed on kind name
  // Keyed on storyId
  function StoryStore(params) {
    var _this = this,
        _store$session$get;

    _classCallCheck(this, StoryStore);

    this._error = void 0;
    this._channel = void 0;
    this._configuring = void 0;
    this._globals = void 0;
    this._globalMetadata = void 0;
    this._kinds = void 0;
    this._stories = void 0;
    this._argTypesEnhancers = void 0;
    this._selectionSpecifier = void 0;
    this._selection = void 0;

    this.remove = function (id) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$allowUnsafe = _ref3.allowUnsafe,
          allowUnsafe = _ref3$allowUnsafe === void 0 ? false : _ref3$allowUnsafe;

      if (!_this._configuring && !allowUnsafe) throw new Error('Cannot remove a story when not configuring, see https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-store-immutable-outside-of-configuration');
      var _stories = _this._stories;
      var story = _stories[id];
      delete _stories[id];
      if (story) story.hooks.clean();
    };

    this.fromId = function (id) {
      try {
        var data = _this._stories[id];

        if (!data || !data.getDecorated) {
          return null;
        }

        return _this.mergeAdditionalDataToStory(data);
      } catch (e) {
        dist$2.logger.warn('failed to get story:', _this._stories);

        dist$2.logger.error(e);

        return null;
      }
    };

    this.setError = function (err) {
      _this._error = err;
    };

    this.getError = function () {
      return _this._error;
    };

    this.getSelection = function () {
      return _this._selection;
    };

    this.getDataForManager = function () {
      return {
        v: 2,
        globalParameters: _this._globalMetadata.parameters,
        globals: _this._globals,
        error: _this.getError(),
        kindParameters: (0, _mapValues["default"])(_this._kinds, function (metadata) {
          return metadata.parameters;
        }),
        stories: _this.extract({
          includeDocsOnly: true,
          normalizeParameters: true
        })
      };
    };

    this.getStoriesJsonData = function () {
      var value = _this.getDataForManager();

      var allowed = ['fileName', 'docsOnly', 'framework', '__id', '__isArgsStory'];
      return {
        v: 2,
        globalParameters: (0, _pick["default"])(value.globalParameters, allowed),
        kindParameters: (0, _mapValues["default"])(value.kindParameters, function (v) {
          return (0, _pick["default"])(v, allowed);
        }),
        stories: (0, _mapValues["default"])(value.stories, function (v) {
          return Object.assign(Object.assign({}, (0, _pick["default"])(v, ['id', 'name', 'kind', 'story'])), {}, {
            parameters: (0, _pick["default"])(v.parameters, allowed)
          });
        })
      };
    };

    this.pushToManager = function () {
      if (_this._channel) {
        // send to the parent frame.
        _this._channel.emit(_coreEvents["default"].SET_STORIES, _this.getDataForManager());
      }
    };

    this.getStoriesForKind = function (kind) {
      return _this.raw().filter(function (story) {
        return story.kind === kind;
      });
    };

    // Assume we are configuring until we hear otherwise
    this._configuring = true; // We store global args in session storage. Note that when we finish
    // configuring below we will ensure we only use values here that make sense

    this._globals = ((_store$session$get = _store["default"].session.get(STORAGE_KEY)) === null || _store$session$get === void 0 ? void 0 : _store$session$get.globals) || {};
    this._globalMetadata = {
      parameters: {},
      decorators: []
    };
    this._kinds = {};
    this._stories = {};
    this._argTypesEnhancers = [ensureArgTypes_1.ensureArgTypes];
    this._error = undefined;
    this._channel = params.channel;
    this.setupListeners();
  }

  _createClass(StoryStore, [{
    key: "setupListeners",
    value: function setupListeners() {
      var _this2 = this;

      // Channel can be null in StoryShots
      if (!this._channel) return;

      this._channel.on(_coreEvents["default"].SET_CURRENT_STORY, function (_ref4) {
        var storyId = _ref4.storyId,
            viewMode = _ref4.viewMode;
        return _this2.setSelection({
          storyId: storyId,
          viewMode: viewMode
        });
      });

      this._channel.on(_coreEvents["default"].UPDATE_STORY_ARGS, function (_ref5) {
        var storyId = _ref5.storyId,
            updatedArgs = _ref5.updatedArgs;
        return _this2.updateStoryArgs(storyId, updatedArgs);
      });

      this._channel.on(_coreEvents["default"].RESET_STORY_ARGS, function (_ref6) {
        var storyId = _ref6.storyId,
            argNames = _ref6.argNames;
        return _this2.resetStoryArgs(storyId, argNames);
      });

      this._channel.on(_coreEvents["default"].UPDATE_GLOBALS, function (_ref7) {
        var globals = _ref7.globals;
        return _this2.updateGlobals(globals);
      });
    }
  }, {
    key: "startConfiguring",
    value: function startConfiguring() {
      this._configuring = true;
    }
  }, {
    key: "storeGlobals",
    value: function storeGlobals() {
      // Store the global args on the session
      _store["default"].session.set(STORAGE_KEY, {
        globals: this._globals
      });
    }
  }, {
    key: "finishConfiguring",
    value: function finishConfiguring() {
      this._configuring = false;
      var _this$_globalMetadata = this._globalMetadata.parameters,
          _this$_globalMetadata2 = _this$_globalMetadata.globals,
          initialGlobals = _this$_globalMetadata2 === void 0 ? {} : _this$_globalMetadata2,
          _this$_globalMetadata3 = _this$_globalMetadata.globalTypes,
          globalTypes = _this$_globalMetadata3 === void 0 ? {} : _this$_globalMetadata3;
      var defaultGlobals = Object.entries(globalTypes).reduce(function (acc, _ref8) {
        var _ref9 = _slicedToArray(_ref8, 2),
            arg = _ref9[0],
            defaultValue = _ref9[1].defaultValue;

        if (defaultValue) acc[arg] = defaultValue;
        return acc;
      }, {});
      var allowedGlobals = new Set([].concat(_toConsumableArray(Object.keys(initialGlobals)), _toConsumableArray(Object.keys(globalTypes)))); // To deal with HMR & persistence, we consider the previous value of global args, and:
      //   1. Remove any keys that are not in the new parameter
      //   2. Preference any keys that were already set
      //   3. Use any new keys from the new parameter

      this._globals = Object.entries(this._globals || {}).reduce(function (acc, _ref10) {
        var _ref11 = _slicedToArray(_ref10, 2),
            key = _ref11[0],
            previousValue = _ref11[1];

        if (allowedGlobals.has(key)) acc[key] = previousValue;
        return acc;
      }, Object.assign(Object.assign({}, defaultGlobals), initialGlobals));
      this.storeGlobals(); // Set the current selection based on the current selection specifier, if selection is not yet set

      var stories = this.sortedStories();
      var foundStory;

      if (this._selectionSpecifier && !this._selection) {
        var _this$_selectionSpeci = this._selectionSpecifier,
            storySpecifier = _this$_selectionSpeci.storySpecifier,
            viewMode = _this$_selectionSpeci.viewMode;

        if (storySpecifier === '*') {
          // '*' means select the first story. If there is none, we have no selection.
          var _stories2 = _slicedToArray(stories, 1);

          foundStory = _stories2[0];
        } else if (typeof storySpecifier === 'string') {
          // Find the story with the exact id that matches the specifier (see #11571)
          foundStory = Object.values(stories).find(function (s) {
            return s.id === storySpecifier;
          });

          if (!foundStory) {
            // Fallback to the first story that starts with the specifier
            foundStory = Object.values(stories).find(function (s) {
              return s.id.startsWith(storySpecifier);
            });
          }
        } else {
          // Try and find a story matching the name/kind, setting no selection if they don't exist.
          var name = storySpecifier.name,
              kind = storySpecifier.kind;
          foundStory = this.getRawStory(kind, name);
        }

        if (foundStory) {
          this.setSelection({
            storyId: foundStory.id,
            viewMode: viewMode
          });

          this._channel.emit(_coreEvents["default"].STORY_SPECIFIED, {
            storyId: foundStory.id,
            viewMode: viewMode
          });
        }
      } // If we didn't find a story matching the specifier, we always want to emit CURRENT_STORY_WAS_SET anyway
      // in order to tell the StoryRenderer to render something (a "missing story" view)


      if (!foundStory && this._channel) {
        this._channel.emit(_coreEvents["default"].CURRENT_STORY_WAS_SET, this._selection);
      }

      this.pushToManager();
    }
  }, {
    key: "addGlobalMetadata",
    value: function addGlobalMetadata(_ref12) {
      var _this3 = this;

      var parameters$1 = _ref12.parameters,
          decorators = _ref12.decorators;

      if (parameters$1) {
        var args = parameters$1.args,
            argTypes = parameters$1.argTypes;
        if (args || argTypes) dist$2.logger.warn('Found args/argTypes in global parameters.', JSON.stringify({
          args: args,
          argTypes: argTypes
        }));
      }

      var globalParameters = this._globalMetadata.parameters;
      this._globalMetadata.parameters = (0, parameters.combineParameters)(globalParameters, parameters$1);
      decorators.forEach(function (decorator) {
        if (_this3._globalMetadata.decorators.includes(decorator)) {
          dist$2.logger.warn('You tried to add a duplicate decorator, this is not expected', decorator);
        } else {
          _this3._globalMetadata.decorators.push(decorator);
        }
      });
    }
  }, {
    key: "clearGlobalDecorators",
    value: function clearGlobalDecorators() {
      this._globalMetadata.decorators = [];
    }
  }, {
    key: "ensureKind",
    value: function ensureKind(kind) {
      if (!this._kinds[kind]) {
        this._kinds[kind] = {
          order: Object.keys(this._kinds).length,
          parameters: {},
          decorators: []
        };
      }
    }
  }, {
    key: "addKindMetadata",
    value: function addKindMetadata(kind, _ref13) {
      var _this$_kinds$kind$dec;

      var parameters$1 = _ref13.parameters,
          decorators = _ref13.decorators;
      this.ensureKind(kind);

      if (parameters$1) {
        checkGlobals(parameters$1);
        checkStorySort(parameters$1);
      }

      this._kinds[kind].parameters = (0, parameters.combineParameters)(this._kinds[kind].parameters, parameters$1);

      (_this$_kinds$kind$dec = this._kinds[kind].decorators).push.apply(_this$_kinds$kind$dec, _toConsumableArray(decorators));
    }
  }, {
    key: "addArgTypesEnhancer",
    value: function addArgTypesEnhancer(argTypesEnhancer) {
      if (Object.keys(this._stories).length > 0) throw new Error('Cannot add a parameter enhancer to the store after a story has been added.');

      this._argTypesEnhancers.push(argTypesEnhancer);
    } // Combine the global, kind & story parameters of a story

  }, {
    key: "combineStoryParameters",
    value: function combineStoryParameters(parameters$1, kind) {
      return (0, parameters.combineParameters)(this._globalMetadata.parameters, this._kinds[kind].parameters, parameters$1);
    }
  }, {
    key: "addStory",
    value: function addStory(_ref14, _ref15) {
      var _this4 = this;

      var id = _ref14.id,
          kind = _ref14.kind,
          name = _ref14.name,
          original = _ref14.storyFn,
          _ref14$parameters = _ref14.parameters,
          storyParameters = _ref14$parameters === void 0 ? {} : _ref14$parameters,
          _ref14$decorators = _ref14.decorators,
          storyDecorators = _ref14$decorators === void 0 ? [] : _ref14$decorators;
      var applyDecorators = _ref15.applyDecorators,
          _ref15$allowUnsafe = _ref15.allowUnsafe,
          allowUnsafe = _ref15$allowUnsafe === void 0 ? false : _ref15$allowUnsafe;
      if (!this._configuring && !allowUnsafe) throw new Error('Cannot add a story when not configuring, see https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-store-immutable-outside-of-configuration');

      if (storyParameters) {
        checkGlobals(storyParameters);
        checkStorySort(storyParameters);
      }

      var _stories = this._stories;

      if (_stories[id]) {
        dist$2.logger.warn((0, _tsDedent["default"])(_templateObject(), id));
      }

      var identification = {
        id: id,
        kind: kind,
        name: name,
        story: name // legacy

      }; // immutable original storyFn

      var getOriginal = function getOriginal() {
        return original;
      };

      this.ensureKind(kind);
      var kindMetadata = this._kinds[kind];
      var decorators = [].concat(_toConsumableArray(storyDecorators), _toConsumableArray(kindMetadata.decorators), _toConsumableArray(this._globalMetadata.decorators));

      var finalStoryFn = function finalStoryFn(context) {
        var _context$parameters$p = context.parameters.passArgsFirst,
            passArgsFirst = _context$parameters$p === void 0 ? true : _context$parameters$p;
        return passArgsFirst ? original(context.args, context) : original(context);
      }; // lazily decorate the story when it's loaded


      var getDecorated = (0, _memoizerific["default"])(1)(function () {
        return applyDecorators(finalStoryFn, decorators);
      });
      var hooks = new hooks$1.HooksContext(); // We need the combined parameters now in order to calculate argTypes, but we won't keep them

      var combinedParameters = this.combineStoryParameters(storyParameters, kind); // We are going to make various UI changes in both the manager and the preview
      // based on whether it's an "args story", i.e. whether the story accepts a first
      // argument which is an `Args` object. Here we store it as a parameter on every story
      // for convenience, but we preface it with `__` to denote that it's an internal API
      // and that users probably shouldn't look at it.

      var _combinedParameters$p = combinedParameters.passArgsFirst,
          passArgsFirst = _combinedParameters$p === void 0 ? true : _combinedParameters$p;

      var __isArgsStory = passArgsFirst && original.length > 0; // run at the end


      this._argTypesEnhancers.push(inferArgTypes_1.inferArgTypes);

      this._argTypesEnhancers.push(inferControls_1.inferControls);

      var _this$_argTypesEnhanc = this._argTypesEnhancers.reduce(function (accumulatedParameters, enhancer) {
        return Object.assign(Object.assign({}, accumulatedParameters), {}, {
          argTypes: enhancer(Object.assign(Object.assign({}, identification), {}, {
            storyFn: original,
            parameters: accumulatedParameters,
            args: {},
            argTypes: {},
            globals: {}
          }))
        });
      }, Object.assign({
        __isArgsStory: __isArgsStory
      }, combinedParameters)),
          _this$_argTypesEnhanc2 = _this$_argTypesEnhanc.argTypes,
          argTypes = _this$_argTypesEnhanc2 === void 0 ? {} : _this$_argTypesEnhanc2;

      var storyParametersWithArgTypes = Object.assign(Object.assign({}, storyParameters), {}, {
        argTypes: argTypes,
        __isArgsStory: __isArgsStory
      });

      var storyFn = function storyFn(runtimeContext) {
        return getDecorated()(Object.assign(Object.assign(Object.assign({}, identification), runtimeContext), {}, {
          // Calculate "combined" parameters at render time (NOTE: for perf we could just use combinedParameters from above?)
          parameters: _this4.combineStoryParameters(storyParametersWithArgTypes, kind),
          hooks: hooks,
          args: _stories[id].args,
          argTypes: argTypes,
          globals: _this4._globals
        }));
      }; // Pull out parameters.args.$ || .argTypes.$.defaultValue into initialArgs


      var passedArgs = combinedParameters.args;
      var defaultArgs = Object.entries(argTypes).reduce(function (acc, _ref16) {
        var _ref17 = _slicedToArray(_ref16, 2),
            arg = _ref17[0],
            defaultValue = _ref17[1].defaultValue;

        if (defaultValue) acc[arg] = defaultValue;
        return acc;
      }, {});
      var initialArgs = Object.assign(Object.assign({}, defaultArgs), passedArgs);
      _stories[id] = Object.assign(Object.assign({}, identification), {}, {
        hooks: hooks,
        getDecorated: getDecorated,
        getOriginal: getOriginal,
        storyFn: storyFn,
        parameters: storyParametersWithArgTypes,
        args: initialArgs,
        argTypes: argTypes,
        initialArgs: initialArgs
      });
    }
  }, {
    key: "removeStoryKind",
    value: function removeStoryKind(kind) {
      var _ref18 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref18$allowUnsafe = _ref18.allowUnsafe,
          allowUnsafe = _ref18$allowUnsafe === void 0 ? false : _ref18$allowUnsafe;

      if (!this._configuring && !allowUnsafe) throw new Error('Cannot remove a kind when not configuring, see https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-store-immutable-outside-of-configuration');
      if (!this._kinds[kind]) return;
      this._kinds[kind].parameters = {};
      this._kinds[kind].decorators = [];
      this.cleanHooksForKind(kind);
      this._stories = Object.entries(this._stories).reduce(function (acc, _ref19) {
        var _ref20 = _slicedToArray(_ref19, 2),
            id = _ref20[0],
            story = _ref20[1];

        if (story.kind !== kind) acc[id] = story;
        return acc;
      }, {});
    }
  }, {
    key: "updateGlobals",
    value: function updateGlobals(newGlobals) {
      this._globals = Object.assign(Object.assign({}, this._globals), newGlobals);
      this.storeGlobals();

      this._channel.emit(_coreEvents["default"].GLOBALS_UPDATED, {
        globals: this._globals
      });
    }
  }, {
    key: "updateStoryArgs",
    value: function updateStoryArgs(id, newArgs) {
      if (!this._stories[id]) throw new Error("No story for id ".concat(id));
      var args = this._stories[id].args;
      this._stories[id].args = Object.assign(Object.assign({}, args), newArgs);

      this._channel.emit(_coreEvents["default"].STORY_ARGS_UPDATED, {
        storyId: id,
        args: this._stories[id].args
      });
    }
  }, {
    key: "resetStoryArgs",
    value: function resetStoryArgs(id, argNames) {
      var _this5 = this;

      if (!this._stories[id]) throw new Error("No story for id ".concat(id));
      var _this$_stories$id = this._stories[id],
          args = _this$_stories$id.args,
          initialArgs = _this$_stories$id.initialArgs;
      this._stories[id].args = Object.assign({}, args); // Make a copy to avoid problems

      (argNames || Object.keys(args)).forEach(function (name) {
        // We overwrite like this to ensure we can reset to falsey values
        _this5._stories[id].args[name] = initialArgs[name];
      });

      this._channel.emit(_coreEvents["default"].STORY_ARGS_UPDATED, {
        storyId: id,
        args: this._stories[id].args
      });
    }
  }, {
    key: "raw",
    value: function raw(options) {
      var _this6 = this;

      return Object.values(this._stories).filter(function (i) {
        return !!i.getDecorated;
      }).filter(function (i) {
        return includeStory(i, options);
      }).map(function (i) {
        return _this6.mergeAdditionalDataToStory(i);
      });
    }
  }, {
    key: "sortedStories",
    value: function sortedStories() {
      var _this$_globalMetadata4,
          _this$_globalMetadata5,
          _this7 = this;

      // NOTE: when kinds are HMR'ed they get temporarily removed from the `_stories` array
      // and thus lose order. However `_kinds[x].order` preservers the original load order
      var kindOrder = (0, _mapValues["default"])(this._kinds, function (_ref21) {
        var order = _ref21.order;
        return order;
      });
      var storySortParameter = (_this$_globalMetadata4 = this._globalMetadata.parameters) === null || _this$_globalMetadata4 === void 0 ? void 0 : (_this$_globalMetadata5 = _this$_globalMetadata4.options) === null || _this$_globalMetadata5 === void 0 ? void 0 : _this$_globalMetadata5.storySort;
      var storyEntries = Object.entries(this._stories); // Add the kind parameters and global parameters to each entry

      var stories = storyEntries.map(function (_ref22) {
        var _ref23 = _slicedToArray(_ref22, 2),
            id = _ref23[0],
            story = _ref23[1];

        return [id, story, _this7._kinds[story.kind].parameters, _this7._globalMetadata.parameters];
      });

      if (storySortParameter) {
        var sortFn;

        if (typeof storySortParameter === 'function') {
          sortFn = storySortParameter;
        } else {
          sortFn = (0, storySort_1.storySort)(storySortParameter);
        }

        _stable["default"].inplace(stories, sortFn);
      } else {
        _stable["default"].inplace(stories, function (s1, s2) {
          return kindOrder[s1[1].kind] - kindOrder[s2[1].kind];
        });
      }

      return stories.map(function (_ref24) {
        var _ref25 = _slicedToArray(_ref24, 2),
            id = _ref25[0],
            s = _ref25[1];

        return s;
      });
    }
  }, {
    key: "extract",
    value: function extract() {
      var _this8 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var stories = this.sortedStories(); // removes function values from all stories so they are safe to transport over the channel

      return stories.reduce(function (acc, story) {
        if (!includeStory(story, options)) return acc;
        var extracted = toExtracted(story);
        if (options.normalizeParameters) return Object.assign(acc, _defineProperty({}, story.id, extracted));
        var _ref26 = extracted,
            parameters = _ref26.parameters,
            kind = _ref26.kind;
        return Object.assign(acc, _defineProperty({}, story.id, Object.assign(extracted, {
          parameters: _this8.combineStoryParameters(parameters, kind)
        })));
      }, {});
    }
  }, {
    key: "clearError",
    value: function clearError() {
      this._error = null;
    }
  }, {
    key: "setSelectionSpecifier",
    value: function setSelectionSpecifier(selectionSpecifier) {
      this._selectionSpecifier = selectionSpecifier;
    }
  }, {
    key: "setSelection",
    value: function setSelection(selection) {
      this._selection = selection;

      if (this._channel) {
        this._channel.emit(_coreEvents["default"].CURRENT_STORY_WAS_SET, this._selection);
      }
    }
  }, {
    key: "getStoryKinds",
    value: function getStoryKinds() {
      return Array.from(new Set(this.raw().map(function (s) {
        return s.kind;
      })));
    }
  }, {
    key: "getRawStory",
    value: function getRawStory(kind, name) {
      return this.getStoriesForKind(kind).find(function (s) {
        return s.name === name;
      });
    }
  }, {
    key: "cleanHooks",
    value: function cleanHooks(id) {
      if (this._stories[id]) {
        this._stories[id].hooks.clean();
      }
    }
  }, {
    key: "cleanHooksForKind",
    value: function cleanHooksForKind(kind) {
      var _this9 = this;

      this.getStoriesForKind(kind).map(function (story) {
        return _this9.cleanHooks(story.id);
      });
    } // This API is a re-implementation of Storybook's original getStorybook() API.
    // As such it may not behave *exactly* the same, but aims to. Some notes:
    //  - It is *NOT* sorted by the user's sort function, but remains sorted in "insertion order"
    //  - It does not include docs-only stories

  }, {
    key: "getStorybook",
    value: function getStorybook() {
      var _this10 = this;

      return Object.values(this.raw().reduce(function (kinds, story) {
        if (!includeStory(story)) return kinds;
        var kind = story.kind,
            name = story.name,
            storyFn = story.storyFn,
            fileName = story.parameters.fileName; // eslint-disable-next-line no-param-reassign

        if (!kinds[kind]) kinds[kind] = {
          kind: kind,
          fileName: fileName,
          stories: []
        };
        kinds[kind].stories.push({
          name: name,
          render: storyFn
        });
        return kinds;
      }, {})).sort(function (s1, s2) {
        return _this10._kinds[s1.kind].order - _this10._kinds[s2.kind].order;
      });
    }
  }, {
    key: "mergeAdditionalDataToStory",
    value: function mergeAdditionalDataToStory(story) {
      return Object.assign(Object.assign({}, story), {}, {
        parameters: this.combineStoryParameters(story.parameters, story.kind),
        globals: this._globals
      });
    }
  }]);

  return StoryStore;
}();

exports["default"] = StoryStore;
});

unwrapExports(story_store);

var config_api = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-underscore-dangle: 0 */
var ConfigApi = function ConfigApi(_ref) {
  var _this = this;

  var storyStore = _ref.storyStore;

  _classCallCheck(this, ConfigApi);

  this._storyStore = void 0;

  this.configure = function (loaders, module) {

    _this._storyStore.startConfiguring();

    try {
      loaders();

      _this._storyStore.clearError();
    } catch (err) {
      _this._storyStore.setError(err);
    }

    _this._storyStore.finishConfiguring();
  };

  this._storyStore = storyStore;
};

exports["default"] = ConfigApi;
});

unwrapExports(config_api);

// @@match logic
fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regexpExecAbstract(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regexpExecAbstract(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

var pathToId_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = pathToId;

function pathToId(path) {
  var match = (path || '').match(/^\/story\/(.+)/);

  if (!match) {
    throw new Error("Invalid path '".concat(path, "',  must start with '/story/'"));
  }

  return match[1];
}
});

unwrapExports(pathToId_1);

// `SameValue` abstract operation
// https://tc39.github.io/ecma262/#sec-samevalue
var sameValue = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

// @@search logic
fixRegexpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regexpExecAbstract(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});

var has$2 = Object.prototype.hasOwnProperty;
var isArray$2 = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray$2(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray$2(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has$2.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray$2(target) && !isArray$2(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray$2(target) && isArray$2(source)) {
        source.forEach(function (item, i) {
            if (has$2.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has$2.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray$2(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

var utils = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

var replace = String.prototype.replace;
var percentTwenties = /%20/g;



var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

var formats = utils.assign(
    {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        }
    },
    Format
);

var has$3 = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray$3 = Array.isArray;
var push$1 = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push$1.apply(arr, isArray$3(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray$3(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        }).join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray$3(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        var value = obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray$3(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly,
            charset
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has$3.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray$3(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

var stringify_1 = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray$3(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};

var has$4 = Object.prototype.hasOwnProperty;
var isArray$4 = Array.isArray;

var defaults$1 = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults$1.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults$1.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults$1.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray$4(val) ? [val] : val;
        }

        if (has$4.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj; // eslint-disable-line no-param-reassign
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has$4.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has$4.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults$1;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults$1.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults$1.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults$1.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults$1.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults$1.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults$1.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults$1.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults$1.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults$1.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults$1.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults$1.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults$1.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults$1.strictNullHandling
    };
};

var parse = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};

var lib = {
    formats: formats,
    parse: parse,
    stringify: stringify_1
};

var queryparams = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQueryParam = exports.getQueryParams = void 0;



var _qs = _interopRequireDefault(lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getQueryParams = function getQueryParams() {
  // document.location is not defined in react-native
  if (window_1.document && window_1.document.location && window_1.document.location.search) {
    return _qs["default"].parse(window_1.document.location.search, {
      ignoreQueryPrefix: true
    });
  }

  return {};
};

exports.getQueryParams = getQueryParams;

var getQueryParam = function getQueryParam(key) {
  var params = getQueryParams();
  return params[key];
};

exports.getQueryParam = getQueryParam;
});

unwrapExports(queryparams);
var queryparams_1 = queryparams.getQueryParam;
var queryparams_2 = queryparams.getQueryParams;

var types = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "StoryApi", {
  enumerable: true,
  get: function get() {
    return public_api.StoryApi;
  }
});
Object.defineProperty(exports, "DecoratorFunction", {
  enumerable: true,
  get: function get() {
    return public_api.DecoratorFunction;
  }
});
});

unwrapExports(types);

var dist$6 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ClientApi: true,
  addDecorator: true,
  addParameters: true,
  addArgTypesEnhancer: true,
  defaultDecorateStory: true,
  combineParameters: true,
  StoryStore: true,
  ConfigApi: true,
  pathToId: true,
  getQueryParams: true,
  getQueryParam: true
};
Object.defineProperty(exports, "ClientApi", {
  enumerable: true,
  get: function get() {
    return _client_api["default"];
  }
});
Object.defineProperty(exports, "addDecorator", {
  enumerable: true,
  get: function get() {
    return _client_api.addDecorator;
  }
});
Object.defineProperty(exports, "addParameters", {
  enumerable: true,
  get: function get() {
    return _client_api.addParameters;
  }
});
Object.defineProperty(exports, "addArgTypesEnhancer", {
  enumerable: true,
  get: function get() {
    return _client_api.addArgTypesEnhancer;
  }
});
Object.defineProperty(exports, "defaultDecorateStory", {
  enumerable: true,
  get: function get() {
    return decorators.defaultDecorateStory;
  }
});
Object.defineProperty(exports, "combineParameters", {
  enumerable: true,
  get: function get() {
    return parameters.combineParameters;
  }
});
Object.defineProperty(exports, "StoryStore", {
  enumerable: true,
  get: function get() {
    return _story_store["default"];
  }
});
Object.defineProperty(exports, "ConfigApi", {
  enumerable: true,
  get: function get() {
    return _config_api["default"];
  }
});
Object.defineProperty(exports, "pathToId", {
  enumerable: true,
  get: function get() {
    return _pathToId["default"];
  }
});
Object.defineProperty(exports, "getQueryParams", {
  enumerable: true,
  get: function get() {
    return queryparams.getQueryParams;
  }
});
Object.defineProperty(exports, "getQueryParam", {
  enumerable: true,
  get: function get() {
    return queryparams.getQueryParam;
  }
});

var _client_api = _interopRequireWildcard(client_api);





Object.keys(parameters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return parameters[key];
    }
  });
});

var _story_store = _interopRequireDefault(story_store);

var _config_api = _interopRequireDefault(config_api);

var _pathToId = _interopRequireDefault(pathToId_1);





Object.keys(hooks$1).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return hooks$1[key];
    }
  });
});



Object.keys(types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return types[key];
    }
  });
});



Object.keys(inferControls_1).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return inferControls_1[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
});

unwrapExports(dist$6);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root.Date.now();
};

var now_1 = now;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber_1(wait) || 0;
  if (isObject_1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax$1(toNumber_1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now_1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now_1());
  }

  function debounced() {
    var time = now_1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce;

var $some = arrayIteration.some;



var STRICT_METHOD$5 = arrayMethodIsStrict('some');
var USES_TO_LENGTH$9 = arrayMethodUsesToLength('some');

// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
_export({ target: 'Array', proto: true, forced: !STRICT_METHOD$5 || !USES_TO_LENGTH$9 }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var slice$1 = [].slice;
var MSIE = /MSIE .\./.test(engineUserAgent); // <- dirty ie9- check

var wrap$1 = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice$1.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
_export({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap$1(global_1.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap$1(global_1.setInterval)
});

/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */

/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

var escapeHtml_1 = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}

var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH$a = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max$3 = Math.max;
var min$5 = Math.min;
var MAX_SAFE_INTEGER$3 = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3 || !USES_TO_LENGTH$a }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min$5(max$3(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER$3) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});

var KnobStore_1 = createCommonjsModule(function (module, exports) {

















Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var callArg = function callArg(fn) {
  return fn();
};

var callAll = function callAll(fns) {
  return fns.forEach(callArg);
};

var KnobStore = /*#__PURE__*/function () {
  function KnobStore() {
    _classCallCheck(this, KnobStore);

    this.store = {};
    this.callbacks = [];
    this.timer = void 0;
  }

  _createClass(KnobStore, [{
    key: "has",
    value: function has(key) {
      return this.store[key] !== undefined;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.store[key] = Object.assign(Object.assign({}, value), {}, {
        used: true,
        groupId: value.groupId
      }); // debounce the execution of the callbacks for 50 milliseconds

      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(callAll, 50, this.callbacks);
    }
  }, {
    key: "update",
    value: function update(key, options) {
      this.store[key] = Object.assign(Object.assign({}, this.store[key]), options);
    }
  }, {
    key: "get",
    value: function get(key) {
      var knob = this.store[key];

      if (knob) {
        knob.used = true;
      }

      return knob;
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this.store;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.store = {};
    }
  }, {
    key: "markAllUnused",
    value: function markAllUnused() {
      var _this = this;

      Object.keys(this.store).forEach(function (knobName) {
        _this.store[knobName].used = false;
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(cb) {
      this.callbacks.push(cb);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(cb) {
      var index = this.callbacks.indexOf(cb);
      this.callbacks.splice(index, 1);
    }
  }]);

  return KnobStore;
}();

exports["default"] = KnobStore;
});

unwrapExports(KnobStore_1);

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$5 = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod$5(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod$5(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod$5(3)
};

var trim = stringTrim.trim;


var $parseFloat = global_1.parseFloat;
var FORCED$4 = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
var numberParseFloat = FORCED$4 ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
_export({ global: true, forced: parseFloat != numberParseFloat }, {
  parseFloat: numberParseFloat
});

var converters_1 = createCommonjsModule(function (module, exports) {











Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deserializers = exports.serializers = exports.converters = void 0;

var unconvertable = function unconvertable() {
  return undefined;
};

var converters = {
  jsonParse: function jsonParse(value) {
    return JSON.parse(value);
  },
  jsonStringify: function jsonStringify(value) {
    return JSON.stringify(value);
  },
  simple: function simple(value) {
    return value;
  },
  stringifyIfSet: function stringifyIfSet(value) {
    return value === null || value === undefined ? '' : String(value);
  },
  stringifyIfTruthy: function stringifyIfTruthy(value) {
    return value ? String(value) : null;
  },
  toArray: function toArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    return value.split(',');
  },
  toBoolean: function toBoolean(value) {
    return value === 'true';
  },
  toDate: function toDate(value) {
    return new Date(value).getTime() || new Date().getTime();
  },
  toFloat: function toFloat(value) {
    return value === '' ? null : parseFloat(value);
  }
};
exports.converters = converters;
var serializers = {
  array: converters.simple,
  "boolean": converters.stringifyIfTruthy,
  button: unconvertable,
  checkbox: converters.simple,
  color: converters.simple,
  date: converters.toDate,
  files: unconvertable,
  number: converters.stringifyIfSet,
  object: converters.jsonStringify,
  options: converters.simple,
  radios: converters.simple,
  select: converters.simple,
  text: converters.simple
};
exports.serializers = serializers;
var deserializers = {
  array: converters.toArray,
  "boolean": converters.toBoolean,
  button: unconvertable,
  checkbox: converters.simple,
  color: converters.simple,
  date: converters.toDate,
  files: unconvertable,
  number: converters.toFloat,
  object: converters.jsonParse,
  options: converters.simple,
  radios: converters.simple,
  select: converters.simple,
  text: converters.simple
};
exports.deserializers = deserializers;
});

unwrapExports(converters_1);
var converters_2 = converters_1.deserializers;
var converters_3 = converters_1.serializers;
var converters_4 = converters_1.converters;

var KnobManager_1 = createCommonjsModule(function (module, exports) {























































Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;



var _escapeHtml = _interopRequireDefault(escapeHtml_1);



var _KnobStore = _interopRequireDefault(KnobStore_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var knobValuesFromUrl = Object.entries((0, dist$6.getQueryParams)()).reduce(function (acc, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      k = _ref2[0],
      v = _ref2[1];

  if (k.includes('knob-')) {
    return Object.assign(Object.assign({}, acc), {}, _defineProperty({}, k.replace('knob-', ''), v));
  }

  return acc;
}, {}); // This is used by _mayCallChannel to determine how long to wait to before triggering a panel update

var PANEL_UPDATE_INTERVAL = 400;

function escapeStrings(obj) {
  if (typeof obj === 'string') {
    return (0, _escapeHtml["default"])(obj);
  }

  if (obj == null || _typeof(obj) !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    var newArray = obj.map(escapeStrings);
    var didChange = newArray.some(function (newValue, key) {
      return newValue !== obj[key];
    });
    return didChange ? newArray : obj;
  }

  return Object.entries(obj).reduce(function (acc, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        oldValue = _ref4[1];

    var newValue = escapeStrings(oldValue);
    return newValue === oldValue ? acc : Object.assign(Object.assign({}, acc), {}, _defineProperty({}, key, newValue));
  }, obj);
}

var KnobManager = /*#__PURE__*/function () {
  function KnobManager() {
    _classCallCheck(this, KnobManager);

    this.knobStore = new _KnobStore["default"]();
    this.channel = void 0;
    this.options = {};
    this.calling = false;
  }

  _createClass(KnobManager, [{
    key: "setChannel",
    value: function setChannel(channel) {
      this.channel = channel;
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this.options = options;
    }
  }, {
    key: "getKnobValue",
    value: function getKnobValue(_ref5) {
      var value = _ref5.value;
      return this.options.escapeHTML ? escapeStrings(value) : value;
    }
  }, {
    key: "knob",
    value: function knob(name, options) {
      this._mayCallChannel();

      var knobName = options.groupId ? "".concat(name, "_").concat(options.groupId) : name;
      var knobStore = this.knobStore;
      var existingKnob = knobStore.get(knobName); // We need to return the value set by the knob editor via this.
      // Normally the knobs are reset and so re-use is safe as long as the types match
      // when in storyshots, though the change event isn't called and so the knobs aren't reset, making this code fail
      // so always create a new knob when in storyshots

      if (existingKnob && options.type === existingKnob.type && window_1.navigator && ( // userAgent is not set in react-native
      !window_1.navigator.userAgent || !window_1.navigator.userAgent.includes('jsdom'))) {
        var value = options.value,
            restOptions = _objectWithoutProperties(options, ["value"]);

        knobStore.update(knobName, restOptions);
        return this.getKnobValue(existingKnob);
      }

      var knobInfo = Object.assign(Object.assign({}, options), {}, {
        name: knobName,
        label: name
      });

      if (knobValuesFromUrl[knobName]) {
        var _value = converters_1.deserializers[options.type](knobValuesFromUrl[knobName]);

        knobInfo.defaultValue = _value;
        knobInfo.value = _value;
        delete knobValuesFromUrl[knobName];
      } else {
        knobInfo.defaultValue = options.value;
      }

      knobStore.set(knobName, knobInfo);
      return this.getKnobValue(knobStore.get(knobName));
    }
  }, {
    key: "_mayCallChannel",
    value: function _mayCallChannel() {
      var _this = this;

      // Re rendering of the story may cause changes to the knobStore. Some new knobs maybe added and
      // Some knobs may go unused. So we need to update the panel accordingly. For example remove the
      // unused knobs from the panel. This function sends the `setKnobs` message to the channel
      // triggering a panel re-render.
      if (!this.channel) {
        // to prevent call to undefined channel and therefore throwing TypeError
        return;
      }

      if (this.calling) {
        // If a call to channel has already registered ignore this call.
        // Once the previous call is completed all the changes to knobStore including the one that
        // triggered this, will be added to the panel.
        // This avoids emitting to the channel within very short periods of time.
        return;
      }

      this.calling = true;
      var timestamp = +new Date();
      setTimeout(function () {
        _this.calling = false; // emit to the channel and trigger a panel re-render

        if (_this.channel) _this.channel.emit(shared$1.SET, {
          knobs: _this.knobStore.getAll(),
          timestamp: timestamp
        });
      }, PANEL_UPDATE_INTERVAL);
    }
  }]);

  return KnobManager;
}();

exports["default"] = KnobManager;
});

unwrapExports(KnobManager_1);

var registerKnobs_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerKnobs = registerKnobs;
exports.manager = void 0;

var _addons = _interopRequireDefault(public_api);





var _debounce = _interopRequireDefault(debounce_1);

var _KnobManager = _interopRequireDefault(KnobManager_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var manager = new _KnobManager["default"]();
exports.manager = manager;
var knobStore = manager.knobStore;
var COMPONENT_FORCE_RENDER_DEBOUNCE_DELAY_MS = 325;

function forceReRender() {
  _addons["default"].getChannel().emit(dist$4.FORCE_RE_RENDER);
}

function setPaneKnobs() {
  var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +new Date();

  var channel = _addons["default"].getChannel();

  channel.emit(shared$1.SET, {
    knobs: knobStore.getAll(),
    timestamp: timestamp
  });
}

var resetAndForceUpdate = function resetAndForceUpdate() {
  knobStore.markAllUnused();
  forceReRender();
}; // Increase performance by reducing how frequently the story is recreated during knob changes


var debouncedResetAndForceUpdate = (0, _debounce["default"])(resetAndForceUpdate, COMPONENT_FORCE_RENDER_DEBOUNCE_DELAY_MS);

function knobChanged(change) {
  var name = change.name;
  var value = change.value; // Update the related knob and it's value.

  var knobOptions = knobStore.get(name);
  knobOptions.value = value;

  if (!manager.options.disableForceUpdate && !knobOptions.disableForceUpdate) {
    if (!manager.options.disableDebounce && !knobOptions.disableDebounce) {
      debouncedResetAndForceUpdate();
    } else {
      resetAndForceUpdate();
    }
  }
}

function knobClicked(clicked) {
  var knobOptions = knobStore.get(clicked.name);

  if (knobOptions.callback && knobOptions.callback() !== false) {
    forceReRender();
  }
}

function resetKnobs() {
  knobStore.reset();
  setPaneKnobs(false);
}

function resetKnobsAndForceReRender() {
  knobStore.reset();
  forceReRender();
  setPaneKnobs(false);
}

function disconnectCallbacks() {
  var channel = _addons["default"].getChannel();

  channel.removeListener(shared$1.CHANGE, knobChanged);
  channel.removeListener(shared$1.CLICK, knobClicked);
  channel.removeListener(dist$4.STORY_CHANGED, resetKnobs);
  channel.removeListener(shared$1.RESET, resetKnobsAndForceReRender);
  knobStore.unsubscribe(setPaneKnobs);
}

function connectCallbacks() {
  var channel = _addons["default"].getChannel();

  channel.on(shared$1.CHANGE, knobChanged);
  channel.on(shared$1.CLICK, knobClicked);
  channel.on(dist$4.STORY_CHANGED, resetKnobs);
  channel.on(shared$1.RESET, resetKnobsAndForceReRender);
  knobStore.subscribe(setPaneKnobs);
  return disconnectCallbacks;
}

function registerKnobs() {
  (0, dist$6.useEffect)(connectCallbacks, []);
}
});

unwrapExports(registerKnobs_1);
var registerKnobs_2 = registerKnobs_1.registerKnobs;
var registerKnobs_3 = registerKnobs_1.manager;

var dist$7 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  knob: true,
  text: true,
  "boolean": true,
  number: true,
  color: true,
  object: true,
  select: true,
  radios: true,
  array: true,
  date: true,
  button: true,
  files: true,
  optionsKnob: true,
  withKnobs: true
};
exports.knob = knob;
exports.text = text;
exports["boolean"] = _boolean;
exports.number = number;
exports.color = color;
exports.object = object;
exports.select = select;
exports.radios = radios;
exports.array = array;
exports.date = date;
exports.button = button;
exports.files = files;
exports.optionsKnob = optionsKnob;
exports.withKnobs = void 0;

var _addons = _interopRequireWildcard(public_api);



Object.keys(shared$1).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return shared$1[key];
    }
  });
});



function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function knob(name, options) {
  return registerKnobs_1.manager.knob(name, options);
}

function text(name, value, groupId) {
  return registerKnobs_1.manager.knob(name, {
    type: 'text',
    value: value,
    groupId: groupId
  });
}

function _boolean(name, value, groupId) {
  return registerKnobs_1.manager.knob(name, {
    type: 'boolean',
    value: value,
    groupId: groupId
  });
}

function number(name, value) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var groupId = arguments.length > 3 ? arguments[3] : undefined;
  var rangeDefaults = {
    min: 0,
    max: 10,
    step: 1
  };
  var mergedOptions = options.range ? Object.assign(Object.assign({}, rangeDefaults), options) : options;
  var finalOptions = Object.assign(Object.assign({
    type: 'number'
  }, mergedOptions), {}, {
    value: value,
    groupId: groupId
  });
  return registerKnobs_1.manager.knob(name, finalOptions);
}

function color(name, value, groupId) {
  return registerKnobs_1.manager.knob(name, {
    type: 'color',
    value: value,
    groupId: groupId
  });
}

function object(name, value, groupId) {
  return registerKnobs_1.manager.knob(name, {
    type: 'object',
    value: value,
    groupId: groupId
  });
}

function select(name, options, value, groupId) {
  return registerKnobs_1.manager.knob(name, {
    type: 'select',
    selectV2: true,
    options: options,
    value: value,
    groupId: groupId
  });
}

function radios(name, options, value, groupId) {
  return registerKnobs_1.manager.knob(name, {
    type: 'radios',
    options: options,
    value: value,
    groupId: groupId
  });
}

function array(name, value) {
  var separator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';
  var groupId = arguments.length > 3 ? arguments[3] : undefined;
  return registerKnobs_1.manager.knob(name, {
    type: 'array',
    value: value,
    separator: separator,
    groupId: groupId
  });
}

function date(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var groupId = arguments.length > 2 ? arguments[2] : undefined;
  var proxyValue = value ? value.getTime() : new Date().getTime();
  return registerKnobs_1.manager.knob(name, {
    type: 'date',
    value: proxyValue,
    groupId: groupId
  });
}

function button(name, callback, groupId) {
  return registerKnobs_1.manager.knob(name, {
    type: 'button',
    callback: callback,
    hideLabel: true,
    groupId: groupId
  });
}

function files(name, accept) {
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var groupId = arguments.length > 3 ? arguments[3] : undefined;
  return registerKnobs_1.manager.knob(name, {
    type: 'files',
    accept: accept,
    value: value,
    groupId: groupId
  });
}

function optionsKnob(name, valuesObj, value, optionsObj, groupId) {
  return registerKnobs_1.manager.knob(name, {
    type: 'options',
    options: valuesObj,
    value: value,
    optionsObj: optionsObj,
    groupId: groupId
  });
}

var defaultOptions = {
  escapeHTML: true
};
var withKnobs = (0, _addons.makeDecorator)({
  name: 'withKnobs',
  parameterName: 'knobs',
  skipIfNoParametersOrOptions: false,
  wrapper: function wrapper(getStory, context, _ref) {
    var options = _ref.options,
        parameters = _ref.parameters;
    var storyOptions = parameters || options;
    var allOptions = Object.assign(Object.assign({}, defaultOptions), storyOptions);

    var channel = _addons["default"].getChannel();

    registerKnobs_1.manager.setChannel(channel);

    registerKnobs_1.manager.setOptions(allOptions);

    channel.emit(shared$1.SET_OPTIONS, allOptions);
    (0, registerKnobs_1.registerKnobs)();
    return getStory(context);
  }
});
exports.withKnobs = withKnobs;

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
});

unwrapExports(dist$7);
var dist_1$6 = dist$7.knob;
var dist_2$4 = dist$7.text;
var dist_3$2 = dist$7.number;
var dist_4$2 = dist$7.color;
var dist_5$2 = dist$7.object;
var dist_6$1 = dist$7.select;
var dist_7$1 = dist$7.radios;
var dist_8$1 = dist$7.array;
var dist_9$1 = dist$7.date;
var dist_10$1 = dist$7.button;
var dist_11$1 = dist$7.files;
var dist_12$1 = dist$7.optionsKnob;
var dist_13$1 = dist$7.withKnobs;

/** @jsx jsx */
var Progress_stories = {
  title: "components/Visibility/Progress",
  component: Progress,
  decorators: [dist_13$1]
};

export { Button, Card, ContentType, Header, Icon, IconButton, NavButton, Progress_stories as Progress, Sticker, subHeader as SubHeader };
