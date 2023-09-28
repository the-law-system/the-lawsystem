
document.getElementById('search-item').addEventListener('keyup', keyupfun)
function keyupfun(){
    var a = document.querySelectorAll('li');

    for(var i=0; i<a.length; i++){
        var val = document.getElementById('search-item').value;

        if(a[i].innerHTML.indexOf(val) != -1){
            a[i].style.display = 'block';

        }else{
            a[i].style.display = 'none';
        }
    }
}



const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input");
const micBtn = searchForm.querySelector("button");
const micIcon = micBtn.querySelector("i");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(SpeechRecognition){
    console.log("your browser supports speech recognition");
}
else{
    console.log("your browser does not support");
}