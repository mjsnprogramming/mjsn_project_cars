const brands = document.querySelector("#brands");
const countries = document.querySelector('#countries');
const years = document.querySelector("#years");
const drop_brands = document.querySelector('#drop_brands');
const drop_countries = document.querySelector('#drop_countries');
const nav = document.querySelector('#nav');
if(years) {
  years.addEventListener("mouseover", (drop_years) => {
      drop_years = document.querySelector("#drop_years");
      drop_years.style.visibility = "visible";
    }
  );


  years.addEventListener("mouseout", (drop_years) => {
    drop_years = document.querySelector("#drop_years");
    drop_years.style.visibility = "hidden";
  });
}


