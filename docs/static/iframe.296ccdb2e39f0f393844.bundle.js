(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{604:function(e,t,n){n(188),n(605),e.exports=n(606)},606:function(e,t,n){"use strict";n.r(t),function(e){n(607);var t=n(71),a=n(72);Object(a.setOptions)({name:"Help Users Vote",url:"https://helpusersvote.com/add/website",addonPanelInRight:!0});t.configure(function(){return n(625)},e)}.call(this,n(287)(e))},607:function(e,t,n){var a=n(608);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(610)(a,o);a.locals&&(e.exports=a.locals)},608:function(e,t,n){(e.exports=n(609)(!1)).push([e.i,".Pane textarea {\n  background: none;\n  border: 1px solid;\n  padding: 4px 8px;\n  line-height: 20px;\n  box-sizing: border-box;\n}",""])},625:function(e,t,n){"use strict";n.r(t),function(e){var t=n(12),a=n.n(t),o=n(109),r=n.n(o),l=n(0),c=n.n(l),i=n(71),s=n(163),d=n(72),u=n(52),m=n(10),p=function(e){return Object.keys(e).map(function(t){return{prop:t,knob:function(e){switch(r()(e)){case"number":return u.number;case"boolean":return u.boolean;case"string":default:return u.text}}(e[t])(t,e[t])}}).reduce(function(e,t){var n=t.prop,a=t.knob;return e[n]=a,e})},f=function(e){return"```"+e+"```"},h={notes:{markdown:function(e){var t=e.name,n=e.defaultProps;return"\n# Installation\n\nYou can easily install this module with npm:\n\n".concat(f("$ npm install --save @helpusersvote/react"),"\n\nIf you just want this component, you can import it with:\n\n").concat(f("import { ".concat(t," } from '@helpusersvote/react")),"\n\n# Example\n\n").concat(f("\n<".concat(t,"\n").concat(function(e){return Object.keys(e).map(function(t){return"  ".concat(t,"=").concat(function(e){return"string"==typeof e?'"'.concat(e,'"'):"{".concat(e,"}")}(e[t]))}).join("\n")}(n),"\n/>")),"\n")}({defaultProps:m.b.defaultProps,name:"Banner",pkg:"banner"})}};Object(i.storiesOf)("Banner",e).addDecorator(Object(d.withOptions)({showAddonPanel:!0})).addDecorator(Object(u.withKnobs)({escapeHTML:!1})).addDecorator(s.withNotes).add("Default Banner",function(){var e=p(m.b.defaultProps);return c.a.createElement(m.b,e)},h).add("Custom Call-to-Action",function(){var e=p(a()({},m.b.defaultProps,{ctaText:"Register in 2 minutes"}));return c.a.createElement(m.b,e)},h),Object(i.storiesOf)("Modal",e).addDecorator(Object(d.withOptions)({showAddonPanel:!0})).addDecorator(u.withKnobs).addDecorator(s.withNotes).add("Default Modal",function(){return c.a.createElement(m.d,null)}).add("Company Logo",function(){var e=Object(u.text)("Company Domain","segment.com");return c.a.createElement(m.d,{logoProps:{logoUrl:"https://logo.clearbit.com/".concat(e)}})}),Object(i.storiesOf)("Countdown",e).addDecorator(Object(d.withOptions)({showAddonPanel:!0})).addDecorator(u.withKnobs).addDecorator(s.withNotes).add("Default Countdown",function(){return c.a.createElement("div",{style:{padding:16}},"There are ",c.a.createElement(m.c,null)," left to election day!")}).add("Running Countdown",function(){return c.a.createElement("div",{style:{padding:16}},c.a.createElement("h2",{style:{margin:0}},c.a.createElement(m.c,{format:"running"}))," ",c.a.createElement("h4",{style:{margin:0,color:"gray"}},"days left"))}),Object(i.storiesOf)("Should Show CTA",e).addDecorator(Object(d.withOptions)({showAddonPanel:!0})).addDecorator(u.withKnobs).addDecorator(s.withNotes).add("Simple",function(){var e=Object(u.boolean)("Always show banner?");return c.a.createElement("div",{style:{padding:16}},c.a.createElement(m.g,{visible:e},c.a.createElement(m.b,null)),c.a.createElement(m.g,{visible:e,opposite:!0},c.a.createElement("code",null,"Note: Today is not Election Day or National Voter Registration Day. This won't show up in production.")))}).add("Based on state",function(){var e=Object(u.text)("State","California");return c.a.createElement("div",{style:{padding:16}},c.a.createElement(m.g,{state:e},c.a.createElement(m.b,null)),c.a.createElement(m.g,{state:e,opposite:!0},c.a.createElement("code",null,"Note: Today is not Election Day, National Voter Registration Day or"," ",e," voter registration deadline. This won't show up in production.")))});function b(){throw new Error("simulated fake error for Storybook")}Object(i.storiesOf)("Polling Place Finder",e).addDecorator(Object(d.withOptions)({showAddonPanel:!1})).add("Default",function(){return c.a.createElement("div",{className:"ph5-ns ph2 pb4 center"},c.a.createElement(m.f.Styles,null),c.a.createElement(m.f,null))}).add("Early Voting",function(){return c.a.createElement("div",{className:"ph5-ns ph2 pb4 center"},c.a.createElement(m.f.Styles,null),c.a.createElement(m.f,{type:"early"}))}).add("Make a Plan",function(){var e=c.a.createElement("div",{className:"mb4"},c.a.createElement(m.e.Styles,null),c.a.createElement(m.e,null));return c.a.createElement("div",{className:"ph5-ns ph2 pb4 center"},c.a.createElement(m.f.Styles,null),c.a.createElement(m.f,{directionsChildren:e}))}).add("Election Day",function(){return c.a.createElement("div",{className:"ph5-ns ph2 pb4 center"},c.a.createElement(m.f.Styles,null),c.a.createElement(m.f,{electionDay:!0}))}).add("Not Found",function(){return c.a.createElement("div",{className:"ph5-ns ph2 pb4 center"},c.a.createElement(m.f.Styles,null),c.a.createElement(m.f,{notFound:!0,address:{line1:"123 Main St",city:"Farmsville",state:"VA"}}))}).add("Error Preview",function(){return c.a.createElement("div",{className:"ph5-ns ph2 pb4 center"},c.a.createElement(m.f.Styles,null),c.a.createElement(m.f,null,c.a.createElement(b,null)))}),Object(i.storiesOf)("Ballot",e).addDecorator(Object(d.withOptions)({showAddonPanel:!1})).add("Default",function(){return c.a.createElement("div",{className:"ph5-ns ph2 pb4 center"},c.a.createElement(m.f.Styles,null),c.a.createElement(m.a.Styles,null),c.a.createElement(m.a,null))})}.call(this,n(287)(e))}},[[604,3,2]]]);
//# sourceMappingURL=iframe.296ccdb2e39f0f393844.bundle.js.map