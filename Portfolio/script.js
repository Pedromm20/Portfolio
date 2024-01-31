document.addEventListener("DOMContentLoaded", function () {
  var imageOverlay = document.getElementById("imageOverlay");
  var enlargedImage = document.getElementById("enlargedImage");
  var profileImage = document.querySelector(".profile-image");

  function mostrarImagen() {
      var imagePath = "Imagenes/curriculum-1.png";
      enlargedImage.src = imagePath;
      imageOverlay.style.display = "flex";
  }

  function cerrarImagen(event) {
      if (!imageOverlay.contains(event.target) && event.target !== profileImage) {
          imageOverlay.style.display = "none";
          document.removeEventListener("click", cerrarImagen);
      }
  }

  profileImage.addEventListener("click", function (event) {
      mostrarImagen();
      event.stopPropagation(); // Evita que el clic se propague al documento
      document.addEventListener("click", cerrarImagenOnce);
  });

  function cerrarImagenOnce() {
      imageOverlay.style.display = "none";
      document.removeEventListener("click", cerrarImagenOnce);
  }
});




