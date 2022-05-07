


// var dotenv = require('dotenv')
// dotenv.config();
// var emailjsID = process.env.EMAILJS_USER_ID;

const hamBtn = document.querySelector('.hamburger_btn')
const hamIcon = document.querySelector('.ham_icon')
const mNavlist = document.querySelector('.m_navlist')
const mNavItem = document.querySelectorAll('.m_nav_item')
const mNavLink = document.querySelectorAll('.m_nav_link')
//hamburger btn animation
const mNavToggle = function(){
    mNavlist.classList.toggle('scale0');
    mNavItem.forEach((item)  => {
        item.classList.toggle('opacity0')
    })

    hamIcon.classList.toggle('hamburger-animation-counter')
    hamIcon.classList.toggle('hamburger-animation')
    hamIcon.classList.toggle('fa-bars')
    hamIcon.classList.toggle('fa-times')
}

hamBtn.onclick = mNavToggle;

mNavLink.forEach((link) => {
    link.onclick = mNavToggle;
})
//nav active 
const home = document.querySelector('#home')
const works = document.querySelector('#works')
const about = document.querySelector('#about')
const contact = document.querySelector('#contact')

const homeNav = document.querySelector("[title = 'home']")
const worksNav = document.querySelector("[title = 'works']")
const aboutNav = document.querySelector("[title = 'about']")
const contactNav = document.querySelector("[title = 'contact']")


// contact automation
const form = document.querySelector('#contact_form');
const username = document.querySelector("#contact_username");
const email = document.querySelector('#contact_email');
const msg = document.querySelector('#contact_msg');
const submitBtn = document.querySelector("#contact_submit");

emailjs.init("user_IdoQl0G1hlQcgZMNeIPsL")

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    emailjs.send("service_u472j1k","auto_response",{
        username: username.value,
        message: msg.value,
        email: email.value,
        })
        .then(function() {
            alert('Your message is sent, Thanks for emailing me! an automatic response is sent to your email !')
         },
         function(error) {
            alert('Sorry, Something went wrong. You can always reach me at: dante.mai96@gmail.com', error)
        })
})
    