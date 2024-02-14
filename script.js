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
