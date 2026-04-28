
const activeClasses = ['active-c','active-o','active-r','active-y','active-g'];

function showPanel(id, btn, cls) {
  // hide all panels
  document.querySelectorAll('.spanel').forEach(p => p.classList.remove('show'));
  // show selected
  const panel = document.getElementById('panel-' + id);
  if(panel) panel.classList.add('show');
  // update tabs
  document.querySelectorAll('.stab').forEach(t => {
    activeClasses.forEach(c => t.classList.remove(c));
  });
  if(btn) btn.classList.add(cls);
  // scroll to services if triggered from footer
  if(!btn) document.getElementById('services').scrollIntoView({behavior:'smooth'});
}


function handleSignup(btn) {
  const input = btn.previousElementSibling;
  if (!input.value || !input.value.includes('@')) {
    input.style.outline = '2px solid #D12052';
    input.placeholder = 'Please enter a valid email!';
    setTimeout(() => { input.style.outline=''; input.placeholder='Enter your university email...'; }, 2000);
    return;
  }
  btn.textContent = '🎉 You\'re on the list!';
  btn.style.background = '#059669';
  btn.disabled = true;
  input.disabled = true;
}

/* ── SCROLL REVEAL ── */
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fc,.pc,.kc,.tc,.cs,.hs,.rcard,.fyp-card,.tcard,.focard,.tkcard').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  obs.observe(el);
});
