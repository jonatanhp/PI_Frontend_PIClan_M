export interface CargaA {

    id:number;
    crated_at:Date;
    updated_at:Date;
    curso_docente_seccion_id:number;
    contrato_matricula_id:number;
    alumno_id:number;
    curso:Array<string>;
    docente:Array<string>;
    seccion:Array<string>;
}