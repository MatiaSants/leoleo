import http from 'http';

const server = http.createServer((req, res)) => {
    if(req.method || !req.body.nome) {
        if(!req.method === 'POST'){
        res.statusCode = 400
        res.setHeader('Content-Type', 'text/plain');
        res.end('Dados Invalidos');
    }
}};

server.listen(3001, 'localhost', () => {
      console.log('Servidor rodando em http://localhost:3001/
        ');
});
