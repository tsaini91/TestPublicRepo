{
  "EnvHealth/Land Use/Septic/Application": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Issues a Land Use Septic License",
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
          "parentLicense": "EnvHealth/Land Use/Septic/Permit",
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
  "EnvHealth/Land Use/Subdivision/Application": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Issues a Land Use Subdivision License",
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
          "parentLicense": "EnvHealth/Subdivision/Spa/Permit",
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
  "EnvHealth/Land Use/Water Well/Application": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Issues a Land Use Water Well License",
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
          "parentLicense": "EnvHealth/Land Use/Water Well/Permit",
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