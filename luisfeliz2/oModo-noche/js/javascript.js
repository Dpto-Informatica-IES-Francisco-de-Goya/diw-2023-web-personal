const checkbox = document.getElementById('toggleTheme');
const body = document.getElementsByTagName('body');

checkbox.addEventListener('change', function () {
  if(body[0].classList.contains('tema-claro')){
    body[0].classList.replace('tema-claro','tema-oscuro')
  }else{
    body[0].classList.replace('tema-oscuro','tema-claro')
  }
});
class personaClass {
  constructor(nombre, edad) {
  this._nombre = nombre;
  this._edad = edad;
  }
  
  get edad() {
  return this._edad;
  }
  set edad(valor) {
  this._edad = valor;
  }
  cumplirAnos(incremento){
  this.edad = this.edad + incremento;
  }
  imprimirInfo() {
    console.log("Nombre :" + this._nombre);
    console.log("Edad : " + this._edad);
  }
  static confirmacion() {
  alert("Enhorabuena esta funcionando la clase Persona");
   }
  toString() {
   return this._nombre
   }
  valueOf() {
   return 99
   }
   }

