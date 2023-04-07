{
  "Cannabis/Entity/*/*": {
    "WorkflowTaskUpdateAfter": [
        {
          "metadata": {
            "description": "Sends Additional Info Required Email Template with available parameters",
            "operators": {}
          },
          "preScript": "",
          "criteria": {
            "task": [],
            "status": [
              "Additional Info Required"
            ]
          },
          "action": {
            "notificationTemplate": "SS_ADDITIONAL_INFO_REQD",
            "notificationReport": [],
            "notifyContactTypes": [
              "Authorized Agent",
              "Business Entity"
            ]
          },
          "postScript": ""
        }
    ]
  },
  "Cannabis/Entity/*/Application":{
  "WorkflowTaskUpdateAfter": [
        {
          "metadata": {
            "description": "Sends denied Email Template with available parameters",
            "operators": {}
          },
          "preScript": "",
          "criteria": {
            "task": [],
            "status": [
              "Denied"
            ]
          },
          "action": {
            "notificationTemplate": "SS_APP_DENIED",
            "notificationReport": [],
            "notifyContactTypes": [
              "Authorized Agent",
              "Business Entity"
            ]
          },
          "postScript": ""
        },
		{
		  "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [],
          "status": [
            "Withdrawn"
          ]
        },
        "action": {
          "notificationTemplate": "SS_APP_WITHDRAWAL",
          "notificationReport": [],
          "notifyContactTypes": [
            "Authorized Agent",
            "Affiliate Individual",
            "Affiliate Business",
            "Business Entity"
          ]
        },
        "postScript": ""
		}
    ]
  },
  "Cannabis/Entity/*/Business":{
  "WorkflowTaskUpdateAfter": [
		{
		  "metadata": {
          "description": "Sends Withdrawn Email Template to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [],
          "status": [
            "Withdrawn"
          ]
        },
        "action": {
          "notificationTemplate": "SS_APP_WITHDRAWAL",
          "notificationReport": [],
          "notifyContactTypes": [
			"Authorized Agent",
			"Affiliate Individual",
			"Affiliate Business",
			"Business Entity"
          ]
        },
        "postScript": ""
		}
    ]
  },
  "Cannabis/Entity/Prequalification/Application": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Email Template to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Application Issuance"
          ],
          "status": [
            "Approved"
          ]
        },
        "action": {
          "notificationTemplate": "MJ_PREQUAL_APPROVED",
          "notificationReport": [],
          "notifyContactTypes": [
            "Authorized Agent",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
	  {
      "metadata": {
        "description": "Sends Accepted Email Template to necessary Contact Types with available parameters",
        "operators": {}
      },
      "preScript": "",
      "criteria": {
        "task": ["Application Intake"],
        "status": ["Accepted"]
      },
      "action": {
        "notificationTemplate": "SS_APP_CREATED",
        "notificationReport": [],
        "notifyContactTypes": ["Affiliate Individual","Affiliate Business"],
	    "additionalEmailsTo": ""
      },
      "postScript": ""
        }
    ]
  },
  "Cannabis/Entity/Registration/Individual": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Email Template to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Investigation"
          ],
          "status": [
            "Registered with Conditions"
          ]
        },
        "action": {
          "notificationTemplate": "MJ_ENTR_REGISTERED",
          "notificationReport": [],
          "notifyContactTypes": [
            "Authorized Agent",
            "Affiliate Individual"
          ]
        },
        "postScript": ""
      },
	  {
        "metadata": {
          "description": "Sends Email Template to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [],
          "status": [
            "Withdrawn"
          ]
        },
        "action": {
          "notificationTemplate": "SS_APP_WITHDRAWAL",
          "notificationReport": [],
          "notifyContactTypes": [
			"Affiliate Individual",
			"Business Entity"
          ]
        },
        "postScript": ""
      }
    ]
  },
  "Cannabis/Entity/Registration/Employee": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Sends Email Template to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [],
          "status": [
            "Withdrawn"
          ]
        },
        "action": {
          "notificationTemplate": "SS_APP_WITHDRAWAL",
          "notificationReport": [],
          "notifyContactTypes": [
            "Employee",
            "Business Entity"
          ]
        },
        "postScript": ""
      },
      {
        "metadata": {
          "description": "Sends Email Template to necessary Contact Types with available parameters",
          "operators": {}
        },
        "preScript": "",
        "criteria": {
          "task": [
            "Investigation"
          ],
          "status": [
            "Registered with Conditions"
          ]
        },
        "action": {
          "notificationTemplate": "MJ_INDR_REGISTERED",
          "notificationReport": [],
          "notifyContactTypes": [
            "Employee",
            "Volunteer"
          ]
        },
        "postScript": ""
      }
    ]
  }
}