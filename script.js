
const bMenu = document.querySelector(".bx-menu");


const closeDiv = document.querySelector("#closeDiv");
const navOption = document.querySelector(".navOption");

const body = document.querySelector("body");




gsap.from("nav",{
  y:10,
  opacity:0
})

gsap.from("#brandName",{
    y: 90,
    delay:0.4,
    opacity:0,
})

gsap.from("#bis",{
    delay:0.2,
    opacity:0,
})

gsap.from('#parleg', {
    y: 90,
    delay:0.4,
    opacity:0,
    scrollTrigger: {
      trigger: '#parleg',
      scroller:"body",
      // markers: true,
      start: "top 60%",
      end: "top 50%",
      scrub:2,
    }
  });


  gsap.from('#happy', {
    y: 90,
    delay:0.4,
    opacity:0,
    scrollTrigger: {
      trigger: '#happy',
      scroller:"body",
      // markers: true,
      start: "top 60%",
      end: "top 50%",
      scrub:2,
    }
  });


  gsap.from('#page4 p', {
    y: 90,
    delay:0.4,
    opacity:0,
    scrollTrigger: {
      trigger: '#page4 p',
      scroller:"body",
      // markers: true,
      start: "top 60%",
      end: "top 50%",
      scrub:2,
    }
  });


  const tl =gsap.timeline()

  tl.to(".navOption",{
      right:0,
      // delay:0.3,
      duration:0.5,
      
    })
    
    tl.from(".option ul",{
      y:30,
      stagger: 0.3,
      duration:0.2,
      opacity:0
      // duration:1,
  })


  tl.from("#closeDiv",{
      opacity:0,
  })

  
  tl.pause();
  
  bMenu.addEventListener("click",()=>{
  tl.play();  
  })

  closeDiv.addEventListener("click",()=>{
    tl.reverse();
})

gsap.from("#cursor",{
    top: 0,
    opacity:0,

})