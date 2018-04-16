'use strict';
class VowelsCounter {
	constructor(output, textarea, button) {
		this.output = output;
		this.textarea = textarea;
		this.button = button;
	};

	counter(str) {
		switch (str.match(/[aeiou]/gi)) {
			case null: return 0;
			default: return str.match(/[aeiou]/gi).length;
		};
	};

	handler() {
		this.button.addEventListener('click', () => {
			this.output.innerHTML = this.counter(this.textarea.value);
		});
	};
};

const output = document.querySelector('.output'),
	  textarea = document.querySelectorAll('.input')[0],
	  button = document.querySelectorAll('.input')[1],
	  vowelscounter = new VowelsCounter(output, textarea, button);

vowelscounter.handler();