
window.onload = () => {
  const countries = document.querySelectorAll('.brands');

const brands_list_drop = document.querySelector('.brands_list_drop');

countries.forEach(drop => {
    drop.addEventListener('click', () => {
        if (brands_list_drop.style.display === "") {
        brands_list_drop.classList.toggle('brands_toggle');
    }
        else {
        brands_list_drop.style.display = "";
    }
})
});
}
