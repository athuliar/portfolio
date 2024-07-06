var typed=new Typed(".text",{
    strings:["Web Developer","Computer Science Engineer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
window.onscroll = function() {
    updateScrollLine();
};

function updateScrollLine() {
    // Calculate how much the page has been scrolled
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100; // Calculate percentage scrolled

    // Update the width of the scroll line
    document.getElementById('scrollLine').style.width = scrolled + '%';
}


document.addEventListener("DOMContentLoaded", function(event) { 
    const cards = document.querySelectorAll('.card');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateCards() {
        cards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('animated');
            }
        });
    }

    // Initial animation check
    animateCards();

    // Re-check on scroll
    window.addEventListener('scroll', animateCards);
});

var typed=new Typed(".ath",{
    strings:["ATHULIA T RAJESH"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
     loop:true
})


var typed=new Typed(".edu",{
    strings:["EDUCATION"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
     loop:true
})
var typed=new Typed(".exp",{
    strings:["ACHIEVEMENTS AND EXPERIENCES"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
     loop:true
})
var typed=new Typed(".ski",{
    strings:["SKILLS"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
var typed=new Typed(".pro",{
    strings:["PROJECTS AND WORKS COMPLETED"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
var typed=new Typed(".con",{
    strings:["CONTACT"],
    typeSpeed:100,
    backSpeed:100,
    Delay:1000,
    loop:true
})


