jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ProductSet in the list
// * All 3 ProductSet have at least one ToSalesOrderLineItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"demo/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"demo/test/integration/pages/App",
	"demo/test/integration/pages/Browser",
	"demo/test/integration/pages/Master",
	"demo/test/integration/pages/Detail",
	"demo/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "demo.view."
	});

	sap.ui.require([
		"demo/test/integration/MasterJourney",
		"demo/test/integration/NavigationJourney",
		"demo/test/integration/NotFoundJourney",
		"demo/test/integration/BusyJourney",
		"demo/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});