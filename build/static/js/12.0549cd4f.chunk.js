(this.webpackJsonppic_bed=this.webpackJsonppic_bed||[]).push([[12],{277:function(e,r,n){"use strict";n.r(r);var t=n(94);function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],t=!0,a=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(c){a=!0,s=c}finally{try{t||null==o.return||o.return()}finally{if(a)throw s}}return n}}(e,r)||Object(t.a)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s,i,o=n(30),c=(n(0),n(80)),l=n(81),u=n(103),d=n(274),b=n(275),m=n(130),j=n(29),p=(n(25),n(9)),f=n(4),h=j.a.div(s||(s=Object(o.a)(["\n  max-width: 600px;\n  margin: 10vh auto;\n  box-shadow: 0 4px 8px 0 rgba(28,31,33,.1);\n  padding: 20px;\n  border-radius: 12px;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: white;\n\n"]))),x=j.a.h1(i||(i=Object(o.a)(["\n  text-align: center;\n"]))),y=Object(c.a)((function(){var e=Object(l.a)().AuthStore,r=Object(p.f)(),n=a(d.a.useForm(),1)[0];return Object(f.jsxs)(h,{children:[Object(f.jsx)(x,{children:"\u6ce8\u518c"}),Object(f.jsxs)(d.a,{name:"basic",form:n,labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:function(n){e.setUsername(n.username),e.setPassword(n.password),e.register().then((function(){console.log("\u6ce8\u518c\u6210\u529f\uff01"),r.push("/")})),console.log("Success:",n)},onFinishFailed:function(e){u.b.error("\u6ce8\u518c\u5931\u8d25")},children:[Object(f.jsx)(d.a.Item,{style:{width:360},label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\uff01"},{validator:function(e,r){return/\W/.test(r)?Promise.reject("\u7528\u6237\u540d\u53ea\u53ef\u4ee5\u5305\u542b\u5b57\u6bcd\u548c\u4e0b\u5212\u7ebf"):Promise.resolve()}}],children:Object(f.jsx)(b.a,{})}),Object(f.jsx)(d.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff01"},{min:4,message:"\u6700\u5c114\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u591a10\u4e2a\u5b57\u7b26"}],children:Object(f.jsx)(b.a.Password,{})}),Object(f.jsx)(d.a.Item,{label:"\u786e\u8ba4\u5bc6\u7801",name:"confirmPassword",rules:[{required:!0,message:"\u8bf7\u786e\u8ba4\u5bc6\u7801\uff01"},function(e){var r=e.getFieldValue;return{validator:function(e,n){return r("password")===n?Promise.resolve():Promise.reject("\u4e24\u6b21\u5bc6\u7801\u4e0d\u76f8\u540c")}}}],children:Object(f.jsx)(b.a.Password,{})}),Object(f.jsxs)(d.a.Item,{wrapperCol:{offset:8,span:16},children:[Object(f.jsx)(m.a,{type:"primary",htmlType:"submit",children:"\u6ce8\u518c"}),Object(f.jsx)(m.a,{type:"primary",danger:!0,style:{marginLeft:40},onClick:function(){n.resetFields()},children:"\u91cd\u7f6e"})]})]})]})}));r.default=y}}]);
//# sourceMappingURL=12.0549cd4f.chunk.js.map