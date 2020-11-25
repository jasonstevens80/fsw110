var nav = document.createElement("nav")
document.body.append(nav)

var a = document.createElement("a")
a.textContent = "Home"
a.href = "google.com"
nav.append(a)

var a = document.createElement("a")
a.textContent = "Menu"
a.href = "yahoo.com"
nav.append(a)

var a = document.createElement("a")
a.textContent = "Contact"
a.href = "Bing.com"
nav.append(a)

var newh1 = document.createElement("h1")
newh1.textContent = "Im learning Javascript"
document.body.append(newh1)
newh1.style.textAlign ="center"
newh1.style.fontsize = "30px"

var newP = document.createElement("P")
newP.textContent = "Javascipt is Cool because it is easy to add things"
document.body.append(newP)
newP.style.fontize = "16px"
newP.style.textAlign ="center"

var newLi = document.createElement("li")
newLi.textContent =("This is my list")
newLi.style.fontsize = "12px"
document.body.append(newLi)

var newLi = document.createElement("li")
newLi.textContent =("The list is this")
newLi.style.fontsize = "12px"
document.body.append(newLi)

var newLi = document.createElement("li")
newLi.textContent =("I made it all by myself")
newLi.style.fontsize = "12px"
document.body.append(newLi)

var Footer = document.createElement("footer")
Footer.textContent = ("This is my Footer")
Footer.style.fontsize ="20px"
Footer.style.textAlign ="center"
document.body.append(Footer)
