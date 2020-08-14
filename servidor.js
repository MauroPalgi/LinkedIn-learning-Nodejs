const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hola desde Node");
    res.end();
  })
  .listen(3000, "localhost");

console.log("Servidor en http://localhost:3000");
