var btn = document.querySelector('#btn')
var ok = document.querySelector('#ok')
var popup = document.querySelector('.popup')


btn.addEventListener('click',function(){
    popup.classList.add('open-popup')
})

ok.addEventListener('click',function(){
    popup.classList.remove('open-popup')
})