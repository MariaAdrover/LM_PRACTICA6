var data = 1;

/* $(function(){...}); --> window.onload = function() {...}*/
$(document).ready(function() {	
	
	/*Activar tooltips*/
	$('[data-toggle="tooltip"]').tooltip();

	/*Desactivar boton submit*/
	$('form').submit(function() {
		return false;
	});
	
	/*if (window.matchMedia('(max-height: 666px)').matches) {
		$('#login').attr('class', 'dropup');
		$('#login>ul').css('top', '-239px');
		$('#login>ul').css('position', 'absolute');
	}*/
	
	if (window.matchMedia('(max-height: 666px)').matches) {		
		$('nav').attr('data-spy', '');
		$('#botonVolver').css('display','block');
	}
	
	if ($(window).width()< 768) {
		if ($(window).height()<667) {
		$('nav').attr('data-spy', '');
		$('#botonVolver').css('display','block');
		}
	}
	
	/*if ($(window).height()>=667) {
		$('nav').attr('data-spy', 'affix');
		$('#botonVolver').css('display','none');
	}*/
	
	/*Pulsar boton noticias*/
	$('#boton1').click(function() {
		if (data < 4) {
			$.getJSON( 'https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.2/data/data' + data + '.json', function(jsonObject) {
			afegirBloc(jsonObject);
			});
			data++;
		} else {
			$('#boton1').text('NO HAY MÁS NOTICIAS');
		}
	});
	
	$('#botonVolver').click(function(){
		if ($(window).width()>767) {
			$('#divMenu').focus();
		} else {			
			$('#botonMenu').focus();
		}
	});

	
	/*Scroll, al llegar al final de la pagina*/
	/* ----------- PONER SOLO EN LA PAGINA PRINCIPAL ------------------------*/
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() +10 >= $(document).height()) { /*-------REVISAR FORMULA-----*/
			if (data < 4) {
				$.getJSON( 'https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.2/data/data' + data + '.json', function(jsonObject) {
				afegirBloc(jsonObject);
				});
				data++;
			} else {
				$('#boton1').text('NO HAY MÁS NOTICIAS');
			}			
		}
	});	
	
	/*Evento al redimensionar la ventana*/
	$(window).resize(function(){
		if ($(window).width()>767 && $(window).width()< 950){ /*------Afegir ...if (window.matchMedia('(min-width: 768px)').matches) && window.matchMedia('(max-width: 949px)').matches) {}*/
			$('#logo').css('max-height','100px');
			$('.jumbotron').css('padding-top','20px');
			$('.jumbotron').css('padding-bottom','20px');
		} else if ($(window).width()>= 950 && $(window).width() < 1120){
			$('#logo').css('max-height','125px');
			$('.jumbotron').css('padding-top','30px');
			$('.jumbotron').css('padding-bottom','30px');
		} else if ($(window).width()>= 1120){
			$('#logo').css('max-height','150px');
			$('.jumbotron').css('padding-top','40px');
			$('.jumbotron').css('padding-bottom','40px');
		}	

	});	
});

/* --------------------------------- Funciones ---------------------------------- */

function afegirBloc(jsonObject) {
	$('#noticias').append('<div class="row">'); 
	$.each(jsonObject, function(i, item) {
		$('.row:last').append(
			'<div class="col-sm-6">'
				+ '<div class="thumbnail shortNew">'
					+ '<a href="#">'
						+ '<h1 class="text-center">' + item.titulo + '</h1>'
						+ '<h6 class="text-right">' + item.fecha + '</h6>'
						+ '<p class="text-justify">' + item.texto + '</p>'
						+ '<img src="' + item.imagen + '" class="img-responsive" alt="' + item.alt + '">'					
					+ '</a>'
				+ '</div>'
			+ '</div>'
		);
	});
	$('#noticias').append('</div>');
}