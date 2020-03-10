
// Dependencies

const http = require('http');
const url = require('url'); // library for all things url
const { StringDecoder } = require('string_decoder'); // library to decode string
const router = require('./router');
const handlers = require('./handlers');

// The server should respond to all http requests with a string
// create a server object
const httpServer = http.createServer((req, res) => {
  // Get the url and parse it
  const parsedUrl = url.parse(req.url, true); // true => parse the query string too

  // Get the path from the url
  const path = parsedUrl.pathname; // untrimmed path
  const trimmedPath = path.replace(/^\/+|\/+$/g, ''); // remove the slashes from both ends

  // Get the query string as an object
  const queryStringObject = parsedUrl.query;

  // Get the http method
  const method = req.method.toUpperCase();

  // Get the headers as a object
  const { headers } = req;

  // Might not be necessary if we are only dealing with a GET request
  // Get the payload (body of the request), if any
  const decoder = new StringDecoder('utf-8');
  let buffer = '';
  req.on('data', (data) => {
    buffer += decoder.write(data); // decoder turns the data to a string
  });
  // On end of the stream;
  req.on('end', () => {
    buffer += decoder.end();

    // choose handler to handle request
    const chosenHandler = (router[trimmedPath]) ? router[trimmedPath] : handlers.notFound;

    // construct the data object to send to the handler
    const data = {
      trimmedPath,
      queryStringObject,
      method,
      headers,
      payload: buffer,
    };

    // Route the request to the handler specified in the router
    chosenHandler(data, (statusCode, payload) => {
      // use the status code sent by the handler or default to 200
      statusCode = statusCode || 200;

      // the payload here is the response object that we get back from the handler
      // if the payload exist use it or default payload to {}
      payload = payload || {};

      // convert the payload to a string;
      const payloadString = JSON.stringify(payload);

      // console.log('payload :', payloadString);

      // return response
      // res.setHeader('content-Type', 'application/json'); // => responds with json data
      res.writeHead(statusCode, { 'content-Type': 'application/json' });
      res.end(payloadString);

      // Log response
      // console.log('Returning this response: ', statusCode, payloadString);
    });
  });
});

// grab port from env variables or set to 3000
const PORT = process.env.PORT || 3000;

// Have the http server listen on the port based on the environment
httpServer.listen(PORT, () => console.log('The server is listening on port:', `${PORT}`));
