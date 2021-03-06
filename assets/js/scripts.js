//
// Fade in on scroll
//

const fade = document.querySelectorAll('.fadeIn-scroll');
const fadeOptions ={
    threshold: 1,
    rootMargin: '0px 0px -25px 0px'
};
const appearOnScroll = new IntersectionObserver(function(
    entries,
    fadeOnScroll
){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add("appear");
            fadeOnScroll.unobserve(entry.target);
        }
    });
},
fadeOptions);

fade.forEach(fade =>{
    appearOnScroll.observe(fade);
});

//
// Change bg colour on scroll
//

var $target = $('.about, .faq, .schedule, .sponsors, .footer');
inView('.content').on('enter', function(el){
    var color = $(el).attr('data-background-color');
    $target.css('background-color', color );
});

//
// Accordion javascript
//

const items = document.querySelectorAll('.accordion a.question');

function toggleAccordion(){
    this.classList.toggle('active');
    for(let item of items){
        if(item !== this){
            item.classList.remove('active');
            item.nextElementSibling.classList.remove('active');
        }
    }
    this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

//
// Marquee Scroll
//

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}