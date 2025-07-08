window.onload = function () {
    gsap.to("h1", 
      {
      y: -100,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    gsap.to(".future-image",
      {
    rotation: 360,
    duration:1,
    delay:5,
    yoyo:true,
    ease:"power1.inout"
 });
 gsap.to(".label",
  {
x:200,
yoyo:true,
duration:10,
repeat: -1
 });
 gsap.to(".imglogo",
  {
  duration:5,
  x:100,
  borderRadius:"200",
  rotation:360,
  yoyo:true,
  repeat:-1
 })
 gsap.to(".imgwebsite",
  {
  duration:5,
  x:20,
  borderRadius:"500",
  rotation:360,
  yoyo:true,
  repeat:-1
 })
 gsap.fromTo(".imgy1",
    {opacity:0,
      x: -100
    },
    {
     opacity:1,
     x:0,
     duration:3,
     delay:10
    }
 )
 gsap.fromTo(".imgy2",
    {opacity:0,
      x: -100
    },
    {
     opacity:1,
     x:0,
     duration:3,
     delay:10
    }
 )
 gsap.fromTo(".imgy3",
    {opacity:0,
      x: -100
    },
    {
     opacity:1,
     x:0,
     duration:3,
     delay:10
    }
 )
  gsap.to(".testimonial-heading",
  {
x:200,
yoyo:true,
duration:10,
repeat: -1
 });
   gsap.to(".keto-text h2",
  {
x:200,
yoyo:true,
duration:10,
repeat: -1
 });
  };
