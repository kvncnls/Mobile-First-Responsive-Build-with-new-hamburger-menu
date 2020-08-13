const nav = document.querySelector(".site-nav");
const navList = document.querySelector(".nav-list");
const menuIcon = document.querySelector(".menu-icon");
const body = document.querySelector("body");

menuIcon.addEventListener("click", () => {
  /* With the console log, we can read if the .menu-icon div
  has our .open-position class or not. Pretty cool! */
  console.log(menuIcon);

  /* If our ".menu-icon" div does NOT contain ".open-position"...*/
  if (!menuIcon.classList.contains("open-position")) {
    /* Add ".open-position" class to the div. */
    menuIcon.classList.add("open-position");
    // Add class to nav
    nav.classList.add("overlay-site-nav");
    // Add class to nav list
    navList.classList.add("overlay-nav-list");
    // Change body's background color
    body.style.backgroundColor = "var(--primary)";
    // Prevent scrolling
    body.style.overflow = "hidden";
    disableScroll();
  } else {
    /* Else, remove it. */
    menuIcon.classList.remove("open-position");
    // Remove class from nav
    nav.classList.remove("overlay-site-nav");
    // Remove class from nav list
    navList.classList.remove("overlay-nav-list");
    // Change body's background color
    document.querySelector("body").style.backgroundColor = "var(--secondary)";
    // Allow scrolling
    body.style.overflow = "auto";
    enableScroll();
  }
});

// Here's a cool little trick I added.
// I had an issue where if I widen the viewport width while I had the overlay open,
// the menuIcon would disappear and I wouldn't be able to close the overlay.
// Solution: close the overlay at 960px (this is where the menuIcon disappears).
// Try it! Start at mobile size, open the overlay, then use a desktop size.
// The overlay automatically closes!

const mediaQuery = window.matchMedia("(min-width: 960px)");

mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    // Basically the same closes the overlay when the min-width is 960px.
    menuIcon.classList.remove("open-position");
    // Remove class from nav
    nav.classList.remove("overlay-site-nav");
    // Remove class from nav list
    navList.classList.remove("overlay-nav-list");
    // Change body's background color
    document.querySelector("body").style.backgroundColor = "var(--secondary)";
    // Allow scrolling
    body.style.overflow = "auto";
    enableScroll();
  } else {
    console.log("This screen is less than 960px.");
  }
});

// I'll be honest, I found the code below online.
// I did look up everything to understand how it works prior to implementing it though!! :D

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

// When one of the above keys is passed through this function,
// prevent its default action.
function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// Disable scroll
function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// Enable scroll
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}
