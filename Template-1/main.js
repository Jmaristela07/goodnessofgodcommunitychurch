window.addEventListener('load', () => {
  const text = document.querySelector('.w-h-e-r-e-g-o-d-8f352666b283');
  
  // Add a class that triggers the CSS we wrote earlier
  text.style.opacity = "1.5";
  text.style.transform = "translateX(0)";
  text.style.transition = "all 3s ease-out";
});

window.addEventListener('load', () => {
  const text = document.querySelector('.no-one-ca-8f36b27867c5');
  
  // Add a class that triggers the CSS we wrote earlier
  text.style.opacity = "1.5";
  text.style.transform = "translateX(0)";
  text.style.transition = "all 3s ease-out";
});

// for the Fade in
/*window.addEventListener('load', () => {
  const text = document.querySelector('.at-goodnes-96fa8027b91f');
  
  text.style.opacity = "1"; // Ginagawang visible
  text.style.transition = "opacity 3s ease-in"; // Heto ang magpapatakbo ng animation
});*/

//About_Us.CSS
window.addEventListener('load', () => {
  const text = document.querySelector('.w-h-e-r-e-g-o-d-99be019bc458');
  
  // Add a class that triggers the CSS we wrote earlier
  text.style.opacity = "1.5";
  text.style.transform = "translateX(0)";
  text.style.transition = "all 3s ease-out";
});

//Give.CSS
window.addEventListener('load', () => {
  const text = document.querySelector('.w-h-e-r-e-g-o-d-9d7eef4a63fd');
  
  // Add a class that triggers the CSS we wrote earlier
  text.style.opacity = "1.5";
  text.style.transform = "translateX(0)";
  text.style.transition = "all 3s ease-out";
});

//Gallery.CSS
window.addEventListener('load', () => {
  const text = document.querySelector('.w-h-e-r-e-g-o-d-99c5d0399625');
  
  // Add a class that triggers the CSS we wrote earlier
  text.style.opacity = "1.5";
  text.style.transform = "translateX(0)";
  text.style.transition = "all 3s ease-out";
});

//Contact_Us.CSS
window.addEventListener('load', () => {
  const text = document.querySelector('.w-h-e-r-e-g-o-d-99cc636347a7');
  
  // Add a class that triggers the CSS we wrote earlier
  text.style.opacity = "1.5";
  text.style.transform = "translateX(0)";
  text.style.transition = "all 3s ease-out";
});

// Scroll Reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Kapag nakita na sa screen, idagdag ang class na 'active'
      entry.target.classList.add("active");
    } else {
      // Optional: Alisin ang comment sa baba kung gusto mong 
      // mawala ulit ang text pag nag-scroll pataas (para balik-balikan)
     // entry.target.classList.remove("active");
    }
  });
}, { threshold: 0.1 }); // 10% ng paragraph dapat ay visible bago gumana

// Hanapin lahat ng elements na may class na 'reveal'
const elements = document.querySelectorAll('.oh-taste-988132ae6210');
elements.forEach((el) => observer.observe(el));

