{
  "EnvHealth/Institutions/*/Renewal": {
    "WorkflowTaskUpdateAfter": [
      {
        "metadata": {
          "description": "Updates parent EnvHealth record",
          "operators": {}
        },
        "criteria": {
          "task": [
            "Permit Renewal"
          ],
          "status": [
            "Renewed"
          ]
        },
        "preScript": "",
        "action": {
          "issuedRecordStatus": "Active",
          "issuedExpirationStatus": "Active",
          "issuedLPStatus": "A",
          "expirationType": "Expiration Code",
          "expirationPeriod": "",
          "customExpirationFunction": "",
          "copyComponents": []
        },
        "postScript": ""
      }
    ],
    "ConvertToRealCAPAfter": [
      {
        "metadata": {
          "description": "Sets the license status to Active to disable renewal button",
          "operators": {}
        },
        "criteria": {
          "balanceAllowed": false,
          "recordType": "EnvHealth/Institutions/*/Renewal"
        },
        "preScript": "",
        "action": {
          "issuedRecordStatus": "Active",
          "issuedExpirationStatus": "Active",
          "issuedLPStatus": "A",
          "expirationType": "Expiration Code",
          "expirationPeriod": "",
          "customExpirationFunction": "",
          "copyComponents": []
        },
        "postScript": ""
      }
    ]
  }
}