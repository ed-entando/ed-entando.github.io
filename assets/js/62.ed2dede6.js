(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{486:function(e,t,n){e.exports=n.p+"assets/img/pda-architecture.55cf467c.png"},700:function(e,t,n){"use strict";n.r(t);var a=n(27),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"pda-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pda-architecture"}},[e._v("#")]),e._v(" PDA Architecture")]),e._v(" "),a("p",[e._v("The objective of this document is to provide an explanation for the components\nthat compose the Process Driven Applications plugin (PDA) architecture from a\ndeployment perspective as well as how they interact with each other.")]),e._v(" "),a("p",[e._v("The image below shows the components in high level:")]),e._v(" "),a("p",[a("img",{attrs:{src:n(486),alt:"PDA Architecture"}})]),e._v(" "),a("h2",{attrs:{id:"pda-mfes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pda-mfes"}},[e._v("#")]),e._v(" PDA MFEs")]),e._v(" "),a("p",[e._v("The PDA Micro Frontends run on the browser and they render the UI custom\ncomponents the user interacts with. These components are written in React and\nthey fetch data from the PDA API, passing the Keycloak token for authentication.\nThe MFEs also make calls to the Entando Core API in order to retrieve the\nsettings required for the configuration UI. These components will be available\non Entando App Builder after the PDA plugin bundle is installed and the user\ncan create pages with them.")]),e._v(" "),a("p",[e._v("The source code for this component:\n"),a("a",{attrs:{href:"https://github.com/entando/entando-process-driven-plugin/tree/master/widgets",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-process-driven-plugin/tree/master/widgets"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"pda-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pda-api"}},[e._v("#")]),e._v(" PDA API")]),e._v(" "),a("p",[e._v("The Spring Boot application that communicates with the engine and make its data\navailable in a Rest API. It interacts with Keycloak to validate the token and\nwith the sidecar to retrieve the connections/sensitive data, depending on how it\nwas deployed. The application shouldn't call specific engine classes directly,\ninstead it always calls the abstractions defined in PDA Core library. The engine\nimplementation to use is decided at runtime based on the connection details\nprovided. It is important to note that the PDA API application is stateless,\nsince it doesn't have a database. All data available on the API is retrieved\nfrom the BPM engine. After bundle installation, it will be deployed as a\nmicroservice in the Kubernetes infrastructure and an Ingress will be created to\nmake the API available to the MFEs, as described by the Entando Plugin custom\nresource.")]),e._v(" "),a("p",[e._v("The source code for this component:\n"),a("a",{attrs:{href:"https://github.com/entando/entando-process-driven-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-process-driven-plugin"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"sidecar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sidecar"}},[e._v("#")]),e._v(" Sidecar")]),e._v(" "),a("p",[e._v("The sidecar is another application (docker container) deployed in the same Pod\nas the PDA API. It exposes services to manage connection details, which will be\nstored as secrets in Kubernetes. The PDA API communicates with the sidecar to\nmanage BPM engine connection details.")]),e._v(" "),a("p",[e._v("The source code for this component:\n"),a("a",{attrs:{href:"https://github.com/entando/entando-plugin-sidecar",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/entando-plugin-sidecar"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"pda-core"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pda-core"}},[e._v("#")]),e._v(" PDA Core")]),e._v(" "),a("p",[e._v("This is the library that defines the interfaces and abstractions that should be\nimplemented to interact with specific BPM engines. This way it is possible to\nhave multiple engine implementations at the same time.")]),e._v(" "),a("p",[e._v("The source code for this component:\n"),a("a",{attrs:{href:"https://github.com/entando/pda-core-engine",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/pda-core-engine"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"pam-impl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pam-impl"}},[e._v("#")]),e._v(" PAM Impl")]),e._v(" "),a("p",[e._v("The Red Hat PAM implementation for the PDA Core library. If the connection maps\nto a PAM engine, these are the classes that are going to be executed when the\nPDA API requests for engine operations. This implementation communicates with\nthe Kie Server, which executes the defined process operations.")]),e._v(" "),a("p",[e._v("The source code for this component:\n"),a("a",{attrs:{href:"https://github.com/entando/pda-redhatpam-engine",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/entando/pda-redhatpam-engine"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=i.exports}}]);