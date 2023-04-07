{
  "PublicWorks/Driveway/NA/NA": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Update custom field Permit Issued Date upon permit issuance ",
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
          "daysOut": "0",
          "customFieldToUpdate": "Permit Issued Date"
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Update custom field Permit Expiration Date upon permit issuance ",
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
          "daysOut": "180",
          "customFieldToUpdate": "Permit Expiration Date"
        },
        "postScript": ""
      }
    ],
    "ApplicationSubmitAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Update the application name to be the address",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "daysOut": "180",
          "customFieldToUpdate": "Application Expiration Date"
        },
        "postScript": ""
      }
    ]
  }
}