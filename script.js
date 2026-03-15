let tl = gsap.timeline()

tl.from('.title',{
    y:50,
    delay:1,
    duration:1,
    opacity:0
})

tl.from('p',{
    y:50,
    delay:1,
    duration:1,
    opacity:0,
    stagger:0.5
})