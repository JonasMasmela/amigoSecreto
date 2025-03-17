# amigoSecreto
Challenge de Alura One Oracle Next Education

# Amigo Secreto 🎁

¡Bienvenido al proyecto **Amigo Secreto**! Esta es una aplicación web sencilla que te permite organizar un sorteo de amigos secretos. Los usuarios pueden agregar nombres de amigos, visualizarlos en una lista y realizar un sorteo aleatorio para asignar un amigo secreto a cada participante.

---

## Características ✨

- **Agregar nombres**: Ingresa los nombres de tus amigos en un campo de texto y añádelos a la lista.
- **Validación de entrada**: Evita nombres vacíos o duplicados.
- **Visualización de la lista**: Los nombres ingresados se muestran en una lista debajo del campo de entrada.
- **Sorteo aleatorio**: Realiza un sorteo para seleccionar un amigo secreto de la lista.
- **Reiniciar el juego**: Limpia la lista y el resultado para comenzar de nuevo.

---

## Cómo Usar 🚀

### Requisitos Previos

- Un navegador web moderno (Chrome, Firefox, Edge, etc.).
- Conexión a Internet (solo para cargar las fuentes de Google Fonts).

### Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/JonasMasmela/amigo-secreto.git

2. Navega a la carpeta del proyecto:
    cd amigo-secreto

Ejecución
Abre el archivo index.html en tu navegador.

Sigue las instrucciones en pantalla para agregar nombres y realizar el sorteo.

### Estructura del Proyecto 📂

/amigo-secreto
│
├── index.html          # Archivo principal de la aplicación.
├── style.css           # Estilos CSS para la interfaz de usuario.
├── app.js              # Lógica principal de la aplicación.
└── assets/             # Carpeta que contiene imágenes y recursos.
    ├── amigo-secreto.png
    ├── play_circle_outline.png
    └── reset.png

### Tecnologías Utilizadas 🛠️

HTML: Estructura de la aplicación.

CSS: Estilos y diseño responsive.

JavaScript: Lógica del sorteo y manejo de la lista de nombres.

Google Fonts: Fuentes tipográficas utilizadas en el proyecto.

### Contribuir 🤝

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, sigue estos pasos:

    1. Haz un fork del repositorio.

    2. Crea una rama para tu contribución:

        git checkout -b mi-contribucion
    
    3. Realiza tus cambios y haz commit:
        git commit -m "Descripción de los cambios"
    
    4. Envía tus cambios:
        git push origin mi-contribucion
    
### Problemas Conocidos y Soluciones 🐛
Problema: Al recargar la página, se pierde la lista de nombres.

Solución: Implementar el uso de localStorage para guardar la lista de nombres en el navegador.

Problema: No se pueden eliminar nombres individuales de la lista.

Solución: Agregar un botón de "Eliminar" junto a cada nombre en la lista.

### Créditos 🙌

Desarrollado por: Alura Latam Oracle Next Education y JonasMasmela.

Fuentes: Google Fonts.

Íconos: Íconos gratuitos.

¡Gracias por visitar este proyecto! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue en GitHub o contactarme directamente. 😊
