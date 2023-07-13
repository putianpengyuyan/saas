const shop = document.querySelector('.shop')
const shopContainer = document.querySelector('.shop_container')
const product = document.querySelector('.product')
const pages = document.querySelector('.pages')
const shopItem = document.querySelector('.shop-item')
const productItem = document.querySelector('.product-item')
const pagesItem = document.querySelector('.pages-item')
const app1 = document.querySelector('#app')
//shop 鼠标事件
// shop.addEventListener('mouseenter',function(e){
//     e.stopPropagation()
//     console.log('enter--------')
//     shopItem.style.display= 'block'
//     productItem.style.display= 'none'
//     pagesItem.style.display= 'none'
// })
// shop.addEventListener('mouseleave',function(e){
//     e.stopPropagation()
//     console.log(e.target)
//     console.log('enter--------')
//     shopItem.style.display= 'none'
    
// })
// shopItem.addEventListener('mouseenter',function(e){
//     console.log('leave--------')
//     shopItem.style.display= 'block'
// })
// shopItem.addEventListener('click',function(e){
//     shopItem.style.display= 'none'
// })
// shopItem.addEventListener('mouseleave',function(e){
//     e.stopPropagation()
//     shopItem.style.display= 'none'
    
// })


// // product
// product.addEventListener('mouseenter',function(e){
//     e.stopPropagation()
//     productItem.style.display= 'block'
//     shopItem.style.display= 'none'
//     pagesItem.style.display= 'none'
// })
// product.addEventListener('mouseleave',function(e){
//     e.stopPropagation()
//     productItem.style.display= 'none'
// })
// productItem.addEventListener('mouseenter',function(e){
//     e.stopPropagation()
//     productItem.style.display= 'block'
// })
// productItem.addEventListener('mouseleave',function(e){
//     e.stopPropagation()
//     productItem.style.display= 'none'
// })
// productItem.addEventListener('click',function(e){
//     productItem.style.display= 'none'
// })



// pages
pages.addEventListener('mouseenter',function(e){
    e.stopPropagation()
    pagesItem.style.display= 'block'
    // productItem.style.display= 'none'
    // shopItem.style.display= 'none'
})
pages.addEventListener('mouseleave',function(e){
    e.stopPropagation()
    pagesItem.style.display= 'none'
})
pagesItem.addEventListener('mouseenter',function(e){
    e.stopPropagation()
    pagesItem.style.display= 'block'
})
pagesItem.addEventListener('mouseleave',function(e){
    e.stopPropagation()
    pagesItem.style.display= 'none'
})
pagesItem.addEventListener('click',function(e){
    pagesItem.style.display= 'none'
})
