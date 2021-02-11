const faq = () => {
    const accElements = document.querySelectorAll('.acc');
    const closeOpen = () => {

        accElements.forEach((section) => {
            section.addEventListener('click', (e) =>{
                if(section.classList.contains('active')){
                    section.classList.remove('active');
                    return;
                };
                accElements.forEach((section) =>{
                    
                    section.classList.remove('active');
                })
                e.target.closest('.acc').classList.add('active');
            });
        });

    }
    closeOpen();

}
export default faq;