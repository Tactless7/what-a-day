(function(){
	'use strict';
	var app = {
		dayOfWeek: null,
		data: {},
		moment: null,
		init: function(){
			this.listeners();
		},
		listeners: function(){
			$('#check').on('click', this.runCheck.bind(this));
			$('#dayOfWeek').on('click', '#restart', this.undisplay.bind(this));
		},
		runCheck: function(){
			this.undisplay();
			if(this.checkDate() && this.checkYear()){
					this.getData();
					// console.log(this.moment.isValid);
					this.getDay();
					this.displayDay();	
			}	
		},
		getData: function(){
			this.data = {
				year: parseInt($('#year').val()),
				month: parseInt($('#month').val()),
				day: parseInt($('#date').val())
			}
			this.moment = moment(this.data).locale('fr');
		},
		getDay: function(){
			this.dayOfWeek = this.moment.format('dddd');
		},
		displayDay: function(){
			$('#dayOfWeek').addClass('overlay');
			if(this.dayOfWeek === undefined){
				$('#dayOfWeek').html('<h1>Jour Inexistant</h1><button id="restart" class="restart">Recommencer</button>');
			}else {	
				$('#dayOfWeek').html('<h1>' + this.dayOfWeek + '</h1><button id="restart" class="restart">Recommencer</button>');
			}
		},
		undisplay: function(){
			$('#message').removeClass('error');
			$('#message').html('');
			$('#year').css('border', '');
			$('#date').css('border', '');

			$('#dayOfWeek').removeClass('overlay');
			$('#dayOfWeek').html('');
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
			$('#date').css('border', 'solid #ff7473 2px');
			$('#message').html('Le jour doit être compris entre 1 et 31 !');	
		},
		errorFieldYear: function(){
			$('#message').addClass('error');
			$('#year').css('border', 'solid #ff7473 2px');
			$('#message').html('L\'année doit être supérieure à 0 !');
		}
	}
	app.init();
})();