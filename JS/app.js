var Name = prompt("Enter your name ");
var gender = prompt("Enter your gender");
var age = prompt("Enter your age");
if(age<=0){ 
    alert("The age is less than or equal to zero")
}
var askConfirm = confirm("Do you wants to skip the welcoming message");
gender = gender.toLowerCase();
var welcomeName = Name;
if (gender == "male"){
    welcomeName = "Mr "+ Name[0].toUpperCase() + Name.substring(1);
}
else if (gender == "female"){
    welcomeName = "Ms " + Name[0].toUpperCase() + Name.substring(1);
} 
if (!askConfirm){
    alert("Welcome "+welcomeName);
}
