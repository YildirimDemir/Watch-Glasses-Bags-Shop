const brandFilter = document.getElementById("brand-filter");
const strapFilter = document.getElementById("strap-filter");
const colorFilter = document.getElementById("color-filter");
const priceMin = document.getElementById("price-min");
const priceMax = document.getElementById("price-max");

brandFilter.addEventListener("change", filterWatches);
strapFilter.addEventListener("change", filterWatches);
colorFilter.addEventListener("change", filterWatches);
priceMin.addEventListener("input", filterWatches);
priceMax.addEventListener("input", filterWatches);

const watchBoxes = document.querySelectorAll(".watch-box");

function filterWatches() {
  const selectedBrand = brandFilter.value;
  const selectedStrap = strapFilter.value;
  const selectedColor = colorFilter.value;
  const selectedMinPrice = parseFloat(priceMin.value) || 0;
  const selectedMaxPrice = parseFloat(priceMax.value) || Infinity;

  for (var i = 0; i < watchBoxes.length; i++) {
    const watchBox = watchBoxes[i];
    const brand = watchBox.getAttribute("data-brand");
    const strap = watchBox.getAttribute("data-strap");
    const color = watchBox.getAttribute("data-color");
    const price = parseFloat(watchBox.getAttribute("data-price"));

    const brandMatch = (selectedBrand === "All" || brand === selectedBrand);
    const strapMatch = (selectedStrap === "All" || strap === selectedStrap);
    const colorMatch = (selectedColor === "All" || color === selectedColor);
    const priceMatch = (price >= selectedMinPrice && price <= selectedMaxPrice);

    if (brandMatch && strapMatch && colorMatch && priceMatch) {
      watchBox.style.display = "block";
    } else {
      watchBox.style.display = "none";
    }
  }
}

filterWatches();