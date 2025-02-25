import { NextApiRequest } from 'next';
import { Resend } from "resend";

const resend = new Resend("re_ct4LRQR7_FoH3AJJtEYfPTFTFUBerfbz6");

export default async function handler(req: NextApiRequest,) {
  if (req.method  === "POST") {
      const { name, email, phone, business, website, budget, deadline } = req.body;

      try {
        // Envia o email usando o Resend API
        const emailSend = await resend.emails.send({
          from: "avejo.design@gmail.com", // Personalize com seu domínio autenticado
          to: email,
          subject: `Novo contato de ${name}`,
          text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nEmpresa: ${business}\nWebsite: ${website}\nOrçamento médio: ${budget}\nDeadline: ${deadline}`,
        });
  
        return new Response(
          JSON.stringify({ success: true, emailSend }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      } catch (error) {
        console.error('Erro ao enviar e-mail:', error);

        return new Response(
          JSON.stringify({ success: false, message: 'Erro ao enviar e-mail', error }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }
  } else {
    return new Response(
      JSON.stringify({ success: false, message: 'Método não permitido' }),
      { status: 405, headers: { 'Content-Type': 'application/json' } }
    );
  }
};