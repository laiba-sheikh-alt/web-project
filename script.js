const menus = document.querySelector("nav ul");
const header= document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener('click',()=>{
    menus.classList.add("display");
});

closeBtn.addEventListener('click',()=>{
    menus.classList.remove("display");
});


// scroll sticky navbar 
window.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop > 20){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
    
});

/// Animate static numbers
const countersEL = document.querySelectorAll(".number");

countersEL.forEach((counter) => {
    counter.textContent = 0;

    incrementCounter();

    function incrementCounter() {
        let currentNum = +counter.textContent;
        const dataCell = +counter.getAttribute("data-cell"); // convert to number

        const increment = dataCell / 25;

        currentNum = Math.ceil(currentNum + increment); // fixed Math.cell to Math.ceil

        if (currentNum < dataCell) {
            counter.textContent = currentNum;
            setTimeout(incrementCounter, 70);
        } else {
            counter.textContent = dataCell;
        }
    }
});
