// ============================================================
//  اطلاعات کاربر (در پروژه واقعی اینا توی سرور هستن)
// ============================================================
let correctEmail    = "user@gmail.com";
let correctPassword = "1234";

// ============================================================
//  وقتی فرم ارسال میشه
// ============================================================
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // از رفرش شدن صفحه جلوگیری می‌کنه

  // مقدار ورودی‌ها رو می‌خونیم
  let email = document.getElementById("emailInput").value;
  let pass  = document.getElementById("passInput").value;

  // چک می‌کنیم آیا درسته
  if (email === correctEmail && pass === correctPassword) {
    // ورود موفق — میره به صفحه اصلی
    alert("✅  Welcome !");
    window.location.href = "index.html";
  } else {
    // ورود ناموفق — پیام خطا نشون می‌ده
    document.getElementById("errorMsg").style.display = "block";
  }
});