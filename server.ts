import http, { IncomingMessage, ServerResponse } from "http";
import { romanNumeralGenerator } from ".";

const requestListener = function (req: IncomingMessage, res: ServerResponse) {
  res.writeHead(200);
  const intReq = Number(req.url?.replace("/", ""));

  if (isNaN(intReq) || !intReq) {
    return res.end("Not a valid number");
  }

  res.end(romanNumeralGenerator(intReq));
};

const server = http.createServer(requestListener);
server.listen(8080);
