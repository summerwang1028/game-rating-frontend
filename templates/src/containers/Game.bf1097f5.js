webpackJsonp([1],{141:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(27),a=function(e){return e&&e.__esModule?e:{default:e}}(r),u=void 0;u=a.default.create({baseURL:"https://game-rating-website.herokuapp.com",headers:{"Access-Control-Allow-Origin":"*"}}),t.default=u},54:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,u){try{var o=t[a](u),l=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});e(l)}return r("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(8),i=r(c),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),m=r(f),d=n(26),p=n(141),h=r(p),v=function(e){function t(e){u(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"",context:""},n.handleSubmit=n.handleSubmit.bind(n),n}return l(t,e),s(t,[{key:"handleSubmit",value:function(){function e(e){return t.apply(this,arguments)}var t=a(i.default.mark(function e(t){var n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={user:this.state.name,context:this.state.context,game:this.props.game._id},e.next=4,h.default.post("/comments",n);case 4:location.reload();case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this;return m.default.createElement("form",{onSubmit:this.handleSubmit},m.default.createElement("label",null,"Name:",m.default.createElement("input",{type:"text",value:this.state.name,onChange:function(t){e.setState({name:t.target.value})}})),m.default.createElement("label",null,"Context:",m.default.createElement("input",{type:"text",value:this.state.context,onChange:function(t){e.setState({context:t.target.value})}})),m.default.createElement("input",{type:"submit",value:"Post new comment"}))}}]),t}(m.default.Component),b=function(e){function t(e){u(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.fetchComments=n.fetchComments.bind(n),n.renderComments=n.renderComments.bind(n),n.deleteComment=n.deleteComment.bind(n),n.state={comments:[]},n}return l(t,e),s(t,[{key:"fetchComments",value:function(){function e(){return t.apply(this,arguments)}var t=a(i.default.mark(function e(){var t,n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.game,e.next=3,h.default.get("comments/game/"+t._id);case 3:n=e.sent,this.setState({comments:n.data});case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"componentWillMount",value:function(){this.fetchComments()}},{key:"deleteComment",value:function(){function e(e){return t.apply(this,arguments)}var t=a(i.default.mark(function e(t){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.default.delete("comments/"+t);case 2:location.reload();case 3:case"end":return e.stop()}},e,this)}));return e}()},{key:"renderComments",value:function(){var e=this;return this.state.comments.map(function(t,n){return m.default.createElement("div",{key:n},m.default.createElement("h2",null,t.context),m.default.createElement("h4",null,"Author: ",t.user),m.default.createElement("button",{onClick:function(n){e.deleteComment(t._id)}},"delete"),m.default.createElement("hr",null))})}},{key:"render",value:function(){return m.default.createElement("div",null,m.default.createElement(v,{game:this.props.game}),m.default.createElement("hr",null),this.renderComments())}}]),t}(m.default.Component);t.default=(0,d.withRouteData)(function(e){var t=e.game;return m.default.createElement("div",null,m.default.createElement(d.Link,{to:"/games/"},"<"," Back"),m.default.createElement("br",null),m.default.createElement("h1",null,"Game Name: ",t.title),m.default.createElement("br",null),m.default.createElement(b,{game:t}))})}});