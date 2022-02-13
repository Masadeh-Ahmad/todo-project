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
function getAnswers(){
    alert("Please Answer with Yes or No for the Next Questions ");
    answerList.push(prompt("Is This your First Visit? ").toLowerCase());
    answerList.push(prompt("Did you Find our Website Useful? ").toLowerCase());
    answerList.push(prompt("Did you Like our Website? ").toLowerCase());
    
}
function checkAnswer (){
    for(var i=0;i<answerList.length;i++){
        if (!(answerList[i]=="yes" || answerList[i]=="no")){ 
            answerList[i] = "Invalid";
        }  
    } 
}

function printAnswers (){
    for(var i=0;i<answerList.length;i++){
        console.log(i+1 +"-"+ answerList[i]);
    }
}

var answerList=[];
getAnswers()
checkAnswer();
printAnswers();
