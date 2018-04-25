# LM_PRACTICA6
Página de noticias

### VERSIÓN 0.2 

> * Enlace a la página principal de [NOTICIAS](https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.2/news.html)
> * Enlace a la página de la [NOTICIA 1](https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.2/news1.html)
> * Enlace a la página de la [NOTICIA 2](https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.2/news2.html).
* Añadidos los archivos data1.json, data2.json y data3.json, cada uno de ellos con los datos para presentar dos noticias más, que se cargarán al hacer scroll hacia abajo al llegar al final de la página o al pulsar el botón de VER MÁS NOTICIAS de la página news.html.
* Añadido JavaScript con el código para:
  * Activar tooltips.
  * Desactivar el botón de submit del formulario de Login (```return false;```).
  * Evento al pulsar el botón de VER MÁS NOTICIAS (```$(#boton).click();```): cargar dos noticias desde el archivo .json correspondiente.
  * ADAPTABILIDAD PARA PC: 
    * Evento al redimensionar la ventana (```$(window).resize();```): al cargar la página, se carga el CSS para dispositivos @media(min-width:768px), pero si se redimensiona la ventana, se adapta el tamaño de la cabecera de la página y del texto.
  * ADAPTABILIDAD PARA Tablets:  
    * Evento al cambiar la orientación de la tablet: implementado con el mismo código .resize para PC.
  * ADAPTABILIDAD PARA móviles:
    * En dispositivos que tengan un largo insuficiente para ver el formulario dropdown de Login del menu, el menú no quedará fijado en la parte superior de la ventana.
    * Se añade un icono fijado en la parte inferior derecha de la pantalla que lleva al menú al pulsar sobre él.
* Añadidos metadatos para Open Graph Protocol
* PUBLICIDAD
  * He cambiado la estructura del documento para ajustar los espacios de los contenedores para la publicidad a las medidas que se pedían en las especificaciones, que finalmente quedarán de 300x600 en la versión de escritorio y de 320x90 en la versión para móvil. 
  * He diseñado 3 anuncios para la versión de escritorio y 3 para la versión para móvil.
  * He codificado un .html para cada versión de publicidad poninedo las imágenes con ```javascript class="carousel slide"```, y en las páginas de noticias, en los espacios para la publicidad, he incluido un <iframe> que enlaza con la página de publicidad correspondiente
#### // TO DO
> * Añadir evento ```$(window).scroll();``` para la página news.html
> * Modificar :hover de shortNew y font-family/fint-size
> * Revisar ADAPTABILIDAD


### VERSIÓN 0.1 

> * Enlace a la página principal de [NOTICIAS](https://rawgit.com/MariaAdrover/LM_PRACTICA6/master/news.html)
> * Enlace a la página de la [NOTICIA 1](https://rawgit.com/MariaAdrover/LM_PRACTICA6/master/news1.html)
> * Enlace a la página de la [NOTICIA 2](https://rawgit.com/MariaAdrover/LM_PRACTICA6/master/news2.html)
