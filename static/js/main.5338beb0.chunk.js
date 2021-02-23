(this.webpackJsonpbacklog=this.webpackJsonpbacklog||[]).push([[0],{20:function(e,n,t){"use strict";t.r(n);var a,r,i,o,s,l,c,d,p,m,b,h,j,g,f=t(0),x=t.n(f),y=t(8),O=t.n(y),u=t(12),v=t(2),k=t(3),w="GBA",I="GCN",S="PS1",P="SNES/SFC",M=[{name:"Shin Megami Tensei",platform:P,started:!0,replay:!1},{name:"Shin Megami Tensei II",platform:P,started:!1,replay:!1},{name:"Panzer Dragoon",platform:"Saturn",started:!1,replay:!1},{name:"Advance Wars",platform:w,started:!1,replay:!1},{name:"Daemon X Machina",platform:"Switch",started:!1,replay:!1},{name:"Black",platform:"PS2",started:!1,replay:!1},{name:"Half Life Alyx",platform:"PC",started:!1,replay:!1},{name:"Symphony of the Night",platform:S,started:!1,replay:!1},{name:"Wario Land 4",platform:w,started:!1,replay:!0},{name:"God of War",platform:"PS4",started:!1,replay:!1},{name:"Rouge Leader: Rouge Squadron II",platform:I,started:!1,replay:!1},{name:"Metroid Prime",platform:I,started:!0,replay:!1},{name:"Metroid Prime II",platform:I,started:!1,replay:!1},{name:"Metroid Prime III",platform:I,started:!1,replay:!1},{name:"Vagrant Story",platform:S,started:!1,replay:!1},{name:"Yoshis Golden Island",platform:P,started:!1,replay:!1}],T=t(1),F=Object(k.a)(a||(a=Object(v.a)(["\n  * {\n    box-sizing: inherit;\n    outline: inherit;\n    margin: 0;\n  }\n  \n  html {\n    box-sizing: border-box;\n    outline: none;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    background-image: url('/backlog/assets/yoshi.gif');\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  p, a, h1 {\n    font-family: sans-serif;\n    color: white;\n  }\n"]))),z=k.b.div(r||(r=Object(v.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n  z-index: 1;\n"]))),B=k.b.div(i||(i=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n  max-width: 700px;\n  padding: 10px 10px;\n  background-color: rgba(0, 0, 0, 0.7);\n"]))),C=k.b.h1(o||(o=Object(v.a)(["\n  display: inline-block;\n  font-family: serif;\n  transform: scale(calc(7.3 / 3), 1);\n  transform-origin: top left;\n  font-size: 81px;\n  line-height: 67px;\n  margin-bottom: 20px;\n\n  @media only screen and (max-width: 700px) {\n    display: none;\n  }\n"]))),L=Object(k.b)(C)(s||(s=Object(v.a)(["\n  display: none;\n  @media only screen and (max-width: 700px) {\n    display: inline-block;\n  }\n"]))),G=k.b.div(l||(l=Object(v.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n"]))),A=k.b.a(c||(c=Object(v.a)(["\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),D=k.b.p(d||(d=Object(v.a)(["\n  font-size: 16px;\n  line-height: 20px;\n  margin-bottom: 50px;\n"]))),E=k.b.div(p||(p=Object(v.a)(["\n  display: flex;\n  justify-content: left;\n  margin-bottom: 5px;\n"]))),N=k.b.div(m||(m=Object(v.a)(["\n  margin-bottom: 50px;\n"]))),W=k.b.p(b||(b=Object(v.a)(["\n  margin-right: 20px;\n"]))),J=k.b.p(h||(h=Object(v.a)(["\n  opacity: 0.75;\n  margin-right: 10px;\n"]))),R=k.b.p(j||(j=Object(v.a)(["\n  opacity: 0.5;\n  margin-right: 10px;\n"]))),_=k.b.p(g||(g=Object(v.a)(["\n  opacity: 0.5;\n  margin-right: 10px;\n"]))),q=function(){var e=Object(f.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1];return Object(f.useEffect)((function(){for(var e=[],n=0;n<3;){var t=Math.floor(Math.random()*M.length);-1===e.indexOf(t)&&(e.push(t),n++)}a(e.map((function(e){return M[e]})))}),[]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(F,{}),Object(T.jsx)(z,{children:Object(T.jsxs)(B,{children:[Object(T.jsx)(C,{children:"Backlog"}),Object(T.jsxs)(L,{children:["Back",Object(T.jsx)("br",{}),"log"]}),Object(T.jsx)(G,{children:Object(T.jsx)(A,{href:"https://rdelos747.github.io/rdls/",children:"< back to main site"})}),Object(T.jsxs)(D,{children:["This page keeps track of the games that I plan on playing but haven't gotten around to yet, as well as those that I have actually started but have dropped and plan to complete. I often spend more time deciding on a new game to play than actually playing, so this page aims to assist by suggesting a few games to consider.",Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),"The first 3 games are randomly picked as suggestions. The Thats all this does for now. I might add more features in the future \xaf\\_(\u30c4)_/\xaf"]}),Object(T.jsx)(N,{children:t.map((function(e){return Object(T.jsxs)(E,{children:[Object(T.jsx)(W,{children:e.name}),Object(T.jsxs)(J,{children:["[",e.platform,"]"]}),e.replay&&Object(T.jsx)(R,{children:"(replay)"}),e.started&&Object(T.jsx)(_,{children:"(started)"})]},e.name)}))}),Object(T.jsx)(T.Fragment,{children:M.map((function(e){return Object(T.jsxs)(E,{children:[Object(T.jsx)(W,{children:e.name}),Object(T.jsxs)(J,{children:["[",e.platform,"]"]}),e.replay&&Object(T.jsx)(R,{children:"(replay)"}),e.started&&Object(T.jsx)(_,{children:"(started)"})]},e.name)}))})]})})]})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),i(e),o(e)}))};O.a.render(Object(T.jsx)(x.a.StrictMode,{children:Object(T.jsx)(q,{})}),document.getElementById("root")),H()}},[[20,1,2]]]);
//# sourceMappingURL=main.5338beb0.chunk.js.map