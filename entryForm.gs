var myGoogleSheet = SpreadsheetApp.getActiveSpreadsheet();
var shEntryForm = myGoogleSheet.getSheetByName("Entry");
var dataSheet = myGoogleSheet.getSheetByName("template");
var ui = SpreadsheetApp.getUi();

var blankRow = dataSheet.getLastRow()+1; 


function submitData() {

var response = ui.alert("Submit Confirmation", 'Do you want to save new data?', ui.ButtonSet.YES_NO);

if(response = ui.ButtonSet.NO){
  return;

}
else{

dataSheet.getRange(blankRow,1).setValue(shEntryForm.getRange("D5").getValue());
dataSheet.getRange(blankRow,2).setValue(shEntryForm.getRange("D6").getValue());
dataSheet.getRange(blankRow,3).setValue(shEntryForm.getRange("D7").getValue());
dataSheet.getRange(blankRow,4).setValue(shEntryForm.getRange("D8").getValue());
dataSheet.getRange(blankRow,5).setValue(shEntryForm.getRange("D9").getValue());
dataSheet.getRange(blankRow,6).setValue(shEntryForm.getRange("D10").getValue());
dataSheet.getRange(blankRow,7).setValue(shEntryForm.getRange("D11").getValue());
dataSheet.getRange(blankRow,8).setValue(shEntryForm.getRange("D12").getValue());
dataSheet.getRange(blankRow,9).setValue(shEntryForm.getRange("D13").getValue());
dataSheet.getRange(blankRow,10).setValue(shEntryForm.getRange("D14").getValue());
dataSheet.getRange(blankRow,11).setValue(shEntryForm.getRange("D15").getValue());
dataSheet.getRange(blankRow,12).setValue(shEntryForm.getRange("D16").getValue());
dataSheet.getRange(blankRow,13).setValue(shEntryForm.getRange("D17").getValue());
dataSheet.getRange(blankRow,14).setValue(shEntryForm.getRange("D18").getValue());
dataSheet.getRange(blankRow,15).setValue(shEntryForm.getRange("D19").getValue());
dataSheet.getRange(blankRow,16).setValue(shEntryForm.getRange("D20").getValue());
dataSheet.getRange(blankRow,17).setValue(shEntryForm.getRange("D21").getValue());
dataSheet.getRange(blankRow,18).setValue(shEntryForm.getRange("D22").getValue());
dataSheet.getRange(blankRow,19).setValue(shEntryForm.getRange("D23").getValue());
dataSheet.getRange(blankRow,20).setValue(shEntryForm.getRange("D24").getValue());
dataSheet.getRange(blankRow,21).setValue(shEntryForm.getRange("D25").getValue());
dataSheet.getRange(blankRow,22).setValue(shEntryForm.getRange("D26").getValue());
dataSheet.getRange(blankRow,23).setValue(shEntryForm.getRange("D27").getValue());
dataSheet.getRange(blankRow,24).setValue(shEntryForm.getRange("D28").getValue());
dataSheet.getRange(blankRow,25).setValue(shEntryForm.getRange("D29").getValue());
dataSheet.getRange(blankRow,26).setValue(shEntryForm.getRange("D30").getValue());
dataSheet.getRange(blankRow,27).setValue(shEntryForm.getRange("D31").getValue());
dataSheet.getRange(blankRow,28).setValue(shEntryForm.getRange("D32").getValue());
dataSheet.getRange(blankRow,29).setValue(shEntryForm.getRange("D33").getValue());
dataSheet.getRange(blankRow,30).setValue(shEntryForm.getRange("D34").getValue());
dataSheet.getRange(blankRow,31).setValue(shEntryForm.getRange("D35").getValue());
dataSheet.getRange(blankRow,32).setValue(shEntryForm.getRange("D36").getValue());
dataSheet.getRange(blankRow,33).setValue(shEntryForm.getRange("D37").getValue());
dataSheet.getRange(blankRow,34).setValue(shEntryForm.getRange("D38").getValue());
dataSheet.getRange(blankRow,35).setValue(shEntryForm.getRange("D39").getValue());
dataSheet.getRange(blankRow,36).setValue(shEntryForm.getRange("D40").getValue());
dataSheet.getRange(blankRow,37).setValue(shEntryForm.getRange("D41").getValue());
dataSheet.getRange(blankRow,38).setValue(shEntryForm.getRange("D42").getValue());
dataSheet.getRange(blankRow,39).setValue(shEntryForm.getRange("D43").getValue());
dataSheet.getRange(blankRow,40).setValue(shEntryForm.getRange("D44").getValue());
dataSheet.getRange(blankRow,41).setValue(shEntryForm.getRange("D45").getValue());
dataSheet.getRange(blankRow,42).setValue(shEntryForm.getRange("D46").getValue());
dataSheet.getRange(blankRow,43).setValue(shEntryForm.getRange("D47").getValue());


updateLists();
ui.alert("Saved!");
clearSilent();

}  
}

