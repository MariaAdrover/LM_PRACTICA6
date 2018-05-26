# LM_PRACTICA6
Página de noticias

### VERSIÓN 0.3 

> * Enlace a la página principal de [NOTICIAS](https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.3/news.html)
> * Enlace a la página de la [NOTICIA 1](https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.3/news1.html)
> * Enlace a la página de la [NOTICIA 2](https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.3/news2.html)

* ADAPTABILIDAD PARA DISPOSITIVOS DE DIFERENTES MEDIDAS:
He modificado la disposición y tamaño de los elementos para adaptar la página a tres anchos diferentes. En las versiones de 768px o más he añadido un widget de previsión meteorológica, ya que pienso que es útil para el usuario teniendo en cuenta la temática de la página.
  * Dispositivos de 992 píxeles de ancho o más:
    * Cabecera con el logo de la página.
    * Barra de navegación: queda fijada en la parte superior de la pantalla al hacer scroll, según las dimensiones del dispositivo.
    * Publicidad: de 300x600 a la derecha de la pantalla.
    * Widget de previsión meteorológica debajo de la publicidad.
    * Bloque de contenido: en la página con las reseñas de las noticias habrá dos columnas por fila (.col-md-6). En la página de noticia completa la noticia ocupa todo el espacio disponible del bloque de contenido.
  * Dispositivos de entre 768 y 991 píxeles de ancho (ambas medidas incluidas):  
    * Cabecera con el logo de la página: adaptación de las medidas del logo y el tamaño de la cabecera.
    * Barra de navegación: queda fijada en la parte superior de la pantalla al hacer scroll. Adaptación del tamaño del texto y del momento en que se fija la barra según las dimensiones del dispositivo.
    * Publicidad: de 300x600 a la derecha de la pantalla.
    * Widget de previsión meteorológica debajo de la publicidad.
    * Bloque de contenido: en la página con las reseñas de las noticias habrá una columna por fila (.col-sm-12) ya que con dos noticias por fila, los bloques quedan demasiado estrechos. En la página de noticia completa la noticia ocupa todo el espacio disponible del bloque de contenido. Adaptación del tamaño del texto.
  * Dispositivos de hasta 767 píxeles de ancho:
    * No aparece la cabecera. 
    * Barra de navegación: está oculta, desplegándose al pulsar el botón de menú. No queda fija. 
    * Publicidad: de 320x100 en la parte superior, justo antes del bloque de contenidos.
    * Bloque de contenido: tanto las reseñas de las noticias como las noticias completas ocupan el todo el ancho de la pantalla. Adaptación del tamaño del texto.
* Las noticias se cargan también al hacer scroll.
* Implementación de un botón para activar y desactivar el autoscroll.
* El botón para volver al inicio del documento está operativo para todos los dispositivos, no sólo en el móvil.
* El boton para activar/desactivar el autoscroll y el de ir arriba aparecen y desaparecen a partir de la segunda fila de noticias, para no ocupar espacio de visualización al cargar la página, y porque realmente son útiles cuando hemos hecho algo de scroll en el documento.
* He hecho que se suavice el scroll del documento al fijarse la barra de navegación, cambiando el padding del bloque de contenido según las medidas de la cabecera. 
* Creación de un div con un gif de carga que se activa mientras se cargan los contenidos del .json, impidiendo otras interacciones del usuario con elementos de la página hasta que no se ha cargado el contenido solicitado.
* He añadido dos documentos .json más (se podrán hacer cinco cargas).
