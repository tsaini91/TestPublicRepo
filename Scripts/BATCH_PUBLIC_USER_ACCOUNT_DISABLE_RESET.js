//@ts-check
/*

Batch Job Script 
Name: Public User Account Disable Reset
Description: Run nightly to Disable/Reset Public User Accounts
Author: Jason Plaisted

*/

var SCRIPT_VERSION = "3";
eval(getScriptText("INCLUDES_ACCELA_FUNCTIONS",null, true));
eval(getScriptText("INCLUDES_ACCELA_GLOBALS",null, true));
eval(getScriptText("INCLUDES_CUSTOM",null, true));

var debug = "";
var showDebug = 1;
var testingMode = false;
var servProvCode = aa.getServiceProviderCode()
var StartDate;
// resetPesswordStart and resetPasswordEnd - number represents days ago (i.e. -1 is 1 day ago)
var resetPasswordDayStart = -2;
var resetPasswordDayEnd = -1;
// disableAccountStart - number represents days ago (i.e. -7 is 7 days ago)
var disableAccountDays = -7;

var useMSSQL = false;

// begin main process
var envsArr = loadEnvVars(true);
var runJob = startJob();

if(!isEmpty(envsArr["Reset Password Day Start"])){
    resetPasswordDayStart = parseInt(envsArr["Reset Password Day Start"]);
}
if(!isEmpty(envsArr["Reset Password Day End"])){
    resetPasswordDayEnd = parseInt(envsArr["Reset Password Day End"]);
}
if(!isEmpty(envsArr["Disable Account Days"])){
    disableAccountDays = parseInt(envsArr["Disable Account Days"]);
}
else{
    //disableAccountDays = null;
}

if (runJob) {

    try{
        // select the users to disable accounts
        if(!isEmpty(disableAccountDays)){
            var sqlStringDisableAccount
            if(useMSSQL){
                // Microsoft SQL
                sqlStringDisableAccount = "SELECT A.USER_SEQ_NBR FROM dbo.PUBLICUSER AS A INNER JOIN dbo.XPUBLICUSER_SERVPROV AS B ON A.USER_SEQ_NBR = B.USER_SEQ_NBR " + 
                "WHERE (A.NEED_CHANGE_PASSWORD = 'Y') AND (A.PASSWORD_EXPIR_DD < DATEADD(day, ?, GETDATE())) AND (B.REC_STATUS = 'A') AND (B.STATUS = 'ACTIVE') AND B.SERV_PROV_CODE = ?";
            }
            else{
                // Oracle SQL
                sqlStringDisableAccount = "SELECT A.USER_SEQ_NBR FROM PUBLICUSER A INNER JOIN XPUBLICUSER_SERVPROV B ON A.USER_SEQ_NBR = B.USER_SEQ_NBR " +
                "WHERE (A.NEED_CHANGE_PASSWORD = 'Y') AND (B.REC_STATUS = 'A') AND (B.STATUS = 'ACTIVE') AND (A.PASSWORD_EXPIR_DD < SYSDATE + ?) AND B.SERV_PROV_CODE = ?"

            }
            var parameters = [disableAccountDays,servProvCode];
            var selectResultDisableAccount = aa.db.select(sqlStringDisableAccount, parameters);
            logDebug("Disabling User Accounts Older Then: " + dateAdd(null,disableAccountDays))
            processPublicUserAccounts(selectResultDisableAccount,false,true);
        }
        else{
            logDebug("Skipping Disabling User Accounts - enable via Disable Account Days parameter");
        }
        
        
        // select the users to reset passwords
        var sqlStringResetPassword
        if(useMSSQL){
            // Microsoft SQL
            sqlStringResetPassword  = "SELECT A.USER_SEQ_NBR FROM dbo.PUBLICUSER AS A INNER JOIN dbo.XPUBLICUSER_SERVPROV AS B ON A.USER_SEQ_NBR = B.USER_SEQ_NBR " + 
            "WHERE (A.NEED_CHANGE_PASSWORD = 'Y') AND (A.PASSWORD_EXPIR_DD > DATEADD(day, ?, GETDATE()) AND A.PASSWORD_EXPIR_DD < DATEADD(day, ?, GETDATE())) AND (B.REC_STATUS = 'A') AND (B.STATUS = 'ACTIVE') AND B.SERV_PROV_CODE = ?";
        }
        else{
            // Oracle SQL
            sqlStringResetPassword  = "SELECT A.USER_SEQ_NBR FROM PUBLICUSER A INNER JOIN XPUBLICUSER_SERVPROV B ON A.USER_SEQ_NBR = B.USER_SEQ_NBR " +
            "WHERE (A.NEED_CHANGE_PASSWORD = 'Y') AND ((A.PASSWORD_EXPIR_DD > SYSDATE + ?) AND A.PASSWORD_EXPIR_DD < SYSDATE + ?) AND (B.REC_STATUS = 'A') AND (B.STATUS = 'ACTIVE') AND B.SERV_PROV_CODE = ?"
        }
        var parameters = [resetPasswordDayStart,resetPasswordDayEnd,servProvCode];
        var selectResultResetPassword = aa.db.select(sqlStringResetPassword, parameters);
        logDebug("==========");
        logDebug("Reseting User Account Passwords between " +  dateAdd(null,resetPasswordDayStart) + " and "+ dateAdd(null,resetPasswordDayEnd))
        processPublicUserAccounts(selectResultResetPassword,true,false);
        
        // Configure ACA_CONFIGS - PURGE_EXPIRED_ACCOUNT_INTERVAL Standard Choice Value to the number of days (i.e. 30)
        //purgeExpiredInactiveAccounts();
    }
    catch(err){
        logDebug("ERROR: " + err + " - Line: " + err.lineNumber);
    }
   
}

