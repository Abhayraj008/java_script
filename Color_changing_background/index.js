const btn = document.querySelectorAll("div");
const body = document.body;
btn.forEach((btn1,index)=>{
    btn1.addEventListener('click',(event)=>{
        const get = event.target;
        body.style.backgroundColor = get.className;
    });
});