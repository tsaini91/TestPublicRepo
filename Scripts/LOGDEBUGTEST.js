var showDebug = true;
	var showMessage = true;
	var debug = "";
	var message = "";
	var cancel = false;
	var br = "<br>";

	logDebug("testing logDebug function");
	message += "add info to message";
	aa.debug("tag", "testing aa.debug");
	aa.print("testing aa.print");
	aa.log("testing aa.log");

	if (debug.indexOf("**ERROR") > 0) {
		aa.env.setValue("ScriptReturnCode", "1");
		aa.env.setValue("ScriptReturnMessage", debug);
	} else {
		if (cancel) {
			aa.env.setValue("ScriptReturnCode", "1");
			if (showMessage) aa.env.setValue("ScriptReturnMessage", "<font color=red><b>Action Cancelled</b></font><br><br>" + message);
			if (showDebug) aa.env.setValue("ScriptReturnMessage", "<font color=red><b>Action Cancelled</b></font><br><br>" + debug);
		} else {
			aa.env.setValue("ScriptReturnCode", "0");
			if (showMessage) aa.env.setValue("ScriptReturnMessage", message);
			if (showDebug) aa.env.setValue("ScriptReturnMessage", debug);
		}
	}
	function logDebug(dstr) {
		vLevel = 1
		if (arguments.length > 1)
			vLevel = arguments[1];
		if ((showDebug & vLevel) == vLevel || vLevel == 1)
			debug += dstr + br;
		if ((showDebug & vLevel) == vLevel)
			aa.debug(aa.getServiceProviderCode() + " : " + aa.env.getValue("CurrentUserID"), dstr);
	}