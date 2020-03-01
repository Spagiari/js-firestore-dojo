const server = require('./app');

const port = process.env.PORT || 3000;

server.listen(port, () => {
  process.stdout.write(`Running on port ${port} \n`);
});
