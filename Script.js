function showSection(id) {
  document.querySelectorAll('.content').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}