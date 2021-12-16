import nodemailer from "nodemailer";

export const sendEmail = async (to: string,asunto: string, html: string ): Promise<boolean> => {


    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "centroempleotest@gmail.com",
            pass: "sevhbkeywgxvpgzj"
        }
    });

    var mailOptions = {
        from: "Centro Empleo <centroempleotest@gmail.com>",
        to: to,
        subject: asunto,
        html: html
    }

    transporter.verify().then(() => {
        console.log('Ready for send emails');
    })

    transporter.sendMail(mailOptions, (error: any, info: any)  => {
        if (error) {
            return false
        } else {
            console.log("Email enviado");
            return true;
        }
    })
    return false;
}