const form = () => {
        const callbackInner = document.querySelector('.modal-callback'),
            callbackBack = document.querySelector('.modal-overlay');
            

        

        const postData = (body) => fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    
        const clearInput = (idForm) => {
            const form = document.getElementById(idForm);
            [...form.elements]
                .filter(item =>
                    item.tagName.toLowerCase() !== 'button' &&
                    item.type !== 'button')
                .forEach(item =>
                    item.value = '');
        };
    
        const validFields = (event) => {
            const target = event.target;
            if (target.matches('.tel')) {
                target.value = target.value.replace(/[^+\d]/g, '');
            }
            if (target.matches('.form-name')) {
                target.value = target.value.replace(/[^А-яёЁ]/giu, '');
            }
    
            
        };
    
        const mainProcess = (idForm) => {
            const form = document.getElementById(idForm);
            const statusMessage = document.createElement('div');
            const showStatus = (status) => {
                const statusList = {
                    load: {
                        message: ' Идет отправка...'
                    },
                    error: {
                        message: ' Ошибка...'
                    },
                    success: {
                        message: ' Отправлено!'
                    }
                    
                };
                statusMessage.textContent = statusList[status].message;
                
            };
    
            statusMessage.style.cssText = 'font-size: 3rem; color: rgb(0, 0, 0); position: relative; left: 30%; ';

            form.addEventListener('submit', event => {
                event.preventDefault();

                const formName = document.querySelector('.form-name'),
                    formTel = document.querySelector('.tel');

                let formNameValue = formName.value,
                    formTelValue = formTel.value;
                
                if(formNameValue.length < 2){
                    alert('Поле имя должно содержать минимум 2 символа');
                    return;
                }; 

                if(formTelValue.length < 7){
                    alert('Поле телефон должно содержать минимум 7 символов');
                    return;
                };

                showStatus('load');
    
                form.appendChild(statusMessage);
    
                setTimeout(() => {
                    statusMessage.remove();
                }, 6000);

                postData(Object.fromEntries(new FormData(form)))
                    .then(response => {
                        if (response.status !== 200) throw new Error(`Status network ${request.status}`);
                        showStatus('success');
                        clearInput(idForm);
                        setTimeout(() => {
                            callbackBack.style.display = 'none';
                            callbackInner.style.display = 'none';
                        }, 5000);
                    })
                    .catch(error => {
                        showStatus('error');
                        console.error(error);
                    });

                
            });
    
            form.addEventListener('input', validFields);
        };
    
        mainProcess('formSend');

}

export default form;
