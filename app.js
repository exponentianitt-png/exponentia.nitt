const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar() {
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
}

//------------------------------------
// timer
//----------------------------------//
function updateCountdown() {
    // Set the target date (February 27, 2026)
    const targetDate = new Date('March 02, 2026 09:00:00').getTime();

    // Update the countdown every second
    const interval = setInterval(() => {
        // Get current date and time
        const now = new Date().getTime();

        // Calculate time difference
        const timeDifference = targetDate - now;

        // If countdown is over
        if (timeDifference < 0) {
            clearInterval(interval);
            const timerContainer = document.querySelector('.timer-card');
            if (timerContainer) {
                timerContainer.innerHTML = '<h2 style="color:white;">Event Started!</h2>';
            }
            return;
        }

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Update the HTML elements
        // .padStart(2, '0') ensures "05" instead of "5"
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
    }, 1000);
}

// Start the countdown
updateCountdown();

function toggleform() {
    var form = document.getElementById("contact-form");
    form.style.transition = "opacity 0.3s ease";

    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
        setTimeout(() => {
            form.style.opacity = 1;
        }, 10);
    } else {
        form.style.opacity = 0;
        setTimeout(() => {
            form.style.display = "none";
        }, 300);
    }
}



