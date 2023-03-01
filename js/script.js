
window.addEventListener('click', function(event) {
  const call = document.querySelector(".call");

  if (event.target.closest(".intro-box-button") || event.target.closest(".call-form-close")) {
    call.classList.toggle('call-open');
  } else if (!event.target.closest(".call-form") && call.closest(".call-open")) {
    call.classList.remove('call-open');
  }

  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  if (event.target.closest(".menu-btn") || event.target.closest(".menu-img-close")) {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  }
  let catalogTip = document.querySelector('.catalog-body-tip');
  let catalogTipText = document.querySelector('.catalog-tip-text');
  let filter = document.querySelector('.catalog-end-filter')
  if (event.target.closest('.catalog-top-item')) {
    let btn = event.target.innerText;
    catalogTipText.innerHTML = '';
    filter.classList.add('filter-new');
    catalogTip.classList.add('catalog-tio-active');
    catalogTipText.prepend(btn)
  } else if (event.target.closest('.catalog-body-tip-close')) {
    catalogTipText.innerHTML = '';
    filter.classList.remove('filter-new');
    catalogTip.classList.remove('catalog-tio-active');
  }
});


window.onscroll = function(){
  var html = document.documentElement, body = document.body;
  var wrapper = document.querySelector('.wrapper');
  var BlkStyle = document.getElementById('tell');
  if(html.scrollTop>50||body.scrollTop>50) {
    wrapper.classList.add('wrapper-fix');
  } else wrapper.classList.remove('wrapper-fix');
  if(html.scrollTop>200||body.scrollTop>200) {
    BlkStyle.classList.add('teel-fix');
  } else     BlkStyle.classList.remove('teel-fix');
}

const swiper = new Swiper('.butic-sliders', {
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        420: {
            slidesPerView: 2,
          },
        // when window width is >= 480px
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        }
    },
    
    navigation: {
      nextEl: '.butic-slider-btn-r',
      prevEl: '.butic-slider-btn-l',
    },
});


