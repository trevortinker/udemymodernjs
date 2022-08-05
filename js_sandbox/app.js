const div = document.querySelector('.myDiv');
div.addEventListener('mousemove', runEvent);
div.style.backgroundColor = 'pink';

function runEvent(e) {
  div.style.backgroundImage = `linear-gradient(to bottom right, rgb(${e.offsetX}, ${e.offsetY}, 45), #fff`;
}
