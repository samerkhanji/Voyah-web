// Monza S.A.L. — Voyah Free 318 landing page
const Monza = {
  submit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const note = document.getElementById('formNote');
    note.textContent = `Thank you${name ? ', ' + name : ''} — a Monza advisor will call you shortly.`;
    form.reset();
    return false;
  }
};

// Sticky nav shadow on scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal-on-scroll for sections
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'none';
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .marquee').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  io.observe(el);
});
