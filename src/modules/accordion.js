const accordion = () => {

    const accordion = document.querySelector('.accordeon');

    const hiddenElements = () => {
        const elements = [...accordion.querySelectorAll('.element')];
        elements.map(item => {
            item.classList.remove('active');
            item.querySelector('.element-content').style.display = 'none';
        })
    }

    accordion.addEventListener('click', e => {

        const element = e.target.closest('.element:not(.active)');

        if (element) {
            hiddenElements();
            element.classList.add('active');
            element.querySelector('.element-content').style.display = 'block';
        }

    });
}

export default accordion;
