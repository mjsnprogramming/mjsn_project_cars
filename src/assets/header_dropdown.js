window.onload = () => {
  //query selectors
const brands = document.querySelector("#brands");
const countries = document.querySelector('#countries');
const years = document.querySelector('#years');
const drop_brands = document.querySelector('#drop_brands');
const drop_countries = document.querySelector('#drop_countries');
const drop_years = document.querySelector('#drop_years');
const nav = document.querySelector('#nav');
const drop_nav = document.querySelector('#drop_nav');
const search = document.querySelector('fa-icon');
const drop_search = document.querySelector('#drop_search');
const close_searching = document.querySelector('#close_searching');

  // listeners
  brands.addEventListener("mouseover", () => {
    drop_brands.style.visibility = "visible";
  });
  brands.addEventListener("mouseout", () => {
    drop_brands.style.visibility = "hidden";
  });
  countries.addEventListener("mouseover", () => {
    drop_countries.style.visibility = "visible";
  });
  countries.addEventListener("mouseout", () => {
    drop_countries.style.visibility = "hidden";
  });
  years.addEventListener("mouseover", () => {
    drop_years.style.visibility = "visible";
  });
  years.addEventListener("mouseout", () => {
    drop_years.style.visibility = "hidden";
  });
  nav.addEventListener('click', () => {
    if (drop_nav.style.display === "") {
      drop_nav.style.display = "block";
    }
    else {
      drop_nav.style.display = "";
    }
  });
      search.addEventListener('click', () => {
    if (drop_search.style.display === "") {
      drop_search.style.display = "block";
    }
    else {
      drop_search.style.display = "";
    }
    close_searching.addEventListener('click', () => {
      if (drop_search.style.display === "block") {
        drop_search.style.display = "";
      }
    });
  });
  const circle = document.querySelector('#circle');
  circle.addEventListener('click', () => {
    document.documentElement.scrollTo( {
      top: 1300,
      behavior: 'smooth'

    });
  })


};






