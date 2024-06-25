document.addEventListener('DOMContentLoaded',setVal);

var targetScrollPos;
var scrollPos = 0;
var nowScrollPos = pageYOffset;
var scrollInterval;

function setVal()
{
    console.log("Ioaded!!!!");
    var menu = document.querySelectorAll('#menu ul li');
    var contents = document.querySelectorAll( ' #contents > section' )

   for ( var i =0; i < menu.length; i++ )
    {
        menu[i].addEventListener('click' ,menuClick);
       
        function menuClick()
        {
            clearInterval(scrollInterval);
            var index = this.getAttribute('clickVal');
            targetScrollPos = contents [index].offsetTop;
            
            //console.log(targetScrollPos);

            // window.scroll(0, targetScrollPos );

            scrollInterval = setInterval(moveTo, 50);
        }   
    }
}

window.addEventListener('scroll' , scrollFn);

function scrollFn()
{
    nowScrollPos = pageYOffset;
    scrollPos = nowScrollPos;
}

function moveTo()
{
    scrollPos += (targetScrollPos - nowScrollPos) * 0.5 ;

    window.scroll(0, Math.round(scrollPos));

    if( Math.abs( targetScrollPos - scrollPos ) < 1)
    {
        window.scroll(0,targetScrollPos);
        nowScrollPos = targetScrollPos ;
        clearInterval(scrollInterval);
    }
}
//----------------------------------------------//

const wiperTrack = document.querySelector(".wiper-track");
const wipes = Array.from(wiperTrack.children);
const wipePrevBtn = document.querySelector(".wiper-button__right");
const wipeNextBtn = document.querySelector(".wiper-button__left");
const wipeWidth = wipes[0].getBoundingClientRect().width;

const arrowsBehaviour = (wipePrevBtn, wipeNextBtn, index) => {
  if (index === 0) {
    wipePrevBtn.classList.add("is-hidden");
    wipeNextBtn.classList.remove("is-hidden");
  } else if (index === wipes.length-1) {
    wipePrevBtn.classList.remove("is-hidden");
    wipeNextBtn.classList.add("is-hidden");
  } else {
    wipePrevBtn.classList.remove("is-hidden");
    wipeNextBtn.classList.remove("is-hidden");
  }
};

