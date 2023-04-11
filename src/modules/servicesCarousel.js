const servicesCarousel = () => {

    const slides = [...document.querySelectorAll('.services-carousel > div')];
    const arrows = document.querySelector('.services-arrow');
    const arrowLeft = arrows.querySelector('.arrow-left');
    const arrowRight = arrows.querySelector('.arrow-right');
    let slideStart = 0;

    const updateArrows = () => {

        if (slideStart === 0) {
            arrowLeft.style.opacity = '.3';
        } else {
            arrowLeft.style.opacity = '1';
        }

        if (slideStart + getCountSlides() === slides.length) {
            arrowRight.style.opacity = '.3';
        } else {
            arrowRight.style.opacity = '1';
        }

    }

    const getCountSlides = () => {

        const screenWidth = document.documentElement.clientWidth;

        if (screenWidth < 768) {
            return 1;
        }
        if (screenWidth < 992) {
            return 2;
        }

        return 3

    }

    const incSlideStart = (arrow) => {
        if (slideStart < slides.length - getCountSlides()) {
            slideStart++;
            updateSlider();
        }
    }

    const decSlideStart = (arrow) => {
        if (slideStart > 0) {
            slideStart--;
            updateSlider();
        }
    }

    const updateSlider = () => {

        const count = getCountSlides();

        slides.map((item, index) => {

            if ((slideStart + count) > index && index >= slideStart) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }

        });

        updateArrows();

    }

    updateSlider();

    arrows.addEventListener('click', e => {
        if (e.target.classList.contains('arrow-left')) {
            decSlideStart(e.target);
        }

        if (e.target.classList.contains('arrow-right')) {
            incSlideStart(e.target);
        }
    });

    window.addEventListener('resize', () => {
        updateSlider();
    });

}

export default servicesCarousel;