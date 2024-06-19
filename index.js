var numberofdrums= document.querySelectorAll(".drum").length
var keyboardInput = document.getElementById('keyboard-input');
for (var i = 0; i< numberofdrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var buttoninner_html=this.innerHTML;
        makesound(buttoninner_html);
        DoAnimation(buttoninner_html);
        keyboardInput.focus(); // Focus on the input field when a drum is clicked
    });
}

keyboardInput.addEventListener("input", function (event) {
    var key = event.target.value.toLowerCase(); // Get the latest value from the input field
    makesound(key);
    DoAnimation(key);
    event.target.value = ''; // Clear the input field to capture the next key press
});


document.addEventListener("keydown",function(press){
  makesound(press.key);
  DoAnimation(press.key);
});


function makesound(key) {
    switch (key) {
        case 'w':
            var w_audio= new Audio("sounds/tom-1.mp3")
            w_audio.play();
            break;
        case 'a':
            var a_audio= new Audio("sounds/tom-2.mp3")
            a_audio.play();
            break;
        case 's':
            var s_audio= new Audio("sounds/tom-3.mp3")
            s_audio.play();
            break;
        case 'd':
            var d_audio= new Audio("sounds/tom-4.mp3")
            d_audio.play();
            break;
        case 'j':
            var j_audio= new Audio("sounds/snare.mp3")
            j_audio.play();
            break;
        case 'k':
            var k_audio= new Audio("sounds/kick-bass.mp3")
            k_audio.play();
            break;
        case 'l':
            var l_audio= new Audio("sounds/crash.mp3")
            l_audio.play();
            break;     
        default:console.log(key);
            break;
    }
}

function DoAnimation(animate){
    document.querySelector('.'+animate).classList.add("pressed")

    setTimeout(function(){
        document.querySelector('.'+animate).classList.remove("pressed");
    },100)
}
keyboardInput.focus();
