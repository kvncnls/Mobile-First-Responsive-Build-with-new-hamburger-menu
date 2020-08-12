const nav = document.querySelector(".site-nav");

const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  /* With the console log, we can read if the .menu-icon div
  has our .open-position class or not. Pretty cool! */
  console.log(menuIcon);

  /* If our ".menu-icon" div does NOT contain ".open-position"...*/
  if (!menuIcon.classList.contains("open-position")) {
    /* Add ".open-position" class to the div. */
    menuIcon.classList.add("open-position");
  } else {
    /* Else, remove it. */
    menuIcon.classList.remove("open-position");
  }
});

/* SCROLLING FEATURE */

// declare overlay menu

// toggle overlay menu on menu-icon click by changing classes.

//

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// call this to Disable
function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}
