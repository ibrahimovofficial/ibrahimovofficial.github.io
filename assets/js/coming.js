// let out = document.querySelector('#out');
	
// 	function dateSum(dateNow, dateNext) {
// 		return dateNext - dateNow;
// 	};

// let endDate = {
//     "full_year": "2020",
//     "month": "06",
//     "day": "07",
//     "hours": "23",
//     "minutes": "20",
//     "seconds": "00"
// }

// 	let endDateStr = `${endDate.day}T${endDate.hours}:${endDate.minutes}:${endDate.seconds}`;
// 	console.log("endDateStr", endDateStr);



// 	timer = setInterval(function() {
// 		let now = new Date();
// 		let date = new Date(endDateStr);
// 		let msLeft = dateSum(now, date);

// 			if (msLeft <= 0) {
// 				clearInterval(timer);
// 				out.innerHTML = 'Время истекло.';
// 			} else {
// 				let res = new Date(msLeft);
//         let strTimer = `${res.getUTCDate() - 1} ${res.getUTCHours()}:${res.getUTCMinutes()}:${res.getUTCSeconds()}`;
//         out.innerHTML = strTimer;
// 			}
// 	},1000)



// Берём элемент для вывода таймера
let out = document.getElementById("out");
 
// Функция для вычисления разности времени
function diffSubtract(date1, date2) {
    return date2 - date1;
}
 
// Массив данных о времени
let end_date = {
    "full_year": "2020",
    "month": "07",
    "day": "07",
    "hours": "00",
    "minutes": "00",
    "seconds": "00"
}
 
// Строка для вывода времени
let end_date_str = `${end_date.full_year}-${end_date.month}-${end_date.day}T${end_date.hours}:${end_date.minutes}:${end_date.seconds}`;

// Запуск интервала таймера
timer = setInterval(function () {
    // Получение времени сейчас
    let now = new Date();
    // Получение заданного времени
    let date = new Date(end_date_str);
    // Вычисление разницы времени 
    let ms_left = diffSubtract(now, date);
    // Если разница времени меньше или равна нулю 
    if (ms_left <= 0) { // То
        // Выключаем интервал
        clearInterval(timer);
        // Выводим сообщение об окончание
        alert("Время закончилось");
    } else { // Иначе
        // Получаем время зависимую от разницы
        let res = new Date(ms_left);
        // Делаем строку для вывода
        let str_timer = `${res.getUTCDate()} д. <br> ${res.getUTCHours()} ч. ${res.getUTCMinutes()} мин. ${res.getUTCSeconds()} сек.`;
        // Выводим время
        out.innerHTML = str_timer;
    }
}, 1000)



