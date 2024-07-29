import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
   const formData = await req.formData();
    const nome = formData.get('nome') as string;
    const email = formData.get('email') as string;
    const mensagem = formData.get('mensagem') as string;
    // Configuração do transporte de e-mail
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465 ,
        secury: true,
      auth: {
        user: process.env.EMAIL_USER, // Seu e-mail
        pass: process.env.EMAIL_PASS, // Sua senha ou App Password
      },
    });

    // Configuração da mensagem
    const mailOptions = {
      from: email, 
      to: process.env.EMAIL_USER, // E-mail para onde a mensagem será enviada
      subject: `Mensagem de ${nome}`,
      text: `Nome: ${nome} 
      E-mail: ${email} 
      Mensagem: ${mensagem}
      `,
    };
    try {
      await transporter.sendMail(mailOptions);
      //res.status(200).json({ message: 'E-mail enviado com sucesso' });
      return NextResponse.json({message: 'E-mail enviado com sucesso'}, { status: 200});
    } catch (error) {
      console.error(error);
      //res.status(500).json({ message: 'Erro ao enviar e-mail' });
      return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 });
    }
 
};
