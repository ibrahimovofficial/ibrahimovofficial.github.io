



let data = 0
let roll = 0
let squar = document.querySelector('.squar')
let enter = document.querySelector('button')


function bigRoll() {
	data += 4
	// squar.style.borderRadius = data + '%'
	squar.style.left = data + 'px'
	if (data > 650) {
		return true
	}
	setTimeout(bigRoll, 20)

}
enter.onclick = bigRoll;