var data = 1;
var offsetNav;
var finPubli;
var auto=false;

var posScroll;
var x;
var margin;

var foto = 5; 

$(document).ready(function() {	
	
	/*Activar tooltips*/
	$('[data-toggle="tooltip"]').tooltip();

	/*Desactivar boton submit*/
	$('form').submit(function() {
		return false;
	});
	
	/*determinar a cuantos pixeles se fija la barra del menu*/	
	offsetNav=$(".navbar-collapse").offset();
	$(".navbar-inverse").attr('data-offset-top', offsetNav.top);	
	
	/*El menu no es fijo para dispositivos de menos de 768px*/
	if ((window.matchMedia('(max-width: 767px)').matches)) {
		$('nav').removeAttr('data-spy');
		$('nav').removeAttr('data-offset-top');
	}
	
	/*-----Volver arriba al pulsar botón volver------*/
	$('#botonVolver').click(function(){	
		if ((window.matchMedia('(min-width: 768px)').matches)) {
			$('#news1').focus();
		} else {			
			$('#botonMenu').focus();
		}		
	});
	
	/*Evento al clicar sobre una imagen: Mostrar/ocultar modal*/
	$(document).on("click", "picture", function(evt){
	   var urlImg = 'img/n' + ($(evt.target).attr("id")) + 'big.jpg';
	   $("#bigImg img").attr("src",urlImg);
	   $("#bigImg").modal("show");
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
	
	/*Cargar noticias al pulsar boton */
	$('#boton1').click(function() {
		getData(0);
	});
	
	/*Eventos al hacer scroll*/	
	$(window).scroll(function() {
		
		/*Ajustar padding del div de contenido para que no de tirones al hacer scroll y fijarse el menú arriba*/		
		if (window.matchMedia('(min-width:768px)').matches) {
			ajustarPadding();
		}
		
		/*Cargar noticias*/
		if (auto) {
			if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
				getData(1);			
			}
		}
		
		/*Mostrar/Ocultar botones AutoScroll y volver arriba*/		
		if ($(window).scrollTop()>=(offsetNav.top+200)) {
			$('#autoscroll').show();
			$('#botonVolver').show();			
		} else {			
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
					+ '<h2 class="text-center"><a href="">' + item.titulo + '</a></h2>'
					+ '<p class="text-right fecha">' + item.fecha + '</p>'
					+ '<p class="text-justify">' + item.texto + '</p>'
					+ '<picture>'
						+ '<source srcset="' + item.imagenXs + '" media="(max-width: 400px)">'
						+ '<source srcset="' + item.imagen + '" media="(min-width: 401px)">'
						+ '<img  id="' + foto + '" src="' + item.imagen + '" class="img-responsive center-block" alt="' + item.alt +'"/>'
					+ '</picture>'
				+ '</div>'
			+ '</div>'
		);
		foto++;
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

function getData(evento) {
	if (data < 6) {
		/*Mostrar ventana de carga*/
		$('#loading').show();
		if (evento==1) {
			auto=false;
		}
		/*Cargar noticias*/
		$.getJSON('https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.4/data/data' + data + '.json', function(jsonObject) {
			afegirBloc(jsonObject);
			/*Ocultar ventana de carga*/
			$('#loading').hide();
			if (evento==1) {
				auto=true;
			}
		});
		data++;
	} else {
		$('#boton1').text('NO HAY MÁS NOTICIAS');
	}	
}