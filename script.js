// alert('hello');

// on refresh calls functions
window.onload = function () {
	showTime();
	updateQuote();
	findMe();
	document.getElementById('myDIV').style.display = 'none';
};

// calls api for quotes
async function updateQuote() {
	// Fetch a random quote from the Quotable API
	const response = await fetch('https://api.quotable.io/random');
	const data = await response.json();
	if (response.ok) {
		// Update DOM elements
		document.getElementById('quote').textContent = `"${data.content}"`;
		document.getElementById('person').textContent = data.author;
		// console.log(data);
	} else {
		document.getElementById('quote').textContent = 'An error occured';
		// console.log(data);
	}
}

// time logic
function showTime() {
	let time = new Date(); // gets current date
	let hour = time.getHours(); // gets current hour
	let min = time.getMinutes(); // gets current minute
	if (min < 10) {
		min = '0' + min;
		// if minute is less than 10 add a '0'
	} else {
		min = min;
	}
	if (hour < 12) {
		// alert('gm');
		document.getElementById('greeting').innerHTML =
			'<i class="bi bi-brightness-alt-high-fill"></i> GOOD MORNING';
		document.getElementById('myDIV').style.backgroundImage =
			'linear-gradient(gray, white)';
		document
			.getElementById('myDIV')
			.querySelectorAll('p')
			.forEach((element) => (element.style.color = 'black'));
		// understand for each loop
		// gets #myDIV then gets all p elements in the div
		// calls function for each p element
	} else if (hour >= 12 && hour < 18) {
		// alert('gn');
		document.getElementById('greeting').innerHTML =
			'<i class="bi bi-brightness-high-fill"></i></i> GOOD AFTERNOON';
		document.body.style.backgroundImage =
			"url('https://www.wellplannedjourney.com/wp-content/uploads/Tunnel-View-Yosemite.jpg')";
		document.getElementById('myDIV').style.backgroundImage =
			'linear-gradient(#ff4e00 0%, #ec9f05 74%)';
		// change the background color so white text looks good
	} else {
		document.getElementById('greeting').innerHTML =
			'<i class="bi bi-moon-fill"></i> GOOD EVENING';
		document.body.style.backgroundImage =
			"url('https://media.istockphoto.com/photos/stargazing-at-yosemite-national-park-picture-id974063498?k=20&m=974063498&s=612x612&w=0&h=YXr69UHZcCugJvHalTkYofbg-xg5pQTOrfIf1t18_b4=')";
		document.getElementById('myDIV').style.backgroundImage = 'black';
	}

	// alert(`${hour}:${min}`);
	document.getElementById('number').textContent = `${hour}:${min}`; // displays current hour and time

	const timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
	// this equals to one full year, numbers represent first month and first day
	const yearFirstDay = Math.floor(timestmp / 86400000);
	// rounds number down, number represents milliseconds
	const today = Math.ceil(new Date().getTime() / 86400000);
	// math.ceil rounds number up
	const dayOfYear = today - yearFirstDay;
	// today - first day of the year

	let dayOfWeek = time.getDay();
	// gets the day of the week

	document.querySelector('.currentDayYear').textContent = `${dayOfYear}`; // displays current day of the year
	document.querySelector('.currentDayWeek').textContent = `${dayOfWeek}`; // displays current day of the week

	let numberOfDays = Math.floor((time - timestmp) / (24 * 60 * 60 * 1000));
	// current date - one full year
	let weekNumber = Math.ceil((time.getDay() + 1 + numberOfDays) / 7);
	// math.ceil rounds up
	document.querySelector('.currentWeekNumber').textContent = `${weekNumber}`; // displays current week number
}

const searchApiKey = 'a53e7014f41f2cd34a0e24f9dc2c5737';

// location logic
function findMe() {
	const status = document.querySelector('.place');

	function success(position) {
		// console.log(position);
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		// alert(latitude + ' ' + longitude);
		const geoURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${searchApiKey}`;

		fetch(geoURL)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				// console.log(data.city);
				status.textContent = `In ${data.name}, ${data.sys.country}`;
				document.querySelector('.currentPlace').textContent = `${data.name}`;
			});
	}

	function error(showError) {
		status.textContent = `I'm going to find you`;
		document.querySelector(
			'.currentPlace'
		).textContent = `I'm still going to find you`;
	}

	navigator.geolocation.getCurrentPosition(success, error);
}

// button logic
function more() {
	var x = document.getElementById('myDIV');
	if (x.style.display === 'none') {
		x.style.display = 'block';
		document.getElementById('more').innerHTML =
			'Less <i class="bi bi-arrow-up-circle-fill"></i>';
	} else {
		x.style.display = 'none';
		document.getElementById('more').innerHTML =
			'More <i class="bi bi-arrow-down-circle-fill"></i>';
	}
}
