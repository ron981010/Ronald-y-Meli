// Set the target date and time for the wedding April 13, 2024 15:00:00 GMT-0400
const weddingDate = new Date('April 13, 2024 15:00:00 GMT-0400').getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time in milliseconds
    const remainingTime = weddingDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the countdown in the HTML
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // If the countdown is over, stop updating it
    if (remainingTime < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "The wedding has already happened!";
    }
}, 1000);

document.addEventListener('DOMContentLoaded', function () {
    // Always play music when the page loads
    playMusic();

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
});

function playMusic() {
    let musicElement = document.getElementById('music');
    if (musicElement) {
        musicElement.play().then(function() {
            // Music started playing successfully
            console.log("Music started playing");
        }).catch(function(error) {
            // Music playback failed, handle the error
            console.error("Error playing music:", error);
        });
    }
}
function stopMusic() {
    let musicElement = document.getElementById('music');
    if (musicElement) {
        musicElement.pause();
    }
    // Save user's preference as false when stopping music
    localStorage.setItem('musicPreference', false);
}

// Add event listener to play button
document.getElementById('play-btn').addEventListener('click', playMusic);

// Add event listener to stop button
document.getElementById('stop-btn').addEventListener('click', stopMusic);
