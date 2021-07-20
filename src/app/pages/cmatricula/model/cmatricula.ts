export interface Cmatricula {

    id:string;
    cod_matricula:string;
    confirmación:string;
    periodo_id:number;
    alumno_id:number;
    representante_id:number;
    alumno:Array<string>;
    representante:Array<string>;
    periodo:Array<string>;
}