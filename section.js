document.getElementById('search-input').addEventListener('keyup', keyupfun)

function keyupfun(){
    var a = document.querySelectorAll('li');

    for(var i=0; i<a.length; i++){
        var val = document.getElementById('search-input').value;

        if(a[i].innerHTML.indexOf(val) != -1){
            a[i].style.display = 'absolute';

        }else{
            a[i].style.display = 'none';
        }
    }
}
// function search(){
//     let filter = document.getElementById('search-input').value;   

//     let item = document.querySelectorAll('li');

//     let l = document.getElementsByTagName('li');
//     for(var i = 0;i<=l.length;i++){
//         let a=item[i].getElementsByTagName('li')[0];

//         let value=a.innerHTML || a.innerText || a.textContent;

//         if(value.indexOf(filter) > -1){
//             item[i].style.display="block";

//         }else{
//             item[i].style.display="none";
//         }
//     }
// }
