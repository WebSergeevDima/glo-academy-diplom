export const animateScroll = (el) => {
    const headerWrapper = document.querySelector('.header-wrapper');
    const headerWrapperHeight = headerWrapper.clientHeight;
    const rect = el.getBoundingClientRect();
    const top = rect.top + document.documentElement.scrollTop - headerWrapperHeight;

    window.scrollTo({
        top: top,
        behavior: "smooth"
    });
}

export class Modal {
    constructor(form) {
        this._form = form;
        this._modalCallback = document.querySelector('.modal-callback');
        this._modalOverlay = document.querySelector('.modal-overlay');
    }

    set display(display) {
        this._modalCallback.style.display = display;
        this._modalOverlay.style.display = display;
    }

    resetForm() {
        this._form.reset();

        this._form.querySelectorAll('input').forEach(item => {
            item.classList.remove('error');
        });

    }

}