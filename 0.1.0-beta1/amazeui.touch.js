/** Amaze UI Touch v0.1.0-beta1 | by Amaze UI Team
  * (c) 2015 AllMobilize, Inc., Licensed under MIT
  * 2015-10-28T15:12:15+0800
  */
  (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-addons-css-transition-group"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-addons-css-transition-group", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["AMUITouch"] = factory(require("react"), require("react-addons-css-transition-group"), require("react-dom"));
	else
		root["AMUITouch"] = factory(root["React"], root["React.addons.CSSTransitionGroup"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_24__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// TODO: why `export Button from './Button'` not works?
	// @see http://jamesknelson.com/re-exporting-es6-modules/
	// @see https://github.com/Microsoft/TypeScript/issues/2726

	'use strict';

	exports.__esModule = true;

	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var VERSION = '0.1.0-beta1';

	exports.VERSION = VERSION;
	// Layout

	var _Container = __webpack_require__(1);

	exports.Container = _interopRequire(_Container);

	var _Grid = __webpack_require__(7);

	exports.Grid = _interopRequire(_Grid);

	var _Col = __webpack_require__(8);

	exports.Col = _interopRequire(_Col);

	var _Group = __webpack_require__(9);

	exports.Group = _interopRequire(_Group);

	// Components

	var _Accordion = __webpack_require__(10);

	exports.Accordion = _interopRequire(_Accordion);

	var _Badge = __webpack_require__(15);

	exports.Badge = _interopRequire(_Badge);

	var _Button = __webpack_require__(16);

	exports.Button = _interopRequire(_Button);

	var _ButtonGroup = __webpack_require__(17);

	exports.ButtonGroup = _interopRequire(_ButtonGroup);

	var _ButtonToolbar = __webpack_require__(18);

	exports.ButtonToolbar = _interopRequire(_ButtonToolbar);

	var _Card = __webpack_require__(19);

	exports.Card = _interopRequire(_Card);

	var _Icon = __webpack_require__(14);

	exports.Icon = _interopRequire(_Icon);

	var _Field = __webpack_require__(20);

	exports.Field = _interopRequire(_Field);

	var _List = __webpack_require__(21);

	exports.List = _interopRequire(_List);

	var _Loader = __webpack_require__(22);

	exports.Loader = _interopRequire(_Loader);

	var _Modal = __webpack_require__(23);

	exports.Modal = _interopRequire(_Modal);

	var _NavBar = __webpack_require__(26);

	exports.NavBar = _interopRequire(_NavBar);

	var _Notification = __webpack_require__(27);

	exports.Notification = _interopRequire(_Notification);

	var _OffCanvas = __webpack_require__(28);

	exports.OffCanvas = _interopRequire(_OffCanvas);

	var _OffCanvasTrigger = __webpack_require__(30);

	exports.OffCanvasTrigger = _interopRequire(_OffCanvasTrigger);

	var _Popover = __webpack_require__(33);

	exports.Popover = _interopRequire(_Popover);

	var _PopoverTrigger = __webpack_require__(34);

	exports.PopoverTrigger = _interopRequire(_PopoverTrigger);

	var _Slider = __webpack_require__(36);

	exports.Slider = _interopRequire(_Slider);

	var _Switch = __webpack_require__(40);

	exports.Switch = _interopRequire(_Switch);

	var _TabBar = __webpack_require__(41);

	exports.TabBar = _interopRequire(_TabBar);

	var _Tabs = __webpack_require__(42);

	exports.Tabs = _interopRequire(_Tabs);

	var _Touchable = __webpack_require__(37);

	exports.Touchable = _interopRequire(_Touchable);

	var _View = __webpack_require__(43);

	exports.View = _interopRequire(_View);

	// Mixins

	var _mixins = __webpack_require__(44);

	_defaults(exports, _interopExportWildcard(_mixins, _defaults));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// @via https://github.com/JedWatson/react-container
	// @license MIT Copyright (c) 2015 Jed Watson

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(3);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	function hasChildrenWithVerticalFill(children) {
	  var result = false;

	  _react2['default'].Children.forEach(children, function (child) {
	    if (result) {
	      return; // early-exit
	    }

	    if (!child) {
	      return;
	    }

	    if (!child.type) {
	      return;
	    }

	    result = !!child.type.shouldFillVerticalSpace;
	  });

	  return result;
	}

	function initScrollable(defaultPos) {
	  if (!defaultPos) {
	    defaultPos = {};
	  }

	  var pos = undefined;
	  var scrollable = {
	    reset: function reset() {
	      pos = { left: defaultPos.left || 0, top: defaultPos.top || 0 };
	    },
	    getPos: function getPos() {
	      return { left: pos.left, top: pos.top };
	    },
	    mount: function mount(element) {
	      var node = _react2['default'].findDOMNode(element);
	      node.scrollLeft = pos.left;
	      node.scrollTop = pos.top;
	    },
	    unmount: function unmount(element) {
	      var node = _react2['default'].findDOMNode(element);
	      pos.left = node.scrollLeft;
	      pos.top = node.scrollTop;
	    }
	  };

	  scrollable.reset();

	  return scrollable;
	}

	var TRANSITION_TIMEOUT = 500;

	var Container = _react2['default'].createClass({
	  displayName: 'Container',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string,
	    component: _react2['default'].PropTypes.node,
	    align: _react2['default'].PropTypes.oneOf(['end', 'center', 'start']),
	    direction: _react2['default'].PropTypes.oneOf(['column', 'row']),
	    fill: _react2['default'].PropTypes.bool,
	    grow: _react2['default'].PropTypes.bool,
	    justify: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.oneOf(['end', 'center', 'start'])]),
	    scrollable: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.object]),
	    transition: _react2['default'].PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'container',
	      component: 'div'
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    if (this.props.scrollable && this.props.scrollable.mount) {
	      this.props.scrollable.mount(this);
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this.props.scrollable && this.props.scrollable.unmount) {
	      this.props.scrollable.unmount(this);
	    }
	  },

	  render: function render() {
	    var _classNames;

	    var _props = this.props;
	    var className = _props.className;
	    var Component = _props.component;
	    var children = _props.children;
	    var direction = _props.direction;
	    var fill = _props.fill;
	    var align = _props.align;
	    var justify = _props.justify;
	    var scrollable = _props.scrollable;
	    var transition = _props.transition;

	    var props = _objectWithoutProperties(_props, ['className', 'component', 'children', 'direction', 'fill', 'align', 'justify', 'scrollable', 'transition']);

	    var classSet = this.getClassSet();

	    // As view transition container
	    if (transition) {
	      return _react2['default'].createElement(
	        _reactAddonsCssTransitionGroup2['default'],
	        _extends({
	          component: 'div',
	          className: _classnames2['default'](this.setClassNS('views'), className),
	          transitionName: this.setClassNS('view-transition-' + transition),
	          transitionEnterTimeout: TRANSITION_TIMEOUT,
	          transitionLeaveTimeout: TRANSITION_TIMEOUT
	        }, props),
	        children
	      );
	    }

	    if (!direction) {
	      if (hasChildrenWithVerticalFill(children)) {
	        direction = 'column';
	      }
	    }

	    if (direction === 'column' || scrollable) {
	      fill = true;
	    }

	    if (direction === 'column' && align === 'top') {
	      align = 'start';
	    }

	    if (direction === 'column' && align === 'bottom') {
	      align = 'end';
	    }

	    if (direction === 'row' && align === 'left') {
	      align = 'start';
	    }

	    if (direction === 'row' && align === 'right') {
	      align = 'end';
	    }

	    var classes = _classnames2['default'](classSet, className, (_classNames = {}, _classNames[this.prefixClass('fill')] = fill, _classNames[this.prefixClass('column')] = direction === 'column', _classNames[this.prefixClass('row')] = direction === 'row', _classNames[this.prefixClass('align-center')] = align === 'center', _classNames[this.prefixClass('align-start')] = align === 'start', _classNames[this.prefixClass('align-end')] = align === 'end', _classNames[this.prefixClass('justify-center')] = justify === 'center', _classNames[this.prefixClass('justify-start')] = justify === 'start', _classNames[this.prefixClass('justify-end')] = justify === 'end', _classNames[this.prefixClass('justified')] = justify === true, _classNames[this.prefixClass('scrollable')] = scrollable, _classNames));

	    return _react2['default'].createElement(
	      Component,
	      _extends({
	        className: classes
	      }, props),
	      children
	    );
	  }
	});

	Container.initScrollable = initScrollable;

	exports['default'] = Container;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _config = __webpack_require__(6);

	var namespace = _config.NAMESPACE ? _config.NAMESPACE + '-' : '';

	var ClassNameMixin = {
	  setClassNS: function setClassNS(classPrefix) {
	    var prefix = classPrefix || this.props.classPrefix || '';

	    return namespace + prefix;
	  },

	  getClassSet: function getClassSet(ignorePrefix) {
	    var classNames = {};
	    var _props = this.props;
	    var amSize = _props.amSize;
	    var amStyle = _props.amStyle;
	    var hollow = _props.hollow;
	    var radius = _props.radius;
	    var rounded = _props.rounded;
	    var active = _props.active;
	    var selected = _props.selected;
	    var disabled = _props.disabled;
	    var inset = _props.inset;

	    // uses `.am-` as prefix if `classPrefix` is not defined
	    var prefix = namespace;

	    if (this.props.classPrefix) {
	      var classPrefix = this.setClassNS();

	      prefix = classPrefix + '-';

	      // don't return prefix if ignore flag set
	      !ignorePrefix && (classNames[classPrefix] = true);
	    }

	    if (amSize) {
	      classNames[prefix + amSize] = true;
	    }

	    if (amStyle) {
	      classNames[prefix + amStyle] = true;
	    }

	    if (hollow) {
	      classNames[prefix + 'hollow'] = true;
	    }

	    classNames[this.prefixClass('radius')] = radius;
	    classNames[this.prefixClass('rounded')] = rounded;

	    classNames[this.prefixClass('inset')] = inset;

	    // state className
	    // `selected` is an alias of active
	    classNames[_config.CLASSNAMES['active']] = active || selected;
	    classNames[_config.CLASSNAMES['disabled']] = disabled;

	    // shape
	    // classNames[constants.CLASSES.radius] = this.props.radius;
	    // classNames[constants.CLASSES.round] = this.props.round;

	    return classNames;
	  },

	  prefixClass: function prefixClass(subClass) {
	    return this.setClassNS() + '-' + subClass;
	  }
	};

	exports['default'] = ClassNameMixin;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  NAMESPACE: null, // 'am'

	  CLASSNAMES: {
	    diabled: 'disabled',
	    active: 'active'
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var Grid = _react2['default'].createClass({
	  displayName: 'Grid',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string.isRequired,
	    component: _react2['default'].PropTypes.node.isRequired,
	    collapse: _react2['default'].PropTypes.bool,
	    avg: _react2['default'].PropTypes.number,
	    align: _react2['default'].PropTypes.oneOf(['right', 'center', 'between', 'around'])
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'g',
	      component: 'div'
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var Component = _props.component;
	    var collapse = _props.collapse;
	    var className = _props.className;
	    var avg = _props.avg;
	    var align = _props.align;

	    var props = _objectWithoutProperties(_props, ['component', 'collapse', 'className', 'avg', 'align']);

	    // .g-collapse
	    classSet[this.prefixClass('collapse')] = collapse;

	    if (avg) {
	      classSet[this.prefixClass('avg-' + avg)] = true;
	    }

	    if (align) {
	      classSet[this.prefixClass(align)] = true;
	    }

	    return _react2['default'].createElement(
	      Component,
	      _extends({}, props, {
	        className: _classnames2['default'](className, classSet)
	      }),
	      this.props.children
	    );
	  }
	});

	exports['default'] = Grid;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var Col = _react2['default'].createClass({
	  displayName: 'Col',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string.isRequired,
	    component: _react2['default'].PropTypes.node.isRequired,
	    cols: _react2['default'].PropTypes.number,
	    offset: _react2['default'].PropTypes.number,
	    shrink: _react2['default'].PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'col',
	      component: 'div'
	    };
	  },

	  render: function render() {
	    var _props = this.props;
	    var cols = _props.cols;
	    var offset = _props.offset;
	    var shrink = _props.shrink;
	    var Component = _props.component;
	    var className = _props.className;

	    var props = _objectWithoutProperties(_props, ['cols', 'offset', 'shrink', 'component', 'className']);

	    var classSet = this.getClassSet();

	    if (cols) {
	      classSet[this.prefixClass(cols)] = true;
	    }

	    if (offset) {
	      classSet[this.prefixClass('offset-' + offset)] = true;
	    }

	    classSet[this.prefixClass('shrink')] = shrink;

	    return _react2['default'].createElement(
	      Component,
	      _extends({}, props, {
	        className: _classnames2['default'](className, classSet)
	      }),
	      this.props.children
	    );
	  }
	});

	exports['default'] = Col;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var Group = _react2['default'].createClass({
	  displayName: 'Group',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string.isRequired,
	    component: _react2['default'].PropTypes.node.isRequired,
	    header: _react2['default'].PropTypes.node,
	    footer: _react2['default'].PropTypes.node,
	    noPadded: _react2['default'].PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'group',
	      component: 'div'
	    };
	  },

	  renderAddon: function renderAddon(role) {
	    role = role || 'header';
	    return this.props[role] ? _react2['default'].createElement(role, {
	      className: this.prefixClass(role)
	    }, this.props[role]) : null;
	  },

	  render: function render() {
	    var _bodyClasses;

	    var _props = this.props;
	    var Component = _props.component;
	    var className = _props.className;
	    var header = _props.header;
	    var footer = _props.footer;
	    var noPadded = _props.noPadded;

	    var props = _objectWithoutProperties(_props, ['component', 'className', 'header', 'footer', 'noPadded']);

	    var classSet = this.getClassSet();
	    classSet[this.prefixClass('no-padded')] = noPadded;

	    var bodyClasses = (_bodyClasses = {}, _bodyClasses[this.prefixClass('body')] = true, _bodyClasses);

	    return _react2['default'].createElement(
	      Component,
	      _extends({}, props, {
	        className: _classnames2['default'](className, classSet)
	      }),
	      this.renderAddon('header'),
	      _react2['default'].createElement(
	        'div',
	        { className: _classnames2['default'](bodyClasses) },
	        this.props.children
	      ),
	      this.renderAddon('footer')
	    );
	  }
	});

	exports['default'] = Group;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var _mixinsCollapseMixin = __webpack_require__(11);

	var _mixinsCollapseMixin2 = _interopRequireDefault(_mixinsCollapseMixin);

	var _Icon = __webpack_require__(14);

	var _Icon2 = _interopRequireDefault(_Icon);

	var Accordion = _react2['default'].createClass({
	  displayName: 'Accordion',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string,
	    activeKey: _react2['default'].PropTypes.any,
	    defaultActiveKey: _react2['default'].PropTypes.any,
	    inset: _react2['default'].PropTypes.bool,
	    onSelect: _react2['default'].PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'accordion'
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      activeKey: this.props.defaultActiveKey || null
	    };
	  },

	  shouldComponentUpdate: function shouldComponentUpdate() {
	    // Defer any updates to this component during the `onSelect` handler.
	    return !this._isChanging;
	  },

	  handleSelect: function handleSelect(e, key) {
	    e.preventDefault();

	    if (this.props.onSelect) {
	      this._isChanging = true;
	      this.props.onSelect(key);
	      this._isChanging = false;
	    }

	    if (this.state.activeKey === key) {
	      key = null;
	    }

	    this.setState({
	      activeKey: key
	    });
	  },

	  renderItems: function renderItems() {
	    var _this = this;

	    var activeKey = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;

	    return _react2['default'].Children.map(this.props.children, function (child, index) {
	      var _child$props = child.props;
	      var eventKey = _child$props.eventKey;
	      var key = _child$props.key;

	      var props = {
	        key: key ? key : index,
	        onSelect: _this.handleSelect
	      };

	      if (eventKey === undefined) {
	        props.eventKey = eventKey = index;
	      }

	      props.expanded = eventKey === activeKey;

	      return _react2['default'].cloneElement(child, props);
	    });
	  },

	  render: function render() {
	    var classSet = this.getClassSet();

	    classSet[this.prefixClass('inset')] = this.props.inset;

	    return _react2['default'].createElement(
	      'section',
	      _extends({}, this.props, {
	        className: _classnames2['default'](classSet, this.props.className)
	      }),
	      this.renderItems()
	    );
	  }
	});

	Accordion.Item = _react2['default'].createClass({
	  displayName: 'Item',

	  mixins: [_mixinsClassNameMixin2['default'], _mixinsCollapseMixin2['default']],

	  propTypes: {
	    title: _react2['default'].PropTypes.node,
	    eventKey: _react2['default'].PropTypes.any
	  },

	  handleClick: function handleClick(e) {
	    e.selected = true;

	    if (this.props.onSelect) {
	      this.props.onSelect(e, this.props.eventKey);
	    } else {
	      e.preventDefault();
	    }

	    if (e.selected) {
	      this.handleToggle();
	    }
	  },

	  handleToggle: function handleToggle() {
	    this.setState({ expanded: !this.state.expanded });
	  },

	  getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
	    return this.refs.panel.scrollHeight;
	  },

	  getCollapsibleDOMNode: function getCollapsibleDOMNode() {
	    if (!this.isMounted() || !this.refs || !this.refs.panel) {
	      return null;
	    }

	    return this.refs.panel;
	  },

	  render: function render() {
	    return _react2['default'].createElement(
	      'dl',
	      {
	        className: _classnames2['default'](this.setClassNS('accordion-item'), this.isExpanded() ? this.setClassNS('active') : null)
	      },
	      _react2['default'].createElement(
	        'dt',
	        {
	          onClick: this.handleClick,
	          className: this.setClassNS('accordion-title')
	        },
	        this.props.title,
	        _react2['default'].createElement(_Icon2['default'], {
	          className: this.setClassNS('accordion-icon'),
	          name: 'right-nav'
	        })
	      ),
	      _react2['default'].createElement(
	        'dd',
	        {
	          className: _classnames2['default'](this.setClassNS('accordion-body'), this.getCollapsibleClassSet()),
	          ref: 'panel'
	        },
	        _react2['default'].createElement(
	          'div',
	          {
	            className: this.setClassNS('accordion-content')
	          },
	          this.props.children
	        )
	      )
	    );
	  }
	});

	exports['default'] = Accordion;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * modified version of:
	 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CollapsibleMixin.js
	 */

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _utilsTransitionEvents = __webpack_require__(12);

	var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);

	var CollapseMixin = {
	  propTypes: {
	    defaultExpanded: _react2['default'].PropTypes.bool,
	    expanded: _react2['default'].PropTypes.bool
	  },

	  getInitialState: function getInitialState() {
	    var defaultExpanded = this.props.defaultExpanded != null ? this.props.defaultExpanded : this.props.expanded != null ? this.props.expanded : false;

	    return {
	      expanded: defaultExpanded,
	      collapsing: false
	    };
	  },

	  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	    var willExpanded = nextProps.expanded != null ? nextProps.expanded : nextState.expanded;

	    if (willExpanded === this.isExpanded()) {
	      return;
	    }

	    // if the expanded state is being toggled, ensure node has a dimension value
	    // this is needed for the animation to work and needs to be set before
	    // the collapsing class is applied (after collapsing is applied the in class
	    // is removed and the node's dimension will be wrong)

	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	    var value = '0';

	    if (!willExpanded) {
	      // get height
	      value = this.getCollapsibleDimensionValue();
	    }

	    node.style[dimension] = value + 'px';

	    this._afterWillUpdate();
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    // check if expanded is being toggled; if so, set collapsing
	    this._checkToggleCollapsing(prevProps, prevState);

	    // check if collapsing was turned on; if so, start animation
	    this._checkStartAnimation();
	  },

	  // helps enable test stubs
	  _afterWillUpdate: function _afterWillUpdate() {},

	  _checkStartAnimation: function _checkStartAnimation() {
	    if (!this.state.collapsing) {
	      return;
	    }

	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	    var value = this.getCollapsibleDimensionValue();

	    // setting the dimension here starts the transition animation
	    var result;

	    if (this.isExpanded()) {
	      result = value + 'px';
	    } else {
	      result = '0px';
	    }
	    node.style[dimension] = result;
	  },

	  _checkToggleCollapsing: function _checkToggleCollapsing(prevProps, prevState) {
	    var wasExpanded = prevProps.expanded != null ? prevProps.expanded : prevState.expanded;
	    var isExpanded = this.isExpanded();

	    if (wasExpanded !== isExpanded) {
	      if (wasExpanded) {
	        this._handleCollapse();
	      } else {
	        this._handleExpand();
	      }
	    }
	  },

	  _handleExpand: function _handleExpand() {
	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();

	    var complete = (function () {
	      this._removeEndEventListener(node, complete);
	      // remove dimension value - this ensures the collapsible item can grow
	      // in dimension after initial display (such as an image loading)
	      node.style[dimension] = '';
	      this.setState({
	        collapsing: false
	      });
	    }).bind(this);

	    this._addEndEventListener(node, complete);

	    this.setState({
	      collapsing: true
	    });
	  },

	  _handleCollapse: function _handleCollapse() {
	    var node = this.getCollapsibleDOMNode();
	    var _this = this;
	    var complete = function complete() {
	      _this._removeEndEventListener(node, complete);
	      _this.setState({
	        collapsing: false
	      });
	    };

	    this._addEndEventListener(node, complete);

	    this.setState({
	      collapsing: true
	    });
	  },

	  // helps enable test stubs
	  _addEndEventListener: function _addEndEventListener(node, complete) {
	    _utilsTransitionEvents2['default'].on(node, complete);
	  },

	  // helps enable test stubs
	  _removeEndEventListener: function _removeEndEventListener(node, complete) {
	    _utilsTransitionEvents2['default'].off(node, complete);
	  },

	  dimension: function dimension() {
	    return typeof this.getCollapsibleDimension === 'function' ? this.getCollapsibleDimension() : 'height';
	  },

	  isExpanded: function isExpanded() {
	    return this.props.expanded != null ? this.props.expanded : this.state.expanded;
	  },

	  getCollapsibleClassSet: function getCollapsibleClassSet(className) {
	    var classSet = {};

	    if (typeof className === 'string') {
	      className.split(' ').forEach(function (subClass) {
	        if (subClass) {
	          classSet[subClass] = true;
	        }
	      });
	    }

	    classSet[this.setClassNS('collapsing')] = this.state.collapsing;
	    classSet[this.setClassNS('collapse')] = !this.state.collapsing;
	    classSet[this.setClassNS('in')] = this.isExpanded() && !this.state.collapsing;

	    return classSet;
	  }
	};

	exports['default'] = CollapseMixin;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * modified version of:
	 * https://github.com/facebook/react/blob/0.13-stable/src/addons/transitions/ReactTransitionEvents.js
	 */

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _CSSCore = __webpack_require__(13);

	var _CSSCore2 = _interopRequireDefault(_CSSCore);

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },

	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};

	var endEvents = [];
	var support = {};

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    support[baseEventName] = false;

	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        support[baseEventName] = baseEvents[styleName];
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}

	if (canUseDOM) {
	  detectEvents();
	}

	if (support.animationend) {
	  _CSSCore2['default'].addClass(document.documentElement, 'cssanimations');
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var TransitionEvents = {
	  on: function on(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  off: function off(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  },

	  support: support
	};

	exports['default'] = TransitionEvents;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @via https://github.com/facebook/react/blob/master/src/vendor/core/CSSCore.js
	 */

	'use strict';

	exports.__esModule = true;
	var CSSCore = {

	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   * @see http://caniuse.com/#feat=classlist
	   */
	  addClass: function addClass(element, className) {
	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },

	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function removeClass(element, className) {
	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },

	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function conditionClass(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },

	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function hasClass(element, className) {
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  },

	  toggleClass: function toggleClass(element, className) {
	    return CSSCore.hasClass(element, className) ? CSSCore.removeClass(element, className) : CSSCore.addClass(element, className);
	  }
	};

	exports['default'] = CSSCore;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var Icon = _react2['default'].createClass({
	  displayName: 'Icon',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string.isRequired,
	    component: _react2['default'].PropTypes.node.isRequired,
	    name: _react2['default'].PropTypes.string.isRequired,
	    href: _react2['default'].PropTypes.string
	  },

	  // amStyle: React.PropTypes.string,
	  // button: React.PropTypes.bool,
	  // size: React.PropTypes.string,
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'icon',
	      component: 'span'
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var Component = _props.component;
	    var className = _props.className;
	    var href = _props.href;
	    var name = _props.name;

	    var props = _objectWithoutProperties(_props, ['component', 'className', 'href', 'name']);

	    Component = href ? 'a' : Component;

	    // icon-[iconName]
	    classSet[this.prefixClass(name)] = true;

	    return _react2['default'].createElement(
	      Component,
	      _extends({}, props, {
	        className: _classnames2['default'](classSet, className)
	      }),
	      this.props.children
	    );
	  }
	});

	exports['default'] = Icon;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var Badge = _react2['default'].createClass({
	  displayName: 'Badge',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string.isRequired,
	    component: _react2['default'].PropTypes.node.isRequired,
	    href: _react2['default'].PropTypes.string,
	    amStyle: _react2['default'].PropTypes.string,
	    // radius: React.PropTypes.bool,
	    rounded: _react2['default'].PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'badge',
	      component: 'span'
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var Component = _props.component;
	    var className = _props.className;
	    var href = _props.href;

	    var props = _objectWithoutProperties(_props, ['component', 'className', 'href']);

	    Component = href ? 'a' : Component;

	    return _react2['default'].createElement(
	      Component,
	      _extends({}, props, {
	        className: _classnames2['default'](classSet, className)
	      }),
	      this.props.children
	    );
	  }
	});

	exports['default'] = Badge;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var Button = _react2['default'].createClass({
	  displayName: 'Button',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string.isRequired,
	    component: _react2['default'].PropTypes.node,
	    href: _react2['default'].PropTypes.string,
	    target: _react2['default'].PropTypes.string,
	    amStyle: _react2['default'].PropTypes.string,
	    amSize: _react2['default'].PropTypes.string,
	    hollow: _react2['default'].PropTypes.bool,
	    block: _react2['default'].PropTypes.bool,
	    active: _react2['default'].PropTypes.bool,
	    disabled: _react2['default'].PropTypes.bool
	  },

	  // radius: React.PropTypes.bool,
	  // rounded: React.PropTypes.bool,
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn'
	    };
	  },

	  renderAnchor: function renderAnchor(classes) {
	    var _props = this.props;
	    var href = _props.href;
	    var Component = _props.component;
	    var children = _props.children;

	    var props = _objectWithoutProperties(_props, ['href', 'component', 'children']);

	    Component = Component || 'a';

	    href = href || '#';

	    return _react2['default'].createElement(
	      Component,
	      _extends({}, props, {
	        href: href,
	        className: classes,
	        role: 'button'
	      }),
	      children
	    );
	  },

	  renderButton: function renderButton(classes) {
	    var _props2 = this.props;
	    var Component = _props2.component;
	    var children = _props2.children;

	    var props = _objectWithoutProperties(_props2, ['component', 'children']);

	    Component = Component || 'button';

	    return _react2['default'].createElement(
	      Component,
	      _extends({}, props, {
	        className: classes
	      }),
	      children
	    );
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props3 = this.props;
	    var href = _props3.href;
	    var target = _props3.target;
	    var block = _props3.block;
	    var className = _props3.className;

	    var renderType = href || target ? 'renderAnchor' : 'renderButton';

	    // block button
	    classSet[this.prefixClass('block')] = block;

	    return this[renderType](_classnames2['default'](classSet, className));
	  }
	});

	exports['default'] = Button;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var ButtonGroup = _react2['default'].createClass({
	  displayName: 'ButtonGroup',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string.isRequired,
	    amStyle: _react2['default'].PropTypes.string,
	    amSize: _react2['default'].PropTypes.string,
	    hollow: _react2['default'].PropTypes.bool,
	    justify: _react2['default'].PropTypes.bool,
	    stacked: _react2['default'].PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn-group'
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var className = _props.className;
	    var amStyle = _props.amStyle;
	    var amSize = _props.amSize;
	    var hollow = _props.hollow;
	    var stacked = _props.stacked;
	    var justify = _props.justify;

	    var props = _objectWithoutProperties(_props, ['className', 'amStyle', 'amSize', 'hollow', 'stacked', 'justify']);

	    classSet[this.prefixClass('stacked')] = stacked;
	    classSet[this.prefixClass('justify')] = justify;

	    return _react2['default'].createElement(
	      'div',
	      _extends({}, props, {
	        className: _classnames2['default'](className, classSet)
	      }),
	      _react2['default'].Children.map(this.props.children, function (child, i) {
	        return _react.cloneElement(child, _extends({
	          amStyle: amStyle,
	          amSize: amSize,
	          hollow: hollow
	        }, child.props));
	      })
	    );
	  }
	});

	exports['default'] = ButtonGroup;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var ButtonToolbar = _react2['default'].createClass({
	  displayName: 'ButtonToolbar',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn-toolbar'
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet();

	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, classSet)
	      }),
	      this.props.children
	    );
	  }
	});

	exports['default'] = ButtonToolbar;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var Card = _react2['default'].createClass({
	  displayName: 'Card',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string.isRequired,
	    title: _react2['default'].PropTypes.string,
	    header: _react2['default'].PropTypes.node,
	    footer: _react2['default'].PropTypes.node
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'card'
	    };
	  },

	  renderItem: function renderItem(element, role) {
	    if (!element) {
	      return null;
	    }

	    return element.type && element.type === Card.Child ? element : _react2['default'].createElement(
	      Card.Child,
	      { role: role },
	      element
	    );
	  },

	  renderTitle: function renderTitle(title) {
	    return _react2['default'].createElement(
	      'h2',
	      { className: this.prefixClass('title') },
	      title
	    );
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var children = _props.children;
	    var className = _props.className;
	    var title = _props.title;
	    var header = _props.header;
	    var footer = _props.footer;

	    var props = _objectWithoutProperties(_props, ['children', 'className', 'title', 'header', 'footer']);

	    return _react2['default'].createElement(
	      'div',
	      _extends({}, props, {
	        className: _classnames2['default'](classSet, className)
	      }),
	      title ? this.renderItem(this.renderTitle(title)) : this.renderItem(header),
	      _react2['default'].createElement(
	        'div',
	        { className: this.prefixClass('body') },
	        children
	      ),
	      this.renderItem(footer, 'footer')
	    );
	  }
	});

	Card.Child = _react2['default'].createClass({
	  displayName: 'Child',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string.isRequired,
	    role: _react2['default'].PropTypes.oneOf(['header', 'footer']),
	    cover: _react2['default'].PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'card',
	      role: 'header'
	    };
	  },

	  render: function render() {
	    var _classSet;

	    var _props2 = this.props;
	    var role = _props2.role;
	    var className = _props2.className;
	    var cover = _props2.cover;

	    var props = _objectWithoutProperties(_props2, ['role', 'className', 'cover']);

	    var classSet = (_classSet = {
	      className: className
	    }, _classSet[this.prefixClass(role)] = true, _classSet[this.prefixClass('cover')] = cover, _classSet);
	    var style = null;

	    if (cover) {
	      style = {
	        backgroundImage: 'url(' + cover + ')'
	      };
	    }

	    return _react2['default'].createElement(
	      'div',
	      _extends({}, props, {
	        className: _classnames2['default'](classSet),
	        style: style
	      }),
	      this.props.children
	    );
	  }
	});

	exports['default'] = Card;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var _Button = __webpack_require__(16);

	var _Button2 = _interopRequireDefault(_Button);

	var _Icon = __webpack_require__(14);

	var _Icon2 = _interopRequireDefault(_Icon);

	var Field = _react2['default'].createClass({
	  displayName: 'Field',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string.isRequired,
	    type: _react2['default'].PropTypes.string,
	    label: _react2['default'].PropTypes.node,
	    btnBefore: _react2['default'].PropTypes.node,
	    btnAfter: _react2['default'].PropTypes.node,
	    labelBefore: _react2['default'].PropTypes.node,
	    labelAfter: _react2['default'].PropTypes.node
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'field',
	      type: 'text'
	    };
	  },

	  getFieldDOMNode: function getFieldDOMNode() {
	    return this.refs.field;
	  },

	  getValue: function getValue() {
	    if (this.props.type === 'select' && this.props.multiple) {
	      return this.getSelectedOptions();
	    } else {
	      return this.getFieldDOMNode().value;
	    }
	  },

	  getChecked: function getChecked() {
	    return this.getFieldDOMNode().checked;
	  },

	  getSelectedOptions: function getSelectedOptions() {
	    var values = [];
	    var options = this.getFieldDOMNode().getElementsByTagName('option');

	    options.forEach(function (option) {
	      if (option.selected) {
	        var value = option.getAttribute('value') || option.innerHtml;

	        values.push(value);
	      }
	    });

	    return values;
	  },

	  isCheckboxOrRadio: function isCheckboxOrRadio() {
	    return this.props.type === 'radio' || this.props.type === 'checkbox';
	  },

	  isFile: function isFile() {
	    return this.props.type === 'file';
	  },

	  renderField: function renderField() {
	    var field = null;
	    var fieldClassName = this.isCheckboxOrRadio() || this.isFile() ? '' : this.getClassSet();
	    var classes = _classnames2['default'](this.props.className, fieldClassName);
	    var props = {
	      ref: 'field',
	      key: 'formField',
	      className: classes
	    };

	    switch (this.props.type) {
	      case 'select':
	        field = _react2['default'].createElement(
	          'select',
	          _extends({}, this.props, props),
	          this.props.children
	        );
	        break;
	      case 'textarea':
	        field = _react2['default'].createElement('textarea', _extends({}, this.props, props));
	        break;
	      case 'submit':
	      case 'reset':
	        var _props = this.props,
	            classPrefix = _props.classPrefix,
	            others = _objectWithoutProperties(_props, ['classPrefix']);

	        field = _react2['default'].createElement(_Button2['default'], _extends({}, props, {
	          className: null
	        }, others, {
	          component: 'input'
	        }));
	        break;
	      default:
	        field = _react2['default'].createElement('input', _extends({}, this.props, props));
	    }

	    return field;
	  },

	  renderContainer: function renderContainer(children) {
	    return this.props.label ? _react2['default'].createElement(
	      'label',
	      {
	        htmlFor: this.props.id,
	        className: this.prefixClass('container'),
	        key: 'label' },
	      _react2['default'].createElement(
	        'span',
	        { className: this.prefixClass('label') },
	        this.props.label
	      ),
	      children,
	      this.isCheckboxOrRadio() ? _react2['default'].createElement(_Icon2['default'], {
	        className: this.prefixClass('icon'),
	        name: 'check'
	      }) : null
	    ) : children;
	  },

	  renderFieldGroup: function renderFieldGroup(children) {
	    var _this = this;

	    var groupPrefix = this.setClassNS('field-group');
	    var labelClassName = groupPrefix + '-label';
	    var _props2 = this.props;
	    var labelBefore = _props2.labelBefore;
	    var labelAfter = _props2.labelAfter;
	    var btnBefore = _props2.btnBefore;
	    var btnAfter = _props2.btnAfter;

	    var props = _objectWithoutProperties(_props2, ['labelBefore', 'labelAfter', 'btnBefore', 'btnAfter']);

	    var renderFiledLabel = function renderFiledLabel(type) {
	      return _this.props[type] ? _react2['default'].createElement(
	        'span',
	        {
	          className: labelClassName,
	          key: type
	        },
	        _this.props[type]
	      ) : null;
	    };

	    return labelBefore || labelAfter || btnBefore || btnAfter ? _react2['default'].createElement(
	      'div',
	      {
	        className: groupPrefix,
	        key: 'fieldGroup'
	      },
	      renderFiledLabel('labelBefore'),
	      btnBefore,
	      children,
	      renderFiledLabel('labelAfter'),
	      btnAfter
	    ) : children;
	  },

	  render: function render() {
	    var field = this.renderField();

	    if (this.props.label) {
	      return this.renderContainer(field);
	    }

	    return this.renderFieldGroup(field);
	  }
	});

	exports['default'] = Field;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var _Icon = __webpack_require__(14);

	var _Icon2 = _interopRequireDefault(_Icon);

	var List = _react2['default'].createClass({
	  displayName: 'List',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string.isRequired,
	    inset: _react2['default'].PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'list'
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var className = _props.className;
	    var inset = _props.inset;

	    var props = _objectWithoutProperties(_props, ['className', 'inset']);

	    classSet[this.prefixClass('inset')] = inset;

	    // TODO: 使用 ul 可能不是太好的选择，再一些需要定义 component 的场合缺乏灵活性
	    return _react2['default'].createElement('ul', _extends({}, props, {
	      className: _classnames2['default'](classSet, className)
	    }));
	  }
	});

	List.Item = _react2['default'].createClass({
	  displayName: 'Item',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string.isRequired,
	    role: _react2['default'].PropTypes.oneOf(['header', 'item']),
	    title: _react2['default'].PropTypes.string,
	    subTitle: _react2['default'].PropTypes.string,
	    href: _react2['default'].PropTypes.string,
	    linked: _react2['default'].PropTypes.bool, // linked flag for custom href like route Link
	    linkComponent: _react2['default'].PropTypes.any,
	    linkProps: _react2['default'].PropTypes.object,
	    media: _react2['default'].PropTypes.node,
	    after: _react2['default'].PropTypes.node,
	    desc: _react2['default'].PropTypes.node,
	    nested: _react2['default'].PropTypes.oneOf(['input', 'radio', 'checkbox']) },

	  // nested field
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'item',
	      role: 'item'
	    };
	  },

	  renderTitleRow: function renderTitleRow() {
	    var _props2 = this.props;
	    var title = _props2.title;
	    var subTitle = _props2.subTitle;
	    var href = _props2.href;
	    var linkComponent = _props2.linkComponent;

	    var itemTitle = title ? _react2['default'].createElement(
	      'h3',
	      {
	        key: 'itemTitle',
	        className: this.prefixClass('title') },
	      title
	    ) : null;

	    var titleChildren = [itemTitle, this.renderAddon('after'), href || linkComponent ? _react2['default'].createElement(_Icon2['default'], {
	      className: this.prefixClass('icon'),
	      name: 'right-nav',
	      key: 'itemChevron'
	    }) : null];

	    return subTitle ? _react2['default'].createElement(
	      'div',
	      {
	        className: this.prefixClass('title-row'),
	        key: 'itemTitleRow'
	      },
	      titleChildren
	    ) : titleChildren;
	  },

	  renderMain: function renderMain() {
	    var _props3 = this.props;
	    var media = _props3.media;
	    var subTitle = _props3.subTitle;
	    var desc = _props3.desc;
	    var children = _props3.children;

	    var titleRow = this.renderTitleRow();
	    var notJustTitle = media || subTitle || desc || children;

	    // remove wrapper if without media/subTitle/children
	    return notJustTitle ? _react2['default'].createElement(
	      'div',
	      {
	        key: 'itemMain',
	        className: this.prefixClass('main')
	      },
	      titleRow,
	      this.renderAddon('subTitle'),
	      this.renderAddon('desc'),
	      children
	    ) : titleRow;
	  },

	  wrapLink: function wrapLink(children) {
	    var _props4 = this.props;
	    var linkComponent = _props4.linkComponent;
	    var linkProps = _props4.linkProps;
	    var href = _props4.href;
	    var target = _props4.target;

	    return linkComponent ? _react2['default'].createElement(linkComponent, linkProps, children) : _react2['default'].createElement(
	      'a',
	      {
	        href: href,
	        target: target
	      },
	      children
	    );
	  },

	  renderAddon: function renderAddon(type) {
	    return this.props[type] ? _react2['default'].createElement(
	      'div',
	      {
	        key: 'item-' + type,
	        className: this.prefixClass(type.toLowerCase())
	      },
	      this.props[type]
	    ) : null;
	  },

	  render: function render() {
	    var _props5 = this.props;
	    var className = _props5.className;
	    var role = _props5.role;
	    var title = _props5.title;
	    var subTitle = _props5.subTitle;
	    var href = _props5.href;
	    var after = _props5.after;
	    var media = _props5.media;
	    var children = _props5.children;
	    var linkComponent = _props5.linkComponent;
	    var linked = _props5.linked;
	    var nested = _props5.nested;

	    var props = _objectWithoutProperties(_props5, ['className', 'role', 'title', 'subTitle', 'href', 'after', 'media', 'children', 'linkComponent', 'linked', 'nested']);

	    var itemChildren = [this.renderAddon('media'), this.renderMain()];
	    var classSet = this.getClassSet();

	    classSet[this.prefixClass(nested)] = nested;
	    classSet[this.prefixClass('header')] = role === 'header';
	    classSet[this.prefixClass('linked')] = href || linkComponent || linked;
	    subTitle && (classSet[this.prefixClass('content')] = true);

	    return _react2['default'].createElement(
	      'li',
	      _extends({}, props, {
	        className: _classnames2['default'](classSet, className)
	      }),
	      role === 'header' ? children : href || linkComponent ? this.wrapLink(itemChildren) : itemChildren
	    );
	  }
	});

	exports['default'] = List;

	/**
	 * TODO:
	 * - 可选择列表（嵌套 radio/checkbox）图文混排的列表，
	 *   考虑的创建可选择列表时根据 nested 属性自动生产 input，而不用再去嵌套 Field，
	 *   以便图文混排选择实现。
	 * - UE：用户如何知道这个列表是可以选择的（增加相应的提示文字？）
	 * - 易用性：链接如何以更好的方式传入类似 react-router Link 这样的组件？
	 */
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var Loader = _react2['default'].createClass({
	  displayName: 'Loader',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string,
	    component: _react2['default'].PropTypes.node
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'loader',
	      component: 'div'
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var className = _props.className;
	    var Component = _props.component;

	    var props = _objectWithoutProperties(_props, ['className', 'component']);

	    return _react2['default'].createElement(Component, _extends({}, props, {
	      className: _classnames2['default'](classSet, className),
	      dangerouslySetInnerHTML: { __html: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="75" width="75" viewbox="0 0 75 75"><circle cx="37.5" cy="37.5" r="33.5" stroke-width="8"/></svg>' }
	    }));
	  }
	});

	exports['default'] = Loader;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @see https://github.com/yuanyan/boron
	 */

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(24);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var _utilsCSSCore = __webpack_require__(13);

	var _utilsCSSCore2 = _interopRequireDefault(_utilsCSSCore);

	var _utilsEvents = __webpack_require__(25);

	var _utilsEvents2 = _interopRequireDefault(_utilsEvents);

	var _utilsTransitionEvents = __webpack_require__(12);

	var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);

	var _Button = __webpack_require__(16);

	var _Button2 = _interopRequireDefault(_Button);

	var _Icon = __webpack_require__(14);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Loader = __webpack_require__(22);

	var _Loader2 = _interopRequireDefault(_Loader);

	var Modal = _react2['default'].createClass({
	  displayName: 'Modal',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string,
	    role: _react2['default'].PropTypes.oneOf(['alert', 'confirm', 'prompt', 'loading', 'actions', 'popup']),
	    title: _react2['default'].PropTypes.node,
	    confirmText: _react2['default'].PropTypes.string,
	    cancelText: _react2['default'].PropTypes.string,
	    closeBtn: _react2['default'].PropTypes.bool,
	    closeViaBackdrop: _react2['default'].PropTypes.bool,
	    onSelect: _react2['default'].PropTypes.func,
	    onOpen: _react2['default'].PropTypes.func,
	    onClosed: _react2['default'].PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'modal',
	      confirmText: '确定',
	      cancelText: '取消',
	      closeBtn: true,
	      onSelect: function onSelect() {},
	      onOpen: function onOpen() {},
	      onClosed: function onClosed() {}
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      closed: true,
	      isClosing: false
	    };
	  },

	  isClosed: function isClosed() {
	    return this.state.closed;
	  },

	  handleBackdropClick: function handleBackdropClick(e) {
	    if (e.target !== e.currentTarget || !this.props.closeViaBackdrop) {
	      return;
	    }

	    this.close();
	  },

	  isPopup: function isPopup() {
	    return this.props.role === 'popup';
	  },

	  isActions: function isActions() {
	    return this.props.role === 'actions';
	  },

	  // Get input data for prompt modal
	  getFieldData: function getFieldData() {
	    var data = [];
	    var inputs = _reactDom2['default'].findDOMNode(this).querySelectorAll('input[type=text]');

	    if (inputs) {
	      for (var i = 0; i < inputs.length; i++) {
	        data.push(inputs[i].value);
	      }
	    }

	    return data.length === 0 ? null : data.length === 1 ? data[0] : data;
	  },

	  handleSelect: function handleSelect(data, e) {
	    if (this.props.role === 'prompt' && data) {
	      data = this.getFieldData();
	    }

	    this.close();
	    this.props.onSelect.call(this, data, e);
	  },

	  open: function open() {
	    if (this.isClosed) {
	      this.setState({
	        isClosing: false,
	        closed: false
	      });

	      this.props.onOpen();
	    }
	  },

	  close: function close() {
	    if (this.isClosed() || this.state.isClosing) {
	      return;
	    }

	    this.setState({
	      isClosing: true
	    });
	  },

	  handleClosed: function handleClosed() {
	    this.setState({
	      closed: true,
	      isClosing: false
	    });
	    this.props.onClosed();
	  },

	  renderActions: function renderActions(classSet) {
	    classSet[this.props.classPrefix] = false;

	    return _react2['default'].createElement(
	      'div',
	      {
	        ref: 'modal',
	        className: _classnames2['default'](this.props.className, classSet)
	      },
	      this.props.children,
	      _react2['default'].createElement(
	        'div',
	        { className: this.prefixClass('actions-group') },
	        _react2['default'].createElement(
	          _Button2['default'],
	          {
	            onClick: this.close,
	            block: true,
	            amStyle: this.props.btnStyle || 'secondary'
	          },
	          this.props.cancelText
	        )
	      )
	    );
	  },

	  renderPopup: function renderPopup(classSet) {
	    classSet[this.props.classPrefix] = false;

	    var _props = this.props;
	    var className = _props.className;
	    var title = _props.title;
	    var children = _props.children;

	    var props = _objectWithoutProperties(_props, ['className', 'title', 'children']);

	    return _react2['default'].createElement(
	      'div',
	      _extends({}, props, {
	        ref: 'modal',
	        className: _classnames2['default'](className, classSet, this.setClassNS('popup'))
	      }),
	      _react2['default'].createElement(
	        'div',
	        { className: this.setClassNS('popup-inner') },
	        _react2['default'].createElement(
	          'div',
	          { className: this.setClassNS('popup-header') },
	          title ? _react2['default'].createElement(
	            'h4',
	            { className: this.setClassNS('popup-title') },
	            title
	          ) : null,
	          _react2['default'].createElement(_Icon2['default'], {
	            name: 'close',
	            className: this.setClassNS('popup-icon'),
	            onClick: this.close
	          })
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: this.setClassNS('popup-body') },
	          children
	        )
	      )
	    );
	  },

	  renderHeader: function renderHeader() {
	    var _props2 = this.props;
	    var title = _props2.title;
	    var closeBtn = _props2.closeBtn;
	    var role = _props2.role;

	    var closeIcon = closeBtn && !role ? _react2['default'].createElement(_Icon2['default'], {
	      name: 'close',
	      className: this.prefixClass('icon'),
	      onClick: this.close
	    }) : null;

	    return title || closeIcon ? _react2['default'].createElement(
	      'div',
	      {
	        className: this.prefixClass('header'),
	        key: 'modalHeader'
	      },
	      title ? _react2['default'].createElement(
	        'h4',
	        {
	          className: this.prefixClass('title')
	        },
	        title
	      ) : null,
	      closeIcon
	    ) : null;
	  },

	  // Render alert/confirm/prompt buttons
	  renderFooter: function renderFooter() {
	    var _this = this;

	    var buttons = undefined;
	    var btnClass = this.prefixClass('btn');
	    var _props3 = this.props;
	    var role = _props3.role;
	    var confirmText = _props3.confirmText;
	    var cancelText = _props3.cancelText;

	    switch (role) {
	      case 'alert':
	        buttons = _react2['default'].createElement(
	          'span',
	          {
	            key: 'modalBtn',
	            onClick: this.handleSelect.bind(this, null),
	            className: btnClass
	          },
	          confirmText
	        );
	        break;
	      case 'confirm':
	      case 'prompt':
	        var cancel = role === 'prompt' ? null : false;
	        buttons = [cancelText, confirmText].map(function (text, i) {
	          return _react2['default'].createElement(
	            'span',
	            {
	              key: 'modalBtn' + i,
	              onClick: _this.handleSelect.bind(_this, i === 0 ? cancel : true),
	              className: btnClass
	            },
	            text
	          );
	        });
	        break;
	      default:
	        buttons = null;
	    }

	    return buttons ? _react2['default'].createElement(
	      'div',
	      { className: this.prefixClass('footer') },
	      buttons
	    ) : null;
	  },

	  renderBackdrop: function renderBackdrop(children) {
	    var onClick = this.handleBackdropClick || null;
	    var classSet = {};

	    classSet[this.prefixClass('backdrop')] = true;
	    classSet[this.setClassNS('active')] = true;
	    classSet[this.prefixClass('backdrop-out')] = this.state.isClosing;

	    return _react2['default'].createElement(
	      'span',
	      null,
	      children,
	      _react2['default'].createElement('div', {
	        onClick: onClick,
	        ref: 'backdrop',
	        className: _classnames2['default'](classSet)
	      })
	    );
	  },

	  render: function render() {
	    var _this2 = this;

	    var _state = this.state;
	    var closed = _state.closed;
	    var isClosing = _state.isClosing;

	    if (closed) {
	      return null;
	    }

	    // listen out animation end envent
	    if (isClosing) {
	      (function () {
	        var node = _this2.refs.modal;

	        if (node) {
	          (function () {
	            var closedHandler = function closedHandler(e) {
	              if (e && e.target !== node) {
	                return;
	              }

	              _utilsTransitionEvents2['default'].off(node, closedHandler);
	              _this2.handleClosed();
	            };

	            _utilsTransitionEvents2['default'].on(node, closedHandler);
	          })();
	        }
	      })();
	    }

	    var classSet = this.getClassSet();
	    var _props4 = this.props;
	    var role = _props4.role;
	    var className = _props4.className;
	    var title = _props4.title;
	    var children = _props4.children;
	    var modalWidth = _props4.modalWidth;
	    var modalHeight = _props4.modalHeight;

	    var props = _objectWithoutProperties(_props4, ['role', 'className', 'title', 'children', 'modalWidth', 'modalHeight']);

	    var modal = undefined;

	    classSet[this.prefixClass('out')] = isClosing;
	    role && (classSet[this.prefixClass(role)] = true);

	    if (this.isActions()) {
	      modal = this.renderActions(classSet);
	    } else if (this.isPopup()) {
	      modal = this.renderPopup(classSet);
	    } else {
	      var style = {
	        width: modalWidth,
	        height: modalHeight
	      };

	      modal = _react2['default'].createElement(
	        'div',
	        _extends({}, props, {
	          style: style,
	          ref: 'modalContainer',
	          className: _classnames2['default'](classSet, className)
	        }),
	        _react2['default'].createElement(
	          'div',
	          {
	            className: 'modal-inner',
	            ref: 'modal'
	          },
	          _react2['default'].createElement(
	            'div',
	            {
	              className: this.prefixClass('dialog')
	            },
	            this.renderHeader(),
	            _react2['default'].createElement(
	              'div',
	              {
	                className: this.prefixClass('body'),
	                ref: 'modalBody'
	              },
	              role === 'loading' ? children ? children : _react2['default'].createElement(_Loader2['default'], null) : children
	            ),
	            this.renderFooter()
	          )
	        )
	      );
	    }

	    return this.renderBackdrop(modal);
	  }
	});

	exports['default'] = Modal;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var bind = 'addEventListener';
	var unbind = 'removeEventListener';

	var Events = {
	  one: function one(node, eventNames, eventListener) {
	    var typeArray = eventNames.split(' ');
	    var recursiveFunction = function recursiveFunction(e) {
	      e.target.removeEventListener(e.type, recursiveFunction);
	      return eventListener(e);
	    };

	    for (var i = typeArray.length - 1; i >= 0; i--) {
	      this.on(node, typeArray[i], recursiveFunction);
	    }
	  },

	  /**
	   * Bind `node` event `eventName` to `eventListener`.
	   *
	   * @param {Element} node
	   * @param {String} eventName
	   * @param {Function} eventListener
	   * @param {Boolean} capture
	   * @return {Obejct}
	   * @api public
	   */

	  on: function on(node, eventName, eventListener, capture) {
	    node[bind](eventName, eventListener, capture || false);

	    return {
	      off: function off() {
	        node[unbind](eventName, eventListener, capture || false);
	      }
	    };
	  },

	  /**
	   * Unbind `node` event `eventName`'s callback `eventListener`.
	   *
	   * @param {Element} node
	   * @param {String} eventName
	   * @param {Function} eventListener
	   * @param {Boolean} capture
	   * @return {Function}
	   * @api public
	   */

	  off: function off(node, eventName, eventListener, capture) {
	    node[unbind](eventName, eventListener, capture || false);
	    return eventListener;
	  }
	};

	exports['default'] = Events;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var _Icon = __webpack_require__(14);

	var _Icon2 = _interopRequireDefault(_Icon);

	var NavBar = _react2['default'].createClass({
	  displayName: 'NavBar',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string,
	    title: _react2['default'].PropTypes.node,
	    leftNav: _react2['default'].PropTypes.array,
	    rightNav: _react2['default'].PropTypes.array,
	    titleOnLeft: _react2['default'].PropTypes.bool,
	    onSelect: _react2['default'].PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'navbar',
	      onSelect: function onSelect() {}
	    };
	  },

	  renderTitle: function renderTitle() {
	    var _props = this.props;
	    var titleOnLeft = _props.titleOnLeft;
	    var title = _props.title;

	    var titlePosition = this.prefixClass(titleOnLeft ? 'left' : 'center');

	    return title ? _react2['default'].createElement(
	      'h2',
	      {
	        className: _classnames2['default'](this.prefixClass('title'), titlePosition)
	      },
	      title
	    ) : this.props.children;
	  },

	  renderNav: function renderNav(position) {
	    var nav = this.props[position + 'Nav'];

	    return nav && Array.isArray(nav) ? _react2['default'].createElement(
	      'div',
	      {
	        className: _classnames2['default'](this.prefixClass('nav'), this.prefixClass(position))
	      },
	      nav.map(this.renderNavItem)
	    ) : null;
	  },

	  renderNavItem: function renderNavItem(item, index) {
	    var Component = item.component || 'a';
	    var itemProps = item.props || {};
	    var navTitle = item.title ? _react2['default'].createElement(
	      'span',
	      {
	        className: this.prefixClass('nav-title'),
	        key: 'title'
	      },
	      item.title
	    ) : null;
	    var navIconKey = 'icon';
	    var navIcon = item.customIcon ? _react2['default'].createElement('img', {
	      src: item.customIcon,
	      className: this.prefixClass('icon'),
	      alt: item.title || null,
	      key: navIconKey
	    }) : item.icon ? _react2['default'].createElement(_Icon2['default'], {
	      className: this.prefixClass('icon'),
	      name: item.icon,
	      key: navIconKey
	    }) : null;

	    return _react2['default'].createElement(
	      Component,
	      _extends({
	        href: item.href,
	        key: 'navbarNavItem' + index,
	        onClick: this.props.onSelect.bind(this, item)
	      }, itemProps, {
	        className: _classnames2['default'](this.prefixClass('nav-item'), itemProps.className)
	      }),
	      [navTitle, navIcon]
	    );
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props2 = this.props;
	    var title = _props2.title;
	    var className = _props2.className;

	    var props = _objectWithoutProperties(_props2, ['title', 'className']);

	    return _react2['default'].createElement(
	      'header',
	      _extends({}, props, {
	        className: _classnames2['default'](classSet, className)
	      }),
	      this.renderTitle(),
	      this.renderNav('left'),
	      this.renderNav('right')
	    );
	  }
	});

	exports['default'] = NavBar;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactAddonsCssTransitionGroup = __webpack_require__(3);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var _Icon = __webpack_require__(14);

	var _Icon2 = _interopRequireDefault(_Icon);

	// @see https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html
	// To improve reliability, CSSTransitionGroup will no longer listen to
	// transition events. Instead, you should specify transition durations
	// manually using props such as `transitionEnterTimeout={500}`.
	// NOTE: It should less than CSS animation duration, if not, the animation
	// be not smooth. It maybe a bug of React.
	var TRANSITION_TIMEOUT = 250;

	var Notification = _react2['default'].createClass({
	  displayName: 'Notification',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string.isRequired,
	    title: _react2['default'].PropTypes.string,
	    amStyle: _react2['default'].PropTypes.string,
	    closeBtn: _react2['default'].PropTypes.bool,
	    animated: _react2['default'].PropTypes.bool,
	    visible: _react2['default'].PropTypes.bool,
	    onDismiss: _react2['default'].PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'notification',
	      closeBtn: true,
	      onDismiss: function onDismiss() {}
	    };
	  },

	  renderCloseBtn: function renderCloseBtn() {
	    return this.props.closeBtn ? _react2['default'].createElement(_Icon2['default'], {
	      className: this.prefixClass('icon'),
	      name: 'close',
	      onClick: this.props.onDismiss
	    }) : null;
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var title = _props.title;
	    var className = _props.className;
	    var animated = _props.animated;
	    var visible = _props.visible;

	    var props = _objectWithoutProperties(_props, ['title', 'className', 'animated', 'visible']);

	    classSet[this.prefixClass('animated')] = animated;

	    var notificationBar = visible ? _react2['default'].createElement(
	      'div',
	      _extends({}, props, {
	        className: _classnames2['default'](classSet, className),
	        key: 'notification'
	      }),
	      _react2['default'].createElement(
	        'div',
	        { className: this.prefixClass('content') },
	        title ? _react2['default'].createElement(
	          'h3',
	          { className: this.prefixClass('title') },
	          title
	        ) : null,
	        this.props.children
	      ),
	      this.renderCloseBtn()
	    ) : null;

	    return animated ? _react2['default'].createElement(
	      _reactAddonsCssTransitionGroup2['default'],
	      {
	        component: 'div',
	        transitionName: 'notification',
	        transitionEnterTimeout: TRANSITION_TIMEOUT,
	        transitionLeaveTimeout: TRANSITION_TIMEOUT
	      },
	      notificationBar
	    ) : notificationBar;
	  }
	});

	exports['default'] = Notification;
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @see https://github.com/negomi/react-burger-menu
	 */

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var _mixinsBackdropMixin = __webpack_require__(29);

	var _mixinsBackdropMixin2 = _interopRequireDefault(_mixinsBackdropMixin);

	var OffCanvas = _react2['default'].createClass({
	  displayName: 'OffCanvas',

	  mixins: [_mixinsClassNameMixin2['default'], _mixinsBackdropMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string,
	    placement: _react2['default'].PropTypes.oneOf(['left', 'right']),
	    onDismiss: _react2['default'].PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'offcanvas',
	      placement: 'left'
	    };
	  },

	  handleBackdropClick: function handleBackdropClick(e) {
	    if (e && e.target === this.refs.backdrop) {
	      var onDismiss = this.props.onDismiss;

	      onDismiss && onDismiss();
	    }
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var placement = _props.placement;
	    var animation = _props.animation;
	    var className = _props.className;
	    var children = _props.children;
	    var isClosing = _props.isClosing;

	    var props = _objectWithoutProperties(_props, ['placement', 'animation', 'className', 'children', 'isClosing']);

	    classSet[this.prefixClass('out')] = isClosing;
	    classSet[this.prefixClass(placement)] = !!placement;
	    classSet[this.prefixClass(animation)] = !!animation;

	    var offCanvas = _react2['default'].createElement(
	      'div',
	      _extends({}, props, {
	        className: _classnames2['default'](classSet, className),
	        ref: 'overlay'
	      }),
	      children
	    );

	    return this.renderBackdrop(offCanvas);
	  }
	});

	exports['default'] = OffCanvas;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	exports['default'] = {
	  renderBackdrop: function renderBackdrop(children) {
	    var _classSet;

	    var onClick = this.handleBackdropClick || null;
	    var classSet = (_classSet = {}, _classSet[this.setClassNS('modal-backdrop')] = true, _classSet[this.setClassNS('modal-backdrop-out')] = this.props.isClosing, _classSet);

	    return _react2['default'].createElement(
	      'span',
	      null,
	      children,
	      _react2['default'].createElement('div', {
	        onClick: onClick,
	        ref: 'backdrop',
	        className: _classnames2['default'](classSet)
	      })
	    );
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(24);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var _mixinsOverlayMixin = __webpack_require__(31);

	var _mixinsOverlayMixin2 = _interopRequireDefault(_mixinsOverlayMixin);

	var _utilsCSSCore = __webpack_require__(13);

	var _utilsCSSCore2 = _interopRequireDefault(_utilsCSSCore);

	var _utilsTransitionEvents = __webpack_require__(12);

	var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);

	var _utilsCreateChainedFunction = __webpack_require__(32);

	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

	var OffCanvasTrigger = _react2['default'].createClass({
	  displayName: 'OffCanvasTrigger',

	  mixins: [_mixinsOverlayMixin2['default'], _mixinsClassNameMixin2['default']],

	  propTypes: {
	    defaultOffCanvasActive: _react2['default'].PropTypes.bool,
	    placement: _react2['default'].PropTypes.oneOf(['left', 'right']),
	    animation: _react2['default'].PropTypes.oneOf(['slide', 'push']),
	    offCanvas: _react2['default'].PropTypes.node.isRequired,
	    pageContainer: _react2['default'].PropTypes.node,
	    onOpen: _react2['default'].PropTypes.func,
	    onClosed: _react2['default'].PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      placement: 'left',
	      animation: 'slide',
	      onOpen: function onOpen() {},
	      onClosed: function onClosed() {}
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      offCanvasActive: this.props.defaultOffCanvasActive == null ? false : this.props.defaultOffCanvasActive,
	      isClosing: false
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    if (this.props.defaultOffCanvasActive) {
	      this.updateOffCanvasPosition();
	    }

	    this.setPageContainer();
	  },

	  open: function open() {
	    if (this.state.offCanvasActive) {
	      return;
	    }

	    this.setState({
	      offCanvasActive: true,
	      isClosing: false
	    }, function () {
	      this.props.onOpen();
	    });

	    if (this.isPush()) {
	      _utilsCSSCore2['default'].addClass(this.getContainerDOMNode(), this.getWithClassName());
	    }
	  },

	  close: function close() {
	    if (!this.state.offCanvasActive || this.state.isClosing) {
	      return;
	    }

	    this.setState({
	      isClosing: true
	    });

	    if (this.isPush()) {
	      var container = this.getContainerDOMNode();
	      _utilsCSSCore2['default'].removeClass(container, this.getWithClassName());
	      _utilsCSSCore2['default'].addClass(container, this.getClosingClassName());
	    }
	  },

	  handleClosed: function handleClosed() {
	    this.setState({
	      offCanvasActive: false,
	      isClosing: false
	    });

	    this.props.onClosed();

	    if (this.isPush()) {
	      _utilsCSSCore2['default'].removeClass(this.getContainerDOMNode(), this.getClosingClassName());
	    }
	  },

	  toggle: function toggle() {
	    this.state.offCanvasActive ? this.close() : this.open();
	  },

	  isPush: function isPush() {
	    return this.props.animation === 'push';
	  },

	  getPageContainer: function getPageContainer() {
	    var pageContainer = this.props.pageContainer;

	    return typeof pageContainer === 'string' ? document.querySelector(pageContainer) : _reactDom2['default'].findDOMNode(pageContainer);
	  },

	  setPageContainer: function setPageContainer() {
	    var pageContainer = this.getPageContainer();

	    if (pageContainer && this.isPush()) {
	      _utilsCSSCore2['default'].addClass(pageContainer, this.setClassNS('offcanvas-push-target'));
	    }
	  },

	  getWithClassName: function getWithClassName() {
	    return 'with-offcanvas-' + this.props.placement;
	  },

	  getClosingClassName: function getClosingClassName() {
	    return 'with-offcanvas-closing';
	  },

	  // used by Mixin
	  renderOverlay: function renderOverlay() {
	    var _this = this;

	    if (!this.state.offCanvasActive) {
	      return _react2['default'].createElement('span', null);
	    }

	    var offCanvas = this.props.offCanvas;
	    var isClosing = this.state.isClosing;

	    if (isClosing) {
	      (function () {
	        var node = _this.getOverlayDOMNode();
	        if (node) {
	          (function () {
	            var closedHandler = function closedHandler(e) {
	              if (e && e.target !== node) {
	                return;
	              }

	              _utilsTransitionEvents2['default'].off(node, closedHandler);
	              _this.handleClosed();
	            };

	            _utilsTransitionEvents2['default'].on(node, closedHandler);
	          })();
	        } else {
	          _this.handleClosed();
	        }
	      })();
	    }

	    return _react.cloneElement(offCanvas, {
	      placement: this.props.placement,
	      animation: this.props.animation,
	      isClosing: isClosing,
	      onDismiss: this.close
	    });
	  },

	  render: function render() {
	    var child = _react2['default'].Children.only(this.props.children);
	    var props = {
	      onClick: _utilsCreateChainedFunction2['default'](child.props.onClick, this.props.onClick)
	    };

	    props.onClick = _utilsCreateChainedFunction2['default'](this.toggle, props.onClick);

	    return _react.cloneElement(child, props);
	  }
	});

	exports['default'] = OffCanvasTrigger;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(24);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	/**
	 * Overlay Mixin
	 *
	 * @desc `overlay` is something like Popover, OffCavans, etc.
	 */

	exports['default'] = {
	  propTypes: {
	    container: _react2['default'].PropTypes.node
	  },

	  componentDidMount: function componentDidMount() {
	    this._renderOverlay();
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    this._renderOverlay();
	  },

	  // Remove Overlay related DOM node
	  componentWillUnmount: function componentWillUnmount() {
	    this._unmountOverlay();

	    if (this._overlayWrapper) {
	      this.getContainerDOMNode().removeChild(this._overlayWrapper);
	      this._overlayWrapper = null;
	    }
	  },

	  // Create Overlay wrapper
	  _mountOverlayWrapper: function _mountOverlayWrapper() {
	    this._overlayWrapper = document.createElement('div');
	    this.getContainerDOMNode().appendChild(this._overlayWrapper);
	  },

	  // Render Overlay to wrapper
	  _renderOverlay: function _renderOverlay() {
	    if (!this._overlayWrapper) {
	      this._mountOverlayWrapper();
	    }

	    var overlay = this.renderOverlay();

	    if (overlay !== null) {
	      this._overlayInstance = _reactDom2['default'].render(overlay, this._overlayWrapper);
	    } else {
	      // Unmount if the component is null for transitions to null
	      this._unmountOverlay();
	    }
	  },

	  // Remove a mounted Overlay from wrapper
	  _unmountOverlay: function _unmountOverlay() {
	    _reactDom2['default'].unmountComponentAtNode(this._overlayWrapper);
	    this._overlayInstance = null;
	  },

	  getOverlayDOMNode: function getOverlayDOMNode() {
	    if (!this.isMounted()) {
	      throw new Error('getOverlayDOMNode(): A component must be mounted to\n        have a DOM node.');
	    }

	    if (this._overlayInstance) {
	      // 包含 backdrop 时通过 refer 返回 overlay DOM 节点
	      return _reactDom2['default'].findDOMNode(this._overlayInstance.refs && this._overlayInstance.refs.overlay || this._overlayInstance);
	    }

	    return null;
	  },

	  getContainerDOMNode: function getContainerDOMNode() {
	    return _reactDom2['default'].findDOMNode(this.props.container) || document.body;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * modified version of:
	 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/utils/createChainedFunction.js
	 */

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} one
	 * @param {function} two
	 * @returns {function|null}
	 */

	'use strict';

	exports.__esModule = true;
	function createChainedFunction(one, two) {
	  var hasOne = typeof one === 'function';
	  var hasTwo = typeof two === 'function';

	  if (!hasOne && !hasTwo) {
	    return null;
	  }

	  if (!hasOne) {
	    return two;
	  }

	  if (!hasTwo) {
	    return one;
	  }

	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	exports['default'] = createChainedFunction;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(24);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var _mixinsBackdropMixin = __webpack_require__(29);

	var _mixinsBackdropMixin2 = _interopRequireDefault(_mixinsBackdropMixin);

	var Popover = _react2['default'].createClass({
	  displayName: 'Popover',

	  mixins: [_mixinsClassNameMixin2['default'], _mixinsBackdropMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string,
	    placement: _react2['default'].PropTypes.oneOf(['top', 'bottom', 'horizontal']),
	    positionLeft: _react2['default'].PropTypes.number,
	    positionTop: _react2['default'].PropTypes.number,
	    angleLeft: _react2['default'].PropTypes.number,
	    angleTop: _react2['default'].PropTypes.number,
	    anglePosition: _react2['default'].PropTypes.string,
	    onDismiss: _react2['default'].PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'popover'
	    };
	  },

	  handleBackdropClick: function handleBackdropClick(e) {
	    if (e && e.target === this.refs.backdrop) {
	      var onDismiss = this.props.onDismiss;

	      onDismiss && onDismiss();
	    }
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var className = _props.className;
	    var children = _props.children;
	    var positionLeft = _props.positionLeft;
	    var positionTop = _props.positionTop;
	    var angleLeft = _props.angleLeft;
	    var angleTop = _props.angleTop;
	    var anglePosition = _props.anglePosition;
	    var isClosing = _props.isClosing;
	    var placement = _props.placement;

	    var props = _objectWithoutProperties(_props, ['className', 'children', 'positionLeft', 'positionTop', 'angleLeft', 'angleTop', 'anglePosition', 'isClosing', 'placement']);

	    var style = {
	      left: positionLeft,
	      top: positionTop
	    };
	    var angleStyle = {
	      left: angleLeft,
	      top: angleTop
	    };

	    classSet[this.prefixClass('out')] = isClosing;
	    classSet[this.prefixClass(placement)] = placement;

	    var popover = _react2['default'].createElement(
	      'div',
	      _extends({}, props, {
	        style: style,
	        ref: 'overlay',
	        className: _classnames2['default'](classSet, className)
	      }),
	      _react2['default'].createElement(
	        'div',
	        { className: this.prefixClass('inner') },
	        children
	      ),
	      _react2['default'].createElement('div', {
	        style: angleStyle,
	        className: _classnames2['default'](this.prefixClass('angle'), anglePosition ? this.prefixClass('angle-' + anglePosition) : null)
	      })
	    );

	    return this.renderBackdrop(popover);
	  }
	});

	exports['default'] = Popover;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(24);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var _utilsTransitionEvents = __webpack_require__(12);

	var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);

	var _mixinsOverlayMixin = __webpack_require__(31);

	var _mixinsOverlayMixin2 = _interopRequireDefault(_mixinsOverlayMixin);

	var _utilsDomUtils = __webpack_require__(35);

	var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

	var _utilsCreateChainedFunction = __webpack_require__(32);

	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

	var PopoverTrigger = _react2['default'].createClass({
	  displayName: 'PopoverTrigger',

	  mixins: [_mixinsOverlayMixin2['default']],

	  propTypes: {
	    defaultPopoverActive: _react2['default'].PropTypes.bool,
	    popover: _react2['default'].PropTypes.node.isRequired,
	    onOpen: _react2['default'].PropTypes.func,
	    onClosed: _react2['default'].PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onOpen: function onOpen() {},
	      onClosed: function onClosed() {}
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      popoverActive: this.props.defaultPopoverActive == null ? false : this.props.defaultPopoverActive,
	      isClosing: false,
	      popoverLeft: null,
	      popoverTop: null,
	      placement: null
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    if (this.props.defaultPopoverActive) {
	      this.updatePopoverPosition();
	    }
	  },

	  open: function open() {
	    if (this.state.popoverActive) {
	      return;
	    }

	    this.setState({
	      popoverActive: true,
	      isClosing: false
	    }, function () {
	      this.updatePopoverPosition();
	      this.props.onOpen();
	    });
	  },

	  close: function close() {
	    if (!this.state.popoverActive) {
	      return;
	    }

	    this.setState({
	      isClosing: true
	    });
	  },

	  handleClosed: function handleClosed() {
	    this.setState({
	      popoverActive: false,
	      isClosing: false
	    });

	    this.props.onClosed();
	  },

	  toggle: function toggle() {
	    this.state.popoverActive ? this.close() : this.open();
	  },

	  updatePopoverPosition: function updatePopoverPosition() {
	    if (!this.isMounted()) {
	      return;
	    }

	    var position = this.calcPopoverPosition() || {};

	    this.setState({
	      popoverLeft: position.left,
	      popoverTop: position.top,
	      angleLeft: position.angleLeft,
	      angleTop: position.angleTop,
	      anglePosition: position.anglePosition,
	      placement: position.placement
	    });
	  },

	  calcPopoverPosition: function calcPopoverPosition() {
	    var targetOffset = this.getTriggerOffset();
	    var popoverNode = this.getOverlayDOMNode();

	    if (!popoverNode) {
	      return;
	    }

	    var popoverHeight = popoverNode.offsetHeight;
	    var popoverWidth = popoverNode.offsetWidth;
	    var targetHeight = targetOffset.height;
	    var targetWidth = targetOffset.width;

	    var windowHeight = window.innerHeight;
	    var windowWidth = window.innerWidth;
	    var anglePosition = undefined,
	        angleLeft = undefined,
	        angleTop = undefined;
	    var popoverAngleSize = 8;
	    var popoverTop = 0;
	    var popoverLeft = 0;
	    var diff = 0;
	    var popoverPosition = 'top';
	    var popoverTotalHeight = popoverHeight + popoverAngleSize;

	    // Popover Horizontal position
	    // Popover 高度小于 trigger 顶部偏移
	    if (popoverTotalHeight < targetOffset.top) {
	      // On top: trigger 顶部偏移 - Popover 高度
	      popoverTop = targetOffset.top - popoverHeight - popoverAngleSize;
	    } else if (popoverTotalHeight < windowHeight - targetOffset.top - targetHeight) {
	      // On bottom: Popover 高度小于 trigger 下方空白位置
	      popoverPosition = 'bottom';
	      popoverTop = targetOffset.top + targetHeight + popoverAngleSize;
	    } else {
	      // On middle: Popover 位于 trigger 的水平位置
	      popoverPosition = 'horizontal';
	      popoverTop = targetHeight / 2 + targetOffset.top - popoverHeight / 2;
	      diff = popoverTop;

	      if (popoverTop <= 0) {
	        popoverTop = 5;
	      } else if (popoverTop + popoverHeight >= windowHeight) {
	        popoverTop = windowHeight - popoverHeight - 5;
	      }

	      diff = diff - popoverTop;
	    }

	    // Popover Horizontal Position
	    if (popoverPosition === 'top' || popoverPosition === 'bottom') {
	      popoverLeft = targetWidth / 2 + targetOffset.left - popoverWidth / 2;
	      diff = popoverLeft;

	      if (popoverLeft < 5) {
	        popoverLeft = 5;
	      }

	      if (popoverLeft + popoverWidth > windowWidth) {
	        popoverLeft = windowWidth - popoverWidth - 5;
	      }

	      diff = diff - popoverLeft;
	      angleLeft = popoverWidth / 2 - popoverAngleSize + diff;
	      angleLeft = Math.max(Math.min(angleLeft, popoverWidth - popoverAngleSize * 2 - 6), 6);
	      anglePosition = popoverPosition === 'top' ? 'bottom' : 'top';
	    } else if (popoverPosition === 'horizontal') {
	      popoverLeft = targetOffset.left - popoverWidth - popoverAngleSize;
	      anglePosition = 'right';

	      if (popoverLeft < 5 || popoverLeft + popoverWidth > windowWidth) {
	        if (popoverLeft < 5) {
	          popoverLeft = targetOffset.left + targetWidth + popoverAngleSize;
	        }

	        if (popoverLeft + popoverWidth > windowWidth) {
	          popoverLeft = windowWidth - popoverWidth - 5;
	        }

	        anglePosition = 'left';
	      }
	      angleTop = popoverHeight / 2 - popoverAngleSize + diff;
	      angleTop = Math.max(Math.min(angleTop, popoverHeight - popoverAngleSize * 2 - 6), 6);
	    }

	    return {
	      top: popoverTop,
	      left: popoverLeft,
	      placement: popoverPosition,
	      angleLeft: angleLeft,
	      angleTop: angleTop,
	      anglePosition: anglePosition
	    };
	  },

	  getTriggerOffset: function getTriggerOffset() {
	    var node = _reactDom2['default'].findDOMNode(this);
	    var container = this.getContainerDOMNode();
	    var offset = container.tagName === 'BODY' ? _utilsDomUtils2['default'].offset(node) : _utilsDomUtils2['default'].position(node, container);

	    return _extends({}, offset, {
	      height: node.offsetHeight,
	      width: node.offsetWidth
	    });
	  },

	  // used by Mixin
	  renderOverlay: function renderOverlay() {
	    var _this = this;

	    if (!this.state.popoverActive) {
	      return _react2['default'].createElement('span', null);
	    }

	    var popover = this.props.popover;
	    var _state = this.state;
	    var isClosing = _state.isClosing;
	    var positionLeft = _state.popoverLeft;
	    var positionTop = _state.popoverTop;
	    var anglePosition = _state.anglePosition;
	    var angleLeft = _state.angleLeft;
	    var angleTop = _state.angleTop;
	    var placement = _state.placement;

	    if (isClosing) {
	      (function () {
	        var node = _this.getOverlayDOMNode();
	        if (node) {
	          (function () {
	            var closedHandler = function closedHandler(e) {
	              if (e && e.target !== node) {
	                return;
	              }

	              _utilsTransitionEvents2['default'].off(node, closedHandler);
	              _this.handleClosed();
	            };

	            _utilsTransitionEvents2['default'].on(node, closedHandler);
	          })();
	        }
	      })();
	    }

	    return _react.cloneElement(popover, {
	      positionLeft: positionLeft,
	      positionTop: positionTop,
	      angleLeft: angleLeft,
	      angleTop: angleTop,
	      anglePosition: anglePosition,
	      placement: placement,
	      isClosing: isClosing,
	      onDismiss: this.close
	    });
	  },

	  render: function render() {
	    var child = _react2['default'].Children.only(this.props.children);
	    var props = {
	      onClick: _utilsCreateChainedFunction2['default'](child.props.onClick, this.props.onClick)
	    };

	    props.onClick = _utilsCreateChainedFunction2['default'](this.toggle, props.onClick);

	    return _react.cloneElement(child, props);
	  }
	});

	exports['default'] = PopoverTrigger;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactDom = __webpack_require__(24);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	/**
	 * Get ownerDocument
	 * @param {ReactComponent|HTMLElement} componentOrElement
	 * @returns {HTMLDocument}
	 */
	function ownerDocument(componentOrElement) {
	  var element = _reactDom2['default'].findDOMNode(componentOrElement);

	  return element && element.ownerDocument || document;
	}

	/**
	 * Get ownerWindow
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 * @see https://github.com/jquery/jquery/blob/6df669f0fb87cd9975a18bf6bbe3c3548afa4fee/src/event.js#L294-L297
	 */
	function ownerWindow(element) {
	  var doc = ownerDocument(element);

	  return doc.defaultView || doc.parentWindow || window;
	}

	exports['default'] = {
	  ownerDocument: ownerDocument,

	  ownerWindow: ownerWindow,

	  scrollTop: function scrollTop(element, value) {
	    if (!element) {
	      return;
	    }

	    var hasScrollTop = ('scrollTop' in element);

	    if (value === undefined) {
	      return hasScrollTop ? element.scrollTop : element.pageYOffset;
	    }

	    hasScrollTop ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
	  },

	  offset: function offset(element) {
	    if (element) {
	      var rect = element.getBoundingClientRect();
	      var body = document.body;
	      var clientTop = element.clientTop || body.clientTop || 0;
	      var clientLeft = element.clientLeft || body.clientLeft || 0;
	      var scrollTop = window.pageYOffset || element.scrollTop;
	      var scrollLeft = window.pageXOffset || element.scrollLeft;

	      return {
	        top: rect.top + scrollTop - clientTop,
	        left: rect.left + scrollLeft - clientLeft
	      };
	    }

	    return null;
	  },

	  position: function position(element) {
	    return {
	      left: element.offsetLeft,
	      top: element.offsetTop
	    };
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @see https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Carousel.js
	 */

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(24);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var _utilsTransitionEvents = __webpack_require__(12);

	var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);

	var _Icon = __webpack_require__(14);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Touchable = __webpack_require__(37);

	var _Touchable2 = _interopRequireDefault(_Touchable);

	var Slider = _react2['default'].createClass({
	  displayName: 'Slider',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string,

	    controls: _react2['default'].PropTypes.bool, // prev/next icon
	    pager: _react2['default'].PropTypes.bool, // indicators or thumbs

	    slide: _react2['default'].PropTypes.bool, // what is this?
	    interval: _react2['default'].PropTypes.number, // interval
	    autoPlay: _react2['default'].PropTypes.bool,
	    loop: _react2['default'].PropTypes.bool, // loop slide

	    pauseOnHover: _react2['default'].PropTypes.bool,
	    // touch: React.PropTypes.bool,

	    onSelect: _react2['default'].PropTypes.func,
	    onSlideEnd: _react2['default'].PropTypes.func,
	    activeIndex: _react2['default'].PropTypes.number,
	    defaultActiveIndex: _react2['default'].PropTypes.number,
	    direction: _react2['default'].PropTypes.oneOf(['prev', 'next']),
	    prevIcon: _react2['default'].PropTypes.node,
	    nextIcon: _react2['default'].PropTypes.node
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'slider',
	      controls: true,
	      pager: true,
	      slide: true,
	      interval: 5000,
	      autoPlay: true,
	      loop: true,
	      pauseOnHover: true,
	      prevIcon: _react2['default'].createElement(_Icon2['default'], { name: 'left-nav' }),
	      nextIcon: _react2['default'].createElement(_Icon2['default'], { name: 'right-nav' })
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      activeIndex: this.props.defaultActiveIndex == null ? 0 : this.props.defaultActiveIndex,
	      previousActiveIndex: null,
	      direction: null
	    };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var activeIndex = this.getActiveIndex();

	    if (nextProps.activeIndex != null && nextProps.activeIndex !== activeIndex) {
	      clearTimeout(this.timeout);
	      this.setState({
	        previousActiveIndex: activeIndex,
	        direction: nextProps.direction != null ? nextProps.direction : this.getDirection(activeIndex, nextProps.activeIndex)
	      });
	    }
	  },

	  componentDidMount: function componentDidMount() {
	    this.props.autoPlay && this.waitForNext();
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    clearTimeout(this.timeout);
	  },

	  getDirection: function getDirection(prevIndex, index) {
	    if (prevIndex === index) {
	      return null;
	    }

	    return prevIndex > index ? 'prev' : 'next';
	  },

	  next: function next(e) {
	    e && e.preventDefault();

	    var index = this.getActiveIndex() + 1;
	    var count = _react2['default'].Children.count(this.props.children);

	    if (index > count - 1) {
	      if (!this.props.loop) {
	        return;
	      }
	      index = 0;
	    }

	    this.handleSelect(index, 'next');
	  },

	  prev: function prev(e) {
	    e && e.preventDefault();

	    var index = this.getActiveIndex() - 1;

	    if (index < 0) {
	      if (!this.props.loop) {
	        return;
	      }
	      index = _react2['default'].Children.count(this.props.children) - 1;
	    }

	    this.handleSelect(index, 'prev');
	  },

	  pause: function pause() {
	    this.isPaused = true;
	    clearTimeout(this.timeout);
	  },

	  play: function play() {
	    this.isPaused = false;
	    this.waitForNext();
	  },

	  waitForNext: function waitForNext() {
	    if (!this.isPaused && this.props.slide && this.props.interval && this.props.activeIndex == null) {
	      this.timeout = setTimeout(this.next, this.props.interval);
	    }
	  },

	  handleMouseOver: function handleMouseOver() {
	    if (this.props.pauseOnHover) {
	      this.pause();
	    }
	  },

	  handleMouseOut: function handleMouseOut() {
	    if (this.isPaused) {
	      this.play();
	    }
	  },

	  handleSwipeLeft: function handleSwipeLeft(e) {
	    // console.log('swipe left');
	    this.next();
	  },

	  handleSwipeRight: function handleSwipeRight(e) {
	    // console.log('swipe right....');
	    this.prev();
	  },

	  getActiveIndex: function getActiveIndex() {
	    return this.props.activeIndex != null ? this.props.activeIndex : this.state.activeIndex;
	  },

	  handleItemAnimateOutEnd: function handleItemAnimateOutEnd() {
	    this.setState({
	      previousActiveIndex: null,
	      direction: null
	    }, function () {
	      this.waitForNext();

	      if (this.props.onSlideEnd) {
	        this.props.onSlideEnd();
	      }
	    });
	  },

	  handleSelect: function handleSelect(index, direction, e) {
	    e && e.preventDefault();
	    clearTimeout(this.timeout);

	    var previousActiveIndex = this.getActiveIndex();

	    direction = direction || this.getDirection(previousActiveIndex, index);

	    if (this.props.onSelect) {
	      this.props.onSelect(index, direction);
	    }

	    if (this.props.activeIndex == null && index !== previousActiveIndex) {
	      if (this.state.previousActiveIndex != null) {
	        // If currently animating don't activate the new index.
	        // TODO: look into queuing this canceled call and
	        // animating after the current animation has ended.
	        return;
	      }

	      this.setState({
	        activeIndex: index,
	        previousActiveIndex: previousActiveIndex,
	        direction: direction
	      });
	    }
	  },

	  renderControls: function renderControls() {
	    return this.props.controls ? _react2['default'].createElement(
	      'div',
	      { className: this.prefixClass('control') },
	      _react2['default'].createElement(
	        _Touchable2['default'],
	        {
	          className: this.prefixClass('control-prev'),
	          onTap: this.prev,
	          stopPropagation: true
	        },
	        this.props.prevIcon
	      ),
	      _react2['default'].createElement(
	        _Touchable2['default'],
	        {
	          className: this.prefixClass('control-next'),
	          onTap: this.next,
	          stopPropagation: true
	        },
	        this.props.nextIcon
	      )
	    ) : null;
	  },

	  renderPager: function renderPager() {
	    var _this = this;

	    if (this.props.pager) {
	      var _ret = (function () {
	        var isThumbnailNav = false;

	        var children = _react2['default'].Children.map(_this.props.children, function (child, i) {
	          var className = i === _this.getActiveIndex() ? _this.setClassNS('active') : null;
	          var thumb = child.props.thumbnail;

	          if (!isThumbnailNav) {
	            isThumbnailNav = !!thumb;
	          }

	          return _react2['default'].createElement(
	            _Touchable2['default'],
	            {
	              component: 'li',
	              className: className,
	              key: i,
	              onTap: _this.handleSelect.bind(_this, i, null)
	            },
	            thumb ? _react2['default'].createElement('img', { src: thumb }) : null
	          );
	        });
	        var pagerClassName = _this.prefixClass(isThumbnailNav ? 'thumbs' : 'indicators');

	        return {
	          v: _react2['default'].createElement(
	            'ol',
	            {
	              className: _classnames2['default'](_this.prefixClass('pager'), pagerClassName)
	            },
	            children
	          )
	        };
	      })();

	      if (typeof _ret === 'object') return _ret.v;
	    }

	    return null;
	  },

	  renderItem: function renderItem(child, index) {
	    var activeIndex = this.getActiveIndex();
	    var isActive = index === activeIndex;
	    var isPreviousActive = this.state.previousActiveIndex != null && this.state.previousActiveIndex === index && this.props.slide;
	    var props = {
	      active: isActive,
	      ref: child.ref,
	      key: child.key ? child.key : index,
	      index: index,
	      animateOut: isPreviousActive,
	      animateIn: isActive && this.state.previousActiveIndex != null && this.props.slide,
	      direction: this.state.direction,
	      onAnimateOutEnd: isPreviousActive ? this.handleItemAnimateOutEnd : null
	    };

	    return _react2['default'].cloneElement(child, props);
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var className = _props.className;
	    var children = _props.children;

	    var props = _objectWithoutProperties(_props, ['className', 'children']);

	    return _react2['default'].createElement(
	      _Touchable2['default'],
	      _extends({}, props, {
	        component: 'div',
	        className: _classnames2['default'](classSet, className),
	        onMouseOver: this.handleMouseOver,
	        onMouseOut: this.handleMouseOut,
	        onSwipeLeft: this.handleSwipeLeft,
	        onSwipeRight: this.handleSwipeRight
	      }),
	      _react2['default'].createElement(
	        'ul',
	        { className: this.prefixClass('slides') },
	        _react2['default'].Children.map(children, this.renderItem)
	      ),
	      this.renderControls(),
	      this.renderPager()
	    );
	  }
	});

	Slider.Item = _react2['default'].createClass({
	  displayName: 'Item',

	  propTypes: {
	    direction: _react2['default'].PropTypes.oneOf(['prev', 'next']),
	    onAnimateOutEnd: _react2['default'].PropTypes.func,
	    active: _react2['default'].PropTypes.bool,
	    animateIn: _react2['default'].PropTypes.bool,
	    animateOut: _react2['default'].PropTypes.bool,
	    caption: _react2['default'].PropTypes.node,
	    index: _react2['default'].PropTypes.number,
	    thumbnail: _react2['default'].PropTypes.string
	  },

	  getInitialState: function getInitialState() {
	    return {
	      direction: null
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: true
	    };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this.props.active !== nextProps.active) {
	      this.setState({
	        direction: null
	      });
	    }
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    if (!this.props.active && prevProps.active) {
	      _utilsTransitionEvents2['default'].on(_reactDom2['default'].findDOMNode(this), this.handleAnimateOutEnd);
	    }

	    if (this.props.active !== prevProps.active) {
	      setTimeout(this.startAnimation, 20);
	    }
	  },

	  handleAnimateOutEnd: function handleAnimateOutEnd() {
	    if (this.props.onAnimateOutEnd && this.isMounted()) {
	      this.props.onAnimateOutEnd(this.props.index);
	    }
	  },

	  startAnimation: function startAnimation() {
	    if (!this.isMounted()) {
	      return;
	    }

	    this.setState({
	      direction: this.props.direction === 'prev' ? 'right' : 'left'
	    });
	  },

	  render: function render() {
	    var _props2 = this.props;
	    var className = _props2.className;
	    var active = _props2.active;
	    var animateIn = _props2.animateIn;
	    var animateOut = _props2.animateOut;
	    var direction = _props2.direction;

	    var classSet = {
	      active: active && !animateIn || animateOut,
	      next: active && animateIn && direction === 'next',
	      prev: active && animateIn && direction === 'prev'
	    };

	    if (this.state.direction && (animateIn || animateOut)) {
	      classSet[this.state.direction] = true;
	    }

	    return _react2['default'].createElement(
	      'li',
	      {
	        className: _classnames2['default'](className, classSet)
	      },
	      this.props.children
	    );
	  }
	});

	exports['default'] = Slider;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * React port of Zepto touch.
	 *
	 * @see https://github.com/joakimbeng/react-swiper
	 * @see https://github.com/dogfessional/react-swipeable
	 * @see https://github.com/damusnet/react-swipe-views
	 * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
	 * @see https://github.com/JedWatson/react-tappable
	 * @see https://github.com/madrobby/zepto/blob/master/src/touch.js
	 */

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _mixinsTouchableMixin = __webpack_require__(38);

	var _mixinsTouchableMixin2 = _interopRequireDefault(_mixinsTouchableMixin);

	var _utilsCreateChainedFunction = __webpack_require__(32);

	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

	var _utilsIsTouchSupported = __webpack_require__(39);

	var _utilsIsTouchSupported2 = _interopRequireDefault(_utilsIsTouchSupported);

	var Touchable = _react2['default'].createClass({
	  displayName: 'Touchable',

	  mixins: [_mixinsTouchableMixin2['default']],

	  propTypes: {
	    component: _react2['default'].PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      component: 'span'
	    };
	  },

	  render: function render() {
	    var _props = this.props;
	    var Component = _props.component;
	    var onTap = _props.onTap;

	    var props = _objectWithoutProperties(_props, ['component', 'onTap']);

	    if (_utilsIsTouchSupported2['default']) {
	      _extends(props, this.getTouchHandlers());
	    } else {
	      // handle `tap` as `click` on non-touch devices
	      props.onClick = _utilsCreateChainedFunction2['default'](props.onClick, onTap);
	    }

	    return _react2['default'].createElement(
	      Component,
	      props,
	      this.props.children
	    );
	  }
	});

	exports['default'] = Touchable;
	exports.Mixin = _mixinsTouchableMixin2['default'];

	// TODO: Mixin 里似乎没必要使用 state 记录事件相关信息
	// TODO: 添加 touch active className

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var TouchableMixin = {
	  propTypes: {
	    moveThreshold: _react2['default'].PropTypes.number,
	    tapDelay: _react2['default'].PropTypes.number,
	    pressDelay: _react2['default'].PropTypes.number,
	    preventDefault: _react2['default'].PropTypes.bool,
	    stopPropagation: _react2['default'].PropTypes.bool,

	    onSwipe: _react2['default'].PropTypes.func,
	    onSwipeLeft: _react2['default'].PropTypes.func,
	    onSwipeUp: _react2['default'].PropTypes.func,
	    onSwipeRight: _react2['default'].PropTypes.func,
	    onSwipeDown: _react2['default'].PropTypes.func,
	    onTap: _react2['default'].PropTypes.func,
	    onSingleTap: _react2['default'].PropTypes.func,
	    onDoubleTap: _react2['default'].PropTypes.func,
	    onPress: _react2['default'].PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      moveThreshold: 30,
	      tapDelay: 250,
	      pressDelay: 750,
	      preventDefault: true
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      startTouch: null,
	      endTouch: null,
	      touch: {},
	      deltaX: 0,
	      deltaY: 0
	    };
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this._cancelAll();
	  },

	  handleTouchStart: function handleTouchStart(e) {
	    // console.log('handle touchstart');
	    this.processEvent(e);

	    if (!e.touches) {
	      return;
	    }

	    var touch = this.state.touch;
	    var startTouch = e.touches[0];

	    if (e.touches.length === 1 && touch.x2) {
	      // Clear out touch movement data if we have it sticking around
	      // This can occur if touchcancel doesn't fire due to preventDefault, etc.
	      touch.x2 = undefined;
	      touch.y2 = undefined;
	    }

	    var now = Date.now();
	    var delta = now - (touch.last || now);

	    this._touchTimeout && clearTimeout(this._touchTimeout);

	    touch.x1 = startTouch.pageX;
	    touch.y1 = startTouch.pageY;

	    // if touchstart interval less than 250, handle as doubleTap
	    if (delta > 0 && delta <= this.props.tapDelay) {
	      touch.isDoubleTap = true;
	    }

	    // record last touch start time
	    touch.last = now;

	    // handle as `press` after 750ms
	    this._pressTimeout = setTimeout(this._handlePress, this.props.pressDelay);

	    this.setState({
	      startTouch: startTouch,
	      touch: touch
	    });
	  },

	  handleTouchMove: function handleTouchMove(e) {
	    this.processEvent(e);

	    var endTouch = e.touches[0];
	    var _state = this.state;
	    var touch = _state.touch;
	    var deltaX = _state.deltaX;
	    var deltaY = _state.deltaY;

	    this._cancelPress();

	    touch.x2 = endTouch.pageX;
	    touch.y2 = endTouch.pageY;

	    // finger moving distance
	    deltaX += Math.abs(touch.x1 - touch.x2);
	    deltaY += Math.abs(touch.y1 - touch.y2);

	    this.setState({
	      deltaX: deltaX,
	      deltaY: deltaY,
	      touch: touch,
	      endTouch: endTouch
	    });
	  },

	  handleTouchEnd: function handleTouchEnd(e) {
	    var _this = this;

	    this.processEvent(e);

	    this._cancelPress();

	    var _props = this.props;
	    var tapDelay = _props.tapDelay;
	    var moveThreshold = _props.moveThreshold;
	    var _state2 = this.state;
	    var touch = _state2.touch;
	    var startTouch = _state2.startTouch;
	    var endTouch = _state2.endTouch;
	    var deltaX = _state2.deltaX;
	    var deltaY = _state2.deltaY;

	    var event = {
	      touch: touch,
	      startTouch: startTouch,
	      endTouch: endTouch,
	      preventDefault: function preventDefault() {}
	    };

	    if (touch.x2 && Math.abs(touch.x1 - touch.x2) > moveThreshold || touch.y2 && Math.abs(touch.y1 - touch.y2) > moveThreshold) {

	      event.type = 'swipe';

	      this._swipeTimeout = setTimeout(function () {
	        _this._handleEvent(event);

	        event.type += _this._getSwipeDirection();
	        _this._handleEvent(event);
	        _this._resetTouch();
	      });
	    }
	    // normal tap
	    else if ('last' in touch) {
	        // don't fire tap when delta position changed by more than 30 pixels,
	        // for instance when moving to a point and back to origin
	        if (deltaX < moveThreshold && deltaY < moveThreshold) {
	          // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
	          // ('tap' fires before 'scroll')
	          this._tapTimeout = setTimeout(function () {
	            // trigger universal 'tap' with the option to cancelTouch()
	            // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
	            event.type = 'tap';
	            // event.cancelTouch = cancelAll;
	            _this._handleEvent(event);

	            // trigger double tap immediately
	            if (touch.isDoubleTap) {
	              event.type = 'doubleTap';
	              _this._handleEvent(event);
	              _this._resetTouch();
	            }
	            // trigger single tap after 250ms of inactivity
	            else {
	                _this._touchTimeout = setTimeout(function () {
	                  _this._touchTimeout = null;
	                  event.type = 'singleTap';
	                  _this._handleEvent(event);
	                  _this._resetTouch();
	                }, tapDelay);
	              }
	          }, 0);
	        } else {
	          this._resetTouch();
	        }
	      }
	  },

	  handleTouchCancel: function handleTouchCancel() {
	    this._cancelAll();
	  },

	  processEvent: function processEvent(e) {
	    this.props.preventDefault && e.preventDefault();
	    this.props.stopPropagation && e.stopPropagation();
	  },

	  _handlePress: function _handlePress() {
	    this._pressTimeout = null;
	    if (this.state.touch.last) {
	      this.props.onPress && this.props.onPress();
	      this._resetTouch();
	    }
	  },

	  _cancelPress: function _cancelPress() {
	    if (this._pressTimeout) {
	      clearTimeout(this._pressTimeout);
	    }

	    this._pressTimeout = null;
	  },

	  _cancelAll: function _cancelAll() {
	    if (this._touchTimeout) {
	      clearTimeout(this._touchTimeout);
	    }

	    if (this._tapTimeout) {
	      clearTimeout(this._tapTimeout);
	    }

	    if (this._swipeTimeout) {
	      clearTimeout(this._swipeTimeout);
	    }

	    if (this._pressTimeout) {
	      clearTimeout(this._pressTimeout);
	    }

	    this._touchTimeout = this._tapTimeout = this._swipeTimeout = this._pressTimeout = null;
	    this._resetTouch();
	  },

	  _getSwipeDirection: function _getSwipeDirection() {
	    var _state$touch = this.state.touch;
	    var x1 = _state$touch.x1;
	    var x2 = _state$touch.x2;
	    var y1 = _state$touch.y1;
	    var y2 = _state$touch.y2;

	    // 水平方向：水平距离大于等于垂直距离
	    // 垂直方向：
	    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
	  },

	  _resetTouch: function _resetTouch() {
	    this.setState(this.getInitialState());
	  },

	  _getEventMethodName: function _getEventMethodName(type) {
	    return 'on' + type.charAt(0).toUpperCase() + type.slice(1);
	  },

	  _handleEvent: function _handleEvent(event) {
	    var method = this._getEventMethodName(event.type);
	    this.props[method] && this.props[method](event);
	  },

	  getTouchHandlers: function getTouchHandlers() {
	    return {
	      onTouchStart: this.handleTouchStart,
	      onTouchEnd: this.handleTouchEnd,
	      onTouchCancel: this.handleTouchCancel,
	      onTouchMove: this.handleTouchMove
	    };
	  }
	};

	exports['default'] = TouchableMixin;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	exports.__esModule = true;
	var supportTouch = !!('ontouchstart' in global || global.DocumentTouch && document instanceof DocumentTouch);

	exports['default'] = supportTouch;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var Switch = _react2['default'].createClass({
	  displayName: 'Switch',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string.isRequired,
	    name: _react2['default'].PropTypes.string,
	    amStyle: _react2['default'].PropTypes.string,
	    onValueChange: _react2['default'].PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'switch',
	      onValueChange: function onValueChange() {}
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var name = _props.name;
	    var className = _props.className;
	    var onValueChange = _props.onValueChange;

	    var props = _objectWithoutProperties(_props, ['name', 'className', 'onValueChange']);

	    return _react2['default'].createElement(
	      'label',
	      _extends({}, props, {
	        className: _classnames2['default'](classSet, className)
	      }),
	      _react2['default'].createElement('input', {
	        onChange: onValueChange.bind(this),
	        name: name,
	        type: 'checkbox',
	        ref: 'field'
	      }),
	      _react2['default'].createElement('span', { className: this.prefixClass('label') })
	    );
	  }
	});

	exports['default'] = Switch;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var _Icon = __webpack_require__(14);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Badge = __webpack_require__(15);

	var _Badge2 = _interopRequireDefault(_Badge);

	// TODO: 默认的选中处理
	var TabBar = _react2['default'].createClass({
	  displayName: 'TabBar',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string,
	    component: _react2['default'].PropTypes.node,
	    amStyle: _react2['default'].PropTypes.string,
	    onSelect: _react2['default'].PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tabbar',
	      component: 'nav',
	      onSelect: function onSelect() {}
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var Component = _props.component;
	    var className = _props.className;
	    var children = _props.children;
	    var onSelect = _props.onSelect;

	    var props = _objectWithoutProperties(_props, ['component', 'className', 'children', 'onSelect']);

	    return _react2['default'].createElement(
	      Component,
	      _extends({}, props, {
	        className: _classnames2['default'](classSet, className)
	      }),
	      _react2['default'].Children.map(children, function (child, index) {
	        var _child$props = child.props;
	        var key = _child$props.key;
	        var eventKey = _child$props.eventKey;
	        var onClick = _child$props.onClick;

	        var props = _objectWithoutProperties(_child$props, ['key', 'eventKey', 'onClick']);

	        var clickHandler = onClick || onSelect;
	        key = key || eventKey || index;
	        eventKey = eventKey || key;

	        return _react2['default'].createElement(TabBar.Item, _extends({}, props, {
	          onClick: clickHandler.bind(null, eventKey),
	          key: key,
	          eventKey: eventKey
	        }));
	      })
	    );
	  }
	});

	// TODO:
	//   Icon 应该支持用户自定义：
	//   React-native 采用 require('path/to/iocn') 的形式，
	//   这里可能需要再添加一个属性
	TabBar.Item = _react2['default'].createClass({
	  displayName: 'Item',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string,
	    component: _react2['default'].PropTypes.any,
	    icon: _react2['default'].PropTypes.string, // icon name
	    title: _react2['default'].PropTypes.string,
	    href: _react2['default'].PropTypes.string,
	    eventKey: _react2['default'].PropTypes.any,
	    badge: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
	    badgeStyle: _react2['default'].PropTypes.string,
	    selected: _react2['default'].PropTypes.bool, // alias of `active`
	    selectedIcon: _react2['default'].PropTypes.node },

	  // not supported now
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tabbar',
	      component: 'span',
	      onSelect: function onSelect() {}
	    };
	  },

	  renderBadge: function renderBadge() {
	    var _props2 = this.props;
	    var badge = _props2.badge;
	    var badgeStyle = _props2.badgeStyle;

	    return badge ? _react2['default'].createElement(
	      _Badge2['default'],
	      {
	        amStyle: badgeStyle || 'alert',
	        rounded: true },
	      badge
	    ) : null;
	  },

	  renderIcon: function renderIcon() {
	    var icon = this.props.icon;

	    return icon ? _react2['default'].createElement(
	      _Icon2['default'],
	      { name: icon, key: 'tabbarIcon' },
	      this.renderBadge()
	    ) : null;
	  },

	  renderTitle: function renderTitle() {
	    var labelClassName = this.prefixClass('label');
	    var title = this.props.title;

	    return title ? _react2['default'].createElement(
	      'span',
	      {
	        className: labelClassName,
	        key: 'tabbarTitle'
	      },
	      title
	    ) : null;
	  },

	  render: function render() {
	    var classSet = this.getClassSet(true);
	    var _props3 = this.props;
	    var Component = _props3.component;
	    var className = _props3.className;

	    var props = _objectWithoutProperties(_props3, ['component', 'className']);

	    Component = this.props.href ? 'a' : Component;
	    // TODO: how to display badge when icon not set?

	    return _react2['default'].createElement(
	      Component,
	      _extends({}, props, {
	        className: _classnames2['default'](classSet, className, this.prefixClass('item'))
	      }),
	      [this.renderIcon(), this.renderTitle()]
	    );
	  }
	});

	exports['default'] = TabBar;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var _Button = __webpack_require__(16);

	var _Button2 = _interopRequireDefault(_Button);

	var _ButtonGroup = __webpack_require__(17);

	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

	var Tabs = _react2['default'].createClass({
	  displayName: 'Tabs',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string,
	    defaultActiveKey: _react2['default'].PropTypes.any,
	    onSelect: _react2['default'].PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tabs'
	    };
	  },

	  getInitialState: function getInitialState() {
	    var defaultActiveKey = this.props.defaultActiveKey != null ? this.props.defaultActiveKey : this.getDefaultActiveKey(this.props.children);

	    return {
	      activeKey: defaultActiveKey,
	      previousActiveKey: null
	    };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.activeKey != null && nextProps.activeKey !== this.props.activeKey) {
	      this.setState({
	        previousActiveKey: this.props.activeKey
	      });
	    }
	  },

	  getDefaultActiveKey: function getDefaultActiveKey(children) {
	    var defaultActiveKey = null;

	    _react2['default'].Children.forEach(children, function (child) {
	      if (defaultActiveKey == null) {
	        defaultActiveKey = child.props.eventKey;
	      }
	    });

	    return defaultActiveKey !== undefined ? defaultActiveKey : 0;
	  },

	  handleClick: function handleClick(key, disabled, e) {
	    e.preventDefault();
	    var activeKey = this.state.activeKey;

	    if (disabled) {
	      return null;
	    }

	    if (this.props.onSelect) {
	      this.props.onSelect(key);
	    }

	    if (activeKey !== key) {
	      this.setState({
	        activeKey: key,
	        previousActiveKey: activeKey
	      });
	    }
	  },

	  renderNav: function renderNav() {
	    var _this = this;

	    var activeKey = this.state.activeKey;

	    var navs = _react2['default'].Children.map(this.props.children, function (child, index) {
	      var _child$props = child.props;
	      var eventKey = _child$props.eventKey;
	      var key = _child$props.key;
	      var disabled = _child$props.disabled;
	      var navSize = _child$props.navSize;
	      var navStyle = _child$props.navStyle;

	      eventKey = eventKey !== undefined ? eventKey : index;
	      key = key === undefined ? index : key;
	      var active = eventKey === activeKey;

	      return _react2['default'].createElement(
	        _Button2['default'],
	        {
	          ref: 'tabNav' + key,
	          key: key,
	          onClick: _this.handleClick.bind(_this, key, disabled),
	          active: active,
	          disabled: disabled,
	          className: active ? 'active' : null,
	          amSize: navSize || 'sm',
	          amStyle: navStyle || 'primary',
	          hollow: true
	        },
	        child.props.title
	      );
	    });

	    return _react2['default'].createElement(
	      _ButtonGroup2['default'],
	      {
	        className: this.prefixClass('nav'),
	        justify: true
	      },
	      navs
	    );
	  },

	  renderTabPanels: function renderTabPanels() {
	    var activeKey = this.state.activeKey;
	    var panels = _react2['default'].Children.map(this.props.children, function (child, index) {
	      var _child$props2 = child.props;
	      var key = _child$props2.key;
	      var eventKey = _child$props2.eventKey;
	      var children = _child$props2.children;

	      if (eventKey === undefined) {
	        eventKey = index;
	      }

	      return _react2['default'].createElement(
	        Tabs.Item,
	        {
	          active: eventKey === activeKey,
	          enventKey: eventKey,
	          key: key ? key : 'tabPanel' + index
	        },
	        children
	      );
	    });

	    return _react2['default'].createElement(
	      'div',
	      {
	        className: this.prefixClass('body')
	      },
	      panels
	    );
	  },

	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var className = _props.className;

	    var props = _objectWithoutProperties(_props, ['className']);

	    return _react2['default'].createElement(
	      'div',
	      _extends({}, props, {
	        className: _classnames2['default'](classSet, className)
	      }),
	      this.renderNav(),
	      this.renderTabPanels()
	    );
	  }
	});

	Tabs.Item = _react2['default'].createClass({
	  displayName: 'Item',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string,
	    title: _react2['default'].PropTypes.node,
	    eventKey: _react2['default'].PropTypes.any,
	    disabled: _react2['default'].PropTypes.bool,
	    active: _react2['default'].PropTypes.bool,
	    navSize: _react2['default'].PropTypes.string,
	    navStyle: _react2['default'].PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tab'
	    };
	  },

	  render: function render() {
	    var classSet = this.getClassSet(true);
	    var _props2 = this.props;
	    var className = _props2.className;
	    var children = _props2.children;

	    var props = _objectWithoutProperties(_props2, ['className', 'children']);

	    classSet[this.prefixClass('panel')] = true;

	    return _react2['default'].createElement(
	      'div',
	      _extends({}, props, {
	        className: _classnames2['default'](classSet, className)
	      }),
	      children
	    );
	  }
	});

	exports['default'] = Tabs;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mixinsClassNameMixin = __webpack_require__(5);

	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);

	var View = _react2['default'].createClass({
	  displayName: 'View',

	  mixins: [_mixinsClassNameMixin2['default']],

	  propTypes: {
	    classPrefix: _react2['default'].PropTypes.string.isRequired,
	    component: _react2['default'].PropTypes.node.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'view',
	      component: 'div'
	    };
	  },

	  render: function render() {
	    var _props = this.props;
	    var component = _props.component;
	    var className = _props.className;

	    var props = _objectWithoutProperties(_props, ['component', 'className']);

	    return _react2['default'].createElement(component, _extends({}, props, {
	      className: _classnames2['default'](className, this.getClassSet())
	    }));
	  }
	});

	exports['default'] = View;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _BackdropMixinJs = __webpack_require__(29);

	var _BackdropMixinJs2 = _interopRequireDefault(_BackdropMixinJs);

	exports.BackdropMixin = _BackdropMixinJs2['default'];

	var _ClassNameMixinJs = __webpack_require__(5);

	var _ClassNameMixinJs2 = _interopRequireDefault(_ClassNameMixinJs);

	exports.ClassNameMixin = _ClassNameMixinJs2['default'];

	var _CollapseMixinJs = __webpack_require__(11);

	var _CollapseMixinJs2 = _interopRequireDefault(_CollapseMixinJs);

	exports.CollapseMixin = _CollapseMixinJs2['default'];

	var _OverlayMixinJs = __webpack_require__(31);

	var _OverlayMixinJs2 = _interopRequireDefault(_OverlayMixinJs);

	exports.OverlayMixin = _OverlayMixinJs2['default'];

	var _TouchableMixinJs = __webpack_require__(38);

	var _TouchableMixinJs2 = _interopRequireDefault(_TouchableMixinJs);

	exports.TouchableMixin = _TouchableMixinJs2['default'];

/***/ }
/******/ ])
});
;