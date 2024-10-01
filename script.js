let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

const media = window.matchMedia('max-width:426px')
let sun = document.querySelector(".sun");
let gradient = document.querySelector(".gradient h1");


const userinput = prompt("Which weather is currently in your area: Sunny , Rainy  or Snowy");


if (userinput) {
    if (userinput.toLowerCase() === "sunny") {
        gsap.to(gradient,{
            color:"black"
        })
        sunmobile();
    } else if (userinput.toLowerCase() === "rainy") {
        gsap.to(".page1", {
            background: "linear-gradient(#003262,#5D8AA8)"
        });
        sun.remove();
        rainmobile();
    }
    else{
        gsap.to(".page1",{
            background:"linear-gradient(#BEBFC5,#F5F5F5)"
        })
        sun.remove();
        snowmobile();
    }
}



function sunmobile() {
    gsap.to(".sun", {
        y: -500,
        x: 800,
        duration: 3,
        delay: 1,
        opacity: 1,
        onUpdate: function () {
            const progress = this.progress();
            if (progress >= 0.3 && !this.triggered) {
                this.triggered = true;
                startNextAnimation();
            }
        }
    });
}

function startNextAnimation() {
    gsap.to(".page1", {
        background: "linear-gradient(#add8e6, yellow)"
    });
}


function rainmobile() {
    
    const clouds = document.querySelectorAll(".cloud, .cloudi");

    setInterval(function () {
        clouds.forEach(cloud => {
           
            for (let i = 0; i < 5; i++) {
                createRaindrop(cloud);
            }
        });
    }, 200);
}

function createRaindrop(cloud) {
    const drop = document.createElement("div");
    drop.classList.add("drop");

    drop.style.left = Math.random() * 100 + '%';
    cloud.appendChild(drop);

    setTimeout(function () {
        if (cloud.contains(drop)) {
            cloud.removeChild(drop);
        }
    }, 1000); 
}

function snowmobile(){
    const snow = document.querySelectorAll(".cloud , .cloudi")
    setInterval(function(){
        snow.forEach(snows =>{
            for(let i=0 ;i<3 ; i++){
                createsnow(snows);
            }
        })
    },200)
}

function createsnow(snows){
    const drop = document.createElement("div");
    drop.classList.add("snow");
    drop.style.left = Math.random()*100+"%";
    snows.appendChild(drop);
    setTimeout(function(){
        if(snows.contains(drop)){
            snows.removeChild(drop);
        }
    },1000)
}


function sunmobile(){
    
        gsap.to(".sun",{
            opacity:0
        })

        
        gsap.to(".sun",{
            y:-500,
            x: 800, 
            duration: 3,
            delay:1,
            opacity:1,
    onUpdate: function() {
    // Check progress
        const progress = this.progress();
        if (progress >= 0.3 && !this.triggered) { // Check if it's at least 50%
            this.triggered = true; // Ensure this runs only once
            startNextAnimation(); // Start the next animation
        }
    }
        })
    }

    function startNextAnimation() {
        // Next animation
        gsap.to(".page1", {
            background:"linear-gradient(#add8e6,yellow)"
        });
    }


let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})


if(window.matchMedia("(max-width: 426px)").matches){
    gsap.to(".sun",{
        y:0
        
    })
}
