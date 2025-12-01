const isBlacklisted = false;
const age = 20;
const hasPermitCard = true;
const level = 3;   

let message = "";


if (isBlacklisted === true) {
  message = "تم رفض الدخول: المستخدم محظور.";
}


else if (age < 18 || hasPermitCard === false) {
  message = "تم رفض الدخول: الشروط الأساسية غير مكتملة.";
}


else if (level >= 4) { 
  message = "تم السماح بالدخول: صلاحية كاملة.";
}


else if (level >= 2 && level <= 3) {   
  message = "تم السماح بالدخول: صلاحية محدودة.";
}


else if (level === 1) { 
  message = "تم السماح بالدخول: صلاحية زائر فقط.";
}

document.getElementById("result").textContent = message;