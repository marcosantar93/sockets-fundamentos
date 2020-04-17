const { io } = require("../server");

io.on("connection", (client) => {
  console.log("Usuario conectado");
  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });
  // Enviar info al cliente
  client.emit("enviarMensaje", {
    usuario: "Admin",
    mensaje: "Bienvenido a esta aplicacion",
  });
  // Escuchar el cliente
  client.on("enviarMensaje", (data, callback) => {
    console.log(data);
    client.broadcast.emit("enviarMensaje", data);
    // if (data.usuario) {
    //   callback({ resp: "Todo salio bien" });
    // } else {
    //   callback({ resp: "Todo salio mal" });
    // }
  });
});
