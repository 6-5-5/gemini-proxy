import Fastify from 'fastify';
import { URL } from 'url';

const fastify = Fastify({
  logger: false,
  bodyLimit: 10 * 1024 * 1024,
});

fastify.get('/', async (request, reply) => {
  reply.send({ status: 'Gemini Proxy is up and running' });
});

fastify.all('/*', async (request, reply) => { 
  try {
    // 1. Construct the target URL
    const targetUrl = new URL(request.url, `https://generativelanguage.googleapis.com`); 

    // 2. Extract API key from the query parameters
    const apiKey = targetUrl.searchParams.get('key');
    if (!apiKey) {
      return reply.status(401).send({ error: 'API key required' });
    }

    // 3. Forward the request to Google Gemini
    const response = await fetch(targetUrl.toString(), {
      method: request.method, 
      headers: { 
        'Content-Type': 'application/json',
      },
      body: request.method !== 'GET' ? JSON.stringify(request.body) : null, 
      timeout: 10000,
    });

    // 4. Handle the response
    const responseData = await response.json();
    reply.status(response.status).send(responseData);

  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: error.message || 'Error processing request' });
  }
});


export default async function (req, res) {
  try {
    await fastify.ready();
    fastify.server.emit('request', req, res);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Internal server error' });
  }
};
