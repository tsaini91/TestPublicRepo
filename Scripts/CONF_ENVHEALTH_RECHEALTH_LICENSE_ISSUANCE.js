{
  "EnvHealth/Rec Health/Pool/Application": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Issues a Rec Health Pool License",
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
          "parentLicense": "EnvHealth/Rec Health/Pool/Permit",
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
  "EnvHealth/Rec Health/Spa/Application": {
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
          "parentLicense": "EnvHealth/Rec Health/Spa/Permit",
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