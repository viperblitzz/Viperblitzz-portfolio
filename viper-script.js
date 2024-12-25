const roles = ["Bug Hunter","Cyber Security Researcher"];
let roleIndex = 0;
let charIndex = 0;
const dynamicText = document.getElementById("dynamic-text");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    dynamicText.textContent += roles[roleIndex][charIndex];
    charIndex++;
    setTimeout(typeEffect, 200);
  } else {
    setTimeout(eraseEffect, 1000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    dynamicText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 100);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 200);
  }
}

typeEffect();
