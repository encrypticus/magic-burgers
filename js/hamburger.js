const hamburgers = document.querySelectorAll('.hamburger');

if (hamburgers.length > 0) {
  Array.prototype.forEach.call(hamburgers, (hamburger) => {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('is-active');
    }, false);
  });
}

