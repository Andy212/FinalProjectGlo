const modalWindow = () => {
    const btnCallback = document.querySelectorAll('.header a'),
        btnQuestion = document.querySelector('.quest-section a'),
        callbackInner = document.querySelector('.modal-callback'),
        callbackBack = document.querySelector('.modal-overlay'),
        btnClose = document.querySelector('.modal-close'),
        btnCallCarusel = document.querySelectorAll('.element a');
    

        const closeAll = () => {
            callbackBack.style.display = 'none';
            callbackInner.style.display = 'none';
        }
        const openAll = () => {
            callbackBack.style.display = 'block';
            callbackInner.style.display = 'block';
        }
        for(let i = 0; i < btnCallCarusel.length; i++)
        btnCallCarusel[i].addEventListener('click', () => {
            openAll();
        });

        btnCallback[1].addEventListener('click', () =>{
            openAll();
        });

        btnQuestion.addEventListener('click', () =>{
            openAll();
        });


        callbackBack.addEventListener('click', () => {
            closeAll();
        });
        
        btnClose.addEventListener('click', () => {
            closeAll();       
        });

        
}

export default modalWindow;