function clearForm() {

  var response = ui.alert("Reset Confirmation", 'Do you want to reset form?', ui.ButtonSet.YES_NO);

  if (response = ui.Button.YES){

    shEntryForm.getRange(5, 4, 44, 1).clear();
    shEntryForm.getRange(5, 4, 44, 1).setBorder(true, true, true, true, true, true, "grey", SpreadsheetApp.BorderStyle.DASHED);
    
    ui.alert("Cleared!");

    return true;
    
  }  
}

function clearSilent(){

  shEntryForm.getRange(5, 4, 44, 1).clear();
    shEntryForm.getRange(5, 4, 44, 1).setBorder(true, true, true, true, true, true, "grey", SpreadsheetApp.BorderStyle.DASHED);

}

var containers = myGoogleSheet.getSheetByName("containers");
var clients = myGoogleSheet.getSheetByName("clients");
var terminals = myGoogleSheet.getSheetByName("terminals");
var drivers = myGoogleSheet.getSheetByName("drivers");
var addresses = myGoogleSheet.getSheetByName("addresses");
var cargo = myGoogleSheet.getSheetByName("cargo");

function updateLists(){
   //cont
   if(containers.getRange('A2:A').getValues().toString().includes(shEntryForm.getRange("D5").getValue().toString())){

  }
  else{
    containers.getRange((containers.getLastRow() + 1),1).setValue(shEntryForm.getRange("D5").getValue());
  }

  //clients
  if(clients.getRange('B2:B').getValues().toString().includes(shEntryForm.getRange("D10").getValue().toString())){

  }
  else{
    clients.getRange((clients.getLastRow() + 1),2).setValue(shEntryForm.getRange("D10").getValue());
  }

  //term in
  if(terminals.getRange('B2:B').getValues().toString().includes(shEntryForm.getRange("D12").getValue().toString())){

  }
  else{
    terminals.getRange((terminals.getLastRow() + 1),2).setValue(shEntryForm.getRange("D12").getValue());
  }
  
  //term out
  if(terminals.getRange('B2:B').getValues().toString().includes(shEntryForm.getRange("D16").getValue().toString())){

  }
  else{
    terminals.getRange((terminals.getLastRow() + 1),2).setValue(shEntryForm.getRange("D16").getValue());
  }

  //drivers
  if(drivers.getRange('B2:B').getValues().toString().includes(shEntryForm.getRange("D22").getValue().toString())){

  }
  else{
    drivers.getRange((drivers.getLastRow() + 1),2).setValue(shEntryForm.getRange("D22").getValue());
  }

  //addresses
  if(addresses.getRange('B2:B').getValues().toString().includes(shEntryForm.getRange("D14").getValue().toString()) || shEntryForm.getRange("D14").getValue().toString().includes("; ")){

  }
  else{
    addresses.getRange((addresses.getLastRow() + 1),2).setValue(shEntryForm.getRange("D14").getValue());
  }

  //cargo
  if(containers.getRange('B2:A').getValues().toString().includes(shEntryForm.getRange("D11").getValue().toString()) || shEntryForm.getRange("D11").getValue().toString().includes("); ")){
    var a = 10;

  }
  else{
    containers.getRange((containers.getLastRow() + 1),1).setValue(shEntryForm.getRange("D11").getValue());
  }
  
}

