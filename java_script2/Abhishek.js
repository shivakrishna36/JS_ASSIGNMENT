/*creation of two objects and inheriting some common properities from one object to another*/
//creating function with name Person  
function Person(fname,lname,age,skills,address,dateofbirth,married,profession)//passing arguments
{
    this.fname = fname;
    this.lname = lname; 
    this.age = age;                     //Assigning values to current object        
    this.skills = skills;
    this.address = address;
    this.dateofbirth = dateofbirth;
    this.married = married;
    this.profession = profession;
     
}
//creation of object1
var Amitabh = new Person("Amitabh","bachchan",45,["java","javascript"],{city:"mumbai",pincode:400022},'1974-12-12',false,"Developer");
//creation of object2
var Abhishek = Object.create(Amitabh);
Abhishek.fname = "Abhishek";
Abhishek.age = 40;
Abhishek.skills = ['c','c++'];
Abhishek.dateofbirth = '1988-10-10';
Abhishek.married = true;
//printing the details of objects using print function
print = function()
{

console.log(Amitabh);
console.log(Abhishek);
console.log(Abhishek.lname);
console.log(Abhishek.age);
console.log(Abhishek.skills);
}
//calling the function
print();