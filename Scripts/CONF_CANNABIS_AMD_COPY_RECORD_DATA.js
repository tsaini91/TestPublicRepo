{
  "Cannabis/Amendment/License Modification/NA": {
    "Pageflow": [
      {
        "preScript": "",
        "metadata": {
          "description": "Pageflow copy License Amendment Contact Info",
          "operators": {
            "usageType": "copyFromParent"
          }
        },
        "criteria": {
          "recordType": "Cannabis/*/*/License"
        },
        "action": {
          "Renewal": false,
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [],
          "ASIT": [],
          "CONDITIONS": [],
          "ADDRESS": [
            "ALL"
          ],
          "LICENSEDPROFESSIONALS": [],
          "ASSETS": [],
          "keepExistingAPO": true,
          "RECORDDETAILS": true,
          "RECORDNAME": true,
          "PARCEL": false,
          "OWNER": false,
          "ADDITIONALINFO": false,
          "EDUCATION": false,
          "CONTEDUCATION": false,
          "EXAM": false,
          "DOCUMENT": false
        },
        "postScript": ""
      }
    ],
    "WorkflowTaskUpdateAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Copy License Amendment Contact Info on Workflow Task Modification Review - Status Modification Request Approved",
          "operators": {}
        },
        "criteria": {
          "task": [
            "Modification Review"
          ],
          "status": [
            "Approved"
          ],
          "recordType": "Cannabis/*/*/License"
        },
        "action": {
          "usageType": "copyToParent",
          "Renewal": false,
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [],
          "ASIT": [],
          "CONDITIONS": [],
          "ADDRESS": [],
          "LICENSEDPROFESSIONALS": [],
          "ASSETS": [],
          "keepExistingAPO": true,
          "RECORDDETAILS": true,
          "RECORDNAME": true,
          "PARCEL": false,
          "OWNER": false,
          "ADDITIONALINFO": false,
          "EDUCATION": false,
          "CONTEDUCATION": false,
          "EXAM": false,
          "DOCUMENT": false
        },
        "postScript": ""
      }
    ]
  },
  "Cannabis/Amendment/Contact Information/NA": {
    "Pageflow": [
      {
        "preScript": "",
        "metadata": {
          "description": "Pageflow copy License Amendment Contact Info",
          "operators": {
            "usageType": "copyFromParent"
          }
        },
        "criteria": {
          "recordType": "Cannabis/*/*/License"
        },
        "action": {
          "Renewal": false,
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [],
          "ASIT": [],
          "CONDITIONS": [],
          "ADDRESS": [
            "ALL"
          ],
          "LICENSEDPROFESSIONALS": [],
          "ASSETS": [],
          "keepExistingAPO": true,
          "RECORDDETAILS": true,
          "RECORDNAME": true,
          "PARCEL": false,
          "OWNER": false,
          "ADDITIONALINFO": false,
          "EDUCATION": false,
          "CONTEDUCATION": false,
          "EXAM": false,
          "DOCUMENT": false
        },
        "postScript": ""
      }
    ],
    "WorkflowTaskUpdateAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Copy License Amendment Contact Info on Workflow Task Modification Review - Status Modification Request Approved",
          "operators": {}
        },
        "criteria": {
          "task": [
            "Modification Review"
          ],
          "status": [
            "Approved"
          ],
          "recordType": "Cannabis/*/*/License"
        },
        "action": {
          "usageType": "copyToParent",
          "Renewal": false,
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [],
          "ASIT": [],
          "CONDITIONS": [],
          "ADDRESS": [],
          "LICENSEDPROFESSIONALS": [],
          "ASSETS": [],
          "keepExistingAPO": true,
          "RECORDDETAILS": true,
          "RECORDNAME": true,
          "PARCEL": false,
          "OWNER": false,
          "ADDITIONALINFO": false,
          "EDUCATION": false,
          "CONTEDUCATION": false,
          "EXAM": false,
          "DOCUMENT": false
        },
        "postScript": ""
      }
    ]
  },
  "Cannabis/Amendment/Modification of Premises/NA": {
    "Pageflow": [
      {
        "preScript": "",
        "metadata": {
          "description": "Pageflow copy License Amendment Mod of Premises",
          "operators": {}
        },
        "criteria": {
          "recordType": "Cannabis/*/*/License"
        },
        "action": {
          "usageType": "copyFromParent",
          "Renewal": false,
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [],
          "ASIT": [],
          "CONDITIONS": [
            "ALL"
          ],
          "ADDRESS": [
            "ALL"
          ],
          "LICENSEDPROFESSIONALS": [],
          "ASSETS": [],
          "keepExistingAPO": true,
          "RECORDDETAILS": true,
          "RECORDNAME": true,
          "PARCEL": false,
          "OWNER": false,
          "ADDITIONALINFO": false,
          "EDUCATION": false,
          "CONTEDUCATION": false,
          "EXAM": false,
          "DOCUMENT": false
        },
        "postScript": ""
      }
    ],
    "WorkflowTaskUpdateAfter": [
      {
        "preScript": "",
        "metadata": {
          "description": "Copy License Amendment Mod of Premises on Workflow Task Decision Notification - Status Modification Request Approved",
          "operators": {}
        },
        "criteria": {
          "task": [
            "Decision Notification"
          ],
          "status": [
            "Modification Request Approved"
          ],
          "recordType": "Cannabis/*/*/License"
        },
        "action": {
          "usageType": "copyToParent",
          "Renewal": false,
          "CONTACTS": [
            "ALL"
          ],
          "ASI": [],
          "ASIT": [],
          "CONDITIONS": [
            "ALL"
          ],
          "ADDRESS": [],
          "LICENSEDPROFESSIONALS": [],
          "ASSETS": [],
          "keepExistingAPO": true,
          "RECORDDETAILS": false,
          "RECORDNAME": true,
          "PARCEL": false,
          "OWNER": false,
          "ADDITIONALINFO": false,
          "EDUCATION": false,
          "CONTEDUCATION": false,
          "EXAM": false,
          "DOCUMENT": false
        },
        "postScript": ""
      }
    ]
  }
}