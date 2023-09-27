const net = require('net');
const http = require('http');

/**
 * @type {http.Server[]}
 */
const services = [];

const hookNetServer = () => {
  const oldCreateServer = net.createServer;
  net.createServer = (...args) => {
    const server = oldCreateServer.call(this, ...args);
    services.push(server);
    return server;
  };
};

const hookHttpServer = () => {
  const http = require('http');
  const oldCreateServer = http.createServer;
  http.createServer = (...args) => {
    const server = oldCreateServer.call(this, ...args);
    services.push(server);
    return server;
  };
};

const closeServices = async () => {
  let count = 0;
  process.on('uncaughtException', error => {
    console.error('Uncaught Exception:', error);
  });
  for (let index in services) {
    const service = services[index];
    await new Promise((resolve, reject) => {
      try {
        // noinspection JSUnresolvedReference
        service.closeAllConnections();
        // noinspection JSUnresolvedReference
        service.closeIdleConnections();
        // noinspection JSUnresolvedReference
        service.close(err => {
          if (err) {
            reject(err);
            return;
          }
          count++;
          resolve();
        });
      } catch (e) {
        console.error(e);
      }
      resolve();
    }).catch(e => {
      console.error(e);
    });
  }
  services.splice(0, services.length);
  return count;
};

const hookServices = () => {
  hookNetServer();
  hookHttpServer();
};

const unblocks = async () => {
  return await closeServices();
};

module.exports.hookServices = hookServices;

module.exports.unblocks = unblocks;
