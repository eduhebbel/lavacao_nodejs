INSTRUÇÕES PARA SUBIR SERVIDOR


Alterar os arquivos:

form_backend/server.js
hostname = "{IP_AWS}

src/components/form-usuario.component.js
this.backendUrl = "http://{IP_AWS}:{PORT_BACKEND}/usuarios
