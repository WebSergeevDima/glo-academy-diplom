const topSlider = () => {
    const slider = document.querySelector('.top-slider');
    const slides = [...slider.querySelectorAll('.item')];
    const dots = document.querySelector('.top-slider__dots');
    const dotsItems = [...dots.querySelectorAll('.top-slider__dots-item')];
    const conf = {
        timeout: 3000,
        active: 0
    };

    let intervalSlider;

    const init = (startActive = conf.active) => {
        conf.active = startActive;
        showSlide();
        startSlider();
    }

    const showSlide = () => {

        let isSetActive = false;

        slides.map((item, index) => {
            if (conf.active === index && !isSetActive) {

                isSetActive = true;
                item.classList.add('active');
                if(item.querySelector('.title-h1')) {
                    item.querySelector('.title-h1').classList.remove('big');
                }
                dotsItems[index].classList.add('active');

                if (index < slides.length - 1) {
                    conf.active = conf.active + 1;
                } else {
                    conf.active = 0;
                }

            } else {
                item.classList.remove('active');
                if(item.querySelector('.title-h1')) {
                    item.querySelector('.title-h1').classList.add('big');
                }
                dotsItems[index].classList.remove('active');
            }

        });
    };

    const startSlider = () => {
        intervalSlider = setInterval(() => {
            showSlide();
        }, conf.timeout);
    };

    init();

    dots.addEventListener('click', (e) => {
        const dot = e.target.closest('.top-slider__dots-item');

        if(dot) {
            const index = dot.getAttribute('data-index');
            clearInterval(intervalSlider);
            init(+index)
        }

    });
}

export default topSlider;