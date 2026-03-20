# 📋 HƯỚNG DẪN TẠO GOOGLE SHEETS CHO QUIZ

## Bước 1: Tạo Google Sheet mới

1. Truy cập [Google Sheets](https://sheets.google.com)
2. Tạo bảng tính mới
3. Đặt tên: `Kết quả kiểm tra [Tên bài]`
4. Thêm header vào hàng 1:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Thời gian nộp | Họ và tên | Lớp | SĐT Cha/Mẹ | Điểm | Số câu đúng | Tổng số câu | Thời gian làm bài | Chi tiết |

---

## Bước 2: Tạo Apps Script

1. Vào **Tiện ích (Extensions)** → **Apps Script**
2. Xóa code mặc định, dán code bên dưới
3. Lưu (**Ctrl + S**), đặt tên: `Quiz API`

---

## Bước 3: Deploy Web App

1. Click **Triển khai (Deploy)** → **Triển khai mới (New deployment)**
2. Loại: **Ứng dụng web (Web app)**
3. Cấu hình:
   - Thực thi với tư cách: **Tôi (Me)**
   - Ai có quyền truy cập: **Bất kỳ ai (Anyone)**
4. Click **Triển khai (Deploy)**
5. Cho phép quyền truy cập
6. **Copy URL** và dán vào file quiz (dòng GOOGLE_SCRIPT_URL)

---

## Bước 4: Cập nhật Quiz

Mở file quiz HTML, tìm dòng:
```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```

Thay bằng URL bạn vừa copy.

---

## 📞 Hỗ trợ

- 💬 Zalo: [0914666040](https://zalo.me/0914666040)
- 📘 Facebook: [facebook.com/vongoctungthcs](https://facebook.com/vongoctungthcs)
