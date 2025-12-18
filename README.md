# WhatsApp Clone - TP Final UTN Noa Barrionuevo
Para el proyecto final de la cursada decidi crear una replica de whatsapp web en modo oscuro, ya que se me facilitaba por lo visto en clase y ademas ya tenia una forma de guiarme al tener la pagina oficial para realizar mi propia estructura layout lo que hizo que se me facilitira saber por donde empezar 

## Tecnologías y Librerías
- **React**
- **React Router** 
- **Vite** 

## Funcionalidades Principales

1.  *Lista de Contactos*: Visualización de chats con sus respectivos datos (avatar, nombre, mensaje y estado del mensaje).
2.  *Chat Detallado*: Interfaz de mensajería estilo WhatsApp, ademas de poder mandar mensajes en el chat seleccionado.
3.  *Nuevo Contacto*: Formulario integrado para agregar contactos que se encuentra en la barra de ContactSearchForm y al principio de la pagina cuando se inicia se encuentra un boton debajo al mensaje de bienvenida.
4.  *Diseño Responsivo*: Adaptable a dispositivos móviles (320px) y escritorio (Desktop First).
5.  *Detalles*:
 - Al abrir un chat no leido el estado del mensaje cambia y se le elimina la burbuja con los mensaje no leidos
- En ContactSearchForm lo que seria nuestro header al hacerle click a la palabra "Whatsapp" te redirige a la pagina de bienvenida
- En el modo responsive en el chat contas con un flecha que te redirige a la pantalla principal 
- En el modo responsive hay un menu desplegable que te muestra en el caso de SectionChatsMessages las opciones de buscar en el chat, videollamada y mas opciones y en el caso de ContactSearchForm las opciones de agregar contacto, nuevo chat, ajustes, perfil y cerrar sesión (en este ultimo caso la unica opcion que funciona es agregar contacto)

## Dificultades y Soluciones

-   *Estructura del Layout*: Tuve demasiados problemas a la hora de hacer la barra lateral (HeaderSideBar) con su css correspondiente para que no me arruine la sidebar ya que era la principal de la pagina pero gracias a Antigravity puede solucionar problemas simples en el css.
-   *Uso de contextos*: Al principio el uso de contextos se me complico bastante ya que al principio cuando los empezamos a utilizar se me rompio toda la pagina, estuve dos dias resolviendo lo problemas pero gracias a eso termine de entender como funcionaban y despues el uso de estos mismo me facilito un monton de cosas, para mi la mas importante fue la legibilidad del codigo ya que todo esta mas organizado.
-   *Animaciones*: El uso de animaciones siento que tranquilamente podria haberlas no usados pero al inicio de la pagina cuando se muestra el mensaje de bienvenida y esta la carga de la pagina (que lo utilice para que no se vea la carga de los contactos / chats) siento que valio la pena el investigar sobre el tema, se me complicaron al principio pero la verdad son bastante sensillas y facil de entender.

##  Demo

🔗 *[Ver Demo en Vivo](https://final-project-utn.vercel.app)* 

---