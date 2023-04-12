import {Modal} from "./helpers";

export const callback = () => {

    const body = document.querySelector('body');
    const form = document.querySelector('form[name="form-callback"]');
    const modal = new Modal(form);

    body.addEventListener('click', e => {

        if (e.target.classList.contains('callback-btn') ||
            e.target.classList.contains('button-services') ||
            e.target.classList.contains('fancyboxModal')
        ) {
            modal.display = 'block';
        }

        if (e.target.closest('.modal-close') || e.target.closest('.modal-overlay')) {
            modal.display = 'none';
            modal.resetForm();
        }

    });

}

export default callback;