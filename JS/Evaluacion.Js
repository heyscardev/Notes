class Corte{
    constructor(Codigo_Corte,Porcentaje_Total,Nota_F){
        this.Codigo_Corte=Codigo_Corte;
        this.Porcentaje_Total=Porcentaje_Total;
        this.Nota_F=Nota_F;
    }
    constructor(){
        this.Codigo_Corte=null;
        this.Porcentaje_Total=null;
        this.Nota_F=null;
    }
    get getCodigo_Corte(){
        return this.Codigo_Corte;
    }
    get getPorcentaje_total(){
        return this.Porcentaje_Total;
    }
    get getNota_F(){
        return this.Nota_F;
    }
    set setCodigo_Corte(Codigo_Corte){
        this.Codigo_Corte=Codigo_Corte;
    }
    set setPorcentaje_Total(Porcentaje_Total){
        this.Porcentaje_Total=Porcentaje_Total;
    }
    set setNota_F(Nota_F){
        this.Nota_F=Nota_F;
    }
}



class Evaluacion extends Corte{
constructor(Codigo_Corte,Porcentaje_Total,Nota_F,Codigo,Nota,Porcentaje,Nota_final){
    super(Codigo_Corte,Porcentaje_Total,Nota_F);
    this.Codigo=Codigo;
    this.Porcentaje=Porcentaje;
    this.Nota=Nota;
    this.Nota_final=Nota_final;
}
constructor(){
    this.Codigo=null;
    this.Porcentaje=null;
    this.Nota=null;
    this.Nota_final=null;
}

get getCodigo(){
    return this.Codigo;
}
get getPorcentaje(){
    return this.Porcentaje;
}
get getNota(){
    return this.Nota;
}
get getNota_final(){
    return this.Nota_final;
}
set setCodigo(Codigo){
    this.Codigo=Codigo;
}
set setPorcentaje(Porcentaje){
    this.Porcentaje=Porcentaje;
}
set setNota(Nota){
    this.Nota=Nota;
}
set setNota(Nota_final){
    this.Nota_final=Nota_final;
}
}

