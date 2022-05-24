// let tbodyTagName = document.getElementsByTagName("tbody");

// let tb = tbodyTagName[0]
let nbRows = 5
let tbodyID = document.getElementById("tbody");
// let tr = "<tr>" + "<td></td>" + "</tr>"

for (i = 0 ; i < nbRows; i++ ){

    tbodyID.innerHTML += "<tr><td></td><td></td><td></td><td></td><td></td></tr>"
    


}

// tbodyID.innerHTML += "<tr><td></td><td></td></tr>"
// tbodyTagName.innerHTML += "<tr><td></td><td></td></tr>"

// let tbody = element[0].innerHTML + "<tr><td></td></tr>"
// element[0].innerHTML + "<tr><td></td><td></td><td></td><td></td><td></td></tr>"
// console.log(typeof tb);