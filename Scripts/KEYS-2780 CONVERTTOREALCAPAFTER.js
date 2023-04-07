try
{
   var message = "\r\nAAAAAA-KEYS-2780 ConvertToRealCapAfter Script Test. \r\n ";
   var capId = "CapID:" + aa.env.getValue("PermitId1") + "-" + aa.env.getValue("PermitId2") + "-" + aa.env.getValue("PermitId3");
   message += capId + "\r\n";
   
   var AddressValidatedNumber = aa.env.getValue("AddressValidatedNumber");
   var AddressCity = aa.env.getValue("AddressCity");
   var AddressHouseFraction = aa.env.getValue("AddressHouseFraction");
   var AddressHouseNumber = aa.env.getValue("AddressHouseNumber");
   var AddressLine1 = aa.env.getValue("AddressLine1");
   var AddressLine2 = aa.env.getValue("AddressLine2");
   var AddressPrimaryFlag = aa.env.getValue("AddressPrimaryFlag");
   var AddressState = aa.env.getValue("AddressState");
   var AddressStreetDirection = aa.env.getValue("AddressStreetDirection");
   var AddressStreetName = aa.env.getValue("AddressStreetName");
   var AddressZip = aa.env.getValue("AddressZip");
  
   message += "AddressValidatedNumber:" + AddressValidatedNumber + "\r\n";
   message += "AddressCity:" + AddressCity + "\r\n";
   message += "AddressHouseFraction:" + AddressHouseFraction + "\r\n";
   message += "AddressHouseNumber:" + AddressHouseNumber + "\r\n";
   message += "AddressPrimaryFlag:" + AddressPrimaryFlag + "\r\n";
   message += "AddressLine2:" + AddressLine2 + "\r\n";
   message += "AddressState:" + AddressState + "\r\n";
   message += "AddressStreetDirection:" + AddressStreetDirection + "\r\n";
   message += "AddressStreetName:" + AddressStreetName + "\r\n";
   message += "AddressZip:" + AddressZip + "\r\n";
   
   var ParcelValidatedNumber = aa.env.getValue("ParcelValidatedNumber") + "\r\n";
   var ParcelParcel = aa.env.getValue("ParcelParcel") + "\r\n";
   var ParcelBlock = aa.env.getValue("ParcelBlock") + "\r\n";
   var ParcelBook = aa.env.getValue("ParcelBook") + "\r\n";
   var ParcelLot = aa.env.getValue("ParcelLot") + "\r\n";
   var ParcelPage = aa.env.getValue("ParcelPage") + "\r\n";
   var ParcelSection = aa.env.getValue("ParcelSection") + "\r\n";
   var ParcelPrimaryFlag = aa.env.getValue("ParcelPrimaryFlag") + "\r\n";
   
   message += "ParcelValidatedNumber:" + ParcelValidatedNumber;
   message += "ParcelParcel:" + ParcelParcel;
   message += "ParcelBlock:" + ParcelBlock;
   message += "ParcelBook:" + ParcelBook;
   message += "ParcelLot:" + ParcelLot;
   message += "ParcelPage:" + ParcelPage;
   message += "ParcelSection:" + ParcelSection;
   message += "ParcelPrimaryFlag:" + ParcelPrimaryFlag;

    
   var OwnerValidatedNumber = aa.env.getValue("OwnerValidatedNumber");
   var OwnerEmail = aa.env.getValue("OwnerEmail");
   var OwnerFirstName = aa.env.getValue("OwnerFirstName");
   var OwnerFullName = aa.env.getValue("OwnerFullName");
   var OwnerLastName = aa.env.getValue("OwnerLastName");
   var OwnerMailAddressLine1 = aa.env.getValue("OwnerMailAddressLine1");
   var OwnerMailAddressLine2 = aa.env.getValue("OwnerMailAddressLine2");
   var OwnerMailAddressLine3 = aa.env.getValue("OwnerMailAddressLine3");
   var OwnerMailCity = aa.env.getValue("OwnerMailCity");
   var OwnerMailState = aa.env.getValue("OwnerMailState");
   var OwnerMailZip = aa.env.getValue("OwnerMailZip");
   var OwnerMiddleName = aa.env.getValue("OwnerMiddleName");
   var OwnerPhone = aa.env.getValue("OwnerPhone");
   
   message += "OwnerValidatedNumber:" + OwnerValidatedNumber + "\r\n";
   message += "OwnerEmail:" + OwnerEmail + "\r\n";
   message += "OwnerFirstName:" + OwnerFirstName + "\r\n";
   message += "OwnerFullName:" + OwnerFullName + "\r\n";
   message += "OwnerLastName:" + OwnerLastName + "\r\n";
   message += "OwnerMailAddressLine1:" + OwnerMailAddressLine1 + "\r\n";
   message += "OwnerMailCity:" + OwnerMailCity + "\r\n";
   message += "OwnerMailState:" + OwnerMailState + "\r\n";
   message += "OwnerMailZip:" + OwnerMailZip + "\r\n";
   message += "OwnerMiddleName:" + OwnerMiddleName + "\r\n";
   
   
	aa.util.getLogger().info(message);
	aa.print(message);
	//aa.env.setValue("ErrorMessage",  message);

}
catch (err) 
{
   aa.util.getLogger().error(err.message + " --- "  + message);
   aa.env.setValue("ErrorMessage", err.message + " --- "  + message);
   aa.print(err.message);
}