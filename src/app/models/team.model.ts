export class Team {
    public id:number;
    public nombre:string;
    public estadio:string;
    public sitioWeb:string;
    public nacionalidad:string;
    public fundacion:string;
    public entrenador:string;
    public capacidad:number;
    public valor:number;
    constructor(){
        this.id=0;
        this.estadio = '';
        this.nombre = '';
        this.sitioWeb = '';
        this.nacionalidad = '';
        this.fundacion = '';
        this.entrenador='';
        this.capacidad=0;
        this.valor = 0;

    }
    
}