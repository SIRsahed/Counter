let counter = document.querySelectorAll(".counter")
let one = document.querySelector(".one")
let countArr = Array.from(counter)




countArr.map((item)=>{
    let count = 1;
    function abc(){
        count++
    }
    
    let stop = setInterval(()=>{
        if(count <= item.dataset.number){
            item.innerHTML = count
            abc()
        }
    },item.dataset.speed)
})




