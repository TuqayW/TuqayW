const slider = document.querySelector(".slider-img")



let current = 1
setInterval(()=>{
    slider.src = `http://127.0.0.1:5500/img/banner${current}.png`;
    if(current != 4){
        ++current
    } 
    else{
        current = 1
    }
},1000)