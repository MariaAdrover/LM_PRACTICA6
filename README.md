# LM_PRACTICA6
Página de noticias

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
  * He codificado un .html para cada versión de publicidad poninedo las imágenes con ```javascript class="carousel slide"```, y en las páginas de noticias, en los espacios para la publicidad, he incluido un <iframe> que enlaza con la página de publicidad correspondiente

