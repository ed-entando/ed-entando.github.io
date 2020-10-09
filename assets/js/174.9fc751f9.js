(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{691:function(e,t,n){"use strict";n.r(t);var a=n(27),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"tutorial-using-custom-event-for-widget-communication"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-using-custom-event-for-widget-communication"}},[e._v("#")]),e._v(" Tutorial: using custom event for widget communication")]),e._v(" "),n("p",[e._v("Entando 6 widgets can communicate through "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent",target:"_blank",rel:"noopener noreferrer"}},[e._v("Custom\nEvents"),n("OutboundLink")],1),e._v(",\nan established web standard.")]),e._v(" "),n("p",[e._v("In this tutorial we’re going to build two widgets: the angular one will\nfire an event, the react one will intercept it.")]),e._v(" "),n("h2",{attrs:{id:"fire-an-event-from-a-widget"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fire-an-event-from-a-widget"}},[e._v("#")]),e._v(" Fire an event from a widget")]),e._v(" "),n("p",[n("code",[e._v("ng new pub-widget-ng")])]),e._v(" "),n("p",[e._v("then follow the same steps or our "),n("a",{attrs:{href:"./create-angular-microfrontend-widget"}},[e._v("previous\ntutorial")])]),e._v(" "),n("p",[e._v("This time we need to add some form and custom event firing logic")]),e._v(" "),n("h3",{attrs:{id:"app-module-ts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#app-module-ts"}},[e._v("#")]),e._v(" app.module.ts")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("import { BrowserModule } from '@angular/platform-browser';\nimport { NgModule, Injector } from '@angular/core';\nimport { createCustomElement } from '@angular/elements';\nimport { AppComponent } from './app.component';\nimport { ReactiveFormsModule } from '@angular/forms';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    ReactiveFormsModule\n  ],\n  providers: [],\n  entryComponents: [AppComponent]\n})\nexport class AppModule {\n  constructor(private injector: Injector) {}\n\n  ngDoBootstrap() {\n    const el = createCustomElement(AppComponent, { injector: this.injector });\n    customElements.define('pub-widget-ng', el);\n  }\n}\n")])])]),n("h3",{attrs:{id:"app-component-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#app-component-js"}},[e._v("#")]),e._v(" app.component.js")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("import { Component } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\n\nconst EVENTS = {\n  greeting: 'greeting',\n};\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  greetingForm = new FormGroup({\n    name: new FormControl(''),\n  });\n\n  publishWidgetEvent(eventId, detail) {\n    const widgetEvent = new CustomEvent(eventId, { detail });\n    window.dispatchEvent(widgetEvent);\n  }\n\n  onSubmit() {\n    const name = this.greetingForm.get('name').value;\n    this.publishWidgetEvent(EVENTS.greeting, { name });\n  }\n}\n")])])]),n("blockquote",[n("p",[n("strong",[e._v("Note")])]),e._v(" "),n("p",[e._v("in the "),n("code",[e._v("CustomEvent")]),e._v(" constructor, "),n("code",[e._v("detail")]),e._v(" is the exact name to use in\nthe event payload, as for the\n"),n("a",{attrs:{href:"https://dom.spec.whatwg.org/#interface-customevent",target:"_blank",rel:"noopener noreferrer"}},[e._v("specs"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("h3",{attrs:{id:"app-template-html"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#app-template-html"}},[e._v("#")]),e._v(" app.template.html")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<h1>Send a greeting</h1>\n<form [formGroup]="greetingForm" (ngSubmit)="onSubmit()">\n  <label>\n    Name\n    <input type="text" formControlName="name">\n  </label>\n  <button type="submit">Say hello!</button>\n</form>\n')])])]),n("p",[e._v("To quickly test the event publishing we can execute from the JS console\nthis line of code")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("window.addEventListener('greeting', (evt) => console.log('Hello', evt.detail.name))\n")])])]),n("p",[e._v('Then write something in the text field, click the "Say hello!" button\nand have a look ath the JS console: it will show the expected hello\nmessage.')]),e._v(" "),n("h2",{attrs:{id:"consume-an-event-in-another-widget"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consume-an-event-in-another-widget"}},[e._v("#")]),e._v(" Consume an event in another widget")]),e._v(" "),n("p",[e._v("Now, let’s create the react subscriber widget.")]),e._v(" "),n("p",[n("code",[e._v("npx create-react-app sub-widget-react --use-npm")])]),e._v(" "),n("p",[e._v("then follow the same steps or our "),n("a",{attrs:{href:"./create-react-microfrontend-widget"}},[e._v("previous\ntutorial")]),e._v(".")]),e._v(" "),n("p",[e._v("Be careful to")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("rename "),n("code",[e._v("WidgetElement.js")]),e._v(" to "),n("code",[e._v("SubscriberWidgetElement.js")])])]),e._v(" "),n("li",[n("p",[e._v("edit "),n("code",[e._v("index.js")]),e._v(": now you should import "),n("code",[e._v("SubscriberWidgetElement")])])]),e._v(" "),n("li",[n("p",[e._v("edit "),n("code",[e._v("index.html")]),e._v(" updating the reference to the custom element: now\nit’s "),n("code",[e._v("<sub-widget-react>")])])]),e._v(" "),n("li",[n("p",[e._v("edit "),n("code",[e._v("SubscriberWidgetElement.js")]),e._v(" and "),n("code",[e._v("App.js")])])])]),e._v(" "),n("h3",{attrs:{id:"subscriberwidgetelement-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#subscriberwidgetelement-js"}},[e._v("#")]),e._v(" SubscriberWidgetElement.js")]),e._v(" "),n("p",[e._v("(we’re renaming "),n("code",[e._v("WidgetElement")]),e._v(" to "),n("code",[e._v("SubscriberWidgetElement")]),e._v(" and update\nthe import in "),n("code",[e._v("index.js")]),e._v(" accordingly)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\n\nconst EVENTS = {\n  greeting: 'greeting',\n};\n\nclass SubscriberWidgetElement extends HTMLElement {\n\n  constructor() {\n    super();\n    this.name = null;\n    this.subscribeToWidgetEvent(EVENTS.greeting, (evt) => this.onGreeting(evt.detail.name));\n  }\n\n  connectedCallback() {\n    this.mountPoint = document.createElement('div');\n    this.appendChild(this.mountPoint);\n    this.render();\n  }\n\n  subscribeToWidgetEvent(eventType, eventHandler) {\n    window.addEventListener(eventType, eventHandler);\n  }\n\n  onGreeting(name) {\n    this.name = name;\n    this.render();\n  }\n\n  render() {\n    ReactDOM.render(<App name={this.name} />, this.mountPoint);\n  }\n}\n\ncustomElements.define('sub-widget-react', SubscriberWidgetElement);\n\nexport default SubscriberWidgetElement;\n")])])]),n("h3",{attrs:{id:"app-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#app-js"}},[e._v("#")]),e._v(" App.js")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("import React from 'react';\nimport './App.css';\n\nfunction App({ name }) {\n  return name ? (<h2>Just got a greeting from {name}</h2>)\n    : (<h2>Waiting for a greeting...</h2>);\n}\n\nexport default App;\n")])])]),n("p",[e._v("To quickly test the event publishing we can execute from the JS console\nthese lines of code")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("const widgetEvent = new CustomEvent('greeting', {\n  detail: {\n    name: 'Pippo'\n  },\n});\nwindow.dispatchEvent(widgetEvent);\n")])])]),n("p",[e._v("And then the widget will update the text.")]),e._v(" "),n("h2",{attrs:{id:"make-both-widgets-work-in-entando"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#make-both-widgets-work-in-entando"}},[e._v("#")]),e._v(" Make both widgets work in Entando")]),e._v(" "),n("p",[e._v("To properly test widgets in an entando instance, follow those steps (you\ncan use the "),n("a",{attrs:{href:"./create-react-microfrontend-widget"}},[e._v("basic microfrontend\ntutorial")]),e._v(" as reference)")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("build both widgets")])]),e._v(" "),n("li",[n("p",[e._v("copy widget files")])]),e._v(" "),n("li",[n("p",[e._v("create widgets from App Builder")])]),e._v(" "),n("li",[n("p",[e._v("create a page model from App Builder")])]),e._v(" "),n("li",[n("p",[e._v("create a page and assign the just created page model")])]),e._v(" "),n("li",[n("p",[e._v("configure the page dragging both widget")])])]),e._v(" "),n("p",[e._v("If you need a simple page model, you can use this one")]),e._v(" "),n("p",[n("strong",[e._v("JSON Configuration")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('{\n  "frames": [\n    {\n      "pos": 0,\n      "descr": "Sample Frame",\n      "mainFrame": false,\n      "defaultWidget": null,\n      "sketch": null\n    },\n    {\n      "pos": 1,\n      "descr": "Sample Frame Two",\n      "mainFrame": false,\n      "defaultWidget": null,\n      "sketch": null\n    }\n  ]\n}\n')])])]),n("p",[n("strong",[e._v("Template")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<#assign wp=JspTaglibs["/aps-core"]>\n<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">\n<html>\n<head>\n    <title><@wp.currentPage param="title" /></title>\n</head>\n<body>\n<h1><@wp.currentPage param="title" /></h1>\n<div><@wp.show frame=0 /></div>\n<div><@wp.show frame=1 /></div>\n</body>\n</html>\n')])])]),n("p",[e._v("Now, go to the page you just created and you will find both widgets.\nWrite something in the publisher widget input, press the button and the\nsubscriber widget will update. Done!")])])}),[],!1,null,null,null);t.default=o.exports}}]);