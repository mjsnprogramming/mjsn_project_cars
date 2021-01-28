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
const body = document.querySelector('body');
const languages_mobile = document.querySelector('#languages_mobile');
const drop_lang_mobile = document.querySelector('#languages_mobile_drop');
const language_color = document.querySelector('.language_dyn_change');

  // listeners
  const brands_listener  = brands.addEventListener("mouseenter", () => {
    if (drop_brands.style.display === "none" || drop_brands.style.display === "") {
      drop_brands.style.display = "block";

      years.addEventListener("change", () => {
        drop_years.stopPropagation();

      });
      countries.addEventListener("change", () => {
        drop_countries.stopPropagation();

      })
    }

    else {
            drop_brands.addEventListener("mouseleave", () => {
              drop_brands.style.display = "none";

            });
          }
  }, false);



  countries.addEventListener("mouseenter", () => {
    if (drop_countries.style.display === "none" || drop_countries.style.display === "") {
      drop_countries.style.display = "block";
      brands.addEventListener("change", () => {
        drop_brands.stopPropagation();
      });
      years.addEventListener("change", () => {
        drop_years.stopPropagation();
      })
    }
    else {
      drop_countries.addEventListener("mouseleave", () => {
        drop_countries.style.display = "none";
      });
    }
  }, false);

  years.addEventListener("mouseenter", () => {
    if (drop_years.style.display === "none" || drop_years.style.display === "") {
      drop_years.style.display = "block";

      brands.addEventListener("change", () => {
        drop_brands.stopPropagation();

      });
      countries.addEventListener("change", () => {
        drop_countries.stopPropagation();

      })
    }
    else {
      drop_years.addEventListener("mouseleave", () => {
        drop_years.style.display = "none";

      });
    }
  }, false);
  nav.addEventListener('click', () => {
    if (drop_nav.style.display === "") {
      drop_nav.style.display = "block";
      body.style.overflow = "hidden";
    }
    else {
      drop_nav.style.display = "";
      body.style.overflow = "visible";
    }
  });
      search.addEventListener('click', () => {
    if (drop_search.style.display === "") {
      drop_search.style.display = "block";
      body.style.overflow = "hidden";
     drop_brands.style.visibility = "hidden";
      drop_countries.style.visibility = "hidden";
      drop_years.style.visibility = "hidden";
    }
    else {
      drop_search.style.display = "";
      body.style.overflow = "visible";
      drop_brands.style.visibility = "visible";
      drop_countries.style.visibility = "visible";
      drop_years.style.visibility = "visible";
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
  drop_nav.stopPropagation();
}

languages_mobile.addEventListener('click', () => {
    if (drop_lang_mobile.style.display === "none" || drop_lang_mobile.style.display === "") {
      drop_lang_mobile.style.display = "block";
      languages_mobile.style.backgroundColor = "white";
      language_color.style.color = "#141314";
    }
    else {
      drop_lang_mobile.style.display = "";
      languages_mobile.style.backgroundColor = "#141314";
      language_color.style.color = "white";
    }
})


};






