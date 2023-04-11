export const animateScroll = (el) => {
    el.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

export class Modal {
    constructor() {
        this._modalCallback = document.querySelector('.modal-callback');
        this._modalOverlay = document.querySelector('.modal-overlay');
    }

    set display(display) {
        this._modalCallback.style.display = display;
        this._modalOverlay.style.display = display;
    }

}