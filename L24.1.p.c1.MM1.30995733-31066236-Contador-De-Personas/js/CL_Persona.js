export default class CL_Persona{
    constructor(n,s){
        this.nombre=n;
        this.sexo=s;
    }

    set sexo(se){
        return this._sexo=se;
        }
        
        get sexo(){
        return this._sexo;
        }

    set nombre(no){
        return this._nombre=no;
        }
            
    get nombre(){
        return this._nombre;
         }
}