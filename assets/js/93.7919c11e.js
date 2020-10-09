(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{585:function(e,t,a){"use strict";a.r(t);var i=a(27),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"list-of-attribute-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-of-attribute-types"}},[e._v("#")]),e._v(" List of Attribute Types")]),e._v(" "),a("h2",{attrs:{id:"objective"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[e._v("#")]),e._v(" Objective")]),e._v(" "),a("p",[e._v("This document provides a list and an overview of all available attribute\ntypes.")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Attributes can be seen as the smallest elements that compose a Content\nType. In other words, a Content Type is just a collection of different\nattributes. Attributes are responsible for carrying the actual\ninformation inside a Content in Entando and could be of different types.\nIn this chapter, we will review and describe the different attribute\ntypes.")]),e._v(" "),a("p",[e._v("Firstly, we can distinguish simple attribute types from composite\nattribute types. In the first case, the attribute type carries a single\npiece of information (for example, an image), while the latter is an\naggregation of simple attribute types (for example, a set of images).")]),e._v(" "),a("h2",{attrs:{id:"simple-attribute-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-attribute-types"}},[e._v("#")]),e._v(" Simple Attribute Types")]),e._v(" "),a("p",[e._v("Attach")]),e._v(" "),a("p",[e._v("This represents the information carried by a file, which is attached to\nthe content.")]),e._v(" "),a("p",[e._v("It consists of an URL corresponding to the desired file present in the\nsystem’s resources, and a text which can either indicate the description\nor the name of the file.")]),e._v(" "),a("p",[e._v("This attribute type is rendered as a button named “Add”. By pushing that\nbutton, the user is prompted to select a desired file present in the\nsystem’s Digital Assets Attachments list.")]),e._v(" "),a("p",[e._v("Boolean")]),e._v(" "),a("p",[e._v("This attribute type represents a boolean value which can either be true\nor false. This attribute type is rendered as two radio buttons labeled\n“Yes” and “No”.")]),e._v(" "),a("p",[e._v("Checkbox")]),e._v(" "),a("p",[e._v("This attribute type behaves in the same way as a Boolean does – it is\nactually an alternative to the Boolean attribute type - but it is\nrendered with a checkbox labeled “Yes” or “No”.")]),e._v(" "),a("p",[e._v("Date")]),e._v(" "),a("p",[e._v("This attribute type represents a date, tracking time within a content;\nit is often used to filter contents appearing in lists by publication\ndate, etc.")]),e._v(" "),a("p",[e._v("It is rendered as a datepicker.")]),e._v(" "),a("p",[e._v("Timestamp")]),e._v(" "),a("p",[e._v("This attribute type is specialized for the Date attribute, allowing you\nto also specify the hour, minute and second.")]),e._v(" "),a("p",[e._v("It is rendered as a datepicker for the date, and a select for hours,\nminutes and seconds.")]),e._v(" "),a("p",[e._v("Enumerator")]),e._v(" "),a("p",[e._v("The enumerator attribute type represents textual information with a\npredefined set of choices; it is defined by:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Elements which are mandatory and declares the set of available\nchoices;")])]),e._v(" "),a("li",[a("p",[e._v("Separator, which is optional and declares the character to use to\nseparate the arguments of the enumerator. By default the comma “,”\nis used.")])]),e._v(" "),a("li",[a("p",[e._v("ExtractorBean: this parameter represents the name of the Spring bean\nto use to process the values of the enumerator. The name must\nexactly match the id of the bean as defined in the Spring\nconfiguration file.")])])]),e._v(" "),a("p",[e._v("It is rendered as a select list.")]),e._v(" "),a("p",[e._v("Enumerator Map")]),e._v(" "),a("p",[e._v("The enumerator map attribute type represent textual information with a\npredefined set of choices; it is defined by:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Elements in the form of a separated list of key=value pairs, (i.e.\nkey1=value1,key2=value2)")])]),e._v(" "),a("li",[a("p",[e._v("Separator, which is optional and declares the character to use to\nseparate the key, values pairs. By default the comma is used.")])])]),e._v(" "),a("p",[e._v("It is rendered as a select list which shows the available values.")]),e._v(" "),a("p",[e._v("Hypertext")]),e._v(" "),a("p",[e._v("This attribute type holds HTML tagged text; it retains a single value\nfor all languages.")]),e._v(" "),a("p",[e._v("Even if this attribute type could support all HTML tags, we strongly\nrecommend using only tags which provide meaning and avoid those which\ndecorate or add graphics.")]),e._v(" "),a("p",[e._v("Hypertext attributes are rendered as a text area in the content edit\npage; if the CKEditor is active, the user has access to a set of\nadditional functionalities from a dedicated editor’s toolbar. Such as\ntable insertion and table manipulation, special characters insertion,\nstring formatting, links creation.")]),e._v(" "),a("p",[e._v("Image")]),e._v(" "),a("p",[e._v("This attribute type binds an image resource to the content.")]),e._v(" "),a("p",[e._v("The image is always taken from the Digital Assets images list. The user\nwill need to specify the description accompanying the image.")]),e._v(" "),a("p",[e._v("Usually attributes of type Image are not indexed and are not used to\nfilter contents.")]),e._v(" "),a("p",[e._v("It is rendered as a button named “Add” that, when pushed, allows the\nuser to select an image from the Digital Assets images list. Once\nselected the user is presented with a preview, as a thumbnail, of the\nimage and has the possibility to define some parameters:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Text which is mandatory and by default takes the name of the\nselected image")])]),e._v(" "),a("li",[a("p",[e._v("legend (optional)")])]),e._v(" "),a("li",[a("p",[e._v("alt (optional)")])]),e._v(" "),a("li",[a("p",[e._v("description (optional)")])]),e._v(" "),a("li",[a("p",[e._v("title (optional)")])])]),e._v(" "),a("p",[e._v("Link")]),e._v(" "),a("p",[e._v("This attribute type represents an hypertext link; it is normally used to\ninclude a link in your content: it is possible to define up to three\ndifferent types of links:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("external links: a link pointing to a location external to the Entando\nportal")])]),e._v(" "),a("li",[a("p",[e._v("link to page: a link which points to a page of the portal")])]),e._v(" "),a("li",[a("p",[e._v("link to a content: a link to another content")])])]),e._v(" "),a("p",[e._v("It is rendered as a button named “Add” that when pushed opens up a modal\nwindow from which the user can select the link type.")]),e._v(" "),a("p",[e._v("Longtext")]),e._v(" "),a("p",[e._v("This attribute type represents a simple unformatted text; it supports\nseveral languages and is normally used for small descriptions, when a\nshort string won’t suffice.")]),e._v(" "),a("p",[e._v("It supports minimum length , maximal length and regular expressions as\noptional parameters.")]),e._v(" "),a("p",[e._v("It is rendered as a textarea.")]),e._v(" "),a("p",[e._v("Monotext")]),e._v(" "),a("p",[e._v("Monotext represents the information in textual form, but supports only a\nlanguage; it is used for all")]),e._v(" "),a("p",[e._v("those fields which do not require localization.")]),e._v(" "),a("p",[e._v("It supports minimum length, maximal length, and regular expressions as\noptional parameters.")]),e._v(" "),a("p",[e._v("It is rendered as a textfield.")]),e._v(" "),a("p",[e._v("Number")]),e._v(" "),a("p",[e._v("This attribute type holds an integer number; it retains a single value\nfor all languages.")]),e._v(" "),a("p",[e._v("Supports the optional parameters: From, To, and Equal to.")]),e._v(" "),a("p",[e._v("It is rendered as a textfield.")]),e._v(" "),a("p",[e._v("Text")]),e._v(" "),a("p",[e._v("This attribute type holds a string; it retains a single value for all\nlanguages.")]),e._v(" "),a("p",[e._v("It supports minimum length, maximal length, and regular expressions as\noptional parameters.")]),e._v(" "),a("p",[e._v("It is rendered as a textfield.")]),e._v(" "),a("p",[e._v("ThreeState")]),e._v(" "),a("p",[e._v("Conceptually similar to the Boolean attribute, this attribute type\nallows a third status “Both” to be present.")]),e._v(" "),a("p",[e._v("It is rendered as a radio button with “Yes”, “No”, “Both” options.")]),e._v(" "),a("h2",{attrs:{id:"composed-attribute-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composed-attribute-types"}},[e._v("#")]),e._v(" Composed attribute types")]),e._v(" "),a("p",[e._v("All the attributes types of the previous chapter can only retain a\nsingle type of information, but sometimes it is desirable to aggregate\ndifferent types of attributes into one attribute: this is where composed\nattributes are used.")]),e._v(" "),a("p",[e._v("From a functional point of view, it would be perfectly legal to build a\ncontent type specifying all the attributes back to back: the content\nwould be formally complete, but from a logical point of view the\nattributes would appear mutually unrelated and, worse, the relationship\nbetween them would not be explicit.")]),e._v(" "),a("p",[e._v("Entando offers three types of composed attributes: List, Monolist,\nComposite.")]),e._v(" "),a("p",[e._v("List")]),e._v(" "),a("p",[e._v("This Attribute Type represents a set of independent and homogeneous\nelementary Attribute types, each associated with one of the languages\ndefined in the system.")]),e._v(" "),a("p",[e._v("An immediate consequence is that this kind of list can handle only\nmono-language basic attributes.")]),e._v(" "),a("p",[e._v("It is rendered with a button named “Add” that if pushed presents the\nuser a prompt to select or define the single elements which compose the\nlist.")]),e._v(" "),a("p",[e._v("Monolist")]),e._v(" "),a("p",[e._v("This attribute type is a list that is common to all the system\nlanguages; this kind of list handles multi-language and mono-language\nattributes.")]),e._v(" "),a("p",[e._v("It is rendered with a button named “Add” that, if pushed, presents the\nuser with a prompt to select or define the single elements that compose\nthe monolist.")]),e._v(" "),a("p",[e._v("Composite")]),e._v(" "),a("p",[e._v("This attribute type is an aggregate of different, non-homogeneous,\nsimple attributes types. The aggregation of different types is treated\nas a single unit.")]),e._v(" "),a("p",[e._v("It is rendered as a combination of the elementary attribute types, where\neach attribute type presents the proper rendering.")])])}),[],!1,null,null,null);t.default=n.exports}}]);