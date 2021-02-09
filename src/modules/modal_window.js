const modalWindow = () => {
    const btnCallback = document.querySelectorAll('.header a'),
        callbackInner = document.querySelector('.modal-callback'),
        callbackBack = document.querySelector('.modal-overlay');
        // btnClose = document.querySelector('.modal-close');
    

        btnCallback[1].addEventListener('click', () =>{
            callbackBack.style.display = 'block';
            callbackInner.style.display = 'block';
    })

        // btnClose.addEventListener('click', () => {
            
        // })
}

export default modalWindow;