let counterValue = document.querySelectorAll(".counter-value");
let interval = 500;
counterValue.forEach((counterValue)=>{
    let startValue = 0;
    let endValue = parseInt(counterValue.getAttribute("data-val"));

    let duration = Math.floor(interval / endValue);
    let counter = setInterval( function(){
        startValue +=1;
        counterValue.textContent= startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    },duration);
})