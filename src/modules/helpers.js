export const animateScroll = (el) => {
    el.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}