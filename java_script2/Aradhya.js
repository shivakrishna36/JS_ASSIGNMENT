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
//creation of object Amitabh
var Amitabh = new Person("Amitabh","bachchan",45,["java","javascript"],{city:"mumbai",pincode:400022},'1974-12-12',false,"Developer");
//creation of object Abhishek
var Abhishek = Object.create(Amitabh);
//creation object Aradhya
var Aradhya = Object.create(Amitabh,Abhishek);
Abhishek.fname = "Abhishek";
Abhishek.age = 40;
Abhishek.skills = ['c','c++'];
Abhishek.dateofbirth = '1988-10-10';
Abhishek.married = true;
Aradhya.fname = "Aradhya";
Aradhya.age = 10;
//printing the details of objects using print function
print = function()
{

console.log(Amitabh);
console.log(Abhishek);
console.log(Aradhya.lname);
}
//calling the function
print();