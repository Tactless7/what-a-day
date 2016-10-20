(function(){
	'use strict';
	var app = {
		weekDays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
		data: {},
		moment: null,
		init: function(){
			this.listeners();
		},
		listeners: function(){
			$('#check').on('click', this.runCheck.bind(this));
		},
		getData: function(){
			var date = parseInt($('#date').val());
			var month = parseInt($('#month').val());
			var year = parseInt($('#year').val());
			this.data = {
				year: year,
				month: month,
				day: date
			}
		},
		getDay: function(){
			var dayOfWeek = (this.moment).day();
			console.log(this.weekDays[dayOfWeek]);
		},
		runCheck: function(){
			this.checkDate();
			this.checkYear();
			if(this.checkDate() && this.checkYear()){
				this.getData();
				this.transformMoment();
				this.getDay();
			}
		},
		transformMoment: function(){
			this.moment = moment(this.data);
		},
		checkDate: function(){
			if($('#date').val() > 0 && $('#date').val() <= 31){
				return true;
			}else {
				this.errorFieldDate();
				return false;
			}
		},
		checkYear: function(){
			if($('#year').val() > 0){
				return true;
			}else{
				this.errorFieldYear();
				return false;
			}
		},
		errorFieldDate: function(){
			$('#message').addClass('error');
			$('#date').css('border', 'solid red 2px');
			$('#message').html('Le jour doit être compris entre 1 et 31 !');	
		},
		errorFieldYear: function(){
			$('#message').addClass('error');
			$('#year').css('border', 'solid red 2px');
			$('#message').html('L\'année doit être supérieure à 0 !');
		}
	}
	app.init();
})();