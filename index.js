const express = require('express');
const { createCanvas } = require('canvas');

const app = express();

app.get('/webhook/aline', (req, res) => {
    const name = req.query.name || "Aline";
    const canvas = createCanvas(600, 400);
    const ctx = canvas.getContext('2d');

    // Fundo branco
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, 600, 400);

    // Texto
    ctx.fillStyle = '#000000';
    ctx.font = '30px Arial';
    ctx.fillText(`Olá, ${name}!`, 150, 200);

    // Retornar imagem
    res.setHeader('Content-Type', 'image/png');
    canvas.createPNGStream().pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
