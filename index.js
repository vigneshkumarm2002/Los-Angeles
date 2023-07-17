$(document).ready(function() {
    $("#owl-slider").owlCarousel({
      autoPlay: 3000,
    
      items: 4,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3],
      responsive: {
        // Breakpoint from 0 up
        0: {
          items: 1.8,
          margin: 10,
        },
        // Breakpoint from 480 up
        500: {
          items: 2,
          margin: 5,
        },
        600: {
            items: 3,
            margin: 5,
          },
        // Breakpoint from 768 up
        768: {
          items: 3,
          margin: 0,
        },
        800: {
            items: 4,
            margin: 0,
          },
        // Breakpoint from 992 up
        1000: {
          items: 4,
        }
      },
    });

    
  });


const mountain1 = document.getElementById('mountain1');
const mountain2 = document.getElementById('mountain2');
const tap1 = document.getElementById('tap1');
const tap2 = document.getElementById('tap2');

mountain1.addEventListener('click', function() {
  mountain1.classList.add('active');
  mountain2.classList.remove('active');
  tap1.classList.add('active');
  tap2.classList.remove('active');
});

mountain2.addEventListener('click', function() {
  mountain1.classList.remove('active');
  mountain2.classList.add('active');
  tap1.classList.remove('active');
  tap2.classList.add('active');
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var nav = document.querySelector('nav');
    var logoText = document.querySelector('.logo-text');
    var navImg = document.querySelector('nav img');
    var navBg = document.querySelector('.nav-bg');

    if (window.scrollY > 0) {
        header.classList.add('nav-scroll');
        logoText.classList.remove('hide');
        navImg.style.display = 'none';
        navBg.style.visibility= "visible"; // Show the .nav-bg element
    } else {
        header.classList.remove('nav-scroll');
        logoText.classList.add('hide');
        navImg.style.display = 'block';
        navBg.style.visibility= "hidden";  // Hide the .nav-bg element
    }
});



const accordContainer = document.querySelectorAll('.accordItem');
const historyTab = document.getElementById('history-tab');
const teamTab = document.getElementById('team-tab');
const historySection = document.getElementById('history');
const teamSection = document.getElementById('team');
const historyIcon = document.querySelector('#history-tab .material-symbols-outlined');
const teamIcon = document.querySelector('#team-tab .material-symbols-outlined');

// Hide accord-container initially
accordContainer.forEach(item => item.style.display = 'none');

// Show history section and hide team section with transition
function showHistorySection() {
  historySection.classList.toggle('show');
  teamSection.classList.remove('show');
  historyIcon.classList.toggle('rotate');
  teamIcon.classList.remove('rotate');
}

// Show team section and hide history section with transition
function showTeamSection() {
  teamSection.classList.toggle('show');
  historySection.classList.remove('show');
  teamIcon.classList.toggle('rotate');
  historyIcon.classList.remove('rotate');
}

// Event listeners for accord-container list items
historyTab.addEventListener('click', showHistorySection);
teamTab.addEventListener('click', showTeamSection);

// Check screen width and show/hide accord-container
function checkScreenWidth() {
  if (window.innerWidth <= 700) {
    accordContainer.forEach(item => item.style.display = 'block');
    historySection.classList.remove('show');
    teamSection.classList.remove('show');
  } else {
    accordContainer.forEach(item => item.style.display = 'none');
    historySection.classList.add('show');
    teamSection.classList.add('show');
  }
}

// Event listener for window resize
window.addEventListener('resize', checkScreenWidth);

// Initial check on page load
checkScreenWidth();
