aa.print("*****AccountID:" + aa.env.getValue("AccountID"));
 aa.print("*****Amount:" + aa.env.getValue("Amount"));
 aa.print("*****Transaction Type:" + aa.env.getValue("TransactionType"));
 aa.print("*****Transaction ID:" + aa.env.getValue("TransactionID"));

aa.env.setValue("ScriptReturnCode","0");
 aa.env.setValue("ScriptReturnMessage", "Trust Account Event submit successfully");