const slider = document.getElementById("slider");
const price = document.getElementById("price");
const period = document.getElementById("period");
const toggle = document.getElementById("toggle");
const pageViews = document.getElementById("pageviews");

const sliderFill = document.documentElement;

const priceHandler = () =>{
    sliderFill.style.setProperty(
        "--fillwidth",
        Math.floor((slider.value / 19) * 100) + "%"
      );
      
    if (slider.value <= 10) {
        pageViews.innerText = `${slider.value * 10}K pageviews`;
    
        price.innerHTML = `$${
          toggle.checked
            ? (parseInt(slider.value) + 7) * 12 * 0.75 
            : parseInt(slider.value) + 7  
        }`;
  
        
      } else if (slider.value < 19) {
        pageViews.innerText = `${
          (parseInt(slider.value.split("")[1]) + 1) * 100
        }K pageviews`;
    
        price.innerHTML = `$${
          toggle.checked
            ? Math.floor(slider.value * 1.9) * 12 * 0.75 
            : Math.floor(slider.value * 1.9) 
        }`;
      } else {
        pageViews.innerText = "1M pageviews";
    
        price.innerHTML = `$${
          toggle.checked ? "324" : "36"
        }`;
      }
}

slider.addEventListener("input", () => {
    priceHandler();
})

toggle.addEventListener('click', ()=> {
    toggle.checked ?
    period.innerHTML = '/ Year':
    period.innerHTML = '/ Month'
    priceHandler();
})


