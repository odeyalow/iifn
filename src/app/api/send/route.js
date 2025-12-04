import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { phone } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: "Новая заявка с ИИФН",
      text: `Пользователь отправил свой номер: ${phone}, свяжитесь с ним!`,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}