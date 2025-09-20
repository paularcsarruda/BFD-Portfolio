// Menu mobile toggle
const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');

menuToggle.addEventListener('click', () => {
     navList.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
     link.addEventListener('click', () => {
          navList.classList.remove('active');
     });
});

const text = "Hey, I'm Paula Roberta";
const typingElement = document.getElementById("typing");

let index = 0;

function type() {
     if (index < text.length) {
          typingElement.innerHTML += text.charAt(index);
          index++;
          setTimeout(type, 100);
     }
}

// Botão voltar ao topo
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
     if (window.scrollY > 500) {
          backToTop.classList.add('visible');
     } else {
          backToTop.classList.remove('visible');
     }
});

window.sr = ScrollReveal({ reset: true });
sr.reveal('.about-text', { duration: 2000, origin: 'left', distance: '300px' });
sr.reveal('.about-image', { duration: 2000, origin: 'right', distance: '300px' });
sr.reveal('.skill-item', { duration: 2000, origin: 'bottom', distance: '100px', interval: 200 });
sr.reveal('.project-item', { duration: 2000, origin: 'bottom', distance: '100px', interval: 200 });

window.onload = type;