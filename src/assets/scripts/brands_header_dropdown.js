
const nav = document.querySelector("#drop_nav");

nav.addEventListener('click', () => {
  const drop_nav = document.querySelector("#drop_nav_visible");

  if (drop_nav.style.display === '') {
    drop_nav.style.display = "block";
  }

  else {
    drop_nav.style.display = '';
  }
});
