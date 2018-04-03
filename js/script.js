'use strict';
window.addEventListener('DOMContentLoaded', function() {

	var app = {

		// All inputs
		output: document.getElementsByClassName('output')[0],
		textarea: document.getElementsByClassName('input')[0],
		submit: document.getElementsByClassName('input')[1],

		// Counter function
		vowelsCounter: function(str) {
			switch (str.match(/[aeiou]/gi)) {
				case null: return 0;
				default: return str.match(/[aeiou]/gi).length
			};
		},

		submitHandler: function() {
			this.submit.addEventListener('click', function() {
				app.output.innerHTML = app.vowelsCounter(app.textarea.value);
			});
		},

		keypressHandler: function() {
			document.addEventListener('keyup', function() {
				if (event.keyCode == 13) {
					app.output.innerHTML = app.vowelsCounter(app.textarea.value);
				}
			});
		}
	};

	app.submitHandler();
	app.keypressHandler();
});