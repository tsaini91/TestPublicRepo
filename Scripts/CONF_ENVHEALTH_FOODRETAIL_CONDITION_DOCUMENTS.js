{
  "EnvHealth/Food Retail/*/Application": {
    "Pageflow": [
      {
        "preScript": "",
        "metadata": {
          "description": "Required Documents - EnvHealth Retail Food Applications - Compliance Forms, Site Plan",
          "operators": {}
        },
        "criteria": {
          "customFields": {}
        },
        "action": {
          "requiredDocuments": [
            "Site Plans",
            "Compliance Forms"
          ],
          "requirementType": "CONDITION",
          "validationMessage": "Documents are Required"
        },
        "postScript ": ""
      }
    ],
    "ApplicationSubmitAfter": [
      {
        "preScript": " ",
        "metadata": {
          "description": "Update Document Categories",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "requiredDocuments": [],
          "updateDocumentCategories": true
        },
        "postScript ": " "
      }
    ],
    "ConvertToRealCAPAfter": [
      {
        "preScript": " ",
        "metadata": {
          "description": "Update Document Categories",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "requiredDocuments": [],
          "updateDocumentCategories": true
        },
        "postScript ": " "
      }
    ]
  },
  "EnvHealth/Food Retail/*/Renewal": {
    "Pageflow": [
      {
        "preScript": "",
        "metadata": {
          "description": "Required Documents - EnvHealth Retail Food Applications - Compliance Forms, Site Plan",
          "operators": {}
        },
        "criteria": {
          "customFields": {}
        },
        "action": {
          "requiredDocuments": [
            "Site Plan",
            "Compliance Forms"
          ],
          "requirementType": "CONDITION",
          "validationMessage": "Documents are Required"
        },
        "postScript ": ""
      }
    ],
    "ApplicationSubmitAfter": [
      {
        "preScript": " ",
        "metadata": {
          "description": "Update Document Categories",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "requiredDocuments": [],
          "updateDocumentCategories": true
        },
        "postScript ": " "
      }
    ],
    "ConvertToRealCAPAfter": [
      {
        "preScript": " ",
        "metadata": {
          "description": "Update Document Categories",
          "operators": {}
        },
        "criteria": {},
        "action": {
          "requiredDocuments": [],
          "updateDocumentCategories": true
        },
        "postScript ": " "
      }
    ]
  }
}