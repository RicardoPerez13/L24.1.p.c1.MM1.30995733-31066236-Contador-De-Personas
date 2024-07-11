import CL_Persona from "./CL_Persona.js";
import CL_Personas from "./CL_Personas.js";

let perso1=new CL_Persona('Luis','M')
let perso2=new CL_Persona('Ana','F')
let perso3=new CL_Persona('Jose','M')
let perso4=new CL_Persona('Carmen','F')
let perso5=new CL_Persona('Rosa','F')
let perso6=new CL_Persona('Jose','M')
let perso7=new CL_Persona('Maria','F')
let perso8=new CL_Persona('Luz','F')
let perso9=new CL_Persona('Rafael','M')
let perso10=new CL_Persona('Liz','F')
let perso11=new CL_Persona('Marcos','M')
let perso12=new CL_Persona('Leo','M')

let personas=new CL_Personas

personas.procesarpersonas(perso1);
personas.procesarpersonas(perso2);
personas.procesarpersonas(perso3);
personas.procesarpersonas(perso4);
personas.procesarpersonas(perso5);
personas.procesarpersonas(perso6);
personas.procesarpersonas(perso7);
personas.procesarpersonas(perso8);
personas.procesarpersonas(perso9);
personas.procesarpersonas(perso10);
personas.procesarpersonas(perso11);
personas.procesarpersonas(perso12);

let salida=document.getElementById("salida")
salida.innerHTML="Report";
salida.innerHTML+="<br>Cantidad de personas: "+personas.contpersonas;
salida.innerHTML+="<br>Cantidad de hombres:"+personas.conthombres;
salida.innerHTML+="<br>Cantidad de mujeres:"+personas.contmujeres;
