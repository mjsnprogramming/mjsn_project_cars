

  const countries = document.querySelector(".brands");


  countries.addEventListener('click', () => {


    const brands_list_drop = document.querySelector('.brands_list_drop');
    if (brands_list_drop.style.display === "") {
      brands_list_drop.classList.toggle('brands_toggle');
    } else {
      brands_list_drop.style.display = "";
    }

  });






