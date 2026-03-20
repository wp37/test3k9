// ╔════════════════════════════════════════════════════════════════╗
// ║           GOOGLE APPS SCRIPT - QUIZ API                        ║
// ║           Copy toàn bộ code này vào Apps Script                ║
// ╚════════════════════════════════════════════════════════════════╝

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Thời gian Việt Nam
    var now = new Date();
    var vnTime = Utilities.formatDate(now, "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss");
    
    // Ghi dữ liệu vào sheet
    sheet.appendRow([
      vnTime,                    // A: Thời gian nộp
      data.name,                 // B: Họ và tên
      data.className,            // C: Lớp
      data.parentPhone,          // D: SĐT Cha/Mẹ
      data.score,                // E: Điểm
      data.correctCount,         // F: Số câu đúng
      data.totalQuestions,       // G: Tổng số câu
      data.timeSpent,            // H: Thời gian làm bài
      data.details               // I: Chi tiết đáp án
    ]);
    
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
// ║   1. Lưu file (Ctrl + S)                                       ║
// ║   2. Deploy → New deployment                                   ║
// ║   3. Chọn: Web app                                             ║
// ║   4. Execute as: Me | Who has access: Anyone                   ║
// ║   5. Deploy → Copy URL                                         ║
// ╚════════════════════════════════════════════════════════════════╝
