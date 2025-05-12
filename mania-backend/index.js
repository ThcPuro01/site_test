require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/enviar-pedido', async (req, res) => {
  const { nome, email, produto, quantidade, mensagem } = req.body;

  const mailOptions = {
    from: 'mania@sonho.com',
    to: `${email}, ${process.env.EMAIL_USER}`,
    subject: 'Pedido Recebido - Mania de Sonho',
    text: `Olá ${nome},

Seu pedido foi recebido! 🎉

🍰 Produto: ${produto}
🔢 Quantidade: ${quantidade}
📝 Mensagem: ${mensagem || 'Nenhuma mensagem adicionada'}

Agradecemos pela preferência 💖
Equipe Mania de Sonho.
`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Pedido enviado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Erro ao enviar e-mail.' });
  }
});

app.post('/enviar-feedback', async (req, res) => {
  const { nome, email, mensagem } = req.body;

  const mailOptions = {
    from: 'mania@sonho.com',
    to: email,
    subject: 'Obrigado pelo seu feedback!',
    text: `Olá ${nome},

Agradecemos pelo seu feedback! 🙏

📝 Mensagem: ${mensagem}

Sua opinião é muito importante para nós.

Atenciosamente,
Equipe Mania de Sonho.
`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Feedback enviado com sucesso! Obrigado pelo seu retorno.' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Erro ao enviar feedback.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
