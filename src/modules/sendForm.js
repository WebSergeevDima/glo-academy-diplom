import {Modal} from "./helpers";

const sendForm = () => {

    const btn = document.querySelector('input.feedback');
    const form = document.querySelector('form[name="form-callback"]');
    const formElements = form.querySelectorAll("input");
    const regFio = /[^а-яА-Я]/gi;
    const regTel = /[^\d+]/gi;
    const loadText = "Загрузка, ожидайте...";
    const errorText = "Ошибка =(";
    const successText = "Спасибо! Данные отправлены!";
    const modal = new Modal(form);
    let clearMessage;

    const validate = (formElements) => {

        let success = true;

        formElements.forEach(item => {

            const name = item.getAttribute('name');
            item.classList.remove('error');

            if (name === 'tel' && (regTel.test(item.value.trim()) || item.value.trim().length < 6)) {
                success = false;
                item.classList.add('error');
                addMessage(errorText, 'error');
            }

        });

        return success;

    }

    const removeMessageBlock = () => {

        const messageBlock = document.querySelector('.js-message-block');

        clearMessage = setTimeout(() => {
            if (messageBlock) {
                messageBlock.remove();
            }
        }, 3000);

    }

    const addMessage = (message, type = '') => {

        const messageBlock = document.querySelector('.js-message-block');
        const newMessageBlock = document.createElement('div');

        clearTimeout(clearMessage);

        newMessageBlock.classList.add('js-message-block');
        newMessageBlock.textContent = message;
        newMessageBlock.style.textAlign = 'center';
        newMessageBlock.style.margin = '20px 0 0 0';

        switch (type) {
            case 'error':
                newMessageBlock.style.color = 'red';
                break;
            case 'success':
                newMessageBlock.style.color = 'green';
                break;
            default:
                newMessageBlock.style.color = 'grey';
        }

        if (messageBlock) {
            messageBlock.remove();
        }

        btn.insertAdjacentElement('afterend', newMessageBlock);
        removeMessageBlock();

    }

    const ajax = (url, data) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(data => {
            if (!data.ok) {
                throw Error(`Сервер временно недоступен: ${data.status}`);
            }
            return data.json();
        }).then(data => {
            modal.resetForm();
            addMessage(successText, 'success');
        }).catch(e => {
            addMessage(e.message, 'error');
            modal.resetForm();
        });

    }

    btn.addEventListener('click', e => {
        addMessage(loadText);
        e.preventDefault();

        if (validate(formElements)) {

            const data = {};

            data.phone = form.querySelector('[name="tel"]').value;

            if (form.querySelector('[name="fio"]').value.length > 0) {
                data.name = form.querySelector('[name="fio"]').value;
            }

            ajax('./server.php', data);

        }

    });

    formElements.forEach(item => {
        item.addEventListener('input', (e) => {
            e.currentTarget.classList.remove('error');
            if (e.currentTarget.getAttribute('name') === 'fio') {
                e.currentTarget.value = e.currentTarget.value.replace(regFio, '');
            }
            if (e.currentTarget.getAttribute('name') === 'tel') {
                e.currentTarget.value = e.currentTarget.value.replace(regTel, '');
            }
        })
    })

}

export default sendForm;