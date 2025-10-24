// ====== FUNCIONES JS ======

const text = "BIENVENIDO A LA FAMILIA SOREX";
const typewriter = document.getElementById("typewriter");
let i = 0;

function type() {
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    if (typewriter.scrollWidth > typewriter.clientWidth) {
      typewriter.innerHTML += "<br>";
    }
    setTimeout(type, 130);
  }
}

window.addEventListener("load", type);


// ====== CONFIGURACIÓN DEL NÚMERO DE WHATSAPP ======
const telefonoWhatsApp = "+34604540125";

// Detectar clic en los botones de WhatsApp
document.querySelectorAll(".btn-whatsapp").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const producto = btn.getAttribute("data-producto");
    const mensaje = `Hola, estoy interesado en el reloj ${producto}. ¿Podrían darme más información?`;
    const url = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  });
});