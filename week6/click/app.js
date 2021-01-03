const divBox = document.querySelector(".red-box");

divBox.addEventListener("click", function(e){
    e.target.style.display = "none";
    document.querySelector("h3").append(" ---bye by Box");
})