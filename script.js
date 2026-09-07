const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
}, { threshold: 0.08 });
document.querySelectorAll('.project, .case-study, .about-content').forEach((item) => observer.observe(item));

const copyEmail = document.querySelector('#copy-email');
const copyStatus = document.querySelector('#copy-status');
copyEmail?.addEventListener('click', async () => {
  const email = copyEmail.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = 'Email copied - paste it into your email app.';
    copyEmail.firstChild.textContent = 'Email copied ';
  } catch {
    copyStatus.textContent = `Email: ${email}`;
  }
});
