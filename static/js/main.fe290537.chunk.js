(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),r=c(17),s=c.n(r),i=c(7),l=c.n(i),j=c(8),o=c(18),u=c(5),h=c(19),d=c.n(h);var b=function(e){return Object(n.jsx)("div",{className:"container".concat(e.fluid?"-fluid":""),children:e.children})};c(43);var O=function(){return Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("h1",{className:"title",children:"Employee Directory"})})};var m=function(e){return Object(n.jsx)("form",{children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Search:"}),Object(n.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search for a user profile.",id:"search"}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary",children:"Search"})]})})};var f=function(e){return Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:e.image,alt:e.first})}),Object(n.jsx)("td",{children:e.first}),Object(n.jsx)("td",{children:e.last}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:e.age}),Object(n.jsx)("td",{children:e.city}),Object(n.jsx)("td",{children:e.state})]})})};var x=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(""),i=Object(u.a)(s,2),h=i[0],x=i[1],p=Object(a.useState)(c),v=Object(u.a)(p,2),g=v[0],y=v[1];function S(){return N.apply(this,arguments)}function N(){return(N=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://randomuser.me/api/?results=100&nat=us");case 2:t=e.sent,console.log("[searchUsers]",t.data.results),r(t.data.results),y(t.data.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){console.log("using use effect"),S()}),[]);var C=g.map((function(e){return Object(n.jsx)(f,{first:e.name.first,last:e.name.last,image:e.picture.thumbnail,email:e.email,age:e.dob.age,state:e.location.state,city:e.location.city})}));return Object(n.jsxs)(b,{children:[Object(n.jsx)(O,{}),Object(n.jsx)(m,{value:h,handleInputChange:function(e){var t=e.target,c=t.name,n=t.value;"search"===c&&x(n),console.log("[handleInputChange]",n)},handleFormSubmit:function(e){console.log("[handleFormSubmit] called"),e.preventDefault(),x(e.target.value),S(h),console.log("[handleFormSubmit] checking inside searchUsers",h),y(c.filter((function(t){return t.indexOf(e.target.value)>-1})))}}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Image"}),Object(n.jsx)("th",{onClick:function(){var e=Object(j.a)(c).sort((function(e,t){var c=e.name.first,n=t.name.first;return c<n?-1:c>n?1:0}));r(e)},children:"First Name"}),Object(n.jsx)("th",{onClick:function(){var e=Object(j.a)(c).sort((function(e,t){var c=e.name.last,n=t.name.last;return c<n?-1:c>n?1:0}));r(e)},children:"Last Name"}),Object(n.jsx)("th",{children:"Email"}),Object(n.jsx)("th",{children:"Age"}),Object(n.jsx)("th",{children:"City"}),Object(n.jsx)("th",{children:"State"})]})}),C]})]})};var p=function(){return Object(n.jsx)(x,{})};s.a.render(Object(n.jsx)(p,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.fe290537.chunk.js.map