endJob();

// end main process


// begin custom batch job functions



// end custom batch job functions


// begin standard batch job functions

/**
 * function to close out the batch job with logging.
 *
 * @return {void} 
 */
function endJob() {
    var endDate = new Date();

    var elapsed = Number(endDate) - Number(StartDate);
    var elapsed = elapsed/1000;

    logDebug(" ");
    logDebug("==========");
    logDebug("Batch job ended on " + endDate);
    logDebug("Batch job elapsed time: " + elapsed);

    aa.env.setValue("ScriptReturnCode", "0"); 
    aa.env.setValue("ScriptReturnMessage", debug);

    return;
}

/**
 * function to start the batch job with debug output for logging.
 *
 * @return {boolean} flag indicating whether the batch job was started 
 * successfully or not.
 */
function startJob() {
    // update global variable with start of batch job
    StartDate = new Date();

    var batchJobName = "" + aa.env.getValue("BatchJobName");
    var batchJobId = 0;
    var batchJobIdResult = aa.batchJob.getJobID();
    var runJob = false;
    if (batchJobIdResult.getSuccess()) {
        batchJobId = batchJobIdResult.getOutput();
        runJob = true;
        logDebug("Batch job " + batchJobName + " (" + batchJobId +")");
        logDebug("Batch job begun on " + StartDate);
        logDebug("==========");
        logDebug(" ");
    } else {
        logDebug("Batch job not found. Message = " + batchJobIdResult.getErrorMessage());
    }

    return runJob;
}

// handle Search Result - print result or print error message
function handleSearchResult(result) {
    if(result.getSuccess())
    {
        var resultList = result.getOutput();
        if(resultList != null && resultList.size() > 0) {
            for(var i = 0; i < resultList.size(); i++) {
                printRow(resultList.get(i));
            }
        } else {
            aa.print("No Record Found!");
        }
    }
    else
    {
        aa.print(result.getErrorMessage());
    }
}

function publicUserObj(userSeqNbr){
    this.userSeqNum = null;
    this.publicUserModel = null;
    this.userID = null;

    if(!matches(userSeqNbr,null,undefined,"","org.mozilla.javascript.Undefined")){
        this.userSeqNum = userSeqNbr
        this.publicUserModel = aa.publicUser.getPublicUser(userSeqNbr).getOutput();
        this.userID = this.publicUserModel.getUserID();
    }
    

    //exploreObject(this.publicUserModel)

    this.toString = function() { 
        if(this.publicUserModel){
            return "Public User ID: " + this.publicUserModel.getUserID() + " - Account: PUBLICUSER" + this.publicUserModel.getUserSeqNum() + " - Email: " + this.publicUserModel.getEmail();
        }
    }

    this.resetPassword = function(){
        var resetResult = aa.publicUser.resetPassword(this.userID);
  
        if(resetResult.getSuccess())
        {  
            var newPassword = resetResult.getOutput();
            logDebug("Successfully Reset Password : " + this.toString());
        }
        else
        {
            logDebug("Warning unable to Reset Password: " + resetResult.getErrorMessage()); 
        } 

    }

    this.disablePublicUserAccount = function(disableAllAgencyAccounts){

        if(isEmpty(disableAllAgencyAccounts)) disableAllAgencyAccounts = false;

        if(this.publicUserModel){
            var disableResult = aa.publicUser.disablePublicUserAccount(this.publicUserModel,disableAllAgencyAccounts);
            if(disableResult.getSuccess())
            {  
                logDebug("Sucessfully Disabled Public User Account: " + this.toString());
            }
            else
            {
                logDebug("Failed to Disable Public User Account: " + this.toString() + " Error: "+ disableResult.getErrorMessage()); 
            } 
        }

    }
}

/**
 * Purges Expired and Inactive Accounts
 * According to PURGE_EXPIRED_ACCOUNT_INTERVAL in ACA_CONFIGS standard choice, to purge all expired inactive accounts.
 *
 * @return {void} 
 */
