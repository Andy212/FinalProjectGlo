const slider = () => {
    const sliderItems = document.querySelectorAll('.item');
    let slideIndex = 0,
        interval,
        slide = sliderItems[slideIndex];
        
        const prevSlide = () => {
            slide.style.display = 'none';
        };
        const nextSlide =() => {
            slide.style.display = 'block';
        }

    const autoPlay = () => {

        prevSlide();
        slideIndex++;
        if(slideIndex >= sliderItems.length){
            slideIndex = 0;
        };
        slide = sliderItems[slideIndex];
        nextSlide();
    }

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlay, time);
    };

    startSlide();

}


export default slider;