let obj = {
    name: "Aishwarya",
    age: 25,
    city: "pune"
}

console.log(obj) // {name: 'Aishwarya', age: 25, city: 'pune'}
// for in loop 
for (key in obj) {
    console.log(`employee details are ${obj[key]}`) 
    console.log(` ${key}`)
    /* output : 
    employee details are Aishwarya
    employee details are 25
    employee details are pune
    */
    
    /* output : 
    name 
    age 
    city
    */
}

//for of loop 
console.log("----------- the output of for of loop ----------- ")
let players = ["aish" , "rutuja" , "shruti" , "omkar" , "akshay"]
// for of dosnt works with obj type 
for (let emp of players) {
    console.log(emp)
}


