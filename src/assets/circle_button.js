const circle = document.querySelector('#circle');

const circle_on_click = (circle) => {
  circle.addEventListener('click', (circle_animation) => {
    circle_animation.style.transform = "translate(100%)";
    console.log('clicking');
  })
};
circle_on_click();
