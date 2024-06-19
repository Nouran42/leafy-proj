const primaryHeader = document.querySelector(".primary-header");
const logoImg = document.querySelector(".logoimg");
const scrollWatcher = document.createElement("div");
const buttonOutline=document.querySelector(".btn-outline-success");

scrollWatcher.setAttribute("data-scroll-watcher", "");
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(
    (entries) => {
      primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
      if (!entries[0].isIntersecting) {
        // Change the src attribute of the logo image when scrolling
        logoImg.src = "images/leafy (white logo).png"; // Update with your scrolling logo image path

        buttonOutline.classList.add('btncolorr');
      } else {
        // Change back to the original src attribute when not scrolling
        logoImg.src = "images/leafy (3).png"; 
        buttonOutline.classList.remove('btncolorr');
      }
    },
    { rootMargin: "50px 0px 0px 0px" }
  );
  
navObserver.observe(scrollWatcher);
