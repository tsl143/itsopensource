let x = 0;
let delay = 2000;
document.getElementById("clickme1")
	.addEventListener("click", ({ target }) => {
		target.setAttribute('disabled', true);
		let counter = 0;
		let time = Date.now();
    while (Date.now() - time <= delay) {
      counter += 1
    }
		target.nextElementSibling.textContent=counter;
		target.removeAttribute('disabled');
	});

document.getElementById("clickme2")
	.addEventListener("click", ({ target }) => {
		target.nextElementSibling.textContent = x++;
	});


document.getElementById("clickmew1")
	.addEventListener("click", ({ target }) => {
		target.setAttribute('disabled', true);
		if (typeof(Worker) !== "undefined") {  
			let worker = new Worker("./worker.js");
			worker.postMessage({ delay });
			worker.onmessage = e => {
				worker.terminate();
				target.nextElementSibling.textContent=e.data;
				target.removeAttribute('disabled');
			}
		} else {
			target.nextElementSibling.textContent="no worker";
		}
		
	});

document.getElementById("clickmew2")
	.addEventListener("click", ({ target }) => {
		target.nextElementSibling.textContent = x++;
	});
document.getElementById("delay").addEventListener('blur', ({target}) => {
	if (target.value > 2000) {
		delay = target.value;
		console.log(target.value)
	}
})