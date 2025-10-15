import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: "tdmids10@gmail.com",
      subject: `Ново запитване от ${data.firstName}`,
      html: `
        <p><strong>Име:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Телефон:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Пакет:</strong> ${data.packageType}</p>
        <p><strong>Тип имот:</strong> ${data.propertyType}</p>
        <p><strong>Строителство:</strong> ${data.constructionType}</p>
        <p><strong>Съобщение:</strong> ${data.message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
