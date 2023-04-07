try
{
   var message = "THIS IS FOR HER-2313 PAGEFLOW EVENT TEST PURPOSE, It is blocking record creation, Please remove Page flow event configuration in ACA admin to remove the block.	\r\n AltId: ";						
				

   var cap = aa.env.getValue("CapModel");
   var capId = cap.getCapID();
   //var capId = aa.cap.getCapID("21TMP-001699").getOutput();
   //var cap= aa.cap.getCap(capId).getOutput().getCapModel();
   
   var applicantType = null;
   var servProvCode = capId.getServiceProviderCode();
   var capIDString = capId.getCustomID();
   var recordId = capId.getID1() + "-" + capId.getID2() + "-" + capId.getID3();
   message = message + capIDString + ", RecordId: " + recordId + ". \r\n";


   var currentUserID = aa.env.getValue("CurrentUserID");
   var showMessage = false;			
   var showDebug = false;						

   var capAddress = cap.getAddressModel();
   var refAddress = cap.getRefAddressModel();
   var capParcel = cap.getCapParcelModel();
   var refParcel = cap.getParcelModel();
   var capOwner = cap.getCapOwnerModel();
   var refOwner = cap.getOwnerModel();
   
   if(capAddress == null && refAddress == null)
   {
       message = "1.No address found in pageFlow, if Address was configured in pageFlow, it could be a defect!! ERROR_HERE \r\n";
   }
   else{
	   if(capAddress)
	   {
			message = message + "2.cap.getAddressModel() is not null, city:" + cap.getAddressModel().getCity() + ", streetName:" + cap.getAddressModel().getStreetName() + "\r\n";
	   }
	   else
	   {
			message = message + "3.cap.getAddressModel() is null, if address  was configured in pageFlow, it could be a defect!! ERROR_HERE " + "\r\n"; 
	   }
	   
	   if(refAddress)
	   {
			message = message + "4. cap.getRefAddressModel() is not null, refAddressId:" + cap.getRefAddressModel().getRefAddressId() + ", sourceNumber:"  + cap.getRefAddressModel().getSourceNumber() + ", city:" + cap.getRefAddressModel().getCity() + ", streetName:" + cap.getRefAddressModel().getStreetName() + "\r\n";
			
	   }
	   else
	   {
			message = message + "5. cap.getRefAddressModel() is null, if Address was configured in pageFlow, it could be a defect!! ERROR_HERE " + "\r\n";
	   }
   
	}

   if(capParcel == null && refParcel == null)
   {
       message = message + "No parcel found in pageFlow, if Parcel was configured in pageFlow, it could be a defect!! ERROR_HERE \r\n";
   }
   else{
	   if(capParcel)
	   {
			message = message + "6.cap.getCapParcelModel() is not null, parcel:" + cap.getCapParcelModel().getParcel() + ", parcelNumber:"  + cap.getCapParcelModel().getParcelNumber() + "\r\n";	
	   }
	   else
	   {
			message = message + "7.cap.getCapParcelModel(), if Parcel was configured in pageFlow, it could be a defect!! ERROR_HERE \r\n";
	   }
	   
	   if(refParcel)
	   {
			message = message + "8.cap.getParcelModel() is not null, parcelNo:" + cap.getParcelModel().getParcelNo() + ", uid:"  + cap.getParcelModel().getUID() + ", l1ParcelNo:"  + cap.getParcelModel().getL1ParcelNo() + ", parcelNumber:"  + cap.getParcelModel().getParcelNumber()  + "\r\n";	
	   }
	   else
	   {
			message = message + "9.cap.getParcelModel(), if Parcel was configured in pageFlow, it could be a defect!! ERROR_HERE \r\n";
	   }
   }
   
   if(capOwner == null && refOwner == null)
   {
       message = message + "No Owner found in pageFlow, if Parcel was configured in pageFlow, it could be a defect!! ERROR_HERE \r\n";
   }
   else{
	   if(capOwner)
	   {
			message = message + "10.cap.getCapOwnerModel() is not null, ownerFullName:" + cap.getCapOwnerModel().getOwnerFullName() + ", ownerNumber:"  + cap.getCapOwnerModel().getOwnerNumber() + ", ownerFirstName:" + cap.getCapOwnerModel().getOwnerFirstName() + ", address1:" + cap.getCapOwnerModel().getAddress1() + "\r\n";
	   }
	   else
	   {
			message = message + "11.cap.getCapOwnerModel() is null, if Owner was configured in pageFlow, it could be a defect!! ERROR_HERE  \r\n";
	   }

	   if(refOwner)
	   {
			message = message + "12.cap.getOwnerModel() is not null, ownerFullName:" + cap.getOwnerModel().getOwnerFullName() + ", UID:"  + cap.getOwnerModel().getUID() + ", ownerFirstName:" + cap.getOwnerModel().getOwnerFirstName() + ", address1:" + cap.getOwnerModel().getAddress1() + "\r\n";	
	   }
	   else
	   {
			message = message + "13.cap.getOwnerModel() is null, if Owner was configured in pageFlow, it could be a defect!! ERROR_HERE  \r\n";
	   }
   }

	aa.util.getLogger().warn(message);
	aa.print(message);
	aa.env.setValue("ErrorMessage",  message);

}
catch (err) 
{
   aa.util.getLogger().warn(err.message + " --- "  + message);
   aa.env.setValue("ErrorMessage", err.message + " --- "  + message);
   aa.print(err.message);
}