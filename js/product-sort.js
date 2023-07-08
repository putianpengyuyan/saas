function ProductSort(){
    axios.post(url+'/api/products/category')
    .then(res=>{
        console.log('-==-=-=-=-=-');
        console.log(res);
        var data = res.data.data
        console.log(data); 
        console.log('-==-=-=-=-=-');
        if(data){
            const rowSort = document.querySelector('.sort-row')
            data.map((item,index)=>{
                const col = document.createElement('div')
                col.innerHTML = `
                <div class="col sort-col" id='${item.id}'>
                    <a href="./shop.html">
                        <div class="common-img-box">
                            <img src='${url}${item.image}' alt="">
                        </div>
                    </a>
                    <div class="mt-4">
                        <h3>${item.title}</h3>
                        <div class="t-text">
                            
                        </div>
                    </div>
                </div>
                `
                rowSort.appendChild(col)
            })
            const sortCOLs = document.querySelectorAll('.sort-col')  
            for(let i=0;i<sortCOLs.length;i++){
                const sortCOL = sortCOLs[i]
                sortCOL.addEventListener('click',function(){
                    const id = sortCOL.id
                    console.log(sortCOL.id);
                    let SortID 
                localStorage.setItem('SortID',JSON.stringify(id))
                })
            }
        }
    },err=>{
        console.log(err);
    }
    )
}
ProductSort()