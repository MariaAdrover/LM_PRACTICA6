# LM_PRACTICA6
Página de noticias

### VERSIÓN 0.4 

> * Enlace a la página principal de [NOTICIAS](https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.4/news.html)
> * Enlace a la página de la [NOTICIA 1](https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.4/news1.html)
> * Enlace a la página de la [NOTICIA 2](https://rawgit.com/MariaAdrover/LM_PRACTICA6/v0.4/news2.html)

* He utilizado la etiqueta ```<picture>``` en lugar de ```<img>``` para optimizar la carga de las imágenes de las reseñas de las noticias. Para dispositivos de hasta 400px se cargan imágenes de 330px de ancho y para el resto, de 500px de ancho.
* En la página de las reseñas de las noticias,las imágenes (medianas o pequeñas) se amplian al pulsar sobre ellas. En las páginas de las dos noticias completas se muestra directamente la imagen grande.
* Todas las imágenes están comprimidas con tinyPNG.
* En las páginas de publicidad, para rotar las imágenes he quitado la clase ```.carousel``` y he hecho un código que cambia las imágenes haciendo primero un zoom en la imagen publicitaria cargada mientras hace fadeOut, y luego carga la siguiente haciendo fadeIn.
