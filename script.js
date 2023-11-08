console.log("Abdullah")
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3");
let heroSection = document.getElementById("hero-section");
dot1.onclick = () => {
   img1.style.display = "block";
   img2.style.display = "none";
   img3.style.display = "none";
   heroSection.style.backgroundColor = "#F5866B"
   dot1.style.backgroundColor = "#F85606";
   dot2.style.backgroundColor = "white";
   dot3.style.backgroundColor = "white";
}
dot2.onclick = () => {
    img2.style.display = "block";
    img1.style.display = "none";
    img3.style.display = "none";
    heroSection.style.backgroundColor = "#F3932C"
    dot2.style.backgroundColor = "#F85606";
    dot1.style.backgroundColor = "white";
    dot3.style.backgroundColor = "white";
}
dot3.onclick = () => {
    img3.style.display = "block";
    img1.style.display = "none";
    img2.style.display = "none";
    heroSection.style.backgroundColor = "#2D0C09"
    dot3.style.backgroundColor = "#F85606";
    dot1.style.backgroundColor = "white";
    dot2.style.backgroundColor = "white";
}
if(img1.style.display  = "block"){
    dot1.style.backgroundColor = "#F85606";  
}
else if(img2.style.display = "block"){
    dot2.style.backgroundColor = "#F85606";  
}
else if(img3.style.display == "block"){
    dot3.style.backgroundColor = "#F85606";  
}