// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; }

  var randomfunc ={
    lower: getrandomlower ,
    upper: getrandomupper ,
    number: getrandomnumber,
    symbol: getrandomsymbol
    }
function getrandomlower () {
var lower = "abcdefghijklmnopqrstuvwxyz"
return lower;
}
function getrandomupper () {
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
return upper;
}
function getrandomnumber () {
var number = "1234567890"
return number;
}
function getrandomsymbol() {
var symbol = "!@#$%^&*(){}[]=<>/"
return symbol;
}
       
function generatePassword () {
       var passwordCandidates ="";
       var upper
       var lower 
       var number 
       var symbol   
      
    
       var length=prompt ("How many characters would you like your password to be?");
        if (length < 8 || length > 128){
         alert("Length must be 8-128 characters")
        //  return null;
        length= prompt("How many characters would you like your password to be?");
        }
         if (length >= 8 && length <= 128){
       upper= confirm("Would you like to use uppercase letters?")
       lower = confirm("Would you like to use lowercase letters?")
       number = confirm("would you like to use numbers?")
       symbol = confirm("would you like to use special characters?")
       }    
       
       if (upper != true && lower != true && number != true && symbol != true){
           alert("You must select at least one character type!")
       }
       var guaranteed="";
      
       if ( upper) {
        passwordCandidates+= getrandomupper();
        var randomupper = getrandomupper() [Math.floor(Math.random () *getrandomupper().length)]
        guaranteed+= randomupper;
       }
       if (lower) {
        passwordCandidates+= getrandomlower();
        var randomlower = getrandomlower() [Math.floor(Math.random () *getrandomlower().length)]
        guaranteed+= randomlower;
       }
       if (number) {
        passwordCandidates+= getrandomnumber();
        var randomnumber = getrandomnumber() [Math.floor(Math.random () *getrandomnumber().length)]
        guaranteed+= randomnumber;
       }
       if (symbol) {
        passwordCandidates+= getrandomsymbol();
        var randomsymbol = getrandomsymbol() [Math.floor(Math.random () *getrandomsymbol().length)]
        guaranteed+= randomsymbol;
       }
       console.log (guaranteed)
       var finalPassword =""; 
   
    for(var i = 0; i< length; i++){
      var randIndex= Math.floor(Math.random()*passwordCandidates.length)
      finalPassword+=passwordCandidates[randIndex]
         }
         finalPassword= finalPassword.split("")
         console.log(finalPassword)
        guaranteed= guaranteed.split("")
         for ( var i=0; i< guaranteed.length; i++){
          console.log( finalPassword[i], guaranteed[i])
          finalPassword[i]=guaranteed[i]
          console.log( finalPassword[i], guaranteed[i])
         }
         console.log(finalPassword)
         return finalPassword.join("");}
       

      generateBtn.addEventListener("click", writePassword)



















