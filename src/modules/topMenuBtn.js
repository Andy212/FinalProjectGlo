const topMenuBtn = () => {
    const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
    event.preventDefault()
    
    const idBlock = anchor.getAttribute('href').substr(1)
    
    document.getElementById(idBlock).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    })
}


}


export default topMenuBtn;