webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/picture.jsx":
/*!********************************!*\
  !*** ./components/picture.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sarvar/Projects/ReactJs/react-portfolio/components/picture.jsx";



var Picture = function Picture(_ref) {
  var source = _ref.source,
      alt = _ref.alt,
      deployed = _ref.deployed,
      github = _ref.github;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "picContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: source,
    alt: alt,
    className: "image image-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: deployed && github ? 'text textWithDeployed' : 'text',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: deployed,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Published"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: deployed,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, alt))));
};

Picture.propTypes = {
  source: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  deployed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  github: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Picture.defaultProps = {
  source: '',
  deployed: '',
  alt: '',
  github: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Picture);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.jsx");
/* harmony import */ var _components_jumbotron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/jumbotron */ "./components/jumbotron.jsx");
/* harmony import */ var _components_picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/picture */ "./components/picture.jsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./components/footer.jsx");
/* harmony import */ var _static_css_pages_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/css/pages.css */ "./static/css/pages.css");
/* harmony import */ var _static_css_pages_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_css_pages_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/sarvar/Projects/ReactJs/react-portfolio/pages/index.jsx";







var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_jumbotron__WEBPACK_IMPORTED_MODULE_2__["default"], {
    phrase: "Hi all, I'm Sarvar \uD83E\uDD1F\u270C\uFE0F\uD83D\uDC4B",
    subtitle: "A passionate Software Developer \uD83D\uDE80 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "React native apps (android)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_picture__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: "https://lh3.googleusercontent.com/aoXaYduUUz-7MxyfaJiZGx6PBBiczlRz_33_eRudvXOIdM2veKjd-CYisvye_GCuAw=s360-rw",
    alt: "PointMax",
    deployed: "https://play.google.com/store/apps/details?id=io.pointmax.app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_picture__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: "https://lh3.googleusercontent.com/KOU3pdyIHq_pvqYYFaPUvFs4jsYMzr1tRFdBjBRoTklo8Zxd-olKVWPgXyOw1nAssjQ=s360-rw",
    alt: "whistlr",
    deployed: "https://play.google.com/store/apps/details?id=uz.tcmf.app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_picture__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: "../static/pics/jobApp.png",
    alt: "whistlr",
    deployed: "https://jobothehunt.herokuapp.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "frontend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Front End Websites"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_picture__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: "../static/pics/reactPortfolio.png",
    alt: "portfolio",
    github: "https://github.com/davidlatuno/react-portfolio",
    deployed: "https://davidlatuno-portfolio.herokuapp.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_picture__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: "../static/pics/FaceYourself.png",
    alt: "faceyourself",
    github: "https://github.com/davidlatuno/FaceYourselfDL",
    deployed: "https://davidlatuno.github.io/FaceYourselfDL//",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "backend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "CLI Applications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_picture__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: "../static/pics/bash.png",
    alt: "liri",
    github: "https://github.com/davidlatuno/bash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_picture__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: "../static/pics/csharp-copy.png",
    alt: "hangman",
    github: "https://github.com/davidlatuno/c-sharp-trilogy-script",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_picture__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: "../static/pics/csharp-delete.png",
    alt: "hangman",
    github: "https://github.com/davidlatuno/c-sharp-trilogy-script2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.81d49368e2d766d4eb41.hot-update.js.map