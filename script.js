
document.addEventListener('DOMContentLoaded', () => {
  // add a class the first time Tab is pressed to show focus outlines intentionally
  const onFirstTab = (e) => {
    if (e.key === 'Tab') {
      document.documentElement.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', onFirstTab);
    }
  };
  window.addEventListener('keydown', onFirstTab);
});
