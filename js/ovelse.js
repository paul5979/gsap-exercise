gsap.registerPlugin(ScrollTrigger);



gsap.to(".ball-2", {
    x: 200,
    scale: .3,
    duration: 7,
    ease: "elastic.out(1, 0.3)",
    scrollTrigger: {
        trigger: ".ball-2",
        markers: true,
        start: "center 75%",
        end: "bottom 25%",
        toggleActions: "play pause resume reset"
    }
});


gsap.from(".ball-3", {
    x: 300,
    scale: .3,
    rotation: 360,
    duration: 2,
    ease: "bounce.out",
    scrollTrigger: {
        trigger: ".ball-3",
        // markers: true,
        start: "center center",
        end: "center 25%",
        scrub: true,


    }

})
