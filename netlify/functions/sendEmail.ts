import { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Método não permitido" };
  }

  const { name, email, phone, business, website, budget, deadline } = JSON.parse(event.body || "{}");

  if (!name || !email || !phone || !business || !website || !budget || !deadline) {
    return { statusCode: 400, body: "Todos os campos são obrigatórios" };
  }

  const receiverEmail = process.env.RECEIVER_EMAIL;

  if (!receiverEmail) {
    return { statusCode: 500, body: "Erro: E-mail de destino não configurado." };
  }

  try {
    await resend.emails.send({
      from: "avejo.design@gmail.com", // Personalize com seu domínio autenticado
      to: receiverEmail,
      subject: `Novo contato de ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nEmpresa: ${business}\nWebsite: ${website}\nOrçamento médio: ${budget}\nDeadline: ${deadline}`,
    });

    return { statusCode: 200, body: "E-mail enviado com sucesso" };
  } catch {
    return { statusCode: 500, body: "Erro ao enviar o e-mail" };
  }
};

export { handler };