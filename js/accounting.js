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

// function names (employee,fullname,department,level,imageurl){
//     this.employee = employee;
//     this.fullname = fullname;
//     this.department = department;
//     this.level = level;
//     this.imageurl = `${imageurl}`;
//     this.salary = 0;
//     allname.push(this)
// } 
let allname = [];


function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }
function names (employee,fullname,department,level,imageurl){
    this.employee = employee;
    this.fullname = fullname;
    this.department = department;
    this.level = level;
    this.imageurl = `${imageurl}`;
    this.salary = 0;
    allname.push(this)
} 


let GhaziSamer = new names(1000,"Ghazi Samer","Administration","Senior",`Images/Ghazi.jpg`);
let LanaAli = new names(1001,"Lana Ali","Finance","Senior",`Images/Lana.jpg`);
let TamaraAyoub = new names(1002,"Tamara Ayoub","Marketing","Senior",`Images/Tamara.jpg`);
let SafiWalid = new names(1003,"Safi Walid","Administration","Mid-Senior",`Images/Safi.jpg`);
let OmarZaid = new names(1004,"Omar Zaid","Development","Senior",`Images/Omar.jpg`);
let RanaSaleh = new names(1005,"Rana Saleh","Development","Junior",`Images/Rana.jpg`);
let HadiAhmad = new names(1006,"Hadi Ahmad","Finance","Mid-Senior",`Images/Hadi.jpg`);

function renderAll(){
    
    namesdiv.innerHTML = " ";

    for (let i = 0; i < allname.length; i++) {
        allname[i].salarylevel();
        allname[i].render();
        
    }}
// let tablediv = document.getElementById("tablediv"); 

// function renderHeader(){
//     let tr = document.createElement("tr");
//     tablediv.appendChild(tr);

//     let columnName = document.createElement('th');
//     columnName.textContent = "Name";
//     tr.appendChild(columnName);

//     let columnPrice = document.createElement('th');
//     columnPrice.textContent = "Price";
//     tr.appendChild(columnPrice);
// }
// renderHeader();
// // let names;
// // names.prototype.renderTableBody = function(){
//  names.prototype.renderTableBody=function(){   

//     let tr = document.createElement("tr");
//     tablediv.appendChild(tr);

//     let nameCell = document.createElement("td");
//     nameCell.textContent= this.names;
//     tr.appendChild(nameCell);

//     let priceCell = document.createElement("td");
//     priceCell.textContent = this.names;
//     tr.appendChild(priceCell);
// };


// function renderBody(){
//     tablediv.innerHTML = "";
//     renderHeader();
//     for(let i =0; i < allname.length; i++){
//         allname[i].renderTableBody();
//     }
// }

// document.write(`<h1>${this.employee}</h1>`)


// function savenams(){
//     let formatedData = JSON.stringify(allname);
//     localStorage.setItem("names", formatedData);
// }


// function getData(){
//     let nams = localStorage.getItem("names");
//     let parsnams = JSON.parse(names);
//     console.log(allname)
//     if(parseDrinks != null){
//             allnames = [];

//             for(let i = 0; i < parsnams.length; i++){
                
//                 new Drink(parsnams[i].employee, parsnams[i].fullname, parsnams[i].department, parseDrinks[i].level, parseDrinks[i].imageurl);
//             };
      
//         }
//     console.log(allname);
//     renderAll();

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('tablediv').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Department";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "# Of employees";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Total salary";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "Average salary";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);

thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "Administration";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "Marketing";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "Development";
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = "Finance";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
tbody.appendChild(row_2);


// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "Development";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "Adam White";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "Microsoft";
let row_3_data_4 = document.createElement('td');
row_3_data_4.innerHTML = "Microsoft";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);

tbody.appendChild(row_3);


let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "Finance";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = "Adam White";
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = "Microsoft";
let row_4_data_4 = document.createElement('td');
row_4_data_4.innerHTML = "Microsoft";

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);

tbody.appendChild(row_4);


let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = "Marketing";
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = "Adam White";
let row_5_data_3 = document.createElement('td');
row_5_data_3.innerHTML = "Microsoft";
let row_5_data_4 = document.createElement('td');
row_5_data_4.innerHTML = "Microsoft";

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
row_5.appendChild(row_5_data_4);

tbody.appendChild(row_5);



let row_6 = document.createElement('tr');
let row_6_data_1 = document.createElement('td');
row_6_data_1.innerHTML = "Total";
let row_6_data_2 = document.createElement('td');
row_6_data_2.innerHTML = "Adam White";
let row_6_data_3 = document.createElement('td');
row_6_data_3.innerHTML = "Microsoft";
let row_6_data_4 = document.createElement('td');
row_6_data_4.innerHTML = "Microsoft";

row_6.appendChild(row_6_data_1);
row_6.appendChild(row_6_data_2);
row_6.appendChild(row_6_data_3);
row_6.appendChild(row_6_data_4);

tbody.appendChild(row_6);