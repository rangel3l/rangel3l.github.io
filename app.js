const menu = document.getElementById('menu'); 
const menuUl = document.getElementById('menu-ul');
const menuUlLi = document.querySelector('.menuUlLi')
const header = document.getElementById('header');
let toogle;

const darkMode = document.getElementsByClassName('dark-mode');
const container = document.querySelector('.container');
const noturnMode = document.querySelector('#noturn-mode-div');
const menuIdiom = document.getElementById('menu-idiom')
const menuIdiomUl = document.querySelectorAll('#menu-idiom ul li')
const content = document.getElementById('content-general')
const portuguese = document.getElementById('portuguese')
const english = document.getElementById('english')
//noturn mode 
const blackColor = '#3b2a2a'
const primaryColor = '#f7f3f3'
const secundaryColor = '#babdf5'
const textColor = '#b11b1b';
let modeSky =  true

const contentGeneral = document.getElementById('content-general')
function toggleSky(){
    
    if(noturnMode.classList == 'moon')
    { 
        modeSky  = false
        for(let i = 0;i < darkMode.length;i++){
          darkMode[i].style.color = primaryColor
        }
        
        noturnMode.classList.remove('moon')
        noturnMode.classList.add('sun')
       
        menuIdiom.classList.remove('white-color')
        menuIdiom.classList.add('black-color')
        menuIdiomUl.forEach(element => {
          element.style.color = blackColor
        });
        
        header.classList.remove('header-white')
        header.classList.add('header-dark')
        container.classList.remove('white-color')
        container.classList.add('black-color')
       
        
    }
    else
    { 
        modeSky = true
        noturnMode.classList.remove('sun')
        noturnMode.classList.add('moon')
        container.classList.remove('black-color')
        container.classList.add('white-color')
        for(let i = 0;i < darkMode.length;i++){
          darkMode[i].style.color = 'inherit'
        }
        header.classList.remove('header-dark')
        header.classList.add('header-white')    
       
        menuIdiom.classList.remove('black-color')
        menuIdiom.classList.add('white-color')
    }
    

}

function toggleMenu(){

  toggle = true;
  if(toggle){
    
    /* document.getElementsByTagName('ul').style.listStyle = 'none';  */ 
    menu.style.display = 'block';
    menu.style.listStyle = 'none';
    toggle = false;
    container.style.backgroundColor = blackColor
    menu.style.backgroundColor = primaryColor
    
    
    
  }
  menu.onmouseleave = function() {

    menu.style.display = 'none';
    if(modeSky)container.style.backgroundColor = primaryColor
  }    

  }
function closeMenu(){
    if(!toggle){
        
        /* document.getElementsByTagName('ul').style.listStyle = 'none';  */ 
        menu.style.display = 'none';
        menu.style.listStyle = 'none';
        toggle = true;
        console.log(modeSky)
        if(modeSky)container.style.backgroundColor = primaryColor
    
      }  
 }
 const title = document.querySelector('.title')
 var scrollval = 0;
 window.addEventListener('scroll', () => {
   if(scrollval > window.scrollY) {
     // scroll up
        if(scrollval < 50){
            title.innerHTML = ''
            const textTitle = document.createElement('p')
            textTitle.innerText = 'Rangel Gomes'
            title.appendChild(textTitle)
            header.style.position = 'static'
              
        }
     
        } else if(scrollval >=50) {
     // scrooldown
     
        
            title.innerHTML = ''
            const imgR = document.createElement('img')
            imgR.setAttribute('src','img/r.png')
            imgR.id = 'imgR'
            title.appendChild(imgR)
            header.style.position = 'fixed'
            header.style.width = '100%'            
            header.style.height =  'auto'          
            
        
        
          }
        
     

   
   scrollval = window.scrollY;
 });
 function toggleIdiom(){
  
  menuIdiom.style.visibility = 'visible'
  menuIdiom.onmouseleave = function(){
    menuIdiom.style.visibility = 'hidden';
    
  }
 }
 let toggleIdiomMenu = false
 let previousToggleIdiomMenu = toggleIdiomMenu;
 document.getElementById('portuguese').addEventListener('click', function() {
  toggleIdiomMenu = false
  Weglot.switchTo('pt');
}, false);
document.getElementById('english').addEventListener('click', function() {
  Weglot.switchTo('en');
  toggleIdiomMenu = true
}, false);

setInterval(function() {
  if (toggleIdiomMenu !== previousToggleIdiomMenu) {
      console.log('toggleIdiomMenu changed:', toggleIdiomMenu);
      previousToggleIdiomMenu = toggleIdiomMenu;
      if(toggleIdiomMenu){
        portuguese.style.color = 'black'
        english.style.color = 'red'
      }
      else{
        portuguese.style.color = 'red'
        english.style.color = 'black'
      }
  }
}, 1000);

let currentSection = 0;
const sections = ['first-page', 'second-page', 'third-page'];

let isScrolling = false;
let lastScrollTime = Date.now();
const scrollCooldown = 1000; // 1 second cooldown between scrolls

function scrollDown() {
    const now = Date.now();
    if (isScrolling || now - lastScrollTime < scrollCooldown) return;
    
    isScrolling = true;
    lastScrollTime = now;
    
    currentSection = (currentSection + 1) % sections.length;
    document.getElementById(sections[currentSection]).scrollIntoView({ 
        behavior: 'smooth'
    });
    
    setTimeout(() => {
        isScrolling = false;
    }, scrollCooldown);
}

function scrollUp() {
    const now = Date.now();
    if (isScrolling || now - lastScrollTime < scrollCooldown) return;
    
    isScrolling = true;
    lastScrollTime = now;
    
    currentSection = currentSection - 1;
    if (currentSection < 0) currentSection = sections.length - 1;
    
    document.getElementById(sections[currentSection]).scrollIntoView({ 
        behavior: 'smooth'
    });
    
    setTimeout(() => {
        isScrolling = false;
    }, scrollCooldown);
}

window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        scrollDown();
    } else {
        scrollUp();
    }
}, { passive: true });

// Update the arrow click handler too
document.querySelector('.arrow-down').onclick = scrollDown;

document.getElementById('btn-works').addEventListener('click', function() {
    currentSection = 1; // Set to second section
    document.getElementById('second-page').scrollIntoView({ 
        behavior: 'smooth'
    });
});

function sendEmail() {
    const message = document.getElementById('email-message').value;
    const mailtoLink = `mailto:rangel-3l@hotmail.com?body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
}

function sendWhatsApp() {
    const message = document.getElementById('whatsapp-message').value;
    const whatsappLink = `https://wa.me/5567991160861?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}

function toggleDescription(button) {
    const cardContent = button.closest('.work-card-content');
    const preview = cardContent.querySelector('.description-preview');
    const full = cardContent.querySelector('.description-full');
    
    if (preview.style.display !== 'none') {
        preview.style.display = 'none';
        full.style.display = 'inline';
        button.textContent = 'Ver menos';
    } else {
        preview.style.display = 'inline';
        full.style.display = 'none';
        button.textContent = 'Saber mais';
    }
}

/* ...existing code... */

// Remove all GIF modal related code
/* Delete or comment out the createGifModal function and related event listeners */

/* ...existing code... */