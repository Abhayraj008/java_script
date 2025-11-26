const quotes = [
  "Honesty is the best policy.",
  "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
  "Dream big, work hard, stay humble.",
  "Believe in yourself and all that you are.",
  "Do something today that your future self will thank you for.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Sometimes later becomes never. Do it now.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The key to success is to focus on goals, not obstacles.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Little things make big days.",
  "It always seems impossible until it’s done.",
  "Don’t wait for opportunity. Create it.",
  "Discipline is the bridge between goals and accomplishment.",
  "Work hard in silence, let your success make the noise.",
  "Good things come to people who wait, but better things come to those who go out and get them.",
  "The secret of getting ahead is getting started.",
  "Your attitude determines your direction.",
  "Don’t be afraid to give up the good to go for the great.",
];
// 

// function generateq(){
//     const obj = document.getElementById("p1");
//     const qu = Math.floor(Math.random()*quotes.length);

//     obj.textContent = quotes[qu];
// }

const color = [
  "rgba(255, 99, 71, 0.3)",    // light tomato
  "rgba(135, 206, 250, 0.3)",  // light sky blue
  "rgba(255, 182, 193, 0.3)",  // light pink
  "rgba(144, 238, 144, 0.3)",  // light green
  "rgba(255, 255, 102, 0.3)",  // light yellow
  "rgba(221, 160, 221, 0.3)",  // plum
  "rgba(255, 228, 181, 0.3)",  // moccasin
  "rgba(176, 224, 230, 0.3)",  // powder blue
  "rgba(255, 160, 122, 0.3)",  // light salmon
  "rgba(240, 230, 140, 0.3)",  // khaki
  "rgba(152, 251, 152, 0.3)",  // pale green
  "rgba(255, 218, 185, 0.3)",  // peach puff
  "rgba(173, 216, 230, 0.3)",  // light blue
  "rgba(216, 191, 216, 0.3)",  // thistle
  "rgba(240, 128, 128, 0.3)"   // light coral
];

const btn = document.addEventListener('click',()=>{
    const obj = document.getElementById("p1");
    const qu = Math.floor(Math.random()*quotes.length);
    obj.textContent = quotes[qu];
    document.body.style.backgroundColor=color[qu];
});