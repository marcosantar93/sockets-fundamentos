var socket = io();
socket.on("connect", function () {
  console.log("Conectado al servidor");
});
// .on sirven para escuchar eventos
socket.on("disconnect", function () {
  console.log("Perdimos conexion con el servidor");
});

// .emit sirven para enviar info
socket.emit(
  "enviarMensaje",
  {
    usuario: "Marco",
    mensaje: "Hola Mundo",
  },
  function (resp) {
    console.log(resp);
  }
);

socket.on("enviarMensaje", function (mensaje) {
  console.log("Servidor", mensaje);
});