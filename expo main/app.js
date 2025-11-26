const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar() {
	sidebar.classList.toggle('close')
	toggleButton.classList.toggle('rotate')

	closeAllSubMenus()
}

function toggleSubMenu(button) {

	if (!button.nextElementSibling.classList.contains('show')) {
		closeAllSubMenus()
	}

	button.nextElementSibling.classList.toggle('show')
	button.classList.toggle('rotate')

	if (sidebar.classList.contains('close')) {
		sidebar.classList.toggle('close')
		toggleButton.classList.toggle('rotate')
	}
}

function closeAllSubMenus() {
	Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
		ul.classList.remove('show')
		ul.previousElementSibling.classList.remove('rotate')
	})
}



function updateCountdown() {
	// Set the target date (7th March 2025)
	const targetDate = new Date('March 7, 2025 00:00:00').getTime();

	// Update the countdown every second
	const interval = setInterval(() => {
		// Get the current date and time
		const now = new Date().getTime();

		// Calculate the time difference in milliseconds
		const timeDifference = targetDate - now;

		// If the countdown is over, stop the timer
		if (timeDifference < 0) {
			clearInterval(interval);
			document.getElementById('countdown').textContent = 'Countdown Over!';
			return;
		}

		// Convert time difference to days
		const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

		// Display the countdown
		document.getElementById('countdown').textContent = `${days} Days To Go!`;
	}, 1000); // Update every second
}

// Start the countdown
updateCountdown();


//initialise  event swipper
var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 2,
		slideShadows: true,
	},
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});

function merchnav() {
	var y = document.getElementById("poster");
	var text = document.getElementById("merch_design");

	y.style.transition = "opacity 0.2s ease";
	text.style.transition = "opacity 0.2s ease";
	y.style.opacity = 0;
	text.style.opacity = 0;

	setTimeout(() => {
		if (y.src.includes("merch_D1_Pos.jpg")) {
			y.src = "images/merch_D2_Pos.jpg";
			text.textContent = "Design 2";
		} else {
			y.src = "images/merch_D1_Pos.jpg";
			text.textContent = "Design 1";
		}

		setTimeout(() => {
			y.style.opacity = 1;
			text.style.opacity = 1;
		}, 50);

	}, 200);
}

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

