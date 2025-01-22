document.addEventListener("DOMContentLoaded", function() {
  const element = document.getElementById("typed-text");

  if (element) {
    const textArray = [" Connected World..."];
    let i = 0;
    let currentText = '';
    let isDeleting = false;
    const speed = 100;

    function type() {
      if (isDeleting) {
        currentText = textArray[i].substring(0, currentText.length - 1);
      } else {
        currentText = textArray[i].substring(0, currentText.length + 1);
      }

      element.textContent = currentText;

      if (!isDeleting && currentText === textArray[i]) {
        setTimeout(() => {
          isDeleting = true;
        }, 1000);
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        i = (i + 1) % textArray.length;
      }

      setTimeout(type, isDeleting ? speed / 2 : speed);
    }

    type();
  } else {
    console.error('Element with id "typed-text" not found.');
  }
});