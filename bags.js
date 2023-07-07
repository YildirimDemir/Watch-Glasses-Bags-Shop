const dior = document.getElementById("slideBox");
const gucci = document.getElementById("slideBox2");
const prada = document.getElementById("slideBox3");
const lacoste = document.getElementById("slideBox4")

dior.addEventListener("click", function() {
    dior.style.marginRight= "0"
    dior.style.transition= "all 1s ease-in-out"
    dior.style.position= "relative"
})
gucci.addEventListener("click", function() {
    gucci.style.marginLeft= "0"
    gucci.style.transition= "all 1s ease-in-out"
    gucci.style.position= "relative"
})
prada.addEventListener("click", function() {
    prada.style.marginRight= "0"
    prada.style.transition= "all 1s ease-in-out"
    prada.style.position= "relative"
})
lacoste.addEventListener("click", function() {
    lacoste.style.marginLeft= "0"
    lacoste.style.transition= "all 1s ease-in-out"
    lacoste.style.position= "relative"
})