import * as express from "express";
import axios from 'axios';

// web server port
const PORT = 8080;

// express instance
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// test-api route
app.get("/test-api", (req: express.Request, res: express.Response) => {
  res.json({
    message: "It works!",
  });
});

// customer route with param
app.post("/customer", async (req: express.Request, res: express.Response) => {
  const { cep } = req.body;
  const url: string = `https://viacep.com.br/ws/${cep}/json/`;

  let response = ''
  try {
      response = await axios.get(url);
  } catch (exception) {
      process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
  }

  res.json({
    message: `Customer data received. CEP is ${response.data.erro ? "invalid" : "valid"}`,
  });
});

// Start web server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
