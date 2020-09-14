jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"demo/test/integration/NavigationJourneyPhone",
		"demo/test/integration/NotFoundJourneyPhone",
		"demo/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});