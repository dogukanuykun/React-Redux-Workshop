

let student = {id:1 , name:"Doğukan"}

function save(puan=10,ogrenci) {
    console.log(ogrenci.name + " "+ puan);
}

//save(undefined,student);

let students = ["Engin Demiroğ","Doğukan Uykun","Mehmet Uykun"];
//console.log(students);

let students2 = [student,{id:2,name:"Dodo"},"Ankara",{city:"Istanbul"}];
//console.log(students2);

//rest
let showProducts = function (id,...products) {
    console.log(id);
    console.log(products[0]);
}

//showProducts(10,"Elma","Armut","Karpuz");

//Spread
let points = [1,2,3,4,50,60,14];
//console.log(Math.max(...points));
//console.log(..."ABC","D",..."EFG","H");


//Destructuring
let populations = [10000,20000,30000]
let [small,medium,high] = populations
console.log(small) 
console.log(medium) 
console.log(high)






