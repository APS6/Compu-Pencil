if (matchMedia('(any-pointer:coarse), (any-hover:none)').matches) {
    // Code for devices with touch input

} else {
    // Code for devices with mouse or trackpad input
    const tail = document.querySelector(".tail");
    window.onpointermove = event => {
        const { clientX, clientY } = event;

        tail.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 500, fill: "forwards" });
      }


      const l = document.querySelectorAll(".l");
      l.forEach(l => {
        l.addEventListener('mouseover', () =>{
            tail.classList.add('grow');
        })
        l.addEventListener('mouseleave', () =>{
            tail.classList.remove('grow');
        })
      });
      const f = document.querySelectorAll(".f");
      f.forEach(f => {
        f.addEventListener('mouseover', () =>{
            tail.classList.add('grow2');
        })
        f.addEventListener('mouseleave', () =>{
            tail.classList.remove('grow2');
        })
      });
      const a = document.querySelectorAll(".c a");
      a.forEach(a => {
        a.addEventListener('mouseover', () =>{
            tail.classList.add('grow3');
        })
        a.addEventListener('mouseleave', () =>{
            tail.classList.remove('grow3');
        })
      });
      const p = document.querySelectorAll(".product");
      const view = document.querySelector(".view");
      const watch = document.querySelector(".watch");
      p.forEach(a => {
        a.addEventListener('mouseover', () =>{
            tail.classList.add('tview');
            view.classList.add('active');
        })
        a.addEventListener('mouseleave', () =>{
            tail.classList.remove('tview');
            view.classList.remove('active');
        })
      });

      const v = document.querySelectorAll(".vid");
      v.forEach(a => {
        a.addEventListener('mouseover', () =>{
            tail.classList.add('tview');
            watch.classList.add('active');
        })
        a.addEventListener('mouseleave', () =>{
            tail.classList.remove('tview');
            watch.classList.remove('active');
        })
      });


      gsap.to('.wrapper img', { scrollTrigger: { trigger: '.intro-ct', scrub: 2, start: 'top bottom' }, yPercent: -80 });
}









const tl = gsap.timeline();
tl.to(".head span", { y: "0", duration: .8, stagger: 0.33 });
tl.fromTo('#home p', .5, { opacity: 0, y: 20 }, { opacity: 1, y: 0 });
tl.fromTo('.cta', .5, { opacity: 0, y: 20 }, { opacity: 1, y: 0 });



gsap.fromTo('.move', .5, { opacity: 0, y: 40 }, { opacity: 1, y: 0, scrollTrigger: '.move', stagger: .25 });