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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const eventSelect = document.getElementById("event-type");
    const serviceSelect = document.getElementById("service");

    const eventType = eventSelect.options[eventSelect.selectedIndex].text;
    const service = serviceSelect.options[serviceSelect.selectedIndex].text;

    const message = document.getElementById("message").value;

    const subject = `New ${eventType} Enquiry – ${service}`;

    const body = `
Name: ${name}
Email: ${email}
Event Type: ${eventType}
Service: ${service}

Message:
${message}
    `;

    const mailtoLink = `mailto:sveventsplanningdecor@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.assign(mailtoLink);
  });
});

