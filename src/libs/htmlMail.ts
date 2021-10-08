import { Empresa } from "../models/Empresa";

require('dotenv').config()

export const resetTemplate = (token: string): string =>  {
    console.log(process.env.URL+`/cambiarContrasenia?token=`+token);
    var htmlTemplate=`
    
<!doctype html>
<html lang="en-US">

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Reset Password Email Template</title>
    <meta name="description" content="Reset Password Email Template.">
    <style type="text/css">
        a:hover {text-decoration: none !important;}
    </style>
</head>

<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
    <!--100% body table-->
 <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8" style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
   <tr>
       <td>
           <table style="background-color: #f2f3f8; max-width:670px; margin:0 auto;" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
               <tr>
                  <td style="height:80px;">&nbsp;</td>
               </tr>
               <tr>
                  <td style="height:20px;">&nbsp;</td>
                </tr>
                <tr>
                  <td>
                <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" style="max-width:670px;background:#fff; border-radius:3px; text-align: center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                     <tr>
                         <td style="height:40px;">&nbsp;</td>
                     </tr>
                     <tr>
                        <td style="padding:0 35px;">
                           <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif; color:mediumseagreen;">Recuperar cuenta</h1>
                           <span style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                  <div style="color:#455056; font-size:18px;line-height:24px; margin:0; text-align:left;">
                      
                  <div class="alertHeader" style="margin:10px auto; color:rgb(97, 156, 124);">
                    <h3>Hola, ¿solicitaste restablecer tu contraseña?</h3>

                    <p>
                        Alguien nos ha solicitado restablecer la contraseña de tu cuenta de Centro Empleo. Haz clic en el siguiente botón para hacerlo. Si no solicitaste restablecer la contraseña, puedes ignorar este mensaje.                    </p>
                </div>
                    <br>

                <div class="alertFooter" style="margin-top:20px;">
                    <a href="`+process.env.URL as string+`/cambiarContrasenia?token=`+token+`" style="border:1px solid mediumseagreen; padding:20px;text-decoration:none;border-radius:26px;color:#fff;background:mediumseagreen;">Restablecer contraseña</a>
                </div>
                  </div>

                        </td>
                      </tr>
                      <tr>
                           <td style="height:40px;">&nbsp;</td>
                       </tr>
                 </table>
               </td>
               <tr>
                   <td style="height:20px;">&nbsp;</td>
                </tr>
               <tr>
               <td style="text-align:center;">
                <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>Derechos de autor 2021 Centro Comercial e Industrial</strong></p>
                          
                </td>
                      
                </tr>
                <tr>
                   <td style="height:80px;">&nbsp;</td>
                </tr>
                </table>
            </td>
        </tr>
    </table>
    <!--/100% body table-->
</body>

</html>`;
    
    return htmlTemplate
}

export const nuevaEmpresa = (empresa: Empresa): string => {
    return `
    <!doctype html>
<html lang="en-US">

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta name="description" content="Reset Password Email Template.">
    <style type="text/css">
        a:hover {
            text-decoration: none !important;
        }
    </style>
</head>

<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
    <!--100% body table-->
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
        style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
        <tr>
            <td>
                <table style="background-color: #f2f3f8; max-width:670px; margin:0 auto;" width="100%" border="0"
                    align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                style="max-width:670px;background:#fff; border-radius:3px; text-align: center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding:0 35px;">
                                        <h1
                                            style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif; color:mediumseagreen;">
                                            Nueva Empresa desea ingresar</h1>
                                        <span
                                            style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                        <div
                                            style="color:#455056; font-size:18px;line-height:24px; margin:0; text-align:left;">

                                            <div class="alertHeader" style="margin:10px auto; color:rgb(97, 156, 124);">
                                                <h3>Buenas administrador, una nueva empresa desea ingresar a Centro
                                                    Empleo</h3>
                                                <p>
                                                    Una empresa no registrada con anterioridad desea ingresar a la
                                                    plataforma. Sus datos proporcionados son los siguientes...
                                                </p>
                                                <h5>
                                                    RUT: `+empresa.rut+`
                                                </h5>
                                                <h5>
                                                    Razon Social: `+empresa.razonSocial+`
                                                </h5>
                                                <h5>
                                                    Nombre: `+empresa.nombreFantasia+`
                                                </h5>
                                                <h5>
                                                    Teléfono: `+empresa.telefono+`
                                                </h5>
                                                <h5>
                                                    Email: `+empresa.email+`
                                                </h5>
                                                <h5>
                                                    Localidad: `+empresa.localidad?.nombre+`, `+empresa.localidad?.departamento.nombre+`
                                                </h5>
                                            </div>
                                            <br>

                                            <div class="alertFooter" style="margin-top:20px;">
                                                <a href="`+process.env.URL as string+` "
                                                    style="border:1px solid mediumseagreen; padding:20px;text-decoration:none;border-radius:26px;color:#fff;background:mediumseagreen;">Ir a Centro Empleo</a>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                            <p
                                style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">
                                &copy; <strong>Derechos de autor 2021 Centro Comercial e Industrial</strong></p>

                        </td>

                    </tr>
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <!--/100% body table-->
</body>

</html>`
}

export const accesoEmpresa = (empresa: Empresa): string => {
    return `<!doctype html>
    <html lang="en-US">
    
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta name="description" content="Reset Password Email Template.">
        <style type="text/css">
            a:hover {
                text-decoration: none !important;
            }
        </style>
    </head>
    
    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
        <!--100% body table-->
        <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
            style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
            <tr>
                <td>
                    <table style="background-color: #f2f3f8; max-width:670px; margin:0 auto;" width="100%" border="0"
                        align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="height:80px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                    style="max-width:670px;background:#fff; border-radius:3px; text-align: center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0 35px;">
                                            <h1
                                                style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif; color:mediumseagreen;">
                                                Empresa solicita acceso</h1>
                                            <span
                                                style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                            <div
                                                style="color:#455056; font-size:18px;line-height:24px; margin:0; text-align:left;">
    
                                                <div class="alertHeader" style="margin:10px auto; color:rgb(97, 156, 124);">
                                                    <h3>Buenas administrador, una empresa conocida desea ingresar a Centro
                                                        Empleo</h3>
                                                    <p>
                                                        La empresa de RUT `+empresa.rut+` desea acceder a Centro Empleo, si desea comunicarse con la misma sus datos de contacto se muestran más adelante.
                                                    </p>
                                                    <h5>
                                                        Teléfono: `+empresa.telefono+`
                                                    </h5>
                                                    <h5>
                                                        Email: `+empresa.email+`
                                                    </h5>
                                                </div>
                                                <br>
    
                                                <div class="alertFooter" style="margin-top:20px;">
                                                    <a href="`+process.env.URL as string+` "
                                                        style="border:1px solid mediumseagreen; padding:20px;text-decoration:none;border-radius:26px;color:#fff;background:mediumseagreen;">Ir a Centro Empleo</a>
                                                </div>
                                            </div>
    
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">
                                <p
                                    style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">
                                    &copy; <strong>Derechos de autor 2021 Centro Comercial e Industrial</strong></p>
    
                            </td>
    
                        </tr>
                        <tr>
                            <td style="height:80px;">&nbsp;</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <!--/100% body table-->
    </body>
    
    </html>`
}