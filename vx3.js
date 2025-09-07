// 🎨 เอฟเฟกต์เปลี่ยนสีพื้นหลังอัตโนมัติ
const colors = [
  "linear-gradient(135deg, #000428, #004e92)",
  "linear-gradient(135deg, #141e30, #243b55)",
  "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
];

let current = 0;
setInterval(() => {
  document.body.style.background = colors[current];
  current = (current + 1) % colors.length;
}, 5000);

// ✨ ทำให้หัวข้อ h1 มีแสงวูบวาบ
const title = document.querySelector("h1");
setInterval(() => {
  title.style.textShadow = "0 0 20px #42a5f5, 0 0 40px #42a5f5";
  setTimeout(() => {
    title.style.textShadow = "0 0 10px #42a5f5";
  }, 1000);
}, 3000);

// 🎭 เพิ่มข้อความสุ่มทักทายด้านล่าง container
const greetings = [
  "Welcome to Business English!",
  "Let’s improve our skills together.",
  "Success starts with communication.",
  "Professional English for your future."
];

const container = document.querySelector(".container");
const greetingBox = document.createElement("div");
greetingBox.style.marginTop = "20px";
greetingBox.style.fontSize = "1.1rem";
greetingBox.style.textAlign = "center";
greetingBox.style.color = "#e3f2fd";
container.appendChild(greetingBox);

function showGreeting() {
  const random = Math.floor(Math.random() * greetings.length);
  greetingBox.textContent = greetings[random];
}
showGreeting();
setInterval(showGreeting, 7000);