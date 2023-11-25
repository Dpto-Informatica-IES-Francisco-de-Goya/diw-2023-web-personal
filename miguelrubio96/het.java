package coche;
import java.util.*;
public class Uso_empleado {

public static void main(String[] args) {

/* empleado empleado1= new empleado("Paco",85000,1990,12,17);
empleado empleado2= new empleado("Eva",95000,1995,06,02);
empleado empleado3= new empleado("María",105000,2002,03,15);

empleado1.subeSueldo(5);
empleado2.subeSueldo(5);
empleado3.subeSueldo(5);

System.out.println("Nombre: "+empleado1.dameNombre() + " Sueldo " + empleado1.dameSueldo() + "Fecha de Alta " + empleado1.dameFechaContrato());
System.out.println("Nombre: "+empleado2.dameNombre() + " Sueldo " + empleado2.dameSueldo() + "Fecha de Alta " + empleado2.dameFechaContrato());

System.out.println("Nombre: "+empleado3.dameNombre() + " Sueldo " + empleado3.dameSueldo() + "Fecha de Alta " + empleado3.dameFechaContrato());
*/
empleado[] misEmpleados= new empleado[5];
jefatura jefe= new jefatura("juan",55000,2006,9,25);
jefe.dameSueldo(2570.0);
misEmpleados[0]= new empleado("paco",85000,1990,12,17);
misEmpleados[1]= new empleado("eva",95000,1995,06,02);
misEmpleados[2]= new empleado("maria",105000,2002,03,15);
misEmpleados[3] = new empleado("juan");
misEmpleados[4] =jefe;
for(empleado e: misEmpleados) {
e.subeSueldo(5);
}
for(empleado e: misEmpleados) {
System.out.println("Nombre: " +e.dameNombre()+ " Sueldo: "+ e.dameSueldo()+ "Fecha de alta: "+ e.dameFechaContrato());
}
}


}
class empleado{

public empleado(String nom, double sue, int agno,int mes,int dia) {//los constructores tienen el mismo nombre que la clase

nombre=nom;
sueldo=sue;
GregorianCalendar calendario= new GregorianCalendar(agno,mes-1,dia);
altaContrato=calendario.getTime();
}
public empleado(String nom) {
this(nom,30000,2000,01,01);//en este caso  este constructor solo tiene un campo el resto de parametros los coge del otro constructor que está arriba
}
public double dameSueldo() {
return sueldo;
}
public Date dameFechaContrato(){
return altaContrato;

}
public String dameNombre(){
return nombre;
}
public void subeSueldo(double porcentaje) {
double aumento=sueldo*porcentaje/100;
sueldo+=aumento;
}

private String nombre;
private double sueldo;
private Date altaContrato;


}
   class jefatura extends empleado{
public jefatura(String nom,double sue, int agno,int mes, int dia) {
super(nom,sue,agno,mes,dia);
}
public void estableceincentivo(double b) {

}
public  double dameSueldo(double b) {
double sueldoJefe=super.dameSueldo();
return sueldoJefe+incentivo;
}
private double incentivo;

}

