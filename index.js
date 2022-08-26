// Simple NodeJS Server.
// An exercise primarily in routing. How to get A Node app to route the user to
// the requested page and how to load the images and css associated with the pages.
const http = require('http');
const fs = require('fs');

const cssFiles = fs.readdirSync('./css');
const imageFiles = fs.readdirSync('./image');
const htmlFiles = fs.readdirSync('./views');

let home = '/';
let error404;
fs.readFile('./views/404.html', (err, data) => {
    error404 = data;
});

// serve the site
const server = http.createServer((req, res) => {
    let fileName = req.url;
    fileName = fileName === home ? 'index.html' : fileName.split('/').pop();
    
    let fileType = fileName.split('.')[1];
    let route = getRoute(fileName, fileType);
    displayContent(route, fileType, res);    

  }).listen(3000, () => {
    console.log('Server started on port 3000')
});
  

// returns a defined path to the content requested, or path to error404 if not exists.
const getRoute = (fileName, ext) => {    
  let reqDir, path;

  switch(ext) {
    case 'html':
      if (htmlFiles.includes(fileName)) {
        reqDir = './views/';
        path = `${reqDir}${fileName}`;
      } else {
        path = './views/404.html';
      }
      break;

    case 'css':
      if (cssFiles.includes(fileName)) {
        reqDir = './css/';
        path = `${reqDir}${fileName}`;
      } else {
        path = './views/404.html';
      }
      break;

    case 'png':
      if (imageFiles.includes(fileName)) {
        reqDir = './image/';
        path = `${reqDir}${fileName}`;
      } else {
        path = './views/404.html';
      }
      break;

    default:
      path = './views/404.html';
  } 

  return path;
};

// displays the webpage and its content.
const displayContent = (path, ext, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write(error404);
      res.end();
    } else {
      switch(ext) {
          case 'html':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
          break;

          case 'css':
            res.writeHead(200, {'Content-Type': 'text/css'})
            res.write(data);
            res.end();
          break;

          case 'png':
            res.writeHead(200, {'Content-Type': 'image/png'})
            res.write(data);
            res.end();
          break;
      }
    }
  });
};