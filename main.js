const Pslider = document.querySelector(".Pslider");
const Pvalue = document.querySelector(".Pvalue");
const Rslider = document.querySelector(".Rslider");
const Rvalue = document.querySelector(".Rvalue");
const Nslider = document.querySelector(".Nslider");
const Nvalue = document.querySelector(".Nvalue");

const Ivalue = document.querySelector(".Ivalue");
const TAmt = document.querySelector(".TAmt");
const EMI = document.querySelector(".EMI");

Pslider.addEventListener("input" , ()=>{
    Pvalue.innerHTML = `$ ${Pslider.value}`;
    calculate();
})

Rslider.addEventListener("input" , ()=>{
    Rvalue.innerHTML = `${Rslider.value}% per annum`;
    calculate();
})

Nslider.addEventListener("input" , ()=>{
    Nvalue.innerHTML = `${Nslider.value} years`;
    calculate();
})

function calculate(){
    let simpleInterest = Pslider.value * Rslider.value * Nslider.value / 100;
    Ivalue.innerHTML = simpleInterest;
    let totalAmount = parseInt(Pslider.value) + Math.round(simpleInterest);
    TAmt.innerHTML = totalAmount;
    let months  = Nslider.value * 12;
    let emi = Math.round(totalAmount / months);
    EMI.innerHTML = emi; 
}
