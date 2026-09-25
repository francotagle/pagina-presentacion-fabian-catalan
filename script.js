// Resalta el día actual en la tabla de horarios
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date().getDay(); // 0 = domingo ... 6 = sábado
  const row = document.querySelector(`.week .row[data-day="${today}"]`);
  if (row) row.classList.add('today');
});