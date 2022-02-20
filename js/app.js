
let allname = [];
let namesdiv = document.getElementById("namesdiv"); 

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

// names.prototype.render = function(){
    
//     document.write("<br>");
//     document.write(`<h1>ID:</h1>`)
//     document.write(`<h1>${this.employee}</h1>`)
//     document.write(`<h1>Fullname:</h1>`)
//     document.write(`<h1>${this.fullname}</h1>`)
//     document.write(`<h1>Department:</h1>`)
//     document.write(`<h1>${this.department}</h1>`)
//     document.write(`<h1>Level:</h1>`)
//     document.write(`<h1>${this.level}</h1>`)
//     document.write(`<h1>Salary:</h1>`)
//     document.write(`<h1>${this.salary}</h1>`)
//     document.write(`<h1>Net Salary:</h1>`)
//     document.write(`<h1>${this.salary- this.salary*7.5/100}</h1>`)
//     document.write(`<img src="${this.imageurl}"/>`)    
// };
// GhaziSamer.render();
// LanaAli.render();
// TamaraAyoub.render();
// SafiWalid.render();
// OmarZaid.render();
// RanaSaleh.render();
// HadiAhmad.render();
names.prototype.render = function(){
    
let titles = document.createElement("h1");
titles.textContent = `Name: ${this.fullname}`;
namesdiv.appendChild(titles);

let employee = document.createElement("h2");
employee.textContent = `ID: ${this.employee}`
namesdiv.appendChild(employee);

let ul = document.createElement("h2");
ul.textContent = `Department: ${this.department}`
namesdiv.appendChild(ul);

let liv = document.createElement("h2");
liv.textContent = `Level: ${this.level}`
namesdiv.appendChild(liv);



let netsalary = document.createElement("h2");
netsalary.textContent =`Salary: ${ this.salary}`
namesdiv.appendChild(netsalary);

// let levels = document.createElement("h1");
// levels.textContent = this.level
// namesdiv.appendChild(level);

let imag = document.createElement("img");
imag.setAttribute("src" , this.imageurl);
namesdiv.appendChild(imag);
};

console.log(allname);

//     names.prototype.salarylevel = function()   {
//     if (this.level === "Junior") {return salary = randomRange(500,1000);} ;
//     if (this.level === "Mid-Senior") { salary = randomRange(1000,1500);} ;
//     if (this.level === "Senior") {salary = randomRange(1500,2000);};
// };
function savedata () {
let jsave = JSON.stringify (allname);
localStorage.setItem("data" , jsave)
};

function getData(){
    let nams = localStorage.getItem("data");
    let parsnams = JSON.parse(nams);
    // for (let i = 0; i < parsnams.length; i++) {
    // allname = parsnams 
    // allname ();
    console.log(parsnams);

    if(parsnams != null){
          allname = [];
        
            for(let i = 0; i < parsnams.length; i++){
                        
                   new names(parsnams[i].employee, parsnams[i].fullname, parsnams[i].department, parsnams[i].level, parsnams[i].imageurl);
              };
              
              }
    renderAll();
console.log(parsnams);
}

names.prototype.salarylevel = function() {
    var max ;
    var min ;
       // console.log(employees[i].level);      
        if(this.level == "Senior"){
             min = 1500 ;
             max = 2000 ;
        }
        else if (this.level == "Mid-Senior"){
             min = 1000 ;
             max = 1500 ;
        }
        else {
             min = 500 ;
             max = 1000 ;
        }
       let totalSalary = (Math.random() * (max - min + 1)) + min;
        this.salary = totalSalary - totalSalary * 0.075 ;
        }


        for(let i = 0 ; i < allname.length ;  i++ ){
            allname[i].salarylevel();
            allname[i].render();
            console.log(allname[i].salary);
        }
let form = document.getElementById("form");
form.addEventListener("submit", handelSubmit);
function handelSubmit(event){
    event.preventDefault();
    let fullname = event.target.fullname.value;
    let imageurl = event.target.imageurl.value;
    let level = event.target.level.value;
    let Department = event.target.department.value;
    
    let employee = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    // let salary = randomRange(1500,2000);
    let newname = new names(employee,fullname,Department,level,imageurl);
    // newname.seq();
    // renderAll();
    newname.salarylevel()   
    console.log(newname.salary); 
    newname.render();
    // form.reset();
    savedata();
}


function renderAll(){
    
    namesdiv.innerHTML = " ";

    for (let i = 0; i < allname.length; i++) {
        allname[i].salarylevel();
        allname[i].render();
        
    }
// savedata();
};
getData();
