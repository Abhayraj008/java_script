
function gettime(){
const time = new Date();
const indian = time.toLocaleTimeString();

const element = document.getElementById("root");
element.innerHTML = indian;

element.style.fontSize = "100px";
element.style.display= "flex";
element.style.height = "100vh";
element.style.justifyContent = "center";
element.style.alignItems = "center";
};

setInterval(gettime,1000);
  