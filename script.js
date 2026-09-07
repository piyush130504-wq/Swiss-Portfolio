const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
}, { threshold: 0.08 });
document.querySelectorAll('.project, .case-study, .about-content').forEach((item) => observer.observe(item));
