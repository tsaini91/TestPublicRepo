{
  "EnvHealth/Personal Services/Artificial Tanning/Application": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Issues a Personal Services Artificial Tanning License",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Permit Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "parentLicense": "EnvHealth/Personal Services/Artificial Tanning/Permit",
          "issuedStatus": "Active",
          "copyCustomFields": [
            "ALL"
          ],
          "copyCustomTables": [
            "ALL"
          ],
          "expirationType": "Expiration Code",
          "expirationPeriod": "EH_GENERAL",
          "copyContacts": [
            "ALL"
          ],
          "createLP": false,
          "licenseTable": "",
          "refLPType": "Business",
          "contactType": "Applicant",
          "contactAddressType": "Mailing"
        },
        "postScript": ""
      }
    ]
  },
  "EnvHealth/Personal Services/Body Art/Application": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "permit record update",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "allowBalance": false,
          "task": [
            "Permit Issuance"
          ],
          "status": [
            "Issued"
          ]
        },
        "action": {
          "parentLicense": "EnvHealth/Personal Services/Body Art/Permit",
          "issuedStatus": "Active",
          "copyCustomFields": [
            "ALL"
          ],
          "copyCustomTables": [
            "ALL"
          ],
          "expirationType": "Expiration Code",
          "expirationPeriod": "EH_GENERAL",
          "copyContacts": [
            "ALL"
          ],
          "createLP": false,
          "licenseTable": "",
          "refLPType": "Business",
          "contactType": "Applicant",
          "contactAddressType": "Mailing"
        },
        "postScript": ""
      }
    ]
  },
  "EnvHealth/Personal Services/Body Piercing/Application": {
	    "WorkflowTaskUpdateAfter": [
	      {
	        "metadata": {
	          "description": "Issues a Personal Services Body Piercing License",
	          "operators": {}
	        },
	        "preScript": "",
	        "criteria": {
	          "task": [
	            "Permit Issuance"
	          ],
	          "status": [
	            "Issued"
	          ]
	        },
	        "action": {
	          "parentLicense": "EnvHealth/Personal Services/Body Piercing/Permit",
	          "issuedStatus": "Active",
	          "copyCustomFields": [
	            "ALL"
	          ],
	          "copyCustomTables": [
	            "ALL"
	          ],
	          "expirationType": "Expiration Code",
	          "expirationPeriod": "EH_GENERAL",
	          "copyContacts": [
	            "ALL"
	          ],
	          "createLP": false,
	          "licenseTable": "",
	          "refLPType": "Business",
	          "contactType": "Applicant",
	          "contactAddressType": "Mailing"
	        },
	        "postScript": ""
	      }
	    ]
	  },
	  "EnvHealth/Personal Services/Massage Parlor/Application": {
	    "WorkflowTaskUpdateAfter": [
	      {
	        "metadata": {
	          "description": "permit record update",
	          "operators": {}
	        },
	        "preScript": "",
	        "criteria": {
	          "allowBalance": false,
	          "task": [
	            "Permit Issuance"
	          ],
	          "status": [
	            "Issued"
	          ]
	        },
	        "action": {
	          "parentLicense": "EnvHealth/Personal Services/Massage Parlor/Permit",
	          "issuedStatus": "Active",
	          "copyCustomFields": [
	            "ALL"
	          ],
	          "copyCustomTables": [
	            "ALL"
	          ],
	          "expirationType": "Expiration Code",
	          "expirationPeriod": "EH_GENERAL",
	          "copyContacts": [
	            "ALL"
	          ],
	          "createLP": false,
	          "licenseTable": "",
	          "refLPType": "Business",
	          "contactType": "Applicant",
	          "contactAddressType": "Mailing"
	        },
	        "postScript": ""
	      }
	    ]
	  }
}