import {animateScroll} from './helpers';

const scrollUp = () => {
    const body = document.querySelector('body');
    const headerWrapper = document.querySelector('.header-wrapper');
    const services = document.getElementById('services');
    const up = document.querySelector('.up');

    document.addEventListener('scroll', (e) => {
        const headerWrapperHeight = headerWrapper.clientHeight;
        const servicesTop = services.getBoundingClientRect().top;

        servicesTop < headerWrapperHeight ?  up.style.display = 'block' :  up.style.display = 'none';
    });

    up.addEventListener('click', () => {
        animateScroll(body);
    });
}

export default scrollUp;
