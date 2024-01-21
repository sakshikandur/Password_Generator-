let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");

let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let Numbers = document.getElementById("Numbers");
let Symbols = document.getElementById("Symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

//showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input' ,()=>{
    sliderValue.textContent = inputSlider.value;
});
genBtn.addEventListener('click' ,()=>{
    passBox.value = generatepassword();

});
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols ="!@#$%^&*~`?_+-=|";


//function to genrate password
function generatepassword(){
    let genpassword = "";
    let allChars="";
    
   allChars += lowercase.checked ? lowerChars : "";
   allChars += uppercase.checked ? upperChars : "";
   allChars += Numbers.checked ? allNumbers : "";
   allChars += Symbols.checked ? allSymbols : "";
   if(allChars == "" | allChars.length ==0){
    return genpassword;
   } 
   let i=1;
   while(i<=inputSlider.value){

   genpassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
     i++; 
}
    return genpassword;
   
   
} 

copyIcon.addEventListener('click',()=>{
    if(passBox.value != " " || passBox.value.length >=1){
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText  ="copied";

    copyIcon.title = "password Copied";
    settimeout(()=>{
   copyIcon.innerHTML ="copy";
   copyIcon.title ="";
  }  ,2000)
   }
    }
);