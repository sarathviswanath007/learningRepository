//In JavaScript Object is a collection of properties. It is represented using key value pair
// add a function to the object which will concatinate first name and last name

let person = {

    first_name:"Sarath",
    last_name: "Viswanath",
    Age:"28",
    Profession:"Software Engineer",
    Qualification: "Mtech in Software Engineering",
    full_name : function(){
    console.log(this.first_name+this.last_name)
    }


}

//Print all the properties in the person object using enhanced for loop
console.log(person.full_name())
for(let key in person)
{
   console.log(person[key]) 
}