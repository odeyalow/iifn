import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { phone } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      }
    });

    await transporter.verify();

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: "Новая заявка с ИИФН",
      text: `Пользователь отправил свой номер телефона для обратной связи с сайта ИИФН: ${phone}`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    return Response.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}