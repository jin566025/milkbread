$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('hover', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
	var accordion = new Accordion($('#accordion1'), false);
	var accordion = new Accordion($('#accordion2'), false);
	var accordion = new Accordion($('#accordion3'), false);
	var accordion = new Accordion($('#accordion4'), false);
	var accordion = new Accordion($('#accordion5'), false);
	var accordion = new Accordion($('#accordion6'), false);
});