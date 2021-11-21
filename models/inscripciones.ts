import {Schema, model, Date} from 'mongoose';
import {Enum_EstadoInscripcion} from './enums';
import { UserModel } from './user';
import { ProjectModel} from './project';

interface Inscription{
    proyecto:Schema.Types.ObjectId;
    estudiante:Schema.Types.ObjectId;
    estado:Enum_EstadoInscripcion;
    fechaIngreso: Date;
    fechaEgreso: Date;
}

const InscriptionSchema = new Schema<Inscription>({
    estado: {
        type: String,
        enum: Enum_EstadoInscripcion,
        default: Enum_EstadoInscripcion.pendiente,
        required: true,
    },

    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true,
    },

    estudiante: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },

    fechaIngreso: {
        required: true,
    },
    
    fechaEgreso: {
        required: true,
    },

});

const InscriptionModel = model('Inscripcion', InscriptionSchema);

export {InscriptionModel}