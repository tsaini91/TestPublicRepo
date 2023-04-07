var documentIDList = aa.env.getValue("DocumentIDList");
var serviceProviderCode = aa.env.getValue("ServiceProviderCode");
//aa.print("=======Current document list length====="+documentIDList.size());
var callerId = aa.getAuditID();

if(documentIDList != "" && documentIDList != null)
{
	var it = documentIDList.iterator();
  	while(it.hasNext())
  	{
   		var docId = it.next();
		aa.print("Document ID is: " + docId);
	}
  	aa.env.setValue("ScriptReturnMessage", "Prepare to delete document..")
  	aa.env.setValue("ScriptReturnCode","0");
}

aa.env.setValue("ScriptReturnMessage", "No document being deleted..")
aa.env.setValue("ScriptReturnCode","-1");