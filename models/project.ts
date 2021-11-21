import { Schema, model } from 'mongoose';
import {Enum_EstadoProyecto, Enum_FaseProyecto} from './enums';
import { UserModel } from './user';

interface Proyecto{
    nombre: string;
    objetivosGenerales: string;
    objetivosEspecificos: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    lider: Schema.Types.ObjectId;
    estado: Enum_EstadoProyecto;
    fase: Enum_FaseProyecto;
    
}

const projectSchema = new Schema<Proyecto>({

    nombre: {
        type: String,
        required: true,
        unique:true,
    },
    objetivosGenerales:{
        type: String,
        required: true,
    },
    objetivosEspecificos:{
        type: String,
        required: true,
    },
    presupuesto:{
        type: Number,
        required: true,
    },
    fechaInicio:{
        type: Date,
        required: true,
    },
    fechaFin:{
        type: Date,
        required: true,
    },
    lider: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    },
    estado: {
        type: String,
        enum: Enum_EstadoProyecto,
        default: Enum_EstadoProyecto.inactivo,
    },
    fase: {
        type: String,
        enum: Enum_FaseProyecto,
        default: Enum_FaseProyecto.nula
    }


});


const ProjectModel = model('Proyecto',projectSchema, 'proyectos');

export {ProjectModel};
