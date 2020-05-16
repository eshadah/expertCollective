import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import { AddressInfo } from "net";

import { multipartMiddleware, interRoutes } from "./setupServices";

const app = express();

app.use("/", express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello from Express"));

// InteractionAPI
app.post("/sendcontact", multipartMiddleware, interRoutes.sendcontact);

const server = app.listen(8000, "localhost", () => {
  const { address, port } = server.address() as AddressInfo;
  console.log("Listening on %s %s", address, port);
});
