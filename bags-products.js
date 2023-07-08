const materialFilter = document.getElementById("material");
const colorFilter = document.getElementById("color");

materialFilter.addEventListener("change", filterBags);
colorFilter.addEventListener("change", filterBags);

const bagsBoxes = document.querySelectorAll(".bags-box");

function filterBags() {
    const selectedMaterial = materialFilter.value;
    const selectedColor = colorFilter.value;

    for (let i =0; i < bagsBoxes.length; i++) {
        const bagBox = bagsBoxes[i];
        const material = bagBox.getAttribute("data-material");
        const color = bagBox.getAttribute("data-color");

        const materialMatch = (selectedMaterial === "All" || material === selectedMaterial);
        const colorMatch = (selectedColor === "All" || color === selectedColor);

        if (materialMatch && colorMatch) {
            bagBox.style.display = "block";
        } else {
            bagBox.style.display = "none";
        }
    }
}