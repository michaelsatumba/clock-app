// alert('hello');

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

window.onload = function () {
	showTime();
	updateQuote();
	findMe();
	document.getElementById('myDIV').style.display = 'none';
};
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	if (min < 10) {
		min = '0' + min;
	} else {
		min = min;
	}
	if (hour < 12) {
		// alert('gm');
		document.getElementById('greeting').innerHTML =
			'<i class="bi bi-brightness-alt-high-fill"></i> GOOD MORNING';
	} else if (hour >= 12 && hour < 18) {
		// alert('gn');
		document.getElementById('greeting').innerHTML =
			'<i class="bi bi-brightness-high-fill"></i></i> GOOD AFTERNOON';
		document.body.style.backgroundImage =
			"url('https://www.wellplannedjourney.com/wp-content/uploads/Tunnel-View-Yosemite.jpg')";
		('');
	} else {
		document.getElementById('greeting').innerHTML =
			'<i class="bi bi-moon-fill"></i> GOOD EVENING';
		document.body.style.backgroundImage =
			"url('https://media.istockphoto.com/photos/stargazing-at-yosemite-national-park-picture-id974063498?k=20&m=974063498&s=612x612&w=0&h=YXr69UHZcCugJvHalTkYofbg-xg5pQTOrfIf1t18_b4=')";
	}
	// let zone = time.Intl.DateTimeFormat().resolvedOptions().timeZone;
	// alert(`${hour}:${min}`);
	document.getElementById('number').textContent = `${hour}:${min}`;
	// document.getElementById('timeZone').textContent = zone;

	// console.log(time);

	const timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
	// idk what this does
	const yearFirstDay = Math.floor(timestmp / 86400000);
	// rounds number down
	const today = Math.ceil(new Date().getTime() / 86400000);
	// idk
	const dayOfYear = today - yearFirstDay;
	// idk

	let dayOfWeek = time.getDay();

	document.querySelector('.currentDayYear').textContent = `${dayOfYear}`;
	document.querySelector('.currentDayWeek').textContent = `${dayOfWeek}`;

	var numberOfDays = Math.floor((time - timestmp) / (24 * 60 * 60 * 1000));
	// idk
	var weekNumber = Math.ceil((time.getDay() + 1 + numberOfDays) / 7);
	// idk
	document.querySelector('.currentWeekNumber').textContent = `${weekNumber}`;
	// break it down
}

function findMe() {
	const status = document.querySelector('.place');

	function success(position) {
		// console.log(position);
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		// status.textContent = `I'm going to find you`;
		// alert(latitude + ' ' + longitude);
		const geoURL =
			'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en';

		fetch(geoURL)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				// console.log(data.city);
				status.textContent = `In ${data.city}, ${data.countryName}`;
				document.querySelector('.currentPlace').textContent = `${data.city}`;
			});

		// const response = await fetch(geoURL);
		// const data = await response.json();
		// if (response.ok) {
		// 	// Update DOM elements
		// 	status.textContent = `I'm going to find you`;
		// 	console.log(data);
		// } else {
		// 	status.textContent = 'An error occured';
		// 	console.log(data);
		// }
	}

	function error(showError) {
		status.textContent = `I'm going to find you`;
	}

	navigator.geolocation.getCurrentPosition(success, error);
}

function more() {
	var x = document.getElementById('myDIV');
	if (x.style.display === 'none') {
		x.style.display = 'block';
		document.getElementById('more').innerHTML =
			'Less <i class="bi bi-arrow-down-circle-fill"></i>';
	} else {
		x.style.display = 'none';
		document.getElementById('more').innerHTML =
			'More <i class="bi bi-arrow-down-circle-fill"></i>';
	}
}
