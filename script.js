// Адаптивность экрана
const targetWidth = 800;

function onSpecificSize() {
  let width = window.innerWidth;
  let image = document.getElementById('image');
  let accordion = document.getElementById('accordion');

  if (width <= targetWidth) {
    image.classList.remove('main__image-desk');
    image.classList.add('main__image-mobile');
    accordion.classList.remove('accordion__container-desk');
    accordion.classList.add('accordion__container-mobile');
  } else if (width > targetWidth && image.classList.contains('main__image-mobile')) {
    image.classList.remove('main__image-mobile');
    image.classList.add('main__image-desk');
    accordion.classList.remove('accordion__container-mobile');
    accordion.classList.add('accordion__container-desk');
  }
}

window.addEventListener('resize', onSpecificSize);

onSpecificSize();

// Анимация открытия/закрытия аккордиона
let questionBoxes = document.querySelectorAll('.accordion__question-box');

function changer(event) {
  let questionBox = event.currentTarget;
  let answerBox = questionBox.nextElementSibling;
  let image = questionBox.querySelector('.accordion__image');

  if (answerBox.classList.contains('drop-up')) {
    image.src = 'assets/images/icon-minus.svg';
    answerBox.classList.remove('drop-up');
    answerBox.classList.add('drop-down');
  } else {
    image.src = 'assets/images/icon-plus.svg';
    answerBox.classList.remove('drop-down');
    answerBox.classList.add('drop-up');
  }
}

Array.from(questionBoxes).forEach((questionBox) => {
  questionBox.addEventListener('click', changer);
});
