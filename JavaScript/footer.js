function initFooter() {
    fetch('../Assets/footer.html')
        .then(response => response.text())
        .then(html => {
    const container = document.getElementById('footer');
    if (!container) return; // element missing; abort silently
    container.innerHTML = html;
        })
  .catch(err => { console.error('Failed to load footer:', err); });
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFooter);
} else {
  initFooter();
}