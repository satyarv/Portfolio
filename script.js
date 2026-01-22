// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll reveal
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});

// Typing effect
const text = "AI / ML Intern | Data Science & Artificial Intelligence";
let i = 0;
function typingEffect() {
  if (i < text.length) {
    document.querySelector('.typing').innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 80);
  }
}
typingEffect();
