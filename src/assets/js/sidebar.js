document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");
    const overlay = document.getElementById("overlay");
  
    function openSidebar() {
      sidebar.classList.remove("-translate-x-full");
      overlay.classList.remove("opacity-0", "pointer-events-none");
      overlay.classList.add("opacity-100");
    }
  
    function closeSidebar() {
      sidebar.classList.add("-translate-x-full");
      overlay.classList.add("opacity-0", "pointer-events-none");
      overlay.classList.remove("opacity-100");
    }
  
    hamburgerBtn.addEventListener("click", openSidebar);
    closeBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);
  });