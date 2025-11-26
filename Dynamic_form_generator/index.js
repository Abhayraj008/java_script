const quiz = [
  {
    question: "Who is the current Prime Minister of India?",
    options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Manmohan Singh"],
    answer: "Narendra Modi"
  },
  {
    question: "What is the capital city of India?",
    options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "Which is the national animal of India?",
    options: ["Elephant", "Tiger", "Lion", "Peacock"],
    answer: "Tiger"
  },
  {
    question: "Which is the national bird of India?",
    options: ["Parrot", "Sparrow", "Peacock", "Eagle"],
    answer: "Peacock"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "Which festival is known as the Festival of Lights?",
    options: ["Holi", "Eid", "Diwali", "Christmas"],
    answer: "Diwali"
  },
  {
    question: "Who wrote the Indian national anthem?",
    options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Subhash Chandra Bose"],
    answer: "Rabindranath Tagore"
  },
  {
    question: "Which gas do plants absorb during photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Which is the largest continent?",
    options: ["Africa", "Asia", "Europe", "Australia"],
    answer: "Asia"
  },
  {
    question: "Which is the smallest state in India by area?",
    options: ["Goa", "Sikkim", "Tripura", "Nagaland"],
    answer: "Goa"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["India", "Japan", "China", "Thailand"],
    answer: "Japan"
  },
  {
    question: "Who was the first President of India?",
    options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel", "Indira Gandhi"],
    answer: "Dr. Rajendra Prasad"
  },
  {
    question: "Which element has the chemical symbol ‘O’?",
    options: ["Oxygen", "Gold", "Osmium", "Ozone"],
    answer: "Oxygen"
  },
  {
    question: "What is the national flower of India?",
    options: ["Rose", "Lotus", "Marigold", "Lily"],
    answer: "Lotus"
  },
  {
    question: "In which year did India gain independence?",
    options: ["1945", "1947", "1950", "1952"],
    answer: "1947"
  },
  {
    question: "Which sport is known as the 'Gentleman's Game'?",
    options: ["Football", "Cricket", "Tennis", "Golf"],
    answer: "Cricket"
  },
  {
    question: "Who invented the light bulb?",
    options: ["Alexander Graham Bell", "Nikola Tesla", "Thomas Edison", "Isaac Newton"],
    answer: "Thomas Edison"
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "100°C", "120°C", "80°C"],
    answer: "100°C"
  },
  {
    question: "Which planet is known for its rings?",
    options: ["Jupiter", "Venus", "Saturn", "Neptune"],
    answer: "Saturn"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the chemical formula of water?",
    options: ["CO2", "H2O", "O2", "NaCl"],
    answer: "H2O"
  },
  {
    question: "Which device is used to measure temperature?",
    options: ["Barometer", "Thermometer", "Hygrometer", "Altimeter"],
    answer: "Thermometer"
  },
  {
    question: "What is the fastest land animal?",
    options: ["Cheetah", "Lion", "Tiger", "Horse"],
    answer: "Cheetah"
  },
  {
    question: "Which part of the plant conducts photosynthesis?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    answer: "Leaf"
  }
];

const answer = {};


const form = document.getElementById("myform");

function randomGenerator(){

    const s1 = new Set();
    while(s1.size != 5){
    const num = Math.floor(Math.random()*quiz.length);
    s1.add(quiz[num]);    
}
return [...s1];
}
const arr = randomGenerator();
arr.forEach((num,index)=>{
   const div_element = document.createElement("div");
   div_element.className = "question";
   const para = document.createElement("p");
   answer[`q${index+1}`] = num['answer'];
   para.innerHTML = `${index+1}. ${num['question']}`;
   div_element.appendChild(para);

num['options'].forEach((data)=>{
     const label = document.createElement("label");
     const input = document.createElement("input");
     input.name =`q${index+1}`;
     input.type = "radio"
     input.value=data; // num.options;
     input.style.marginRight = "10px"; // adds space between radio and text
       input.style.marginTop = "5px"; 
     const n1 = document.createTextNode(`${data}`);
     label.appendChild(input);
     label.appendChild(n1);
     div_element.appendChild(label);
     div_element.appendChild(document.createElement('br'));

})
 form.appendChild(div_element);
})
const btn =  document.createElement("button");
btn.id="btn1";
btn.type="submit";
btn.innerHTML ="submit"; 
 form.appendChild(btn);
 let rs=0;
 form.addEventListener('submit',(event)=>{

        event.preventDefault();
        const formdata = new FormData(form);
       for(let [key,value] of formdata.entries()){
         if(value  == answer[key]){
              rs++;
         }
       }
       console.log(rs);
 const d1 = document.querySelector(".container");
 const pk = document.createElement("p");
 pk.innerHTML = `${rs} are corrected out of 5`;
 pk.style.position="relative";
 pk.style.top=`${10}px`;
 d1.appendChild(pk);

})