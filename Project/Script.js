const header = document.querySelector("header")
window.addEventListener("scroll",function(){
    header.classList.toggle ("sticky", window.scrolly>100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = ()=> {
};
menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    console.log('llll')

})

window.onscroll = ()=> {
menu.classList.remove('bx-x');
navlist.classList.remove('open');  
};

const themechanger = document.querySelector('.moon')
let isDark = true;

themechanger.addEventListener('click',()=>{
    if(isDark){
        isDark = false
        document.documentElement.style.setProperty('--bg-color', 'white');
        document.documentElement.style.setProperty('--second-bg-color','#ccc');

        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--main-color', 'red');
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--text-color', 'black');
    }
    else{
        isDark = true
        document.documentElement.style.setProperty('--bg-color', '#2a2a2a');
        document.documentElement.style.setProperty('--second-bg-color', '#202020');
        document.documentElement.style.setProperty('--text-color', 'white');
    }
    console.log(isDark)
})




let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(n) {
    slideIndex = (n + slides.length) % slides.length; // Loop back to the beginning if at the end
    slides.forEach(slide => {
        slide.style.display = 'none'; // Hide all slides
    });
    slides[slideIndex].style.display = 'block'; // Show the current slide
}

function moveSlide(n) {
    showSlide(slideIndex + n);
}

// Automatically transition to the next slide every 4 seconds
const automaticSlideInterval = setInterval(() => moveSlide(1), 4000);

// Show the first slide when the page loads
showSlide(slideIndex);

// Function to stop automatic sliding when manual control is used
function stopAutomaticSlide() {
    clearInterval(automaticSlideInterval);
}


function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// function edit() {
//     // Add your edit functionality here
//     alert("Edit button clicked");
//     closePopup();
// }

// function deleteItem() {
//     // Add your delete functionality here
//     alert("Delete button clicked");
//     closePopup();
// }
