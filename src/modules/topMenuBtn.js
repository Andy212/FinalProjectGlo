const topMenuBtn = () => {
    const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', (event) => {
    event.preventDefault()
    
    const idBlock = anchor.getAttribute('href').substr(1)
    
    document.getElementById(idBlock).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    })
}
    const up = document.querySelector('.up');

    const trackScroll = () => {
        let scrolled = window.pageYOffset,
            coords = document.documentElement.clientHeight;

            if(scrolled > coords){
                up.classList.add('up-show');
            }
            if(scrolled < coords){
                up.classList.remove('up-show');
            }
    };

    const backToTop = () => {
        if(window.pageYOffset > 0) {
            window.scrollBy(0, -60);
            setTimeout(backToTop, 0);
        }
    }

    window.addEventListener('scroll', trackScroll);
    up.addEventListener('click', backToTop);
}


export default topMenuBtn;