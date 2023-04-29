// constant elements: your main scrolling element; html element
const scrollEl = document.documentElement
const root = document.documentElement

let scrollPos

// update css property on scroll
function animation() {
  // check the scroll position has changed
  if (scrollPos !== scrollEl.scrollTop) {
    // reset the seen scroll position
    scrollPos = scrollEl.scrollTop
    // update css property --scrollPos with scroll position in pixels
    root.style.setProperty('--scrollPos', scrollPos + 'px')
  }

  // call animation again on next animation frame
  window.requestAnimationFrame(animation)
}

// start animation on next animation frame
window.requestAnimationFrame(animation)
