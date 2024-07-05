class Empleado {
    constructor(idEmpleado, nombre, apellido, fechaNacimiento, genero, direccion, telefono, email, fechaContratacion, cargo, departamento, salario, estado, foto) {
      (this.idEmpleado = idEmpleado),
      (this.nombre = nombre),
      (this.apellido = apellido),
      (this.fechaNacimiento = fechaNacimiento),
      (this.genero = genero),
      (this.direccion = direccion),
      (this.telefono = telefono),
      (this.email = email),
      (this.fechaContratacion = fechaContratacion),
      (this.cargo = cargo),
      (this.departamento = departamento),
      (this.salario = salario),
      (this.estado = estado),
      (this.foto = foto);
    }
  }
  
  export default Empleado;
