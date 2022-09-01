function CorreoSV() {
    var hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var email = hoja.getRange('Estatus!H2:H5').getValue();
    var asunto = hoja.getRange('Estatus!I2:I5').getValue();
    var mensaje = hoja.getRange('Estatus!J2:J5').getValue();
    
   
   GmailApp.sendEmail(email,asunto,mensaje);
   
   
   }