var data = 1;
var offsetNav;
var finPubli;
var auto=false;

var posScroll;
var x;
var margin;

/* $(function(){...}); --> window.onload = function() {...};*/
$(document).ready(function() {	
	
	/*Activar tooltips*/
	$('[data-toggle="tooltip"]').tooltip();

	/*Desactivar boton submit*/
	$('form').submit(function() {
		return false;
	});
	
	/*determinar a cuantos pixeles se fija la barra del menu*/
	var navBar = $( ".navbar-collapse" );
	offsetNav=navBar.offset();
	$(".navbar-inverse").attr('data-offset-top', offsetNav.top);	
	
	/*El menu NO es fijo para dispositivos de menos de 667px*/
	if ((window.matchMedia('(max-width: 767px)').matches)) {		
		$('nav').attr('data-spy', '');
	}
	
	/*-----funcion boton volver------*/
	$('#botonVolver').click(function(){	
		if ((window.matchMedia('(min-width: 768px)').matches)) {
			$('#news1').focus();
		} else {			
			$('#botonMenu').focus();
		}		
	});
	
	/*Cargar noticias al pulsar boton */
	$('#boton1').click(function() { /*revisar EL BOTON HA DE ESTAR OPERATIVO SOLO SI EL AUTOSCROLL ESTA DESACTIVADO???*/
		if (data < 6) {
			/*Mostrar ventana de carga*/
			$('#loading').show();
			$.getJSON( 'https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.4/data/data' + data + '.json', function(jsonObject) {
				afegirBloc(jsonObject);
				/*Ocultar ventana de carga*/
				$('#loading').hide();
			});
			data++;
		} else {
			$('#boton1').text('NO HAY MÁS NOTICIAS');
		}
	});
	
	/* ------ ACTIVAR/DESACTIVAR AUTOSCROLL -----*/
	$('#autoscroll').click(function(){
		if (auto) {
			auto=false;
			$('#autoscroll').text('Activar Autoscroll');
		} else {
			auto=true;
			$('#autoscroll').text('Desactivar AutoScroll');
		}
	});	
	
	/*Mostrar/Ocultar gif de carga
	//-------------------quitar
	$(document).ajaxStart(function(){
		$('#loading').show();
	});
	$(document).ajaxSuccess(function(){
		$('#loading').hide();
	});
	*/

	
	//-------------------quitar
	//$('#loading').show();
	$(window).scroll(function() {
		
		/*Ajustar padding del div de contenido para que no de tirones al hacer scroll*/
		
		if (window.matchMedia('(min-width:768px)').matches) {
			ajustarPadding();
		}
		
		if (location.href=='https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.4/news.html' && auto) {
			if ($(window).scrollTop() + $(window).height() >= $(document).height() - 50) { /*-------REVISAR offset*/
				if (data < 6) {
					/*Mostrar ventana de carga*/
					$('#loading').show();
					/*Cargar noticias*/
					$.getJSON('https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.4/data/data' + data + '.json', function(jsonObject) {
						afegirBloc(jsonObject);
						/*Ocultar ventana de carga*/
						$('#loading').hide();
					});
					data++;
				} else {
					$('#boton1').text('NO HAY MÁS NOTICIAS');
				}			
			}
		}
		
		/*Mostrar/Ocultar botones AutoScroll y volver*/
		finPubli=200+offsetNav.top;
		
		if ($(window).scrollTop()>finPubli) {
			$('#autoscroll').show();
			$('#botonVolver').show();			
		}
		if ($(window).scrollTop()<finPubli) {			
			$('#autoscroll').hide();
			$('#botonVolver').hide();	
		}
	});	
	
});

/* --------------------------------- Funciones ---------------------------------- */

function afegirBloc(jsonObject) {
	$('#noticias').append('<div class="row">'); 
	$.each(jsonObject, function(i, item) {
		$('.row:last').append(
			'<div class="col-sm-12 col-md-6">'
				+ '<div class="thumbnail shortNew">'
					+ '<a href="#">'
						+ '<h2 class="text-center">' + item.titulo + '</h2>'
						+ '<p class="text-right fecha">' + item.fecha + '</p>'
						+ '<p class="text-justify">' + item.texto + '</p>'				
					+ '</a>'
					+ '<picture>'
						+ '<source srcset="' + item.imagenXs + '" media="(max-width: 400px)">'
						+ '<source srcset="' + item.imagen + '" media="(min-width: 401px)">'
						+ '<img src="' + item.imagen + '" class="img-responsive center-block" alt="' + item.alt + '">'
					+ '</picture>'
				+ '</div>'
			+ '</div>'
		);
	});
	$('#noticias').append('</div>');
}

function ajustarPadding() {
	posScroll = $(window).scrollTop();
	margin = $('nav').outerHeight(true);
	x = $('.jumbotron').innerHeight();
	if (posScroll > x) {
		$('#contenido').css('margin-top', margin);
	} else {
		$('#contenido').css('margin-top', 0);
	}
}
	
