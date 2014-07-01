(function($){

	$(function(){

		var SmartPhone = function(settings){
			// var default_settings = {

			// 	name: 'kris',
			// 	number: 1


			// }
			// $().extend(default_settings,settings);

			// this.settings = default_settings;
			//OR
			this.settings = $().extend({
				name: 'unknown',
				number: 2,
				miss: 'gone'
			},settings);

			this.getName = function(){
				return this.settings.name;

			};

		};
		

		var s1 = new SmartPhone({

			name: 'nexus-5',
			memory: '32GB',
			color: 'Black',
			system: 'andriod'

		});
		console.log(s1.settings);
		console.log(s1.getName());

	})

})(jQuery);