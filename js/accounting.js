// let tables = document.getElementById("table");
// localStorage.setItem("name", "alaa ");
// localStorage.setItem(" age" ," 23");
// let mname= localStorage.getItem("name");
// let age= localStorage.getItem("age");

// console.log(mname);
// console.log(age);
// localStorage.removeItem("name");
// function savename (){
//     let formatdata =JSON.stringify(allname);
// localStorage.setItem ("names" , allname);
// console.log(allname);
// }
// savename();

// function getdata (){
// let names = localStorage.getItem ("names");
// let pnames = JSON.parse(names);
// allname = pnames;
// console.log(pnames);

// for (let i = 0 ; i < pnames.length ;i++ ) {
//     new names(pnames);

// }
// }
// for (let i = 0 ; i < allname.length ;i++ ) {
//     allname [i].render;

// }
// function renderheader() {
// let tr = document.createElement("tr");
// tables.appendChild(tr) 

// }

// var table = document.querySelector('table'), 
//     table_meta_container = table.querySelector('thead'), 
//     table_data_container = table.querySelector('tbody'),
//     data = [
//   { 'firstName': 'Scooby', 'lastName': 'Doo', 'birth': 1969 }, 
//   { 'firstName': 'Yogi', 'lastName': 'Bear', 'birth': 1958 }, 
//   { 'firstName': 'Tom', 'lastName': 'Cat', 'birth': 1940 }, 
//   { 'firstName': 'Jerry', 'lastName': 'Mouse', 'birth': 1940 }, 
//   { 'firstName': 'Fred', 'lastName': 'Flintstone', 'birth': 1960 }
// ], n = data.length;
 
// var createTable = function(src) {
//   var frag = document.createDocumentFragment(), 
//       curr_item, curr_p;
   
//   for(var i = 0; i < n; i++) {
//     curr_item = document.createElement('tr');
//     curr_item.classList.add(((i%2 === 0)?'odd':'even'));
//     data[i].el = curr_item;
     
//     for(var p in data[i]) {
//       if(p !== 'el') {
//         curr_p = document.createElement('td');
//         curr_p.classList.add('prop__value');
//         curr_p.dataset.propName = p;
//         curr_p.textContent = data[i][p];
//         curr_item.appendChild(curr_p)
//       }
//     }
     
//     frag.appendChild(curr_item);
//   }
   
//   table_data_container.appendChild(frag);
// };
 
// var sortTable = function(entries, type, dir) {  
//   entries.sort(function(a, b) { 
//     if(a[type] < b[type]) return -dir;
//     if(a[type] > b[type]) return dir;
//     return 0;
//   });
   
//   table.dataset.sortBy = type;
   
//   for(var i = 0; i < n; i++) {
//     entries[i].el.style.order = i + 1;
     
//     if((i%2 === 0 && entries[i].el.classList.contains('even')) || 
//        (i%2 !== 0 && entries[i].el.classList.contains('odd'))) {
//       entries[i].el.classList.toggle('odd');
//       entries[i].el.classList.toggle('even');
//     }
//   }
// };
 
// createTable(data);
 
// table_meta_container.addEventListener('click', function(e) {
//   var t = e.target;
   
//   if(t.classList.contains('prop__name')) {
//     if(!t.dataset.dir) { t.dataset.dir = 1; }
//     else { t.dataset.dir *= -1; }
     
//     sortTable(data, t.dataset.propName, t.dataset.dir);
//   }
// }, false);
// <<<<<<< events
// // console.log("alaa");
// =======

// let namdiv =document.getElementById("namdiv")
// let namediv =document.getElementById("tablediv")
// >>>>>>> main

function names (employee,fullname,department,level,imageurl){
    this.employee = employee;
    this.fullname = fullname;
    this.department = department;
    this.level = level;
    this.imageurl = `${imageurl}`;
    this.salary = 0;
    allname.push(this)
} 

function renderHeader(){
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let columnName = document.createElement('th');
    columnName.textContent = "Name";
    tr.appendChild(columnName);

    let columnPrice = document.createElement('th');
    columnPrice.textContent = "Price";
    tr.appendChild(columnPrice);
}


names.prototype.renderTableBody = function(){
    
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let nameCell = document.createElement("td");
    nameCell.textContent= this.name;
    tr.appendChild(nameCell);

    let priceCell = document.createElement("td");
    priceCell.textContent = this.price;
    tr.appendChild(priceCell);
};


function renderBody(){
    table.innerHTML = "";
    renderHeader();
    for(let i =0; i < allDrinks.length; i++){
        allnames[i].renderTableBody();
    }
}
document.write(`<h1>${this.employee}</h1>`)


function savenams(){
    let formatedData = JSON.stringify(allname);
    localStorage.setItem("names", formatedData);
}


function getData(){
    let nams = localStorage.getItem("names");
    let parsnams = JSON.parse(names);
    console.log(allname)
    if(parseDrinks != null){
            allnames = [];

            for(let i = 0; i < parsnams.length; i++){
                
                new Drink(parsnams[i].employee, parsnams[i].fullname, parsnams[i].department, parseDrinks[i].level, parseDrinks[i].imageurl);
            };
      
        }
    console.log(allname);
    renderAll();
}