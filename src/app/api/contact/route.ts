import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    try {
        // 1️⃣ Email de notification pour toi
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "sarbid.naivolala@gmail.com",
            subject: `Nouveau message de ${name}`,
            html: `
        <h2>Nouveau message depuis ton portfolio</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
        });

        // 2️⃣ Email de confirmation automatique à l'envoyeur
        await resend.emails.send({
            from: "Sarobidy <onboarding@resend.dev>",
            to: email,
            subject: "Message bien reçu ✅",
            html: `
        <p>Bonjour ${name},</p>
        <p>Merci pour votre message ! Je l'ai bien reçu et je vous répondrai dans les plus brefs délais.</p>
        <br/>
        <p>Cordialement,</p>
        <p><strong>Sarobidy Randrianjarihanta</strong></p>
        <p>Développeur Web</p>
      `,
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
    }
}