(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),o=a.n(r);a(12),a(13);function c(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"}),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Quote"),l.a.createElement("ul",{className:"dropdown-menu"},l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"/"},"Raise new quote")),l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"/"},"View existing quote"))))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlForfor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}function s(e){const[t,a]=Object(n.useState)("Enter text here");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#30507d"}},l.a.createElement("h1",null,e.heading," "),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:t,onChange:e=>{a(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#30507d"},id:"MyBox",rows:"5"})),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:()=>{let n=t.toUpperCase();a(n),e.showAlert("converted to uppercase","success")}}," Convert to uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:()=>{let n=t.toLowerCase();a(n),e.showAlert("converted to lowercase","success")}}," Convert to Lowercase")),l.a.createElement("div",{className:"container my-6",style:{color:"dark"===e.mode?"white":"#30507d"}},l.a.createElement("h2",null,"Your text summary"),l.a.createElement("p",null,t.split(" ").length," words and ",t.length," Characters"),l.a.createElement("p",null,.008*t.split(" ").length,"MInutes read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,t.length>0?t:"Enter something above to preview it here")))}function m(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,(e=>{const t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type)),":",e.alert.msg)}c.defaultProps={title:"Set title here",AboutText:"About"};var i=function(){const[e,t]=Object(n.useState)("light"),[a,r]=Object(n.useState)(null),o=(e,t)=>{r({msg:e,type:t}),setTimeout(()=>{r(null)},3e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(c,{title:"Hexagon",mode:e,toggleMode:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="#30507d",o("Dark mode has been enabled","success"),document.title="Hexagon - Dark Mode",setInterval(()=>{document.title="Hexagon is Software site"},2e3),setInterval(()=>{document.title="Grab the software now"},1500)):(t("light"),document.body.style.backgroundColor="white",o("Light mode has been enabled","success"),document.title="Hexagon - Light Mode")}}),l.a.createElement(m,{alert:a}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(s,{showAlert:o,heading:"Enter the text to analyse",mode:e})))};var d=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:o}=t;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null))),d()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.f28860af.chunk.js.map