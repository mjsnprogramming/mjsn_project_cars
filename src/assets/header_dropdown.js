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
  const brands_listener = brands.addEventListener("mouseover", () => {
    if (drop_brands.style.display === "none" || drop_brands.style.display === "") {
      drop_brands.style.display = "block";
    }
    else {
      drop_brands.addEventListener("mouseout", () => {
        drop_brands.style.display = "none";
      });
    }
  });


  const countries_listener = countries.addEventListener("mouseover", () => {
    if (drop_countries.style.display === "none" || drop_countries.style.display === "") {
      drop_countries.style.display = "block";
    }
    else {
      drop_countries.addEventListener('mouseout', () => {
        drop_countries.style.display = "none";
      });
    }
  });


  const years_listener = years.addEventListener("mouseover", () => {
    if (drop_years.style.display === "" || drop_years.style.display === "none") {
      drop_years.style.display = "block";
    }
    else {
      drop_years.addEventListener('mouseout', () => {
        drop_years.style.display = "none";
      });
    }
  });

  if(brands_listener) {
    countries_listener.preventDefault();
    years_listener.preventDefault();
  }
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
  const circle_second = document.querySelector('#circle_second');
  const circle_third = document.querySelector('#circle_third');
  const circle_fourth = document.querySelector('#circle_fourth');

  circle.addEventListener('click', () => {
    document.documentElement.scrollTo( {
      top: 1250,
      behavior: 'smooth'
    });
  });
  circle_second.addEventListener('click', () => {
    document.documentElement.scrollTo( {
      top: 2300,
      behavior: 'smooth'
    });
  });
  circle_third.addEventListener('click', () => {
    document.documentElement.scrollTo( {
      top: 3400,
      behavior: 'smooth'
    });
  });
  circle_fourth.addEventListener('click', () => {
    document.documentElement.scrollTo( {
      top: 5200,
      behavior: 'smooth'
    });
  });
if (drop_search.style.display === "block") {
  drop_nav.style.display = "none";
}

};






