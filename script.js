function handleSignup(btn) {
  const input = btn.previousElementSibling;

  if (!input.value || !input.value.includes('@')) {
    input.style.outline = '2px solid #D12052';
    setTimeout(() => input.style.outline = '', 1500);
    return;
  }

  btn.textContent = "🎉 You're on the list!";
  btn.style.background = '#059669';
  btn.disabled = true;
  input.disabled = true;
}

const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fc,.sr,.pc,.kc,.tc,.cs,.hs').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  obs.observe(el);
});