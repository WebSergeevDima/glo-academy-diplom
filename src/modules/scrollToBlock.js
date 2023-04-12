import {animateScroll} from "./helpers";

const scrollToBlock = () => {
    const topMenu = document.querySelector('.top-menu');

    topMenu.addEventListener('click', e => {
        e.preventDefault();

        const link = e.target.closest('a[href]');
        let id;

        if (link) {
            id = link.getAttribute('href');
            const block = document.querySelector(id);
            animateScroll(block);
        }

    })
}

export default scrollToBlock;