(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{72:function(t,e,n){"use strict";n.r(e);var r,s=n(50),a=n.n(s),i=n(42),c=n(51),o=n(52),l=n(53),u=n(56),j=n(11),d=n(0),h=n(116),b=n(114),p=n(109),m=n(115),O=n(117),g=n(118),x=n(110),v=n(119),f=n(120),y=n(112),L=n(121),E=n(122),N=n(2),A=function(t){var e=t.visibleGoods;return e.length?Object(N.jsx)(v.a,{elevation:8,sx:{width:"100%",maxWidth:360},children:Object(N.jsx)(f.a,{className:"Goods",disablePadding:!0,children:e.map((function(t,e,n){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(y.a,{className:"Goods__item",children:Object(N.jsx)(L.a,{primary:t})},"".concat(t)),e!==n.length-1&&Object(N.jsx)(E.a,{})]})}))})}):null},S=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(r||(r={}));var T={isStarted:!1,isInitial:!0,isReversed:!1,sortType:r.NONE,minLength:1},k=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state=Object(i.a)({},T),t.start=function(){return t.setState({isStarted:!0})},t.sort=function(e){return t.setState({sortType:e,isInitial:!1})},t.reverse=function(){return t.setState((function(t){return{isReversed:!t.isReversed,isInitial:!1}}))},t.adjustLength=function(e,n){return t.setState({minLength:+n,isInitial:!1})},t.reset=function(){return t.setState(Object(i.a)(Object(i.a)({},T),{},{isStarted:!0}))},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isStarted,s=e.isReversed,a=e.sortType,i=e.minLength,c=e.isInitial,o=function(t,e,n,s){var a=Object(j.a)(t).filter((function(t){return t.length>=s}));return a.sort((function(t,n){switch(e){case r.ALPABET:return t.localeCompare(n);case r.LENGTH:return t.length-n.length;default:return 0}})),n&&a.reverse(),a}(S,a,s,i);return Object(N.jsx)(h.a,{children:Object(N.jsxs)(b.a,{className:"App",container:!0,direction:"column",justifyContent:"flex-start",alignItems:"center",children:[Object(N.jsxs)(b.a,{className:"App__controls",item:!0,sx:{marginBottom:"24px"},children:[!n&&Object(N.jsx)(O.a,{type:"button",onClick:this.start,variant:"contained",color:"success",children:"Start"}),n&&Object(N.jsxs)(p.a,{direction:"column",spacing:2,children:[Object(N.jsxs)(g.a,{variant:"contained",children:[Object(N.jsx)(O.a,{type:"button",onClick:function(){return t.sort(r.ALPABET)},color:a===r.ALPABET?"success":"primary",children:"Sort alphabetically"}),Object(N.jsx)(O.a,{type:"button",onClick:function(){return t.sort(r.LENGTH)},color:a===r.LENGTH?"success":"primary",children:"Sort by length"}),Object(N.jsx)(O.a,{type:"button",onClick:this.reverse,color:s?"success":"primary",children:"Reverse"}),Object(N.jsx)(O.a,{type:"button",onClick:this.reset,color:"error",variant:c?"outlined":"contained",children:"Reset"})]}),Object(N.jsxs)(p.a,{direction:"row",spacing:2,children:[Object(N.jsx)(m.a,{variant:"button",display:"block",sx:{whiteSpace:"nowrap",margin:"auto"},children:"Minimal good's length: "}),Object(N.jsx)(x.a,{value:i,marks:!0,min:1,max:10,valueLabelDisplay:"auto",onChange:this.adjustLength})]})]})]}),n&&Object(N.jsx)(A,{visibleGoods:o})]})})}}]),n}(d.Component);a.a.render(Object(N.jsx)(k,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.04b1c374.chunk.js.map