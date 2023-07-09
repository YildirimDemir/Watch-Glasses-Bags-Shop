//************************************** Glasses-JS-Start ********************************************/
//! Bütün Gözlük ürünlerini getirme
let g_urunler = document.querySelectorAll("#Glasses-col");

//! Clear Butonu
let clearbtn=document.getElementById("g-clear-btn");

//! Size Butonları
let smallbtn = document.getElementById("s-Small-btn");
let mediumbtn = document.getElementById("s-Medium-btn");
let largebtn = document.getElementById("s-Large-btn");

//! Material Butonları
let acetatebtn = document.getElementById("m-Acetate-btn");
let metalbtn = document.getElementById("m-Metal-btn");
let nylonbtn = document.getElementById("m-Nylon-btn");

//! Gender Butonları
let malebtn = document.getElementById("g-Male-btn");
let femalebtn = document.getElementById("g-Female-btn");

//! Lens Color Butonları
let lgreenbtn = document.getElementById("l-Green-btn");
let lblackbtn = document.getElementById("l-Black-btn");
let lbluebtn = document.getElementById("l-Blue-btn");
let lbrownbtn = document.getElementById("l-Brown-btn");
let lgoldbtn = document.getElementById("l-Gold-btn");

//! Frame Color Butonları
let fbrownbtn = document.getElementById("f-Brown-btn");
let fblackbtn = document.getElementById("f-Black-btn");
let fcopperbtn = document.getElementById("f-Copper-btn");
let fgoldbtn = document.getElementById("f-Gold-btn");
let fgreybtn = document.getElementById("f-Grey-btn");

function FiltreSize(size) {
    g_urunler.forEach(function (g_urun) {
        let g_size = g_urun.querySelector("#g-size").textContent;

        if (g_size !== size) {
            g_urun.style.cssText = "display: none !important;";
        } else {
            g_urun.style.cssText = "display: block !important;";
        }
    });
}

function FiltreMaterial(material) {
    g_urunler.forEach(function (g_urun) {
        let g_material = g_urun.querySelector("#g-material").textContent;

        if (g_material !== material) {
            g_urun.style.cssText = "display: none !important;";
        } else {
            g_urun.style.cssText = "display: block !important;";
        }
    });
}

function FiltreGender(gender) {
    g_urunler.forEach(g_urun => {
        let g_gender = g_urun.querySelector("#g-gender").textContent;
        if (g_gender != gender) {
            g_urun.style.cssText = "display: none !important;";
        } else {
            g_urun.style.cssText = "display: block !important;";
        }
    });
}

function FiltreLens(lens) {
    g_urunler.forEach(g_urun => {
        let g_lens = g_urun.querySelector("#g-lens").textContent;
        if (g_lens != lens) {
            g_urun.style.cssText = "display: none !important;";
        } else {
            g_urun.style.cssText = "display: block !important;";
        }
    });
}

function FiltreFrame(frame) {
    g_urunler.forEach(g_urun => {
        let g_frame = g_urun.querySelector("#g-frame").textContent;
        if (g_frame != frame) {
            g_urun.style.cssText = "display: none !important;";
        } else {
            g_urun.style.cssText = "display: block !important;";
        }
    });
}

let priceInput = document.getElementById("g-price");
let priceBtn = document.getElementById("g-price-btn");
priceBtn.addEventListener("click", function () {
    let maxPrice = parseFloat(priceInput.value); // G-price inputundan maksimum fiyatı al

    // Ürünleri filtrele ve fiyatı maxPrice'dan büyük olanları göster
    g_urunler.forEach(function (g_urun) {
        let UrunPrice = parseFloat(g_urun.querySelector("#g-product-price").textContent.replace("$", "")); // Ürünün fiyatını al
        if (UrunPrice <= maxPrice) {
            g_urun.style.cssText="display: block !important;"; // Fiyat maxPrice'dan küçük veya eşitse ürünü göster
        } else {
            g_urun.style.cssText="display: none !important;"; // Fiyat maxPrice'dan büyükse ürünü gizle
        }
    });
});

let sizeButtons = document.querySelectorAll(".size-down button");
sizeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // Buton ID'si "s-Small-btn"'nin ilk 2 ve son 4 karakterini silerek sadece "Small" değerini getiriyor.
        let size = button.id.substring(2, button.id.length - 4);

        FiltreSize(size);
    });
});

let materialButtons = document.querySelectorAll(".material-down button");
materialButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let material = button.id.substring(2, button.id.length - 4); // Buton ID'sinden renk değerini al

        FiltreMaterial(material);
    });
});

let genderButtons = document.querySelectorAll(".gender-down button");
genderButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let gender = button.id.substring(2, button.id.length - 4); // Buton ID'sinden renk değerini al

        FiltreGender(gender);
    });
});

let lensButtons = document.querySelectorAll(".lens-down button");
lensButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let lensColor = button.id.substring(2, button.id.length - 4); // Buton ID'sinden renk değerini al

        FiltreLens(lensColor);
    });
});

let frameButtons = document.querySelectorAll(".frame-down button");
frameButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let frameColor = button.id.substring(2, button.id.length - 4); // Buton ID'sinden renk değerini al

        FiltreFrame(frameColor);
    });
});

clearbtn.addEventListener("click",function Clear() {
    g_urunler.forEach(g_urun => {
            g_urun.style.cssText = "display: block !important;";
    });
});

//************************************** Glasses-JS-END ********************************************/