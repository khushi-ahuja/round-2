const table = document.getElementById("table-1");
const row = document.getElementById("row").value;
const row = document.getElementById("cell").value;

function createTable(){
    for(let i=0; i<row; i++){

        const tr = document.createElement("tr");
        for(let j=0; j<cell; j++){
            const td = document.createElement("td");
            td.innerHTML=`row ${i} column ${j}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
