const modalWindow = () => {
    const btnCallback = document.querySelectorAll('.header a'),
        callbackInner = document.querySelector('.modal-callback'),
        callbackBack = document.querySelector('.modal-overlay'),
        btnClose = document.querySelector('.modal-close');
    

        const closeAll = () => {
            callbackBack.style.display = 'none';
            callbackInner.style.display = 'none';
        }


        btnCallback[1].addEventListener('click', () =>{
            callbackBack.style.display = 'block';
            callbackInner.style.display = 'block';
    });

        callbackBack.addEventListener('click', () => {
            closeAll();
        });

        btnClose.addEventListener('click', () => {
            closeAll();       
        });
}

export default modalWindow;