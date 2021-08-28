
function calcPay(hours,rate) {
    let OThours;
    let regHours;
    let regPay;
    let OTpay;
    let totalPay;

    if (hours <= 40) {
        return hours * rate;
    }
    regHours = 40;
    OThours = hours - regHours;
    regPay = regHours * rate;
    OTpay = OThours * rate * 1.5;
    totalPay = OTpay + regPay;
    return totalPay;
}

console.assert(calcPay(40,15) ===600);
console.assert(calcPay(60,15) ===1050);

