import { connect } from 'mongoose';
//const { connect } = require('mongoose');

const conectarBD = async()=>{
    return await connect(
        'mongodb+srv://masp:masp4040@cluster0.osvwc.mongodb.net/proyectos?retryWrites=true&w=majority'
    )
    .then(()=>{
        console.log('Conexion exitosa');
    })
    .catch(e=>{
        console.error('Error conectando a la bd',e);
    });
};

export default conectarBD;