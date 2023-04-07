/**
	* Checks if the ref contact entered exists already or not using peopleDuplicateCheck. Creates and links ref contact to the cap contact using createRefContactsFromCapContactsAndLink. Connects app to the entity record if possible using linkAppToEntity.
	* If a public user, sends the email with application number if they are the parent prequalification
	* @memberOf CTRCA
	* @example CTRCA;LICENSES!~!APPLICATION!NA
   
	* @requires
		peopleDuplicateCheck();
		createRefContactsFromCapContactsAndLink();
    */

createRefContactsFromCapContactsAndLink(capId, null, null, false, true, peopleDuplicateCheck);