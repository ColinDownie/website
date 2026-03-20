// assets/js/backoffice.js
document.addEventListener('click', function (e) {
  // open modal
  const open = e.target.closest('[data-open-profile]');
  if (open) {
    const id = open.getAttribute('data-open-profile');
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'flex';
  }
  // close modal
  if (e.target.matches('.profile-modal') || e.target.closest('.profile-modal .close')) {
    const modal = e.target.closest('.profile-modal') || e.target.closest('.profile-modal .modal-inner').parentElement;
    if (modal) modal.style.display = 'none';
  }
});
