import conectarBD from './db/db';
import { UserModel } from './models/user'; 
import { Enum_Rol, Enum_FaseProyecto, Enum_EstadoProyecto,Enum_EstadoInscripcion } from './models/enums';
import { ProjectModel } from './models/project';


const main = async()=>{
    await conectarBD(); 
    


    // CREAR UN PROYECTO

        // ProjectModel.create({

        //     nombre: "prueba3",
        //     objetivosGenerales: "letras",
        //     objetivosEspecificos: "cositas varias",
        //     presupuesto: "12456",
        //     fechaInicio: "2021-11-12",
        //     fechaFin: "2021-12-14",
        //     lider: "6198404915b34712ecd3d4a7",
        //     estado: Enum_EstadoProyecto.activo,
        //     fase: Enum_FaseProyecto.desarrollo,
        //     inscripciones: Enum_EstadoInscripcion.aceptada,
        //     avances: "prueba",
        // })
        //     .then((u) => {
        //         console.error('proyecto creado', u)
        //     })
        //     .catch((e) => {
        //         console.error('Error creando proyecto', e)
        //     }); 


            // OBTENER LOS PROYECTOS

            // ProjectModel.find().then((u) => {
            //     console.log('proyectos', u);
            // }).catch((e) => {
            //     console.error('Error obteniendo los proyectos', e)
            // }); 


//     EDITAR UN PROYECTO
    
    ProjectModel.findOneAndUpdate({
        nombre: 'prueba3'
    }, {
        nombre: 'proyecto de vida',
        objetivos: 'puro blabla'
    })
    .then((u) => {
        console.error('proyecto creado', u)
    })
    .catch((e) => {
        console.error('Error creando proyecto', e)
    });
    
//     ELIMINAR PROYECTO
//     ProjectModel.findOneAndDelete({nombre: 'prueba1'})
//         .then((u) => {
//             console.error('proyecto eliminado', u)
//         })
//         .catch((e) => {
//             console.error('Error eliminando proyecto', e)
//         });

// };



// CRUD USUARIOS


// CREAR USUARIO

//     UserModel.create({
//         nombre:"miguel",
//         apellido:"Salazar",
//         identificacion:"345888",
//         rol:Enum_Rol.lider,
//         correo:"antcds@gmail.com",
        
        
//     })
//     .then((u) =>{
//         console.log('usuario creado', u);

//     })
//     .catch((e)=>{
//         console.error('Error creando el usuario',e);
//     }); 

//     /OBTENER LOS USUARIOS

//     await UserModel.find().then((u)=>{
//         console.log('usuarios',u);
//     }).catch(e=>{
//         console.error('error obteniendo los usuarios',e);
//     })  

//     OBTENER UN SOLO USUARIO

//     await UserModel.findOne({identificacion:"10203050"})
//     .then((u)=>{
//         console.log('usuario encontrado',u);
//     })
//     .catch((e)=>{
//         console.error(e);
//     });

//     EDITAR UN USUARIO

//         await UserModel.findOneAndUpdate(
//         {correo:'miguel@hotmail.com'},
//         {
//         nombre:'juan',
//     }).then((u)=>{
//         console.log('usuario actualizado',u);

//     }).catch(e=>{
//         console.error('error actualizando',e)
//     });

//     ELIMINAR USUARIO
    
//     await UserModel.findOneAndDelete({correo:'miguel@hotmail.com'})
//     .then((u)=>{
//         console.log('usuario eliminado',u);
//     })
//     .catch((e)=>{
//         console.error(e);
//     });

}

main();