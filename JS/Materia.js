class Materia{
constructor(Codigo,Nombre,Aprobando,Descripcion){
    this.Codigo=Codigo;
    this.Nombre=Nombre;
    this.Aprobando=Aprobando;
    this.Descripcion=Descripcion;
}
constructor(){
    this.Codigo=null;
    this.Nombre=null;
    this.Aprobando=null;
    this.Descripcion=null;
}
get getCodigo(){
    return this.Codigo;
}
get getNombre(){
    return this.Nombre;
}
get getAprobando(){
    return this.Aprobando;
}
get getDescripcion(){
    return this.Descripcion;
}
set setCodigo(Codigo){
    this.Codigo=Codigo;
}
set setNombre(Nombre){
    this.Nombre=Nombre;
}
set setAprobando(Aprobando){
    this.Aprobando=Aprobando;
}
set setDescripcion(Descripcion){
    this.Descripcion=Descripcion;
}
}