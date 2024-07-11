export default class CL_Personas{
    constructor(){
        this.contpersonas=0;
        this.conthombres=0;
        this.contmujeres=0;
    }

    procesarpersonas(pe){
        this.contpersonas++;
        if(pe.sexo==='M'){
            this.conthombres++;
        }
        else{
            this.contmujeres++;
        }
    }
}