var form = document.getElementById("form")
var button = document.getElementById("but")
var tb = document.getElementById("table")
var row = document.createElement("tr")
var data1 = document.createElement("td")
var data2 = document.createElement("td")
let count = 0


form.addEventListener("submit", function () {
    event.preventDefault()
    let tb = document.getElementById("table")
    let row = document.createElement("tr")
    let data1 = document.createElement("td")
    let data2 = document.createElement("td")
    let items = document.getElementById("item").value
    let des = document.getElementById("description").value
    row.id = count.toString()
    let data3 = document.createElement("td")
    tb.append(row)
    row.append(data1)
    row.append(data2)
    data1.append(items)
    data2.append(des)
    let button = document.createElement("button")
    button.textContent = "Delete"
    button.onclick = () => {
        delItem(row.id)
    }
    data3.append(button)
    row.append(data3)
    count++
    document.getElementById("item").value = ""
    document.getElementById("description").value = ""
    
})

function delItem(rowId) {
    document.getElementById(rowId).remove()
}

function delItem(rowId) {
    document.getElementById(rowId).remove()
}