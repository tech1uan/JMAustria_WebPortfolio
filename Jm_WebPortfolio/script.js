 AOS.init({ once: true });
  document.getElementById('toggle-button').addEventListener('click', function() {
    const notif = document.getElementById('notif');
    notif.classList.remove('hidden');
    setTimeout(() => notif.classList.add('hidden'), 2500);
  });