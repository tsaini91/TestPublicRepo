{
  "EnvHealth/*/*/*": {
    "ApplicationSubmitAfter": [
      {
        "metadata": {
          "description": "To automate creation of reference contacts and reference licenses based on certain criteria",
          "operators": {
            
          }
        },
        "criteria": {
		  "publicUser": false
        },
        "preScript": "",
        "action": {
          "contactTypes": [
            "Applicant",
			"Accounts Receivable",
			"Manager",
			"Facility Owner"
          ],
          "createReferenceContacts": true,
		  "updateReferenceContacts": true,
		  "compareFunction": "comparePeopleMatchCriteria",
		  "referenceContactType" : "Individual"
        },
        "postScript": ""
      }
    ],
	"ConvertToRealCAPAfter": [
      {
        "metadata": {
          "description": "To automate creation and updating of reference contacts on CTRCA for Public Users",
          "operators": {}
        },
        "criteria": {
		"publicUser": false
		},
        "preScript": "",
        "action": {
          "contactTypes": [
             "Applicant",
			"Accounts Receivable",
			"Manager",
			"Facility Owner"
          ],
          "createReferenceContacts": true,
		  "updateReferenceContacts": true,
		  "compareFunction": "comparePeopleMatchCriteria",
		  "referenceContactType" : "Individual"
        },
        "postScript": ""
      }
    ]
  }
}