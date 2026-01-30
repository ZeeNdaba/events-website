document.addEventListener("scroll", () => {
  const aboutSection = document.querySelector(".about");
  const aboutImg = document.querySelector(".about-img");

  if (aboutSection && aboutImg) {
    const rect = aboutSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // How much of the section is visible (0 = not visible, 1 = fully visible)
    let progress = 1 - rect.top / windowHeight;

    // Clamp between 0 and 1
    progress = Math.min(Math.max(progress, 0), 1);

    // Slide image in proportion to scroll
    const offset = 120 - progress * 120; // starts at 120px, goes to 0
    aboutImg.style.transform = `translateX(${offset}px)`;

    // Fade in/out with scroll
    aboutImg.style.opacity = progress;
  }
});
