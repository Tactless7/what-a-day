(function(){
	'use strict';
	var app = {
		init: function(){

		},
		listeners: function(){
			$('#check').on('click', this.runCheck);
		},
		getData: function(){
			var date = $('#date').val();
			var month = $('#month').val();
			var year = $('#year').val();
			return {
				date: date,
				month: month,
				year: year
			}
		},
		runCheck: function(){

		},
		checkDate: function(){

		},
		checkYear: function(){

		},
	}
})();