{
  "aboutToExpireSearchRules": {
    "searchCriteria": {
      "searchByRecordGroup":"RentalHousing",
      "searchByRecordType":"",
      "searchByRecordSubType":"",
      "searchByRecordCategory":"License",
      "searchStatus": "Active",
      "searchByDaysOut": -1,
      "searchByFromDate": false,
      "searchByToDate": false,
      "expiringInterval":"nextquarter",
      "notificationConfScript":"CONF_RENTALHOUSING_LICENSE_EXPIRATION_NOTICE",
      "firstNotice": "60 Day Notice",
      "excludeRecordType": [{
          "type": "Licenses/Type/Subtype/Category"
        },
        {
          "type": "Licenses/Type/Subtype/Category"
        }
      ],
      "excludeRecordStatus": [{
          "status": "Revoked"
        },
        {
          "status": "Closed"
        }
      ],
      "adminEmail": "dbrown@accela.com",
      "batchResultEmailTemplate": "BATCH_LICENSE_RENEWAL_RESULTS"
    }
  },
  "expirationNoticeSearchRules": {
    "searchCriteria": {
      "searchByRecordGroup":"RentalHousing",
      "searchByRecordType":"",
      "searchByRecordSubType":"",
      "searchByRecordCategory":"License",      
      "searchByRecordStatus":"",
      "searchByDaysOut": 1,
      "searchByFromDate": false,
      "searchByToDate": false,
      "notificationConfScript":"CONF_RENTALHOUSING_LICENSE_EXPIRATION_NOTICE",      
      "excludeRecordType": [{
          "type": "Licenses/Type/Subtype/Category"
        },
        {
          "type": "Licenses/Type/Subtype/Category"
        }
      ],
      "excludeRecordStatus": [{
          "status": "Revoked"
        },
        {
          "status": "Closed"
        }
      ],
      "adminEmail": "dbrown@accela.com",
      "batchResultEmailTemplate": "BATCH_LICENSE_RENEWAL_RESULTS"
    }
  }
}