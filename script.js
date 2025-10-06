// Efek animasi lembut saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");
  sections.forEach((sec) => {
    sec.style.opacity = 0;
    setTimeout(() => {
      sec.style.transition = "opacity 1s ease-out";
      sec.style.opacity = 1;
    }, 200);
  });
});
