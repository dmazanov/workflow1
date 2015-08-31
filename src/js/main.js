var myModule = (function () {

	// Инициализируем наш модуль
	var init = function () {
				_setUpListners();
			};

	// Прослушивает события 
	var _setUpListners = function () {
				$('#add-new-item').on('click', _showModal);
				$('#add-new-project').on('submit', _addProject);
				$('#fileupload').on('change', _changefileUpload);
			};

	// Работает с модальным окном
	var _showModal = function (e) {
				e.preventDefault();

				var divPopup = $('#new-progect-popup'),
						form = divPopup.find('.form');

				divPopup.bPopup({
					speed: 650,
	        transition: 'slideDown',
	        onClose: function () {
	        	form.find('.server-mes').text('').hide();
	        	form.trigger('reset');
	        }
				});
			};

// Изменили файл аплоад 
var _changefileUpload = function (){
		var input = $(this),
				name = input[0].files[0].name;
		$('#filename')
			.val(name) // 
			.trigger('hideTooltip')
			.removeClass('has-error'); 
	};

  // Добавляет проект
	var _addProject = function (e) {
				e.preventDefault();

				// объявляем переменные
				var form = $(this),
						url = 'add_project.php',
						defObj = _ajaxForm(form, url);

				if (defObj) {
					defObj.done(function(ans) {

					var successBox = form.find('.success-mes'),
							errorBox = form.find('.error-mes');

					if(ans.status === 'OK'){						
						errorBox.hide();
						successBox.text(ans.text).show();						
					}else{
						successBox.hide();
						errorBox.text(ans.text).show();
					}
					
				});
				}
				 
			};

	var _ajaxForm = function (form, url) {
			
			if (!validation.validateForm(form)) return false;
				
				data = form.serialize();

				var result = $.ajax({
						url: url,
						type: 'POST',
						dataType: 'json',
						data: data,
					}).fail( function(ans) {
		        console.log('Проблемы в PHP');
		        form.find('.error-mes').text('На сервере произошла ошибка').show();
		      });

				return result;
			};

	// Возвращаем объект (публичные методы) 
	return {
			init: init
	};

})();

myModule.init();