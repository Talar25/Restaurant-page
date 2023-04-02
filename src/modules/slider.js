export const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left')
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots')
    
    let curSlide = 0;
    const maxSlide = slides.length-1;
    
    // const slider = document.querySelector('.slider');
    // slider.style.transform = 'scale(0.4) translateX(-1200px)';
    // slider.style.overflow = 'visible';
    
    // slides.forEach( (s, i) => s.style.transform = `translateX(${i*100}%)`)
    // //next slide
    
    const createDots = function () {
      slides.forEach((_, i) => {
        const button = document.createElement('button');
        button.classList.add('dots__dot');
        button.dataset.slide = i;
        if(i === 0)     button.classList.add('dots__dot--active');
        dotContainer.appendChild(button);
      })
    }
    
    
    const activateDot = function (slide) {
      document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    
      document.querySelector(`.dots__dot[data-slide = "${slide}"]`).classList.add('dots__dot--active')
     
    }
    
    const goToSlide = function (slide) {
      slides.forEach( (s, i) => s.style.transform = `translateX(${(i-slide)*100}%)`)
    }
    
    
    const nextSlide = function () {
      if(curSlide === maxSlide) {
        curSlide = 0;
      }else {
        curSlide++;
      }
        goToSlide(curSlide);
        activateDot(curSlide);
    }
    
    const previousSlide = function () {
      if(curSlide > 0){
        curSlide--;
      }else {
        curSlide = maxSlide;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    }
    
    const init = function () {
      goToSlide(0);
      createDots();
      activateDot(0)
    }
    
    init();

    setInterval(() => {
        nextSlide();
      }, 5000);
    
    //event handlers
    btnRight.addEventListener('click', nextSlide)
    
    btnLeft.addEventListener('click', previousSlide)
    
    document.addEventListener('keydown', function (e) {
      if(e.key === "ArrowRight"){
        nextSlide();
      }else if(e.key === "ArrowLeft"){
        previousSlide();
      }
    })
    
    dotContainer.addEventListener('click', function (e) {
      if(e.target.classList.contains('dots__dot') ){
        const slide = e.target.dataset.slide;
        activateDot(slide);
        goToSlide(slide);
      }
    })
    }

