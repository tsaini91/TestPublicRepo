function getScriptText(vScriptName) {

	vScriptName = vScriptName.toUpperCase();

	var emseBiz = aa.proxyInvoker.newInstance("com.accela.aa.emse.emse.EMSEBusiness").getOutput(),

		emseScript = emseBiz.getScriptByPK(aa.getServiceProviderCode(), vScriptName, "ADMIN");

	return emseScript.getScriptText() + ""

}



function getMasterScriptText(vScriptName) {

	vScriptName = vScriptName.toUpperCase();

	var emseBiz = aa.proxyInvoker.newInstance("com.accela.aa.emse.emse.EMSEBusiness").getOutput(),

		emseScript = emseBiz.getMasterScript(aa.getServiceProviderCode(), vScriptName);

	return emseScript.getScriptText() + ""

}



function mainProcess() {

	try {

		var today = formattedDate(new Date);

		"" != runDate && null != runDate || (runDate = today);

		var capModelResult = aa.cap.getCapModel();

		if (capModelResult.getSuccess()) {

			var capModel = capModelResult.getOutput();

			capModel.setCapStatus(appStatus);

			var capTypeModel = capModel.getCapType();

			"*" != appGroup && capTypeModel.setGroup(appGroup), "*" != appTypeType && capTypeModel.setType(appTypeType), "*" != appSubtype && capTypeModel.setSubType(appSubtype), "*" != appCategory && capTypeModel.setCategory(appCategory), capModel.setCapType(capTypeModel), capResult = aa.cap.getCapIDListByCapModel(capModel)

		}

		if (!capResult.getSuccess()) return logDebug("ERROR: Getting records, reason is: " + capResult.getErrorMessage()), !1;

		capList = capResult.getOutput(), runDate = formattedDate(dateAdd(runDate, -1)), aa.print("runDate: " + runDate);

		for (i in capList) {

			if (elapsed(startTime) > maxSeconds) {

				logDebug("A script time-out has caused partial completion of this process.  Please re-run.  " + elapsed() + " seconds elapsed, " + maxSeconds + " allowed."), timeExpired = !0;

				break

			}

			thisRec = capList[i], capId = thisRec.getCapID(), tmpCapObj = aa.cap.getCap(capId), altId = tmpCapObj.getSuccess() ? tmpCapObj.getOutput().getCapModel().getAltID() : null;

			var cap = aa.cap.getCap(capId).getOutput(),

				capStatus = (aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3()), cap.getCapStatus()),

				capType = cap.getCapType();

			capType.toString();

			if ("Permit Issued" == capStatus && !matches(capType, "Building/Right of Way/NA/NA", "Building/Application/Flood Plain Review/NA", "Building/Miscellaneous Request/NA/NA")) {

				var expDate = null,

					newPermitAInfo = new Array;

				if (loadAppSpecific(newPermitAInfo, capId), expDate = newPermitAInfo["GENERAL INFORMATION.Permit Expiration Date"], null != expDate && void 0 != expDate || (expDate = newPermitAInfo["GENERAL.Permit Expiration Date"], null != expDate && void 0 != expDate || (expDate = newPermitAInfo["PERMIT DATES.Permit Expiration Date"], null != expDate && void 0 != expDate || (expDate = newPermitAInfo["ELECTRICAL EQUIPMENT INFO.Permit Expiration Date"], null != expDate && void 0 != expDate || (expDate = newPermitAInfo["MECHANICAL EQUIPMENT INFO.Permit Expiration Date"], null != expDate && void 0 != expDate || (expDate = newPermitAInfo["DEMOLITION.Permit Expiration Date"], null != expDate && void 0 != expDate || (expDate = newPermitAInfo["FENCE INFORMATION.Permit Expiration Date"], null != expDate && void 0 != expDate || (expDate = newPermitAInfo["RE-ROOF INFORMATION.Permit Expiration Date"], null != expDate && void 0 != expDate || (expDate = newPermitAInfo["SOLAR SYSTEM INFORMATION.Permit Expiration Date"])))))))), null == expDate || void 0 == expDate);

				else if (expDate = formattedDate(expDate), expDate == runDate) {

					logDebug("Processing " + altId + ", status: " + capStatus + ", expires: " + expDate), closeTaskByCapId("Closure", "Expired", "Expired by Batch job", "Expired by Batch Job", capId);

					var workflowResult = aa.workflow.getTasks(capId);

					if (!workflowResult.getSuccess()) return logMessage("**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage()), !1;

					wfObj = workflowResult.getOutput();

					for (i in wfObj) fTask = wfObj[i], fTask.getActiveFlag().equals("Y") && deactivateTaskByCapId(fTask.getTaskDescription(), capId);

					procCount++

				}

			}

		}

		logDebug("tesdiufhisdfhsdfhgsdfhgsdifgsdfhpsdfigssdfgsdfgsgssesdiufhisdfhsdfhgsdfsdfgisdfhgsdfhpsdfigssdfgsdfgsgssesdiufhisdfhsdfhgsdfhgsdifhgisdfhgsdfhpsdfigssdfgsdfgsgssesdiufhisdfhsdfhgsdfhgsdifhgisdfhgsdfhpsdfigssdfgsdfgsgsstkirankiran------kiran" + br), logDebug("Total number of Permits Processed: " + procCount + br), logDebug("Total run time: " + elapsed() + br)

	} catch (err) {

		showMessage = !0, comment("Error on BATCH_BUILDING_PERMITS_ABOUT_TO_EXPIRE. Please contact system administrator. Err: " + err)

	}

}



