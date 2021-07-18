export interface Carga {

    id:number;
    fecha_inicio:Date;
    fecha_fin:Date;
    curso_id:number;
    seccion_id:number;
    docente_id:number;
    curso:Array<string>;
    docente:Array<string>;
    seccion:Array<string>;
}