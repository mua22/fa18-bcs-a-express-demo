const http = require("http");
let server = http.createServer(serverCreated);
function serverCreated(request, response) {
  if (request.url == "/") {
    response.write("Hello Section A");
    response.end();
  }
  if (request.url == "/api/customers") {
    response.write(JSON.stringify(["Usman", "Noman", "Ali"]));
    response.end();
  }
}
server.listen(3000);
