const mobileBtn = document.querySelector('.flex-box')
const flexBody = document.querySelector('.flex-body')
mobileBtn.addEventListener('click',function(){
    flexBody.classList.toggle('flex-show')
})