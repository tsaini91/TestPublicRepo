{
  "Cannabis/Entity/Prequalification/Application": {
    "WorkflowTaskUpdateBefore": [
     {
       "metadata": 	{
         "description": "The Entity Pre-qualification Application cannot be approved until all fees are paid.",
         "operators": {}
       },
       "preScript": " ",
       "criteria": {
         "task": [
           "Application Issuance"
         ],
         "status": [
           "Approved"
         ],
         "allowBalance": false
       },
       "action": {
         "validationMessage": "This action cannot be taken until all outstanding fees are paid in full."
       },
       "postScript": ""
     },
	 
	 {
       "metadata": {
         "description": "The Entity Pre-qualification Application should not proceed to departmental reviews until all background checks and registrations have been completed.",
         "operators": {}
       },
       "preScript": " ",
       "criteria": {
         "task": [
           "Background Investigation"
         ],
         "status": [
           "Approved" 
         ],
         "allowBalance": true,
         "chkInvoicedFees":true,
         "childRequired": [
           "Cannabis/Entity/Registration/Individual",
           "Cannabis/Entity/Registration/Business",
           "Cannabis/Entity/Registration/Employee"
         ],
         "childRecordStatus": [
           "Registered",
           "Registered with Conditions",
           "Withdrawn"
         ]         
       },
       "action": {
         "validationMessage": "There are outstanding registrations and/or background checks. These must be completed before proceeding to the next Step."
       },
       "postScript": ""
     }
   ]

  }
}