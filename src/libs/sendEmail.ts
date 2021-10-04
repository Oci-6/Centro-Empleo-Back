import nodemailer from "nodemailer";

export const sendEmail = async (to: string,asunto: string, texto: string, html: string ): Promise<boolean> => {


    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "mauri3418@gmail.com",
            pass: "weqmlnjpcakcomld"
        }
    });

    var mailOptions = {
        from: "Centro empleo <mauri3418@gmail.com>",
        to: to,
        subject: asunto,
        html: html
    }

    transporter.verify().then(() => {
        console.log('Ready for send emails');
    })

    await transporter.sendMail(mailOptions, (error: any, info: any)  => {
        if (error) {
            return false
        } else {
            console.log("Email enviado");
            return true;
        }
    })
    return false;
}