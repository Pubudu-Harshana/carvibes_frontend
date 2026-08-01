/**
 * Google Apps Script for CarVibes.lk Recruitment Microsite
 * 
 * Instructions:
 * 1. Open Google Drive.
 * 2. Create a new Google Apps Script project (or go to script.google.com).
 * 3. Replace all default code in the editor with this code.
 * 4. Update the NOTIFICATION_EMAIL variable below with your email.
 * 5. Click "Deploy" -> "New deployment".
 * 6. Select type: "Web app".
 * 7. Configure:
 *    - Execute as: "Me" (your email)
 *    - Who has access: "Anyone"
 * 8. Click "Deploy", authorize the permissions, and copy the Web App URL.
 * 9. Paste this URL into your Next.js project's .env file as GOOGLE_SCRIPT_URL.
 */

// CHANGE THIS TO YOUR DESTINATION EMAIL
var NOTIFICATION_EMAIL = "pubuduhar@gmail.com";

function doPost(e) {
  try {
    // 1. Parse JSON payload
    var payload = JSON.parse(e.postData.contents);
    var position = payload.position;
    var name = payload.name;
    var homeTown = payload.homeTown;
    var phoneNumber = payload.phoneNumber;
    var experience = payload.experience + " Year(s)";
    var cvName = payload.cvName;
    var cvType = payload.cvType;
    var cvData = payload.cvData; // Base64 encoded string

    // 2. Locate or create CVs folder in Google Drive
    var folderName = "CarVibes CVs";
    var folders = DriveApp.getFoldersByName(folderName);
    var folder;
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(folderName);
    }

    // 3. Upload CV file to Google Drive folder
    var fileBytes = Utilities.base64Decode(cvData);
    var blob = Utilities.newBlob(fileBytes, cvType, cvName);
    var file = folder.createFile(blob);
    
    // Set file share permissions so recruiters can view it directly
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    var cvUrl = file.getUrl();

    // 4. Locate or create Spreadsheet
    var sheetName = "CarVibes Job Applications";
    var files = DriveApp.getFilesByName(sheetName);
    var spreadsheet;
    var sheet;

    if (files.hasNext()) {
      var fileRef = files.next();
      spreadsheet = SpreadsheetApp.openById(fileRef.getId());
      sheet = spreadsheet.getSheets()[0];
    } else {
      // Create new Spreadsheet if not exists
      spreadsheet = SpreadsheetApp.create(sheetName);
      sheet = spreadsheet.getSheets()[0];
      // Append headers
      sheet.appendRow([
        "Timestamp",
        "Position",
        "Name",
        "Home Town",
        "Phone Number",
        "Experience",
        "CV URL"
      ]);
      // Format headers
      sheet.getRange("A1:G1").setFontWeight("bold").setBackground("#FF7A00").setFontColor("#FFFFFF");
    }

    // 5. Append Row to Spreadsheet
    var timestamp = new Date();
    sheet.appendRow([
      timestamp,
      position,
      name,
      homeTown,
      "'" + phoneNumber, // Prepended with single quote to save as text to avoid dropping leading zeroes
      experience,
      cvUrl
    ]);

    // 6. Send Email Notification
    var emailSubject = "New CarVibes.lk Job Application: " + name;
    var emailBody = 
      "Dear Recruiter,\n\n" +
      "A new job application has been submitted for CarVibes.lk.\n\n" +
      "--- Applicant Details ---\n" +
      "Position Applied: " + position + "\n" +
      "Full Name: " + name + "\n" +
      "Home Town: " + homeTown + "\n" +
      "Phone Number: " + phoneNumber + "\n" +
      "Years of Experience: " + experience + "\n" +
      "Submitted Time: " + timestamp.toString() + "\n\n" +
      "--- CV File ---\n" +
      "You can view/download the applicant's CV here:\n" +
      cvUrl + "\n\n" +
      "Sincerely,\n" +
      "CarVibes.lk Recruitment Portal System";

    GmailApp.sendEmail(NOTIFICATION_EMAIL, emailSubject, emailBody);

    // 7. Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", fileUrl: cvUrl })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
