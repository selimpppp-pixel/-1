const form = document.getElementById("priceForm");
const resultCard = document.getElementById("resultCard");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userType = form.userType.value;
    const amount = Number(document.getElementById("amount").value);
    const hasCoupon = form.hasCoupon.value === "true";

    if (isNaN(amount) || amount <= 0) {
        alert("من فضلك أدخل مبلغًا صالحًا.");
        return;
    }

    let discount = 0;

    switch(userType) {
        case "Guest":
            discount = 0;
            break;
        case "Regular":
            if (amount <= 500) discount = 5;
            break;
        case "Premium":
            if (amount <= 500) discount = 10;
            else if (amount <= 1000) discount = 15;
            break;
        default:
            alert("نوع المستخدم غير معروف.");
            return;
    }

    if (hasCoupon) discount += 5;

    const finalPrice = amount - (amount * discount / 100);

    resultCard.style.display = "block";
    resultCard.innerHTML = `
        <h2>النتيجة</h2>
        <p>المبلغ الأصلي: ${amount} ريال</p>
        <p>نسبة الخصم: ${discount}%</p>
        <p>السعر النهائي بعد الخصم: ${finalPrice.toFixed(2)} ريال</p>
    `;
});