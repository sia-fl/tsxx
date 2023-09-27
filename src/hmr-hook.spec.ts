import { test, expect } from 'vitest';
import { hookServices, unblocks } from './hmr-hook.js';

test('auto unblocks', async () => {
  hookServices();
  const http = require('http');
  const server = http.createServer((_: any, res: any) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
  });
  const port = 3007;
  const count = await new Promise(resolve => {
    server.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
      setInterval(async () => {
        resolve(await unblocks());
      }, 100);
    });
  });
  expect(count).toBe(1);
});
