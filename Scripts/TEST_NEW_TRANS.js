java.lang.System.out.println("Test run script in new transactions");
java.lang.System.out.println("Before new transaction - I18NContext ServProvCode: " + com.accela.i18n.I18NContext.getServiceProviderCode());

aa.runScriptInNewTransaction("TEST_NEW_TRANS_IN");

java.lang.System.out.println("After new transaction - I18NContext ServProvCode: " + com.accela.i18n.I18NContext.getServiceProviderCode());