


  //query selectors


  const nav = document.querySelector('#nav');
  const search = document.querySelector('fa-icon');
  const close_search = document.querySelector('#close_searching');
  const languages_mobile = document.querySelector('#languages_mobile');


  // listeners


  //header dropdown languages
  nav.addEventListener('click', () => {
    const drop_brands = document.querySelector('#drop_brands');
    const drop_countries = document.querySelector('#drop_countries');
    const drop_years = document.querySelector('#drop_years');
    const drop_search = document.querySelector('#drop_search');
    const drop_nav = document.querySelector('#drop_nav');
    const body = document.querySelector('body');

    if (drop_nav.style.display === "") {
      drop_nav.style.display = "block";
      body.style.overflow = "hidden";
      drop_brands.style.visibility = "hidden";
      drop_countries.style.visibility = "hidden";
      drop_years.style.visibility = "hidden";
      drop_search.style.display = "";
    } else {
      drop_nav.style.display = "";
      body.style.overflow = "visible";
      drop_brands.style.visibility = "visible";
      drop_countries.style.visibility = "visible";
      drop_years.style.visibility = "visible";
    }

  }, {once: false});


//header dropdown search
  search.addEventListener('click', () => {
    const drop_brands = document.querySelector('#drop_brands');
    const drop_countries = document.querySelector('#drop_countries');
    const drop_years = document.querySelector('#drop_years');
    const drop_search = document.querySelector('#drop_search');
    const drop_nav = document.querySelector('#drop_nav');
    const body = document.querySelector('body');

    if (drop_search.style.display === "") {
      drop_search.style.display = "block";
      body.style.overflow = "hidden";
      drop_brands.style.visibility = "hidden";
      drop_countries.style.visibility = "hidden";
      drop_years.style.visibility = "hidden";
      drop_nav.style.display = "";
    } else {
      drop_search.style.display = "";
      body.style.overflow = "visible";
      drop_brands.style.visibility = "visible";
      drop_countries.style.visibility = "visible";
      drop_years.style.visibility = "visible";
    }
  });


//header close searching
  close_search.addEventListener('click', () => {
    const drop_search = document.querySelector('#drop_search');
    if (drop_search.style.display === "block") {
      drop_search.style.display = "";
    }
  })
  ;


//languages list dropdown
  languages_mobile.addEventListener('click', () => {

    const drop_lang_mobile = document.querySelector('#languages_mobile_drop');
    const language_color = document.querySelector('.language_dyn_change');
    if (drop_lang_mobile.style.display === "none" || drop_lang_mobile.style.display === "") {
      const languages_mobile = document.querySelector('#languages_mobile');
      drop_lang_mobile.style.display = "block";
      languages_mobile.style.backgroundColor = "white";
      language_color.style.color = "#141314";
    } else {
      const languages_mobile = document.querySelector('#languages_mobile');
      drop_lang_mobile.style.display = "";
      languages_mobile.style.backgroundColor = "#141314";
      language_color.style.color = "white";
    }
  });








