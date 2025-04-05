import http from 'http'

const server = http.createServer((req, res) => {
  return res.end('Ola mundo')
})

server.listen(3333, () => {
  console.log('🚀 Servidor rodando na porta 3333');
});