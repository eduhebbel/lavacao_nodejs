INSTRUÇÕES PARA UTILIZAR O PROJETO:

Para que seja possível utilizar do projeto, é necessário clonar o arquivo do repositório.

git clone https://github.com/eduhebbel/lavacao_nodejs.git
----------------------------------------------------------------------
REQUISIÇÕES PARA QUE SEJA POSSÍVEL RODAR O PROJETO 

É necessário que haja o a instalação do Node.Js, React.Js , Axios e Express-validator
Para isso, utilize dos seguintes comandos:

*(Instalação do Node.JS e do NPM)
 sudo snap install node --channel=12/stable --classic

*(Crie uma pasta para o Back-end na pasta principal)
mkdir form_backend 

*(Instalação do Express)
 npm install express express-validator cors

*(Crie uma pasta no Back-end chamada "routes")
mkdir form_backend/routes


*(Instalação do React.JS)
sudo npm install -g create-react-app

*(Criação da pasta do Front-end para utilização do React.JS)
npx create-react-app form_frontend

*(Instalação do Express-validator)
npm install react-router-dom express-validator axios

*(Crie uma pasta no Front-end chamada "components")
mkdir src/components

----------------------------------------------------------------------
INSTRUÇÕES PARA SUBIR SERVIDOR

É importante salientar que o projeto desenvolvido foi utilizando as instâncias da AWS-Amazon.
Dessa forma, quando for utilizar o projeto, é necessário colocar o DNS público da AWS que o usuário está usando
ou
colocar configurar as portas de redirecionamento (Back-End e Front-End)

Alterar os arquivos:

form_backend/server.js
hostname = "{IP_AWS}

src/components/form-usuario.component.js
this.backendUrl = "http://{IP_AWS}:{PORT_BACKEND}/usuarios

----------------------------------------------------------------------
INSTRUÇÕES PARA RODAR O SERVIÇO

No Back-End (diretório form_backend), encontrar o arquivo "server.js" e utilizar o comando: node server.js
No Front-End (diretório form_frontend),  utilizar o comando: yarn start
