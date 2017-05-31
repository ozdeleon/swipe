/*!
 * React Swipe 2.2.7
 *
 * Felix Liu
 * Copyright 2016, MIT License
 *
*/
"use strict";function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.SwipeItem=exports.Swipe=void 0;var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_reactDom=require("react-dom"),_reactDom2=_interopRequireDefault(_reactDom),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),_swipejs=require("swipejs"),_swipejs2=_interopRequireDefault(_swipejs),noop=function(){},Swipe=function(a){function Swipe(){var a;_classCallCheck(this,Swipe);for(var b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];return _possibleConstructorReturn(this,(a=Swipe.__proto__||Object.getPrototypeOf(Swipe)).call.apply(a,[this].concat(c)))}return _inherits(Swipe,a),_createClass(Swipe,null,[{key:"propTypes",get:function(){return{className:_propTypes2.default.string,style:_propTypes2.default.object,startSlide:_propTypes2.default.number,speed:_propTypes2.default.number,auto:_propTypes2.default.number,draggable:_propTypes2.default.bool,continuous:_propTypes2.default.bool,autoRestart:_propTypes2.default.bool,disableScroll:_propTypes2.default.bool,stopPropagation:_propTypes2.default.bool,callback:_propTypes2.default.func,transitionEnd:_propTypes2.default.func}}},{key:"defaultProps",get:function(){return{className:"",style:{},startSlide:0,speed:300,auto:3e3,draggable:!1,continuous:!0,autoRestart:!1,disableScroll:!1,stopPropagation:!1,callback:noop,transitionEnd:noop}}}]),_createClass(Swipe,[{key:"componentDidMount",value:function(){var a=this.props,b=a.startSlide,c=a.speed,d=a.auto,e=a.draggable,f=a.continuous,g=a.autoRestart,h=a.disableScroll,i=a.stopPropagation,j=a.callback,k=a.transitionEnd;this.instance=new _swipejs2.default(this.refs.swipe,{startSlide:b,speed:c,auto:d,draggable:e,continuous:f,autoRestart:g,disableScroll:h,stopPropagation:i,callback:j,transitionEnd:k})}},{key:"componentWillUmount",value:function(){try{this.instance.kill()}catch(a){}}},{key:"cloneSwipeItem",value:function(a){var b=Object.assign({},a.props);return b=Object.assign(b,{ref:function(a){var b=_reactDom2.default.findDOMNode(a);b&&b.setAttribute("data-cloned",!0)},key:String(Math.random()).valueOf()}),delete b.id,_react2.default.createElement(SwipeItem,b,a.props.children)}},{key:"render",value:function(){var a=this.props,b=a.className,c=a.style,d=[].concat(this.props.children);return 2===d.length&&(d.push(this.cloneSwipeItem(d[0])),d.push(this.cloneSwipeItem(d[1]))),_react2.default.createElement("div",{ref:"swipe",className:"swipe "+(b||""),style:c},_react2.default.createElement("div",{className:"swipe-wrap"},d))}}]),Swipe}(_react2.default.Component),SwipeItem=function(a){function b(){var a;_classCallCheck(this,b);for(var c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];var f=_possibleConstructorReturn(this,(a=b.__proto__||Object.getPrototypeOf(b)).call.apply(a,[this].concat(d)));return f.state={},f}return _inherits(b,a),_createClass(b,null,[{key:"propTypes",get:function(){return{className:_propTypes2.default.string,onClick:_propTypes2.default.func,style:_propTypes2.default.object}}},{key:"defaultProps",get:function(){return{className:"",onClick:noop,style:{}}}}]),_createClass(b,[{key:"render",value:function(){var a=this.props,b=a.className,c=a.onClick,d=a.style,e=a.children;return _react2.default.createElement("div",{className:"swipe-item "+(b||""),onClick:c,style:d},e)}}]),b}(_react2.default.Component);exports.Swipe=Swipe,exports.SwipeItem=SwipeItem;