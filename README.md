# whatsapp-reply-js

Este projeto visa criar uma solução simples para permitir respostas automáticas no WhatsApp via um script em JS.

## O que é WhatsApp Web JS?

WhatsApp Web JS é uma biblioteca que facilita a automação de respostas ou o envio de mensagens a outros usuários no WhatsApp Web, utilizando Node.js.

## Pré-Requisitos

Antes de iniciar, é necessário ter o Node.js instalado. Este projeto foi desenvolvido utilizando a versão 18.14.0 do Node.js, mas qualquer versão recente deve ser compatível. Para instalar, visite [Node.js website](https://nodejs.org/).

### Verificando a Instalação do Node.js

1. Abra o terminal.
2. Digite `node -v` e pressione Enter. A versão do Node.js instalada será exibida, confirmando a instalação bem-sucedida.

## Inicialização do Projeto Node.js

1. Crie um novo diretório para o projeto e navegue até ele usando o terminal.
2. Execute `npm init` para inicializar um novo projeto Node.js. Isso criará um arquivo `package.json`, detalhando seu projeto e suas dependências.

## Instalação de Módulos Necessários

O script requer a instalação dos seguintes módulos:

- `qrcode-terminal` para a geração de QR Codes no terminal.
- `whatsapp-web.js` para interação com o WhatsApp Web.

Instale-os com os comandos:

- `npm install qrcode-terminal whatsapp-web.js`


## Configuração do Script

Crie um arquivo `index.js` que será o ponto de entrada do seu script. Este arquivo deve incluir o código para conectar ao WhatsApp e automatizar respostas às mensagens.

### Autenticação e Sessão

Utilize a estratégia de autenticação LocalAuth para armazenar sessões localmente, evitando a necessidade de escanear o QR Code a cada reinicialização do aplicativo.

### Geração de QR Code

Na inicialização do aplicativo, um QR Code será gerado no terminal. Escaneie-o com o WhatsApp no seu telefone para autenticar.

### Escutando Mensagens

O script deve escutar por mensagens recebidas e, por exemplo, responder automaticamente ao comando `!ping`.

## Executando o Aplicativo

Para executar, use o comando `node index.js` no terminal. Após escanear o QR Code com o WhatsApp, o cliente do WhatsApp Web JS estará pronto para uso. Você também pode criar e executar outros scripts, como `node outro.js`, para funções adicionais.

### Dicas Adicionais

- Para um novo projeto, crie um diretório específico com `mkdir whatsapp-bot` e navegue até ele com `cd whatsapp-bot`.
- Lembre-se de instalar as dependências necessárias com `npm install`.

Este guia fornece as etapas essenciais para configurar e executar um bot de resposta automática para o WhatsApp, utilizando as capacidades do WhatsApp Web JS e do Node.js.


