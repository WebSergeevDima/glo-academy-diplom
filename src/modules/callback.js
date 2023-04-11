import {Modal} from "./helpers";

export const callback = () => {

    const body = document.querySelector('body');
    const modal = new Modal();

    body.addEventListener('click', e => {

        if (e.target.classList.contains('callback-btn')) {
            modal.setDisplay('block');
        }

        if (e.target.closest('.modal-close') || e.target.closest('.modal-overlay')) {
            modal.setDisplay('none');
        }

    });

}

export default callback;