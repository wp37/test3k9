// ╔════════════════════════════════════════════════════════════════╗
// ║           GOOGLE APPS SCRIPT - QUIZ API                        ║
// ║           Dành cho lớp mới - Copy vào Apps Script              ║
// ╚════════════════════════════════════════════════════════════════╝

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Thêm tiêu đề nếu sheet trống
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "⏰ Thời gian", 
        "👤 Họ và tên", 
        "🏫 Lớp", 
        "📱 SĐT Phụ huynh", 
        "🎯 Điểm"
      ]);
      // Format header
      var headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#4285f4");
      headerRange.setFontColor("white");
      sheet.setFrozenRows(1);
    }
    
    // Thời gian Việt Nam
    var now = new Date();
    var vnTime = Utilities.formatDate(now, "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss");
    
    // Ghi dữ liệu vào sheet
    sheet.appendRow([
      vnTime,                    // A: Thời gian nộp
      data.name,                 // B: Họ và tên
      data.className,            // C: Lớp
      data.parentPhone,          // D: SĐT Cha/Mẹ
      data.score                 // E: Điểm
    ]);
    
    // Auto-resize cột
    sheet.autoResizeColumns(1, 5);
    
    return ContentService
      .createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test API hoạt động
function doGet(e) {
  return ContentService.createTextOutput("✅ Quiz API đang hoạt động!");
}

// ╔════════════════════════════════════════════════════════════════╗
// ║   HƯỚNG DẪN DEPLOY:                                            ║
// ║   1. Tạo Google Sheet mới                                      ║
// ║   2. Extensions → Apps Script                                  ║
// ║   3. Xóa code mặc định, dán code này vào                      ║
// ║   4. Lưu (Ctrl + S)                                            ║
// ║   5. Deploy → New deployment                                   ║
// ║   6. Chọn: Web app                                             ║
// ║   7. Execute as: Me | Who has access: Anyone                   ║
// ║   8. Deploy → Copy URL (dạng .../exec)                         ║
// ║   9. Dán URL vào quiz HTML                                     ║
// ╚════════════════════════════════════════════════════════════════╝
