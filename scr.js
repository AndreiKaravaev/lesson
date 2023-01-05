window.addEventListener('load', function(){
const boxing = document.querySelector('.box')
console.log(boxing)

boxing.addEventListener('click', function(e){
    let elem = e.target.closest('.item');
    if (elem !== null && boxing.contains(elem)){
    changeColor(elem);}
    // if (e.target.classList.contains('item')){
    //     changeColor(e.target)
    // }

})

function changeColor(el){
    let colors =['red', 'green', 'blue' ]
    let num = Math.floor(Math.random() * colors.length);
    el.style.color = colors[num];
}






});