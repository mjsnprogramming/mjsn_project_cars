const circle = document.querySelector('#circle');

const circle_on_click = () => {
  circle.addEventListener('click', (circle_button) => {
    circle_button.style.transform = "translate(0, 0)";
    console.log('clicking');
  })
};
circle_on_click();
