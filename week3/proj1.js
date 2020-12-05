
var H1 = document.createElement("h1");
H1.innerHTML ="Hello World";
document.body.append(H1);
H1.style.backgroundColor ="blue";
H1.style.fontSize = "25px";
H1.style.color ="yellow";

for (var i =0; i < 9; i++){
    var H1 = document.createElement("h1");
    H1.innerHTML = "Hello World";
    document.body.append(H1);
    H1.style.color="yellow";
    H1.style.cssText= "text-align: center; font-size: 40px; color: blue;";
}

  


   var names = ["steve","larry","joe","shirley","steph","nate","rick","emily"] 

    for (var i = 0; i < names.length; i++){
        var li=document.createElement("li")
        li.innerHTML = names[i]
        document.body.append(li)
    }

    


