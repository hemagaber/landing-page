/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const myNavList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// function to get all sections
const getAllSections = () => {
  return Array.from(document.querySelectorAll("section"));
};
// function to get sections names as array
const getSectionsNames = () => {
  return getAllSections().map((section) => section.getAttribute("data-nav"));
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
//add nav-links to navbar-list
const addNavItems = () => {
  const fragment = document.createDocumentFragment();
  const sectionsNames = getSectionsNames();

  sectionsNames.forEach((name) => {
    const li = document.createElement("li");
    // section dat-nav first letter is capital but id all small letters
    const sectionId = name.replace(" ", "").toLocaleLowerCase();
    li.innerHTML = `<a class ="menu__link" href="#${sectionId}">${name}</a>`;
    fragment.appendChild(li);
  });
  myNavList.appendChild(fragment);
};

// Add class 'active' to section when near top of viewport
//function to toggle active section
const toggleActiveSection = (section) => {
  const top = section.getBoundingClientRect().top;
  // get link for this section
  const link = Array.from(myNavList.querySelectorAll("a")).filter(
    (link) => link.innerHTML === section.getAttribute("data-nav")
  )[0];

  if (top >= -100 && top <= 200) {
    section.classList.add("your-active-class");
    link.classList.add("active__link");
  } else {
    section.classList.remove("your-active-class");
    link.classList.remove("active__link");
  }
};
// function to set active section
const setActiveSection = () => {
  const sections = getAllSections();
  sections.forEach((section) => {
    toggleActiveSection(section);
  });
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.addEventListener("DOMContentLoaded", addNavItems);
// Scroll to section on link click

/* done by add anchor to each link*/

// Set sections as active
document.addEventListener("scroll", setActiveSection);
