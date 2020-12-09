
let k = document.getElementById("knap1");


k.onclick = ()=>{
    k.innerText = "KLIK";
    let h = document.querySelector("h1");
    h.style.color = "green";
    h.innerText = new Date();
};

console.log(k);
console.log("Test");