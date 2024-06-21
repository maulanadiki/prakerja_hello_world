document.getElementById("tagline").innerHTML = "Hai Diki, Welcome to website"
    function opennav(){
        const navbar = document.getElementById("navbar");
        // navbar.style.display = "inline-block";
        navbar.className = navbar.className !== 'show'? 'show':'hide';
        if(navbar.className === 'show'){
            // navbar.style.display='block';
            window.setTimeout(()=>{
            navbar.style.display='block'
            },300);
        }
        if(navbar.className==='hide'){
            window.setTimeout(()=>{
            navbar.style.display='none'
            },300);
        }
    }