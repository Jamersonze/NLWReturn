import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

export const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "a6145ae4049882",
      pass: "63917e672f9b22"
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData){
    await transport.sendMail({
        from: 'Equipe Feedget <oi@fidget.com>',
        to: 'Jamerson Souza <galeto@gatomail.com>',
        subject,
        html: body
    })
    };
}