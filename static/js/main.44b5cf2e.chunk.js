(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(9),a=(c(18),c(19),c(5)),s=c(2),r=(c(20),c(6)),j=c.n(r),i=c(0),l=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},o=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{to:"/",className:l,children:"Home"}),Object(i.jsx)(a.c,{to:"/people",className:l,children:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(s.b,{})})})]})},b=c(4),d=c(1),h=(c(22),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var O=function(e){var t=e.person,c=t.name,n=t.born,s=t.sex,r="".concat(c,"-").concat(n);return Object(i.jsx)(a.b,{to:"/people/".concat(r),className:j()({"has-text-danger":"f"===s}),children:c})},p=function(e){var t=e.people,c=Object(s.i)().personId;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var n=e.name,a=e.sex,s=e.born,r=e.died,l=e.motherName,o=e.fatherName,b="".concat(n,"-").concat(s),d=t.find((function(e){return e.name===l})),h=t.find((function(e){return e.name===o}));return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":b===c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(O,{person:e})}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:d?Object(i.jsx)(O,{person:d}):l||"-"}),Object(i.jsx)("td",{children:h?Object(i.jsx)(O,{person:h}):o||"-"})]},n)}))})]})},u=function(){var e=Object(d.useState)(null),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(d.useState)(!1),s=Object(b.a)(a,2),r=s[0],j=s[1];return Object(d.useEffect)((function(){x().then(n).catch((function(){return j(!0)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[!c&&!r&&Object(i.jsx)(h,{}),r&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),c&&!(null!==c&&void 0!==c&&c.length)&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c&&Object(i.jsx)(p,{people:c})]})})]})},m=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},f=function(){return Object(i.jsx)(a.a,{children:Object(i.jsx)(s.e,{children:Object(i.jsxs)(s.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)("h1",{className:"title",children:"Home page"})}),Object(i.jsx)(s.c,{path:"home",element:Object(i.jsx)(s.a,{replace:!0,to:"/"})}),Object(i.jsxs)(s.c,{path:"people/",children:[Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)(u,{})}),Object(i.jsx)(s.c,{path:":personId",element:Object(i.jsx)(u,{})})]}),Object(i.jsx)(s.c,{path:"*",element:Object(i.jsx)(m,{})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(f,{}))}},[[23,1,2]]]);
//# sourceMappingURL=main.44b5cf2e.chunk.js.map