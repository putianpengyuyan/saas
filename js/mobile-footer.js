const supportBtn = document.querySelector('.support-btn')
const supportBody = document.querySelector('.support-body')
supportBtn.addEventListener('click',function(){
    supportBody.classList.toggle('body-show')
})

const quickBtn = document.querySelector('.quick-btn')
const quickBody = document.querySelector('.quick-body')
quickBtn.addEventListener('click',function(){
    quickBody.classList.toggle('body-show')
})

const followBtn = document.querySelector('.follow-btn')
const followBody = document.querySelector('.follow-body')
followBtn.addEventListener('click',function(){
    followBody.classList.toggle('body-show')
})

const newsBtn = document.querySelector('.newsletter-btn')
const newsBody = document.querySelector('.news-body')
newsBtn.addEventListener('click',function(){
    newsBody.classList.toggle('body-show')
})