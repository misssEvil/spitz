const googleSheetTemplate = DriveApp.getFileById('1v00VGoGytEChp4Y7HxOlMjwWzj2XAMnRpBk7dly7IQU');
  const destinationFolder = DriveApp.getFolderById('1L39m0ic3UBkvr4MCMLqb5mZRIN7df8jM')
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName('template')

  var rowIndex = sheet.getSelection().getCurrentCell().getRowIndex().toString();
  const row = sheet.getActiveRange().getValues(); 

function createTNout() {
 


  const copy = googleSheetTemplate.makeCopy(`${row[0][0]}, ${row[0][4]}, ${row[0][5]} TN Details`, destinationFolder);
  const sheetTN = SpreadsheetApp.openById(copy.getId());
  const url = sheetTN.getUrl();
  sheet.getRange(rowIndex,44).setValue(url);

  var dateTN = sheetTN.getRange("Sheet1!B9");
  var numberTN = sheetTN.getRange("Sheet1!D9");
  var dateOrder = sheetTN.getRange("Sheet1!F9");
  var numberOrder = sheetTN.getRange("Sheet1!H9");
  var clientInfo = sheetTN.getRange("Sheet1!E14:H14");
  var conractInfo = sheetTN.getRange("Sheet1!E16:H16");
  var recieverInfo = sheetTN.getRange("Sheet1!A19:H19");
  var address = sheetTN.getRange("Sheet1!A21:H21");
  var cargoDesc = sheetTN.getRange("Sheet1!A24:D24");
  var cargoPlaces = sheetTN.getRange("Sheet1!E24:H24");
  var weight = sheetTN.getRange("Sheet1!A26:H26");
  var shippingDoc = sheetTN.getRange("Sheet1!A35:H35");
  var seal = sheetTN.getRange("Sheet1!E40:H40");
  var driver = sheetTN.getRange("Sheet1!E43:H43");
  var carType = sheetTN.getRange("Sheet1!A46:D46");
  var licensePlate = sheetTN.getRange("Sheet1!E46:H46"); //16
  

  dateTN.setValue(row[0][15]);
  numberTN.setValue("***");
  dateOrder.setValue(row[0][4]);
  numberOrder.setValue(row[0][3]);
  clientInfo.setValue(row[0][5]);
  conractInfo.setValue("***");
  recieverInfo.setValue(`${row[0][8]}, ${row[0][9]}`);
  address.setValue(`${row[0][9]}, ${row[0][10]}`);
  cargoDesc.setValue(`${row[0][0]}, ${row[0][1]} фут, (${row[0][2]}), ${row[0][6]} `);
  cargoPlaces.setValue(row[0][18]);
  weight.setValue(`${row[0][19]} нетто, ${row[0][20]} брутто (по стандарту)`);
  shippingDoc.setValue(`Оригинал траспортной железнодорожной накладной ${row[0][21]}`);
  seal.setValue(`пломба № ${row[0][22]}`);
  var str = row[0][23].toString();
  driver.setValue(row[0][17]);
  carType.setValue(str.substring(0, str.indexOf(",")));
  licensePlate.setValue(str.substring(str.indexOf(",") + 1, str.length));

  var uploadTerminal = sheetTN.getRange("Sheet2!A9:L9");
  var uploadAdress = sheetTN.getRange("Sheet2!A11:F11");
  var uploadDateTime = sheetTN.getRange("Sheet2!G11:L11");
  var cargoBrutto = sheetTN.getRange("Sheet2!A15:L15");
  var cargoPlaces2 = sheetTN.getRange("Sheet2!A17:F17");
  var cargoPackingType = sheetTN.getRange("Sheet2!G17:L17");
  var driver2 = sheetTN.getRange("Sheet2!I21:L21");
  var unloadAdress = sheetTN.getRange("Sheet2!A30:F30");
  var unloadDateTime = sheetTN.getRange("Sheet2!G30:L30");
  var cargoCondition = sheetTN.getRange("Sheet2!A34:F34");
  var weight2 = sheetTN.getRange("Sheet2!A36:F36");
  var cargoPlaces3 = sheetTN.getRange("Sheet2!G34:L34");
  var driver3 = sheetTN.getRange("Sheet2!I38:L38");
  var comment = sheetTN.getRange("Sheet2!A41:L41"); //14

  uploadTerminal.setValue(`Получение груженого контейнера: ${row[0][7]}`);
  uploadAdress.setValue("****");
  uploadDateTime.setValue(row[0][13]);
  cargoBrutto.setValue(` ${row[0][20]} кг брутто (по стандарту)`);
  cargoPlaces2.setValue(row[0][18]);
  cargoPackingType.setValue(row[0][18]);
  driver2.setValue(row[0][17]);
  unloadAdress.setValue(row[0][9]);
  unloadDateTime.setValue(` ${row[0][15]} в ${row[0][16]}`);
  cargoCondition.setValue(`груз сдан за исправной пломбой №${row[0][22]}`);
  cargoPlaces3.setValue(row[0][18]);
  weight2.setValue(`${row[0][19]} нетто, ${row[0][20]} брутто`);
  driver3.setValue(driver2.getValue());
  comment.setValue(`Сдача порожнего контейнера: ${row[0][0]}`);
}
