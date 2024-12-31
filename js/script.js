//toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const welcomeText = document.getElementById('welcome-text');
  const originalText = welcomeText.innerHTML;
  let typingEffect;

  function startTyping() {
    // Hentikan animasi yang sedang berjalan (jika ada)
    if (typingEffect) {
      typingEffect.destroy();
    }
    
    // Reset teks ke kondisi awal
    welcomeText.innerHTML = '';
    
    // Mulai animasi baru
    typingEffect = new Typed("#welcome-text", {
      strings: [originalText],
      typeSpeed: 80,
      backSpeed: 0,
      loop: false,
      cursorChar: '',
      onComplete: function(self) {
        self.cursor.remove();
      }
    });
  }

  // Tambahkan event listener ke dokumen
  document.addEventListener('click', function(event) {
    // Periksa apakah yang diklik adalah elemen dengan id 'home' atau memiliki kelas 'hero'
    if (event.target.id === 'home' || event.target.closest('.home')) {
      startTyping();
    }
  });

  // Mulai animasi saat halaman dimuat
  startTyping();
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollElements = document.querySelectorAll(".scroll-element");

  const elementInView = (el, divisor = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / divisor
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("visible");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
  
  handleScrollAnimation(); // Inisialisasi agar elemen langsung tampil jika berada dalam viewport saat halaman dimuat
});