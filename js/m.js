const shopping = document.querySelector("#datatable > tbody");
//console.log(shopping);
function loadDoc() {
    var request = new XMLHttpRequest();     
    request.open("GET", "qw.json", true);
    request.onload = () => {
        try{
        const json = JSON.parse(request.responseText);
            list(json);
        }
        catch(e){
            console.warn("#");
        } 
    };
    request.send();
}
    function list(json){
    console.log(json);

while(shopping.firstChild){
    shopping.removeChild(shopping.firstChild)
}

    json.forEach((row) => {
        const tr = document.createElement("tr");
        row.forEach((cell) => {
            const td = document.createElement("td");
            td.textContent =cell;
            tr.appendChild(td);
            //console.log(cell);
        });
        shopping.appendChild(tr);
    });
}
document.addEventListener("DOMContentLoaded", ()=> {loadDoc();});