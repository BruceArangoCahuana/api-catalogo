const nodemailer = require('nodemailer');

const createTransport = () =>{
    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:'465',
        auth:{
            user:'brandoning123b@gmail.com',
            pass:'fxdnvhvjrhgrcblg',
        }
    });
    return  transporter;
}
 const sendMail = async(user)=>{
    const transporter = createTransport();
    const info =  await transporter.sendMail({
        from:"Barsand International<contacto@barsand.com.pe>",
        to:user.correo,
        subject:"Enviado prueba",
        html:`<h2><span style='text-transform:capitalize'>${user.nombre}</span> gracias por enviarnos tu consulta , en un momento te atenderemos</h2>`
    })
    
    return
 }

 exports.sendMail = (user) => sendMail(user)