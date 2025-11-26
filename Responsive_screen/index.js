const colors = [
  "red","blue","green","yellow","orange","purple","pink","brown",
  "black","white"];

document.body.addEventListener("click",(event)=>{
      const circle = document.createElement('div');
     circle.className = "circle";
       circle.textContent = "hii";
     const x1 = event.clientX;
     const y1 = event.clientY;

   
     circle.style.left = `${x1-25}px`;
     circle.style.top = `${y1-25}px`;
     const num = Math.floor(Math.random()*colors.length);
   circle.style.backgroundColor=colors[num];
     document.body.appendChild(circle);
    
     setTimeout(()=>{
        circle.remove();
     },5000)
});