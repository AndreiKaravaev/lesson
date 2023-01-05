window.addEventListener('load', function(){
let form = document.querySelector('.forma');
//let btnSub = document.getElementById('sab');
let inp = document.querySelectorAll('.check');



form.addEventListener('submit', def)
form.addEventListener('focusin', function(e){
   if (e.target.classList.contains('check')){
   offErr(e.target);}
   
});


function def (e){
   let hasError = false;
   
   for (let i = 0; i < inp.length; i++){   
      if (!inp[i].value){
         hasError = true;
         inp[i].classList.add('err')
      }
      // inp[i].addEventListener('focus', function(){ 
      //    inp[i].classList.remove('err')
      // });
   } 
   if (hasError)
      e.preventDefault();
}

function offErr (el){
   el.classList.remove('err')
}


});






