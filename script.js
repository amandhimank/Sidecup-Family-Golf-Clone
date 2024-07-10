var crsr = document.querySelector("#cursor")
var crsrBlur = document.querySelector("#cursor-blur")
// dets is used to get behavour of cursor like x and y values
document.addEventListener("mousemove", function(dets){
    // crsr.style.left = dets.x + "px"   //now, cursor x-axis pe hamare sath chalega(waha mouse leke jayenge waahan) 
    // crsr.style.top = dets.y + "px"    // y-axis pe ath chalega

    // pehle blur cursor ka top left corner sath chal rha tha
    // toh humne -150 kiya jisse uska middle point apne sath chale
    // crsrBlur.style.left = dets.x - 250 + "px"  //yeh blur wale cursor ke liye hai 
    // crsrBlur.style.top = dets.y - 250 + "px"
    gsap.to(crsr, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.4
    })
    gsap.to(crsrBlur, {
        x: dets.x,
        y: dets.y,
        duration: 1
    })
})


// gsap animation for #nav jab hum scroll toh nav kaise behave kre wo wlaa animation
gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 1,
    // hume above properties tab implement krna h jab scroll kre hum , that's why scrollTrigger use krenge 
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        // jab hum scroll back krenge toh undo honi chahiye yeh properties --> using scrub:true se krenge(scrolling ki basisi pe krta h)
        scrub:1
    }
})

// gsap animation when hum page2(#main) pe scroll krte hai
gsap.to("#main", {
    backgroundColor: "#000",
    // color change hona chahiye scrolling basis pe isiliye scrollTrigger use krenge
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end: "top -80%",
        scrub:2
    }
})

gsap.from("#about-us img, #about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }
})
gsap.from(".card", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#cards-container",
        scroller: "body",
        // markers: true,
        start: "top 65%",
        end: "top 60%",
        scrub: 2
    }
})
gsap.from("#green1", {
    x: 600,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#green-div",
        scroller: "body",
        // markers: true,
        start: "top 65%",
        end: "top 60%",
        scrub: 3
    }
})
gsap.from("#green2", {
    x: -600,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#green-div",
        scroller: "body",
        // markers: true,
        start: "top 65%",
        end: "top 60%",
        scrub: 3
    }
})
gsap.from("#green-div h4", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#green-div",
        scroller: "body",
        // markers: true,
        start: "top 65%",
        end: "top 60%",
        scrub: 3
    }
})
gsap.from("#colon1", {
    y:-70,
    x:-70,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 2
    }
})
gsap.from("#colon2", {
    y:70,
    x:70,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 51%",
        end: "top 41%",
        scrub: 2
    }
})

document.querySelector("#elem").addEventListener("mouseenter", () => {
    gsap.to("#elem h1", {
        y:-58,
        duration: 1,
        webkitTextStroke: "2px #9FCE20"
    })
})
document.querySelector("#elem").addEventListener("mouseleave", () => {
    gsap.to("#elem h1", {
        duration: 1,
        webkitTextStroke: "2px #fff"
    })
})
