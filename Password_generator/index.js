
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "@#$&()_";

let obj = upper + lower + numbers + symbols;

const btn = document.querySelector(".btn");
const input = document.getElementById("ip1");

function randompassword(){
          let num ="";
          for(let i = 0 ; i<ip1.value; i++){
            const str = Math.floor(Math.random()*obj.length);
            num += obj[str];
          }
          return num;
}


btn.addEventListener("click" , (event)=>{
    const cont = document.querySelector(".cont");
    const str = randompassword();
    console.log(str);
    cont.textContent = str;
})
/*
setInterval(() =>{
    const cont = document.querySelector(".cont");
    let num = 50;
    let str = randompassword(Math.floor(Math.random()*num));
    console.log(str);
    cont.textContent = str;
},2000);
*/