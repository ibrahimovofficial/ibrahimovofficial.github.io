
let coffeeName = document.querySelectorAll('#coffee-name');
let out = document.querySelector('#out');


for (let i = 0; i < coffeeName.length; i++) {
	coffeeName[i].onclick = function() {
		let quantity = document.querySelector('#quantity').value;
		let amount = this.getAttribute('data');

		let sum = quantity * amount;
		out.innerHTML = sum.toFixed(2);
}
}

	let resetBtn = document.createElement('button');
			resetBtn.innerHTML = 'Reset';
			resetBtn.classList.add('reset-style');
			resetBtn.setAttribute('type','reset');
	document.querySelector('.reset').appendChild(resetBtn);