const services = () => {
    const items = document.querySelectorAll('.carouselSlide'),
        btnLeft = document.querySelector('.arrow-left'),
        btnRight = document.querySelector('.arrow-right');
        let activeSlide = 0;

        const renderSlide = () =>{
            for(let i = 0; i < items.length; i++){
                if(i >= activeSlide && i <= activeSlide + 2){
                    items[i].classList.add('activeCarousel');
                } else {
                    items[i].classList.remove('activeCarousel');
                }
            }
        } 

        const prev = () => {
            if(activeSlide - 1 >= 0){
                activeSlide--;
                renderSlide();
            }
        };

        const next = () =>{
            if(activeSlide + 3 < items.length){
                activeSlide++; 
                renderSlide();
            }
        };

        btnLeft.addEventListener('click', prev);
        btnRight.addEventListener('click', next);

}

export default services;