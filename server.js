


import http from 'http';


const server = http.createServer((req, res) => {
     res.statusCode = 404;
     res.setHeader('Content-Type', 'text/plain')

     res.end('Página não encontrada')
})

server.listen(3000, 'localhost', () => {
    console.log('Servidor rodando em https://localhost:3000/');
})