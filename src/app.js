import Lenis from '@studio-freight/lenis'
import {
    gsap
} from "gsap"
import {
    ScrollTrigger
} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

(function (_) {
    "use strict";
    var e = navigator;
    var t = document;
    var p = /Mobi|Andrdoid|Tablet|iPad|iPhone/.test(e.userAgent) || "MacIntel" === e.platform && 1 < e.maxTouchPoints ? "mobile" : "desktop";
    if (p == 'mobile') {
        console.log('mobile');
        t.body.innerHTML = '';
        t.body.innerHTML = '<h1 class="mobile-detection">This website was made for desktop experience</h1>';
        return;
    }
})();

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


function revealToSpan() {
    document.querySelectorAll(".split")
        .forEach(function (elem) {
            var parent = document.createElement("span");
            var child = document.createElement("span");

            parent.classList.add("parent");
            child.classList.add("child");

            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);

            elem.innerHTML = "";
            elem.appendChild(parent);
        });
}

revealToSpan();

gsap.from(".child span", {
    opacity: 0.15,
    stagger: 1,
    ease: 'none',
    scrollTrigger: {
        trigger: '.section',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: '.content_wrapper'
    }
})