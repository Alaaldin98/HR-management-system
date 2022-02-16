
let allname = [];


function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }
function names (employee,fullname,department,level,salary){
    this.employee = employee;
    this.fullname = fullname;
    this.department = department;
    this.level = level;
    this.imageurl = `/images/${this.names}.png`;
    this.salary = salary;
    allname.push(this)
}
// function randomRange(myMin, myMax) {
//     return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
//   }
//   console.log(randomRange(10, 20));

let GhaziSamer = new names(1000,"Ghazi Samer","Administration","Senior",randomRange(1500, 2000));
let LanaAli = new names(1001,"Lana Ali","Finance","Senior",randomRange(1500, 2000),);
let TamaraAyoub = new names(1002,"Tamara Ayoub","Marketing","Senior",randomRange(1500, 2000),);
let SafiWalid = new names(1003,"Safi Walid","Administration","Mid-Senior",randomRange(1000, 1500),);
let OmarZaid = new names(1004,"Omar Zaid","Development","Senior",randomRange(1500, 2000),);
let RanaSaleh = new names(1005,"Rana Saleh","Development","Junior",randomRange(500, 1000));
let HadiAhmad = new names(1006,"Hadi Ahmad","Finance","Mid-Senior",randomRange(1000, 1500),);

names.prototype.render = function(){
    
    document.write("<br>");
    document.write(`<h1>ID:</h1>`)
    document.write(`<h1>${this.employee}</h1>`)
    document.write(`<h1>Fullname:</h1>`)
    document.write(`<h1>${this.fullname}</h1>`)
    document.write(`<h1>Department:</h1>`)
    document.write(`<h1>${this.department}</h1>`)
    document.write(`<h1>Level:</h1>`)
    document.write(`<h1>${this.level}</h1>`)
    document.write(`<h1>Salary:</h1>`)
    document.write(`<h1>${this.salary}</h1>`)
    document.write(`<h1>Net Salary:</h1>`)
    document.write(`<h1>${this.salary- this.salary*7.5/100}</h1>`)
    document.write("***************************")
    
}
GhaziSamer.render();
LanaAli.render();
TamaraAyoub.render();
SafiWalid.render();
OmarZaid.render();
RanaSaleh.render();
HadiAhmad.render();
console.log(allname);

var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
console.log(seq);

function handelSubmit(event){
    event.preventDefault();
    let fullname = event.target.fullname.value;
    let ID = event.target.employee.value.split(",")

    let imageurl = event.target.imageurl.value;

    let level = event.target.level.value;
    let Department = event.target.department.value;

    
    let newname = new names(employee,fullname,department,level,salary,imageurl);
    newname.seq();
    renderAll();
    form.reset();
}


// function renderAll(){
    
//     namesDiv.innerHTML = " ";

//     for (let i = 0; i < allname.length; i++) {
//         allname[i].getPrice();
//         allname[i].render();
        
//     }

// };
// renderAll();