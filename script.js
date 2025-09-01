// Predefined hobbies
const hobbies = ["Photography", "Cooking", "Traveling", "Gaming", "Reading", "Gardening"];

// DOM elements
const nameField = document.getElementById("name");
const titleField = document.getElementById("title");
const hobbyField = document.getElementById("hobby");
const viewsField = document.getElementById("views");
const input = document.getElementById("userInput");

const updateBtn = document.getElementById("updateBtn");
const hobbyBtn = document.getElementById("hobbyBtn");
const viewBtn = document.getElementById("viewBtn");

// Update Profile (Control Flow)
updateBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value) {
    // If input contains a space → assume "Name Title"
    const parts = value.split(" ");
    nameField.textContent = parts[0] || "User";
    titleField.textContent = parts.slice(1).join(" ") || "New Title";
    input.value = "";
  } else {
    alert("Please enter a value!");
  }
});

// Show Random Hobby (Array + Arrow Function)
hobbyBtn.addEventListener("click", () => {
  const random = hobbies[Math.floor(Math.random() * hobbies.length)];
  hobbyField.textContent = random;
});

// Closure for profile views
const profileViews = (() => {
  let count = 0;
  return () => {
    count++;
    viewsField.textContent = count;
  };
})();

// Increment views with arrow function
viewBtn.addEventListener("click", () => profileViews());
