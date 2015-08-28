<?php

	$name = $_POST['projectName'];
	$data = array(); // Создаем массив

	if ($name === '') {
		$data['status'] = 'error';
		$data['text'] = 'Заполните имя!';
	} else {
		$data['mes'] = 'OK';
		$data['text'] = 'Вы молодец, не забыли заполнить имя';
	}

	header("Content-Type: application/json"); //Заголовок объявляем тип передаваемых данных будет json
	echo jspn_encode($data); // Передадим эти данные
	exit; // Выходим из php

?>