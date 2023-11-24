//claro oscuro
const body = document.getElementsByTagName('body');

function cambio(){
    if (body[0].classList.contains("tema-claro")) {
        body[0].classList.replace("tema-claro","tema-oscuro")

    }else{
        body[0].classList.replace("tema-oscuro","tema-claro")
    }
}

//iluminar botones footer

    let sombra=document.getElementsByClassName("mb");

    for (let i = 0; i < sombra.length; i++) {
        sombra[i].addEventListener('mouseover', iluminacion);
        sombra[i].addEventListener('mouseout', apagado);
    }
    
function iluminacion(){
    this.style.boxShadow = '0 0 20px yellow';
}

function apagado() {
    this.style.boxShadow = '0 0 10px rgba(255, 0, 0, 1)';
}

//pasar que cada boton muestre el texto

let boton =document.getElementsByClassName('c');
    
        boton[0].addEventListener('click', mostrar1);
        boton[1].addEventListener('click', mostrar2);
        boton[2].addEventListener('click', mostrar3);
        boton[3].addEventListener('click', mostrar4);
    

let t1=document.getElementById('texto1');
let t2=document.getElementById('texto2');
let t3=document.getElementById('texto3');
let t4=document.getElementById('texto4');
function mostrar1() {
  
    t1.style.display="block";
    t2.style.display="none";
    t3.style.display="none";
    t4.style.display="none";
  
  }

function mostrar2() {
  
  t1.style.display="none";
  t2.style.display="block";
  t3.style.display="none";
  t4.style.display="none";

}function mostrar3() {
  
    t1.style.display="none";
    t2.style.display="none";
    t3.style.display="block";
    t4.style.display="none";
  
  }function mostrar4() {
  
    t1.style.display="none";
    t2.style.display="none";
    t3.style.display="none";
    t4.style.display="block";
  
  }


