const express = require('express');
const { createCanvas, loadImage } = require('canvas');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.get('/webhook/aline', async (req, res) => {
    const name = req.query.name || 'Amigo';

    const width = 768; 
    const height = 960;

    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');

    // Carrega o copo de fundo
    const imagePath = path.join(__dirname, 'assets', 'copo.png');
    const background = await loadImage(imagePath);
    context.drawImage(background, 0, 0, width, height);

    // Configurações de texto ajustadas
    context.font = 'bold 36px sans-serif'; // Corrigido para sans-serif
    context.fillStyle = '#000000'; // Cor preta
    context.textAlign = 'center';
    context.fillText(name, width / 2, 720); // Posição abaixo da logo

    // Envia a imagem gerada
    res.setHeader('Content-Type', 'image/png');
    canvas.pngStream().pipe(res);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
