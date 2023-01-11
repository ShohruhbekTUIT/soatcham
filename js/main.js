let h = document.querySelector('.h');
let m = document.querySelector('.m');
let s = document.querySelector('.s');

let deg = 6;

setInterval(() => {
	let time = new Date();
	let hour = time.getHours();
	let minut = time.getMinutes();
	let secund = time.getSeconds();

	console.log(hour, minut, secund);

	h.style.transform = `rotateZ(${deg * (hour + minut / 60) + 90 + 'deg'})`;
	m.style.transform = `rotateZ(${deg * (minut + secund / 60) - 90 + 'deg'})`;
	s.style.transform = `rotateZ(${deg * secund - 90 + 'deg'})`;
}, 1000);
