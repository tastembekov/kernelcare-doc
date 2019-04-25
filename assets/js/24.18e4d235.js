(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{191:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("Zabbix Template for KernelCare")]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("You can download the plugin from "),r("a",{attrs:{href:"http://patches.kernelcare.com/downloads/nagios/check_kcare",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://patches.kernelcare.com/downloads/nagios/check_kcare"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("/usr/lib/zabbix/externalscripts")]),e._v(" "),r("p",[e._v("(or any other directory configured for Zabbix external check scripts)")]),e._v(" "),r("p",[e._v("Script options:")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("You can download Zabbix template at:")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://patches.kernelcare.com/downloads/nagios/kcare_zabbix_template.xml",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://patches.kernelcare.com/downloads/nagios/kcare_zabbix_template.xml"),r("OutboundLink")],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"zabbix-template"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zabbix-template","aria-hidden":"true"}},[this._v("#")]),this._v(" Zabbix Template")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("check_kcare")]),this._v(" is a Nagios/Zabbix plugin that provides a way to monitor the out of date and inactive servers. It can provide information on servers assigned to the KernelCare key, or for all the servers in partner account.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th"),e._v(" "),r("th")])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("-z")])]),e._v(" "),r("td",[e._v("Zabbix compatible format (Nagios otherwise)")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("-k KERNELCARE_KEY")])]),e._v(" "),r("td",[e._v("retrieve status for servers associated with KEY")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("-l PARTNER_LOGIN --api-token TOKEN")])]),e._v(" "),r("td",[e._v("retrieve status for all servers in partner account based on login/token")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("-c o,u,i -- return CRITICAL")])]),e._v(" "),r("td",[e._v("list of coma separate o, u & i."),r("br"),r("code",[e._v("o")]),e._v(" -out of date"),r("br"),r("code",[e._v("u")]),e._v(" - unknown kernel"),r("br"),r("code",[e._v("i")]),e._v(" - inactive server")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("-w o,u,i -- return WARNING")])]),e._v(" "),r("td",[e._v("list of coma separate o, u & i."),r("br"),r("code",[e._v("o")]),e._v(" - out of date"),r("br"),r("code",[e._v("u")]),e._v(" - unknown kernel"),r("br"),r("code",[e._v("i")]),e._v(" - inactive server")])])])])}],!1,null,null,null);t.default=o.exports}}]);