function elapsed(stTime) {

	var thisDate = new Date,

		thisTime = thisDate.getTime();

	return (thisTime - stTime) / 1e3

}



function getParam(pParamName) {

	var ret = "" + aa.env.getValue(pParamName);

	return logDebug("Parameter : " + pParamName + " = " + ret), ret

}



function formattedDate(date) {

	var d = new Date(date || Date.now()),

		month = "" + (d.getMonth() + 1),

		day = "" + d.getDate(),

		year = d.getFullYear();

	return month.length < 2 && (month = "0" + month), day.length < 2 && (day = "0" + day), [month, day, year].join("/")

}



function getContactByTypeAA(conType, capId) {

	var contactArray = getPeople(capId);

	for (thisContact in contactArray)

		if (contactArray[thisContact].getCapContactModel().getContactType().toUpperCase() == conType.toUpperCase()) return contactArray[thisContact].getCapContactModel();

	return !1

}



function closeTaskByCapId(wfstr, wfstat, wfcomment, wfnote, itemCap) {

	var useProcess = !1,

		processName = "";

	6 == arguments.length && (processName = arguments[5], useProcess = !0);

	var workflowResult = aa.workflow.getTaskItems(itemCap, wfstr, processName, null, null, null);

	if (!workflowResult.getSuccess()) return logMessage("**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage()), !1;

	var wfObj = workflowResult.getOutput();

	wfstat || (wfstat = "NA");

	for (i in wfObj) {

		var fTask = wfObj[i];

		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase()) && (!useProcess || fTask.getProcessCode().equals(processName))) {

			var dispositionDate = aa.date.getCurrentDate(),

				stepnumber = fTask.getStepNumber(),

				processID = fTask.getProcessID();

			useProcess ? aa.workflow.handleDisposition(itemCap, stepnumber, processID, wfstat, dispositionDate, wfnote, wfcomment, systemUserObj, "Y") : aa.workflow.handleDisposition(itemCap, stepnumber, wfstat, dispositionDate, wfnote, wfcomment, systemUserObj, "Y"), logMessage("Closing Workflow Task: " + wfstr + " with status " + wfstat), logDebug("Closing Workflow Task: " + wfstr + " with status " + wfstat)

		}

	}

}



function deactivateTaskByCapId(wfstr, itemCap) {

	var useProcess = !1,

		processName = "";

	3 == arguments.length && (processName = arguments[2], useProcess = !0);

	var workflowResult = aa.workflow.getTaskItems(itemCap, wfstr, processName, null, null, null);

	if (!workflowResult.getSuccess()) return logMessage("**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage()), !1;

	var wfObj = workflowResult.getOutput();

	for (i in wfObj) {

		var fTask = wfObj[i];

		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase()) && (!useProcess || fTask.getProcessCode().equals(processName))) {

			var stepnumber = fTask.getStepNumber(),

				processID = fTask.getProcessID(),

				completeFlag = fTask.getCompleteFlag();

			useProcess ? aa.workflow.adjustTask(itemCap, stepnumber, processID, "N", completeFlag, null, null) : aa.workflow.adjustTask(itemCap, stepnumber, "N", completeFlag, null, null), logDebug("deactivating Workflow Task: " + wfstr)

		}

	}

}

var VS = "1",

	emailText = "",

	debugText = "",

	showDebug = !1,

	showMessage = !1,

	message = "",

	maxSeconds = 600,

	br = "<br>",

	useAppSpecificGroupName = !0;

sysDate = aa.date.getCurrentDate(), batchJobResult = aa.batchJob.getJobID(), batchJobName = "" + aa.env.getValue("BatchJobName"), wfObjArray = null;

var SCRIPT_VERSION = 3;

eval(getScriptText("INCLUDES_ACCELA_FUNCTIONS")), eval(getScriptText("INCLUDES_ACCELA_GLOBALS")), eval(getScriptText("INCLUDES_BATCH")), eval(getScriptText("INCLUDES_CUSTOM")), showDebug = !0, batchJobID = 0, batchJobResult.getSuccess() ? (batchJobID = batchJobResult.getOutput(), logDebug("Batch Job " + batchJobName + " Job ID is " + batchJobID)) : logDebug("Batch job ID not found " + batchJobResult.getErrorMessage()), logDebug("=========================");

var runDate = new Date,

	appGroup = "Building",

	appTypeType = "*",

	appSubtype = "*",

	appCategory = "*",

	appStatus = "Permit Issued",

	startDate = new Date,

	timeExpired = !1,

	startTime = startDate.getTime(),

	systemUserObj = aa.person.getUser("ADMIN").getOutput(),

	appType = appGroup + "/" + appTypeType + "/" + appSubtype + "/" + appCategory,

	currentUserID = "ADMIN",

	module = "Building",

	procCount = 0,

	emailParameters, emailFrom = "do_not_reply@mymanatee.org",

	emailTo, contactName, locationAddress, sendNotificationResult = null;

if (logDebug("Start of Job"), !timeExpired) try {

	mainProcess()

} catch (err) {

	logDebug("ERROR: " + err.message)

}