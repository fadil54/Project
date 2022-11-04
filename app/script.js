(function(){
    const overlay = document.querySelector(".overlay");
    const drDown = document.querySelector(".nav__dr-down");
    const drItems = document.querySelectorAll(".nav__dr-down-item");
    const icnMenu = document.querySelector(".nav__burger-icn");
    const icnX = document.querySelector(".nav__x-icn");
    const greetPage = document.querySelector(".greet");
    greetPage.style.height = `${window.innerHeight - 54}px`;
    function toggleDrDown(){
        drDown.classList.toggle("show");
        overlay.classList.toggle("hidden");
        icnMenu.classList.toggle("hidden");
        icnX.classList.toggle("hidden");
    }
    icnMenu.addEventListener("click",toggleDrDown);
    icnX.addEventListener("click",toggleDrDown);
    overlay.addEventListener("click", toggleDrDown);
    drItems.forEach(drItem => drItem.addEventListener("click",toggleDrDown));
    document.addEventListener("scroll",function(){
        if(drDown.classList.contains("show")) toggleDrDown();
    });
})();
