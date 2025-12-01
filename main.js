const scoreInput = document.getElementById("score");
const attendanceInput = document.getElementById("attendance");
const cheatingInput = document.getElementById("cheating");
const resultDiv = document.getElementById("result");

document.getElementById("checkBtn").addEventListener("click", () => {
    const score = Number(scoreInput.value);
    const attendance = Number(attendanceInput.value);
    const cheatingFlag = cheatingInput.value === "true";

   
    if (cheatingFlag) {
        resultDiv.textContent = "النتيجة: مستبعد بسبب الغش.";
        return;
    }

    if (attendance < 60) {
        resultDiv.textContent = "النتيجة: راسب بسبب انخفاض الحضور.";
        return;
    }

    let grade ;
    if (score >= 90) grade = "A";
    else if (score >= 80) grade = "B";
    else if (score >= 70) grade = "C";
    else if (score >= 60) grade = "D";
    else grade = "F";

   let message =' الدرجة: ${grade}';

    if (score >= 70 && attendance >= 90) {
        message += "\nالحالة: مؤهل للتميز الأكاديمي.";
    }

    resultDiv.textContent = message;
});