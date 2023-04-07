function handleSearchResult(result) {
if(result.getSuccess())
{
var resultList = result.getOutput();
if(resultList != null && resultList.size() > 0) {
for(var i = 0; i < resultList.size(); i++) {
printRow(resultList.get(i));
}
} else {
aa.print("No Record Found!");
}
}
else
{
aa.print(result.getErrorMessage());
}
}

// print result row - with column info
function printRow(row) {
var entry = row.keySet().toArray();
var rowString = "";
for(var e = 0; e < entry.length - 1; e++) {
rowString += entry[e] + "=" + row.get(entry[e]) + ", ";
}
rowString += entry[entry.length - 1] + "=" + row.get(entry[entry.length - 1]);
aa.print(rowString);
}

aa.print("=========== 16. Test aa.db.select ============");
aa.print("Test B3CONTACT.B1_SOCIAL_SECURITY_NUMBER...");
var sqlString16B = "SELECT B1_SOCIAL_SECURITY_NUMBER FROM B3CONTACT WHERE SERV_PROV_CODE = ? AND B1_PER_ID1 = ? AND B1_PER_ID2 = ? AND B1_PER_ID3 = ?";
var parameters16B = ["STANDARDTEST", "REC20", "00000", "000EV"];
var result16B = aa.db.select(sqlString16B, parameters16B);
handleSearchResult(result16B);