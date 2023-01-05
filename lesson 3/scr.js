window.addEventListener('load', function(){
const boxing = document.querySelector('.box')
console.log(boxing)

delegate(boxing, '.item', 'click', function (){
    let colors =['red', 'green', 'blue' ]
    let num = Math.floor(Math.random() * colors.length);
    this.style.color = colors[num];
})

// boxing.addEventListener('click', function(e){
//     let elem = e.target.closest('.item');
//     if (elem !== null && boxing.contains(elem)){
//     changeColor(elem);}


// })



function delegate(boxing, selector, eventName, handler){
    boxing.addEventListener(eventName, function(e){
        let elem = e.target.closest(selector);
        if (elem !== null && boxing.contains(elem)){
            handler.coll(elem, e);}
    
    
    })
}






});


///^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/  номера телеофна
// с любыми тел кодамиы

///^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u проверка имени

// /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
// email valid