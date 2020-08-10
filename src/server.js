
//servidor 
const express = require('express')
const server = express()
//const {subjects, weekdays, getSubject} = require('./pages')
const {
   pageLanding,
   pageStudy,
   pageGiveClasses,
   saveClasses,
} = require('./pages')


// configurando o nunjucks
const nunjucks = require('nunjucks') // permitindo que o nunjucks acesse a minha aplicação
nunjucks.configure('src/views',{
   express: server, 
   noCache: true,  
})

// inicio e configuração do servidor
server
// receber os dados do re. body
.use(express.urlencoded({extended: true}))
// configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses) 
.post("/save-classes", saveClasses) 

// porta do servidor
.listen(5500)

// para rodar o servidor basta inserir o codigo "npm run dev ou node src/server.js"

// 1:55:55