function purgeExpiredInactiveAccounts(){

    var purgeResult = aa.publicUser.purgExpiredInactiveAccount();
    if(purgeResult.getSuccess())
        {  
            logDebug("Successfully Purged Expired and Inactive Accounts");
        }
        else
        {
            logDebug("Warning unable to Purge Expired and Inactive Accounts: " + purgeResult.getErrorMessage()); 
        } 
}


function processPublicUserAccounts(result,resetPassword,disableAccount) {
    if(result.getSuccess())
    {
        var resultList = result.getOutput();
        logDebug("Result List Length = " + resultList.size())
        if(resultList != null && resultList.size() > 0) {
            for(var i = 0; i < resultList.size(); i++) {
                var row = resultList.get(i);
                var entry = row.keySet().toArray();
                var rowString = "";
                for(var e = 0; e < entry.length; e++) {
                    //var entryKey = entry[e];
                    var userSeqNbr = parseInt(row.get(entry[e]));
                    //rowString += entryKey + "=" + userSeqNbr;

                    if(userSeqNbr){
                        var pUserObj = new publicUserObj(userSeqNbr);
                        if(resetPassword && !testingMode){
                            pUserObj.resetPassword()
                        }
                        if(disableAccount && !testingMode){
                            pUserObj.disablePublicUserAccount();
                        }
                        if(testingMode){
                            rowString += pUserObj.toString();
                        }
  
                        
                    }
                    

                }
                logDebug(rowString);
            }
        } else {
            logDebug("No Record Found!");
        }
    }
    else
    {
        logDebug(result.getErrorMessage());
    }
}
 
// print result row - with column info
function printRow(row) {
    var entry = row.keySet().toArray();
    var rowString = "";
    for(var e = 0; e < entry.length - 1; e++) {
        rowString += entry[e] + "=" + row.get(entry[e]) + ", ";
    }
    rowString += entry[entry.length - 1] + "=" + row.get(entry[entry.length - 1]);
    aa.print(rowString);
}

function stringGen(intLength){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%^*-+=.~";
  
    for (var i = 0; i < intLength; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  
    return text;
  }

/**
 * Function to retrieve a script's text. If the useProductScripts is set to 
 * true function retrieves the master script otherwise function retrieves the 
 * text of the business script.
 *
 * @param {string} vScriptName - script name
 * @param {string} servProvCode - service provider code. If null, function 
 * defaults to the current service provider code
 * @param {boolean} useProductScripts - flag to indicate whether to retrieve 
 * from master scripts or business scripts
 * @return {string} text of the script 
 */
function getScriptText(vScriptName, servProvCode, useProductScripts) 
{
	if (!servProvCode)  servProvCode = aa.getServiceProviderCode();
	vScriptName = vScriptName.toUpperCase();
	//var emseBiz = aa.proxyInvoker.newInstance("com.accela.aa.emse.emse.EMSEBusiness").getOutput();
	try {
		
		var emseScript = String(aa.getScriptText(vScriptName,aa.getServiceProviderCode(),useProductScripts));
		
		return emseScript;
	} 
	catch (err) 
	{
		return "";
	}
}

/**
 * Loads all of the environment variables and returns the variables in an 
 * array where the key is the environment variable name and value is the value
 * of the environment variable.
 * 
 * @param {boolean} logFlag - flag to indicate whether to log the parameters as they are
 * loaded
 *
 * @return {Array} array of environment variables with the variable name as the
 * key. 
 */
 function loadEnvVars(logFlag) {
    var newArr = [];
    var params = aa.env.getParamValues();
    var keys = params.keys();
    var key = null;
    while (keys.hasMoreElements()) {
        key = keys.nextElement();
        var keyValue = aa.env.getValue(key);
        newArr[key] = keyValue;
        if (logFlag) {
            logDebug("Loaded parameter " + key + " = " + keyValue);
        }
    }
    return newArr;
}

function exploreObject(objExplore) {
    logDebug("Methods:");
    for (var x in objExplore) {
        try {
            if (typeof (objExplore[x]) === "function") {
                logDebug("<font color=blue><u><b>" + x + "</b></u></font> ");
                logDebug("   " + objExplore[x] + "<br>");
            }
        } catch (err) {
            logDebug("exploreObject(): **ERROR** in Functions: " + err.Message);
        }
        var counter = objExplore.length;
    }

    logDebug("");
    logDebug("Properties:");
    for (var y in objExplore) {
        try {
            if (typeof (objExplore[y]) !== "function") {
                logDebug("  <b> " + y + ": </b> " + objExplore[y]);
            }
        } catch (err) {
            logDebug("exploreObject(): **ERROR** in Properties: " + err.Message);
        }
    }
}

// end standard batch job functions