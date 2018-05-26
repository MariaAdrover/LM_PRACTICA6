# LM_PRACTICA6
Página de noticias

### VERSIÓN 0.4 

> * Enlace a la página principal de [NOTICIAS](https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.4/news.html)
> * Enlace a la página de la [NOTICIA 1](https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.4/news1.html)
> * Enlace a la página de la [NOTICIA 2](https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.4/news2.html)

* He utilizado la etiqueta ```<picture>``` en lugar de ```<img>``` para optimizar la carga de las imágenes de las reseñas de las noticias. Para dispositivos de hasta 400px se cargan imágenes de 330px de ancho y para el resto, de 500px de ancho.
* En la página de las reseñas de las noticias,las imágenes (medianas o pequeñas) se amplian al pulsar sobre ellas. En las páginas de las dos noticias completas se muestra directamente la imagen grande.
* Todas las imágenes están comprimidas con tinyPNG.
* En las páginas de publicidad, para rotar las imágenes he quitado la clase ```.carousel``` y he hecho un código que cambia las imágenes haciendo primero un zoom en la imagen publicitaria cargada mientras hace fadeOut, y carga la siguiente haciendo fadeIn.

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

### VERSIÓN 0.2 

> * Enlace a la página principal de [NOTICIAS](https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.2/news.html)
> * Enlace a la página de la [NOTICIA 1](https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.2/news1.html)
> * Enlace a la página de la [NOTICIA 2](https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.2/news2.html)
* Añadidos los archivos data1.json, data2.json y data3.json, cada uno de ellos con los datos para presentar dos noticias más, que se cargarán al hacer scroll hacia abajo al llegar al final de la página o al pulsar el botón de VER MÁS NOTICIAS de la página news.html.
* Añadido JavaScript con el código para:
  * Activar tooltips.
  * Desactivar el botón de submit del formulario de Login (```return false;```).
  * Evento al pulsar el botón de VER MÁS NOTICIAS (```$(#boton).click();```): cargar dos noticias desde el archivo .json correspondiente.
* En dispositivos de menos de 768px el menú no queda fijado a la parte superior de la pantalla porque no hay espacio vertical suficiente para acceder a los contenidos desplegables del mismo, y además quita mucho espacio para la visualización del contenido. Se añade un icono fijado en la parte inferior derecha de la pantalla que lleva al principio del documento para poder acceder rápidamente al menú.
* Añadidos metadatos para Open Graph Protocol
* PUBLICIDAD
  * He cambiado la estructura del documento para ajustar los espacios de los contenedores para la publicidad a las medidas que se pedían en las especificaciones, que finalmente quedarán de 300x600 en la versión de escritorio y de 320x100 en la versión para móvil. 
  * He diseñado 3 anuncios para la versión de escritorio y 3 para la versión para móvil.
  * He codificado un .html para cada versión de publicidad poninedo las imágenes con ```javascript class="carousel slide"```, y en las páginas de noticias, en los espacios para la publicidad, he incluido un <iframe> que enlaza con la página de publicidad correspondiente.

### VERSIÓN 0.1 (master)

> * Enlace a la página principal de [NOTICIAS](https://rawgit.com/MariaAdrover/LM_PRACTICA6/master/news.html)
> * Enlace a la página de la [NOTICIA 1](https://rawgit.com/MariaAdrover/LM_PRACTICA6/master/news1.html)
> * Enlace a la página de la [NOTICIA 2](https://rawgit.com/MariaAdrover/LM_PRACTICA6/master/news2.html)

El tema que he escogido para la práctica de la página de noticias es el mundo de la escalada. 
En esta versión he codificado la estructura básica de la página de reseñas de las noticias, y de las dos páginas con las noticias completas:
* Versión escritorio:

![escritorio](https://rawgit.com/MariaAdrover/PRACTICA6_resources/master/design1a.jpg)
  * Cabecera
  * Barra de navegación que queda fijada en la parte superior de la ventana al hacer scroll, con los siguientes elementos:
    * Acceso a una supuesta página principal del sitio web en la que aparecerían los últimos contenidos agregados de todas las categorías.
    * Menú desplegable que corresponde a la página de noticias de la práctica. Al desplegarlo, aparece un enlace que permitiría acceder a las reseñas de las noticias organizadas por diferentes modalidades de escalada. En la página de la práctica aparecen las últimas noticias añadidas (de todas las modalidades). En las páginas de la noticia completa aparece un enlace más para volver a la página general de noticias.
    
    ![submenú noticias](https://rawgit.com/MariaAdrover/PRACTICA6_resources/master/menu1.png)
    * Enlace a entrevistas
    * Enlace a artículos sobre material
    * Elace a una galeria con las fotos y vídeos de la página
    * Enlace para acceder a los foros de la página
    * Buscador
    * Desplegable para iniciar sesión o crear una cuenta
  * Espacio para la publicidad a la derecha de la página.
  * Bloques de noticias a la izquierda. Cada ```row``` tendrá dos reseñas de noticias del mismo ancho. La noticia completa ocupa todo el espacio a la izquierda de la publicidad.
  * Botón para cargar más noticias después del bloque de las reseñas (no aparece en las páginas de la noticia completa).
* Versión móvil:

![móvil](https://rawgit.com/MariaAdrover/PRACTICA6_resources/master/design2a.jpg)
  * Tiene los mismos elementos pero la barra de navegación se colapsa, quedando visible el logo de la página y un botón que da acceso a los elementos del menú al pulsar sobre él.

He incluido un .css, he cambiado la fuente del texto, he diseñado un logo, y he seleccionado el texto e imágenes de las cuatro noticias precargadas que tendrá la página principal y de las dos noticias completas.
