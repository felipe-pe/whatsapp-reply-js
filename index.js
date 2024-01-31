const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

// Cria e configura o cliente do WhatsApp
const client = new Client({
    authStrategy: new LocalAuth()
});

// Gera o QR code para autenticação
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Confirma que o cliente está pronto
client.on('ready', () => {
    console.log('Cliente está pronto!');
});

// Define uma lista de números permitidos
const numerosPermitidos = [
    '5511xxxxxxxxx@c.us',
    '5511yyyyyyyyy@c.us',
    '5515aaaaaaaaa@c.us',
    '5571bbbbbbbbb@c.us',
    '5571ccccccccc@c.us'
];

// Lógica para responder a mensagens
client.on('message', message => {
    if (numerosPermitidos.includes(message.from)) {
        const resposta = `Olá,

Eu sou lindão.`;

        message.reply(resposta);
    }
});

// Inicializa o cliente
client.initialize();
