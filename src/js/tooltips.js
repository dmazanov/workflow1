	var _createQtip = function (el, pos) {
		if (position === 'right') {
			position = {
				my: 'left center',
				at: 'right center'
			};
		} else {
			position = {
				my: 'right center',
				at: 'left center'
			};
		}

		el.qtip ({
					content: {
								text: function () {
									return $(this).attr('qtip-content');
								}
					},
					show: {
								event: 'show'
					},
					hide: {
								event: 'keydown hideTooltip'
					},
					position: position,
					style: {
						classes: 'qtip-rounded'
					}
		}).trigger('show');
	};

	var showQtip = function (id) {
		var el = $('#' + id),
				pos = el.attr('qtip-position');
		_createQtip(el, pos);
	};
