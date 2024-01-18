//button pressing

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
   document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonhtml = this.innerHTML;
        handleSound(buttonhtml);
        makeAnimation(buttonhtml);
   });
}

//key pressing

document.addEventListener("keypress",function(event){
    handleSound(event.key);
    makeAnimation(event.key);
});


function handleSound(key) {
    // console.log(this.innerHTML);
    // this.style.color="white";
     switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            alert("Please try again with letters (w, a, s, d, j, k, l)")
            break;
     }
}

function makeAnimation(classname){
    try{
        var activebutton = document.querySelector("."+ classname);
        activebutton.classList.add("pressed");
        //removing the animation after 1 sec
   
        setTimeout(function(){
           activebutton.classList.remove("pressed");
        },100)
    }catch(error){
        console.log("No animations for other letters");
    }
    
}