(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{579:function(e,t,n){n(177),n(580),e.exports=n(581)},581:function(e,t,n){"use strict";n.r(t),function(e){n(582);var t=n(76),a=n(77);Object(a.setOptions)({name:"Help Users Vote",url:"https://helpusersvote.com/add/website",addonPanelInRight:!0});t.configure(function(){return n(600)},e)}.call(this,n(276)(e))},582:function(e,t,n){var a=n(583);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(585)(a,o);a.locals&&(e.exports=a.locals)},583:function(e,t,n){(e.exports=n(584)(!1)).push([e.i,".Pane textarea {\n  background: none;\n  border: 1px solid;\n  padding: 4px 8px;\n  line-height: 20px;\n  box-sizing: border-box;\n}",""])},600:function(e,t,n){"use strict";n.r(t),function(e){var t=n(11),a=n.n(t),o=n(105),r=n.n(o),c=n(0),i=n.n(c),l=n(76),s=n(152),d=n(77),u=n(50),p=n(17),m=function(e){return Object.keys(e).map(function(t){return{prop:t,knob:function(e){switch(r()(e)){case"number":return u.number;case"boolean":return u.boolean;case"string":default:return u.text}}(e[t])(t,e[t])}}).reduce(function(e,t){var n=t.prop,a=t.knob;return e[n]=a,e})},f=function(e){return"```"+e+"```"},h={notes:{markdown:function(e){var t=e.name,n=e.defaultProps;return"\n# Installation\n\nYou can easily install this module with npm:\n\n".concat(f("$ npm install --save @helpusersvote/react"),"\n\nIf you just want this component, you can import it with:\n\n").concat(f("import { ".concat(t," } from '@helpusersvote/react")),"\n\n# Example\n\n").concat(f("\n<".concat(t,"\n").concat(function(e){return Object.keys(e).map(function(t){return"  ".concat(t,"=").concat(function(e){return"string"==typeof e?'"'.concat(e,'"'):"{".concat(e,"}")}(e[t]))}).join("\n")}(n),"\n/>")),"\n")}({defaultProps:p.a.defaultProps,name:"Banner",pkg:"banner"})}};function b(){throw new Error("simulated fake error for Storybook")}Object(l.storiesOf)("Banner",e).addDecorator(Object(d.withOptions)({showAddonPanel:!0})).addDecorator(Object(u.withKnobs)({escapeHTML:!1})).addDecorator(s.withNotes).add("Default Banner",function(){var e=m(p.a.defaultProps);return i.a.createElement(p.a,e)},h).add("Custom Call-to-Action",function(){var e=m(a()({},p.a.defaultProps,{ctaText:"Register in 2 minutes"}));return i.a.createElement(p.a,e)},h),Object(l.storiesOf)("Modal",e).addDecorator(Object(d.withOptions)({showAddonPanel:!0})).addDecorator(u.withKnobs).addDecorator(s.withNotes).add("Default Modal",function(){return i.a.createElement(p.c,null)}).add("Company Logo",function(){var e=Object(u.text)("Company Domain","segment.com");return i.a.createElement(p.c,{logoProps:{logoUrl:"https://logo.clearbit.com/".concat(e)}})}),Object(l.storiesOf)("Countdown",e).addDecorator(Object(d.withOptions)({showAddonPanel:!0})).addDecorator(u.withKnobs).addDecorator(s.withNotes).add("Default Countdown",function(){return i.a.createElement("div",{style:{padding:16}},"There are ",i.a.createElement(p.b,null)," left to election day!")}).add("Running Countdown",function(){return i.a.createElement("div",{style:{padding:16}},i.a.createElement("h2",{style:{margin:0}},i.a.createElement(p.b,{format:"running"}))," ",i.a.createElement("h4",{style:{margin:0,color:"gray"}},"days left"))}),Object(l.storiesOf)("Should Show CTA",e).addDecorator(Object(d.withOptions)({showAddonPanel:!0})).addDecorator(u.withKnobs).addDecorator(s.withNotes).add("Simple",function(){var e=Object(u.boolean)("Always show banner?");return i.a.createElement("div",{style:{padding:16}},i.a.createElement(p.e,{visible:e},i.a.createElement(p.a,null)),i.a.createElement(p.e,{visible:e,opposite:!0},i.a.createElement("code",null,"Note: Today is not Election Day or National Voter Registration Day. This won't show up in production.")))}).add("Based on state",function(){var e=Object(u.text)("State","California");return i.a.createElement("div",{style:{padding:16}},i.a.createElement(p.e,{state:e},i.a.createElement(p.a,null)),i.a.createElement(p.e,{state:e,opposite:!0},i.a.createElement("code",null,"Note: Today is not Election Day, National Voter Registration Day or"," ",e," voter registration deadline. This won't show up in production.")))}),Object(l.storiesOf)("Polling Place Finder",e).addDecorator(Object(d.withOptions)({showAddonPanel:!1})).add("Default",function(){return i.a.createElement("div",{className:"ph6 center"},i.a.createElement(p.d.Styles,null),i.a.createElement(p.d,null))}).add("Early Voting",function(){return i.a.createElement("div",{className:"ph6 center"},i.a.createElement(p.d.Styles,null),i.a.createElement(p.d,{type:"early"}))}).add("Error Preview",function(){return i.a.createElement("div",{className:"ph6 center"},i.a.createElement(p.d.Styles,null),i.a.createElement(p.d,null,i.a.createElement(b,null)))})}.call(this,n(276)(e))}},[[579,3,2]]]);
//# sourceMappingURL=iframe.e46f3fe3562bb362e11b.bundle.js.map