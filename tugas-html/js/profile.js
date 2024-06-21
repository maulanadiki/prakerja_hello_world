document.getElementById("tagline").innerHTML = "Tentang Kami"
        function opennav() {
            const navbar = document.getElementById("navbar");
            // navbar.style.display = "inline-block";
            navbar.className = navbar.className !== 'show' ? 'show' : 'hide';
            if (navbar.className === 'show') {
                // navbar.style.display='block';
                window.setTimeout(() => {
                    navbar.style.display = 'block'
                }, 300);
            }
            if (navbar.className === 'hide') {
                window.setTimeout(() => {
                    navbar.style.display = 'none'
                }, 300);
            }
        }

        function reveal() {
            var reveals = document.querySelectorAll(".reveal");

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        }

        window.addEventListener("scroll", reveal);


        let slideIndex = 1;
        showSlide(slideIndex);
        function Sliders(n) {
            showSlide(slideIndex += n);
        }
        function currentlide(n) {
            showSlide(slideIndex = n);
        }

        function showSlide(n) {
            let i;
            let slides = document.getElementsByClassName("struktur-container__slide");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            
            slides[slideIndex - 1].style.display = "block";
        }