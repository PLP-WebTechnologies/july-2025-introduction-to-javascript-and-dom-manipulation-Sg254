// =========================
// Part 1: Variables & Conditionals
// =========================
let userName = "Samuel";
let hour = new Date().getHours(); // current hour

let greetingMessage = "";
if (hour < 12) {
  greetingMessage = "Good morning, " + userName + "!";
} else if (hour < 18) {
  greetingMessage = "Good afternoon, " + userName + "!";
} else {
  greetingMessage = "Good evening, " + userName + "!";
}

// =========================
// Part 2: Custom Functions
// =========================
function updateGreeting() {
  // Update DOM element with personalized greeting
  document.getElementById("greeting").textContent = greetingMessage;
}

function generateNumberList(limit) {
  let list = "";
  for (let i = 1; i <= limit; i++) {
    list += `<li>Number: ${i}</li>`;
  }
  return list;
}

// =========================
// Part 3: Loops Examples
// =========================

// Example 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log("For Loop iteration:", i);
}

// Example 2: While loop
let counter = 0;
while (counter < 3) {
  console.log("While Loop iteration:", counter);
  counter++;
}

// =========================
// Part 4: DOM Interactions
// =========================

// 1. Change text when button is clicked
document.getElementById("changeTextBtn").addEventListener("click", function() {
  updateGreeting();
});

// 2. Generate number list on button click
document.getElementById("showNumbersBtn").addEventListener("click", function() {
  document.getElementById("numberList").innerHTML = generateNumberList(5);
});

// 3. Initial greeting on page load
window.onload = function() {
  document.getElementById("greeting").textContent = "Welcome, " + userName + "!";
};
    
