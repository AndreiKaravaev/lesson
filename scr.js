window.addEventListener('load', function(){
const boxing = document.querySelector('.box')
console.log(boxing)

delegate(boxing, '.item', 'click', changeColor)

// boxing.addEventListener('click', function(e){
//     let elem = e.target.closest('.item');
//     if (elem !== null && boxing.contains(elem)){
//     changeColor(elem);}


// })

function changeColor(el){
    let colors =['red', 'green', 'blue' ]
    let num = Math.floor(Math.random() * colors.length);
    el.style.color = colors[num];
}

function delegate(boxing, selector, eventName, handler){
    boxing.addEventListener(eventName, function(e){
        let elem = e.target.closest(selector);
        if (elem !== null && boxing.contains(elem)){
            handler(elem);}
    
    
    })
}






});