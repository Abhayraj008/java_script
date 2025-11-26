  var num=1;
  const ele = document.getElementById("btn");
ele.addEventListener('click',(event)=>{
  const element = document.getElementById("ip1").value;
     event.preventDefault();
     const p =document.getElementById("para");

     for(let i = 1 ;  i <= element ; i++){
        num *= i;
     }
     p.innerHTML = `factorial is : ${num}`;
     console.log(num);

    num=1;
})