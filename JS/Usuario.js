class Usuario{
constructor(Correo,Nombre, Contraseña){
    this.Correo=Correo;
    this.Contraseña=Contraseña;
    this.Nombre=Nombre;
}
constructor(){
    this.Correo=null;
    this.Nombre=null;
    this.Contraseña=null;
}
get getCorreo(){
    return this.Correo;
}
get getNombre(){
return this.Nombre;
}
get getContraseña(){
    return this.Contraseña;
}

set setCorreo(Correo){
    this.Correo=Correo;
}

set setNombre(Nombre){
    this.getNombre=Nombre;
}

set setContraseña(Contraseña){
    this.Contraseña=Contraseña;
}

}

class Datos_Academicos extends Usuario{
    constructor(Nombre,Correo,Contraseña,Carrera,Institucion){
        super(Correo,Nombre,Contraseña);
        this.Carrera=Carrera;
        this.Institucion=Institucion;
    }
    get getCarrera(){
        return this.getCarrera;
    }
    get getInstitucion(){
        return this.Institucion;
}
set setCarrera(Carrera){
    this.Carrera=Carrera;
}

set setInstitucion(Institucion){
this.Institucion=Institucion;    
}

}
