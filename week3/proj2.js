var H2 = document.createElement("h2");
H2.innerHTML ="Hello World";
document.body.append(H2);
H2.style.fontFamily = "sans-serif";
H2.style.fontWeight = "lighter";
H2.style.fontSize = "20px";
H2.style.color ="cornflowerblue";

var div =document.createElement("div")
div.className ="border"
document.body.append(div)
for (var i = 0; i < 4; i++){
    var H2 = document.createElement("h2");
    H2.innerHTML = "Hello World";
    div.append(H2);
    H2.style.fontFamily = "sans-serif";
    H2.style.fontWeight = "lighter";
    H2.style.fontSize = "20px";
    H2.style.color ="cornflowerblue";
   

}

document.querySelector("h2").classList.add("border")













