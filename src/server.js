import http  from 'node:http'

// - Criar usuários
// - Listagem de usuários
// - Atualizar usuários
// - Deletar usuários

// - HTTP 
//   - Método HTTP
//   - URL

// (GET, POST, PUT, DELETE)

// GET => Buscar um recurso do back-end 
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// DELETE => Deletar um recurso no back-end
// PATCH => Alterar uma informação específica de um recurso no back-end

const server = http.createServer((req, res) => {
  const { method, url } = req

  console.log(method, url)
  res.end('Hello World')
})

server.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000')
})