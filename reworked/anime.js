function section1() {
  var tl = gsap.timeline();

  tl.from("header .navbar .nav-links li", {
    scale: 0,
    opacity: 0,
    delay: 1,
    duration: 0.7,
    stagger: 0.15,
    ease: "back.out(1.7)",
  });

  tl.from(".hero-content h1", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
  });

  tl.from(
    ".hero-content p",
    {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.4"
  );

  tl.from(
    ".hero-content .cta-button",
    {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
    },
    "-=0.3"
  );
}

section1();
