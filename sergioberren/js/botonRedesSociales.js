// Constante (array) con las imágenes y las url a las que redireccionan
const imagenes = [
    { src: "img/Instagram.png", url: ""},
    { src: "img/Twitter.png", url: ""},
    { src: "img/GitHub.png", url: "https://github.com/SergioBerren"},
    { src: "img/LinkedIn.png", url: ""}
  ];
  
  let currentImageIndex = 0;
  const imgElemento = document.getElementById('imagenActual');
  
  function showImage() {
    imgElemento.src = imagenes[currentImageIndex].src;
  }
  
  function siguienteImagen() {
    currentImageIndex = (currentImageIndex + 1) % imagenes.length;
    showImage();
  }
  
  function redireccionamientoPagina() {

    let url = document.getElementById("imagenActual").src.split("/")
    let clave = url[url.length-1]

    console.log(clave)

    if(clave === "Instagram.png"){
        window.location.href = imagenes[0].url;
    } else if(clave === "Twitter.png") {
        window.location.href = imagenes[1].url;
    } else if(clave === "GitHub.png") {
        window.location.href = imagenes[2].url;
    } else {
        window.location.href = imagenes[3].url;
    }

  }
  showImage();