gsap.registerPlugin(ScrollTrigger);



gsap.to(".ball-1", {
    x: 200,
    scale: .3,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
});
