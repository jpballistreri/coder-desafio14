import Server from "./services/server.es6";

const puerto = 8080;

Server.listen(puerto, () => console.log("Server up en puerto", puerto));
