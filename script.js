
function enviarWhatsApp() {
    const numero = "5533046307"; 
    const mensaje = "me interesa en proyecto"; 
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
