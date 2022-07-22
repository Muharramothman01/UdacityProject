/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const Sections = document.querySelectorAll('section'); // access sections
const navbar = document.querySelector('#navbar__list'); // access navbar Lists
let counterOfnav = 1;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const createNavElemnets = (i)=>{             // function for create menu for list
    const li = document.createElement('li');
    li.className = `navSection`;
    li.style.cssText = `
    width:100px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:black;
    font-weight:bold;
    `;
    li.textContent = `Section${i}`;
    navbar.appendChild(li);
}


// Add class 'active' to section when near top of viewport


const activeFunction = (e)=>{ // function to scroll into view of the section for each element of the menu

    let section = document.querySelector(`#${e.target.textContent}`);
   
    if(!e.target.classList.contains('active')&&e.target.classList.contains('navSection'))
    {
        section.scrollIntoView({behavior:'smooth',block:'end',inline:'nearest'});
    }
}


// Scroll to anchor ID using scrollTO event

const scrollToActive = ()=>{  // function to active section while scrolling

    for(const sect of Sections){
        sect.classList.remove('your-active-class');
    }
    

    Sections.forEach((section)=>{
        const sectionTop = section.offsetTop;
        if(window.pageYOffset <= sectionTop){
            section.classList.add('your-active-class');
        }
    });
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

while(counterOfnav <= Sections.length){ // calling the function to create the elements of menu in navbar__list
    createNavElemnets(counterOfnav);
    counterOfnav++;
}

// Scroll to section on link click

navbar.addEventListener('click',activeFunction);

// Set sections as active

window.addEventListener('scroll',scrollToActive);
