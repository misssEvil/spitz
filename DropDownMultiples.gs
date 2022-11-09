function onEdit(e) {
var oldValue;
var newValue;
var ss = SpreadsheetApp.getActiveSpreadsheet();
var activeCell = ss.getActiveCell();
if((activeCell.getColumn() == 4 && activeCell.getRow() == 4 && ss.getActiveSheet().getName()=="ENTRY")) {
newValue=e.value;
oldValue=e.oldValue;
if(!e.value) {
activeCell.setValue("");
}
else {
if (!e.oldValue) {
activeCell.setValue(newValue);
}
else {
activeCell.setValue(oldValue+'; '+newValue);
}
}
}
}
