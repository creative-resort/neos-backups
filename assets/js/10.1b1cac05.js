(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{212:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"backup-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-steps"}},[t._v("#")]),t._v(" Backup steps")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#file-directory-copy-step"}},[t._v("File/Directory copy step")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#site-export-step"}},[t._v("Site export step")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#mysql-table-export-step"}},[t._v("MySQL table export step")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#mysql-database-export-step"}},[t._v("MySQL database export step")])])]),t._v(" "),a("h2",{attrs:{id:"file-export-step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-export-step"}},[t._v("#")]),t._v(" File export step")]),t._v(" "),a("p",[t._v("This is an easy step to copy files and directories into the backup.")]),t._v(" "),a("p",[t._v("Example configuration:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Breadlesscode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Backups")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'Breadlesscode\\Backups\\Step\\CopyStep'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%FLOW_PATH_DATA%Logs'")]),t._v("\n")])])]),a("h2",{attrs:{id:"site-export-step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#site-export-step"}},[t._v("#")]),t._v(" Site export step")]),t._v(" "),a("p",[t._v("This step uses the Neos CMS site export functionality to export sites and its resources\ninto an XML-File.")]),t._v(" "),a("p",[t._v("Example configuration:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Breadlesscode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Backups")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'Breadlesscode\\Backups\\Step\\SiteExportStep'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"mysql-table-export-step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-table-export-step"}},[t._v("#")]),t._v(" MySQL table export step")]),t._v(" "),a("p",[t._v("This step exports MySQL tables via the "),a("code",[t._v("mysqldump")]),t._v(" binary.")]),t._v(" "),a("p",[t._v("Example configuration:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Breadlesscode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Backups")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'Breadlesscode\\Backups\\Step\\MysqlTableExportStep'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mysqlDumpBinPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mysqldump'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# default value")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mysqlBinPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mysql'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# default value")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tables")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" neos_flow_security_account\n")])])]),a("h2",{attrs:{id:"mysql-database-export-step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-database-export-step"}},[t._v("#")]),t._v(" MySQL database export step")]),t._v(" "),a("p",[t._v("This step exports a whole MySql-Database via the "),a("code",[t._v("mysqldump")]),t._v("-Binary.")]),t._v(" "),a("p",[t._v("Example configuration:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Breadlesscode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Backups")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'Breadlesscode\\Backups\\Step\\MysqlDatabaseExportStep'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mysqlDumpBinPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mysqldump'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mysqlBinPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mysql'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mysqlDumpOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("single"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("transaction\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("skip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("extended"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("insert\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);