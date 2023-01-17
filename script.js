const btn = document.getElementById('generate-btn');

function showSLP(arr) {
	const div = document.querySelectorAll('.number')
	div[0].innerHTML = `
	${arr[0]}
	`
	div[1].innerHTML = `
	${arr[1]}
	`
	div[2].innerHTML = `
	${arr[2]}
	`
}

function generateSLP() { 
	let spl = [];
	let s = Math.floor(Math.random() * (7 - 1) + 1);
	spl.push(s);
	let l = Math.floor(Math.random() * (13 - 1) + 1);
	spl.push(l);
	let p = Math.floor(Math.random() * (5 - 1) + 1);
	spl.push(p)

	return spl;
}

btn.addEventListener('click', () => {
	let arr = generateSLP();
	showSLP(arr)
})