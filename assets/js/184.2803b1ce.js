(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{712:function(t,e,a){"use strict";a.r(e);var r=a(27),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"add-a-new-datasource-in-eap-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-a-new-datasource-in-eap-server"}},[t._v("#")]),t._v(" Add a New Datasource in EAP Server")]),t._v(" "),a("p",[t._v("With EAP should be enough to add a set of parameters the EntandoApp\ncustom resource.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Set the standardServerImage to eap")])]),t._v(" "),a("li",[a("p",[t._v("Add a "),a("code",[t._v("parameters")]),t._v(" object")])])]),t._v(" "),a("table",[a("caption",[t._v("Parameters environment variables reference")]),t._v(" "),a("colgroup",[a("col",{attrs:{width:"33%"}}),t._v(" "),a("col",{attrs:{width:"33%"}}),t._v(" "),a("col",{attrs:{width:"33%"}})]),t._v(" "),a("thead",[a("tr",{staticClass:"header"},[a("th",{attrs:{align:"left"}},[t._v("Env variable")]),t._v(" "),a("th",{attrs:{align:"left"}},[t._v("Value")]),t._v(" "),a("th",{attrs:{align:"left"}},[t._v("Example with PortDB")])])]),t._v(" "),a("tbody",[a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("DATASOURCES")])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[t._v('"PORTDB,SERVDB, <YOUR-DS-PREFIX>"')])]),t._v(" "),a("td",{attrs:{align:"left"}})]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("<YOUR-DS-PREFIX>_NONXA")])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[t._v("Defines the datasource as a non-XA datasource. Defaults to "),a("code",[t._v("false")])])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[a("code",[t._v('PORTDB_NONXA="true"')])])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("<YOUR-DS-PREFIX>_JTA")])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[t._v("Defines Java Transaction API (JTA) option for the non-XA datasource. The XA datasources are already JTA capable by default Defaults to "),a("code",[t._v("true")])])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[a("code",[t._v('PORTDB_JTA="false"')])])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("<YOUR-DS-PREFIX>_URL")])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[t._v("Defines connection URL for the datasource.")])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[a("code",[t._v('PORTDB_URL="jdbc:derby:/entando-data/databases/entandoPort;create=true"')])])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("<YOUR-DS-PREFIX>_JNDI")])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[t._v("Defines the JNDI name for the datasource. This setting is useful if you want to override the default generated JNDI name")])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[a("code",[t._v('PORTDB_JNDI="java:jboss/datasources/entandoPortDataSource"')])])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("<YOUR-DS-PREFIX>_DRIVER")])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[t._v("Defines Java database driver for the datasource")])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[a("code",[t._v('PORTDB_DRIVER="derby"')])])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("<YOUR-DS-PREFIX>_USERNAME")])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[t._v("Defines the username for the datasource")])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[a("code",[t._v('PORTDB_USERNAME="agile"')])])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("<YOUR-DS-PREFIX>_PASSWORD")])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[t._v("Defines the password for the datasource")])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[a("code",[t._v('PORTDB_PASSWORD="agile"')])])])]),t._v(" "),a("tr",{staticClass:"odd"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("<YOUR-DS-PREFIX>_SERVICE_HOST")])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[t._v("Defines the database server’s host name or IP address to be used in the datasource’s connection-url property.")])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[a("code",[t._v('PORTDB_SERVICE_HOST="dummy"')])])])]),t._v(" "),a("tr",{staticClass:"even"},[a("td",{attrs:{align:"left"}},[a("p",[t._v("<YOUR-DS-PREFIX>_SERVICE_PORT")])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[t._v("Defines the database server’s port for the datasource.")])]),t._v(" "),a("td",{attrs:{align:"left"}},[a("p",[a("code",[t._v('PORTDB_SERVICE_PORT="1527"')])])])])])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")])]),t._v(" "),a("p",[t._v("For more details on other standard variables check the "),a("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.1/html/red_hat_jboss_enterprise_application_platform_for_openshift/reference_information#db_service_prefix_mapping",target:"_blank",rel:"noopener noreferrer"}},[t._v("EAP\ndocumentation"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Here a potential example")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('apiVersion: entando.org/v1\nkind: "EntandoApp"\nmetadata:\n  annotations: {}\n  labels: {}\n  name: "quickstart"\nspec:\n  dbms: #tbd\n  replicas: 1\n  standardServerImage: eap\n  ingressPath: /entando-de-app\n  parameters:\n    DATASOURCES: "PORTDB,SERVDB,MYDATASOURCE"\n    MYDATASOURCE_NONXA: "true"\n    MYDATASOURCE_JTA: "false"\n    ...\n')])])]),a("h2",{attrs:{id:"other-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-resources"}},[t._v("#")]),t._v(" Other resources")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.1/html/red_hat_jboss_enterprise_application_platform_for_openshift/configuring_eap_openshift_image#Runtime-Artifacts",target:"_blank",rel:"noopener noreferrer"}},[t._v("EAP Official Documentation: Runtime\nArtifacts/Datasources"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);