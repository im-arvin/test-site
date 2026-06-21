// ============================================================
//  سبد خرید
//  cart یه آرایه‌ست که آیتم‌های خریداری شده رو نگه می‌داره
// ============================================================
let cart = [];

// این تابع تعداد آیتم‌های سبد رو توی ناوبار نشون می‌ده
function updateCartCount() {
  document.getElementById("cartCount").textContent = cart.length;
}

// ============================================================
//  افزودن به سبد
//  وقتی دکمه "افزودن" زده می‌شه این تابع صدا زده می‌شه
// ============================================================
function addToCart(name, price) {
  // یه آیتم جدید به آرایه cart اضافه می‌کنیم
  cart.push({ name: name, price: price });

  // تعداد سبد رو آپدیت می‌کنیم
  updateCartCount();

  // یه پیام کوتاه به کاربر نشون می‌دیم
  alert("✅ " + name + "Added to cart !");
}

// ============================================================
//  باز کردن سبد خرید
//  وقتی روی دکمه سبد کلیک می‌شه
// ============================================================
document.getElementById("cartBtn").addEventListener("click", function () { 

  // اول لیست رو خالی می‌کنیم تا دوباره از صفر بسازیم
  let list = document.getElementById("cartItems");
  list.innerHTML = "";

  // اگه سبد خالیه یه پیام نشون می‌دیم
  if (cart.length === 0) {
    list.innerHTML = "<li style='text-align:center; color:#888'>Cart is empty</li>";
    document.getElementById("totalPrice").textContent = "0";
  } else {
    // برای هر آیتم توی سبد یه ردیف می‌سازیم
    let total = 0;
    cart.forEach(function (item) {
      list.innerHTML += "<li><span>" + item.name + "</span><span>" + item.price.toLocaleString() + " $</span></li>";
      total += item.price;
    });
    document.getElementById("totalPrice").textContent = total.toLocaleString();
  }

  // مودال رو باز می‌کنیم
  document.getElementById("cartModal").classList.add("open");
});

// ============================================================
//  بستن سبد خرید
// ============================================================
document.getElementById("closeCart").addEventListener("click", function () {
  document.getElementById("cartModal").classList.remove("open");
});

// ============================================================
//  دارک مود
//  با هر بار کلیک، کلاس dark رو اضافه یا حذف می‌کنه
// ============================================================
document.getElementById("themeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark");

  // آیکون دکمه رو هم عوض می‌کنیم
  if (document.body.classList.contains("dark")) {
    this.textContent = "☀️";
  } else {
    this.textContent = "🌙";
  }
});

// ============================================================
//  جستجو
//  با هر حرفی که کاربر تایپ می‌کنه، محصولات فیلتر می‌شن
// ============================================================
document.getElementById("searchInput").addEventListener("keyup", function () {
  let value = this.value.toLowerCase();

  document.querySelectorAll(".card").forEach(function (card) {
    let productName = card.querySelector("h3").textContent.toLowerCase();

    if (productName.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// ============================================================
//  انیمیشن اسکرول
//  وقتی کاربر اسکرول می‌کنه، المان‌های مخفی ظاهر می‌شن
// ============================================================
window.addEventListener("scroll", function () {
  document.querySelectorAll(".hidden").forEach(function (el) {
    // اگه المان به اندازه کافی توی صفحه اومد، نشونش بده
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// ============================================================
//  لودینگ
//  بعد از لود شدن صفحه، لودینگ رو مخفی می‌کنیم
// ============================================================
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loader").classList.add("hide");
  }, 1000);
});

// ============================================================
//  فرم تماس
//  وقتی فرم ارسال می‌شه
// ============================================================
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // از رفرش شدن صفحه جلوگیری می‌کنه
  alert("✉  Your message send. Thank you !");
  this.reset(); // فرم رو خالی می‌کنه
});   