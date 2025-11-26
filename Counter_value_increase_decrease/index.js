const element =document.getElementById("increase");
 var val = 0;

element.addEventListener("click" ,(event)=>{
     val++;
     const para = document.getElementById("div1");
     para.textContent = `Count: ${val}`;
})

const ele = document.getElementById("decrease");
ele.addEventListener("click" ,(event)=>{
       val--;
       const par = document.getElementById("div1");
        par.textContent = `Count: ${val}`;
})


const res = document.querySelector(".res");

res.addEventListener("click",(event)=>{
        const par = document.getElementById("div1");
          par.textContent = "Count:  ";
          val=0;
})