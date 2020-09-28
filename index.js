FUNCIONES

1)Crear una función obtenerNombreCompleto que tome como argumento un nombre y un apellido 
y devuelva un string con la unión de ambos valores

const obtenerNombreCompleto=(nombre,apellido)=>{
return nombre + apellido 
}
console.log(obtenerNombreCompleto("Maria ", "Nuñez"))

2)Crear una función saludar que tome como argumentos un nombre y devuelva un saludo que lo incluya.

const saludar=(nombre)=>{
return "Hola "+ nombre + ", un gusto conocerte"
}
console.log(saludar(obtenerNombreCompleto("Maria ", "Nuñez")))

3)Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo 
de exclamación al principio y al final del mismo

function gritar(str){
   return "¡" + str + "!" 
}
console.log(gritar("Hola Eugenia"))

4)Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), crear una función 
saludarGritando que tome como argumentos un nombre y un apellido y devuelva un saludo con signos 
de exclamación.

const nombre = obtenerNombreCompleto("Maria ", "Nuñez");
const saludo = saludar(nombre);
const grito = gritar(saludo);
console.log(grito)

5)Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, un número 
poblacion y un string pais y devuelva string con el siguiente formato: La ciudad de NOMBRE tiene una 
población de POBLACION habitantes y está ubicada en PAIS 

const obtenerDatosDeCiudad=(nombre,poblacion,pais)=>{
return "La ciudad de "+ nombre +" tiene una poblacion de "+poblacion+ " habitantes y esta ubicada 
 en "+pais 
}
console.log(obtenerDatosDeCiudad("Resistencia", "800.000", "Argentina"))

6)Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva 
la conversión a segundos de dicha cantidad de horas

const convertirHoraseEnSegundos=(horas)=>{
    return horas*3600
}

console.log(convertirHorasEnSegundos(3))

7)Crear una función calcularPuntaje que calcule el puntaje de un examen que consiste en ejercicios de 
distinto nivel. Debe tomar como argumento tres numeros que consisten en la cantidad de ejercicios 
resueltos en cada nivel y devolver un número con el puntaje correspondiente. 
El puntaje se calcula de la siguiente forma:
facil: 3 puntos
normal: 5 puntos
dificil: 10 punto

const calcularPuntaje=(facil,normal,dificil)=>{
    return (facil*3)+(normal*5)+(dificil*10)
}

console.log(calcularPuntaje(3,0,0))

8)Crear una función generarEmail que tome como argumentos dos string usuario y dominio y el un string 
email con el formato usuario@dominio.com

const generarEmail=(usuario,dominio)=>{
    return usuario+"@"+dominio+".com"
}
console.log(generarEmail("eugeiq","gmail"))

9)Crear una función obtenerCompetencia que tome como argumentos dos strings a y b y devuelva un string 
con el formato a vs. b

const obtenerCompetencia=(a,b)=>{
    return a+ " vs. "+b
}
let respuestaCompetencia=obtenerCompetencia("Malon","Roberto")
console.log(respuestaCompetencia)

10)FPS son cuadros por segundo (frames per second). Crear una una función calcularFPS que tome como 
argumentos una cantidad de cuadros por segundo y una cantidad de minutos, y devuelva cuántos cuadros 
hubo en esa cantidad de minutos

const calcularFPS=(fps,min)=>{
    return 60*min*fps
}
console.log(calcularFPS(10,2))

11)Crear una función calcularPorcentaje que tome como argumentos un número y un porcentaje y devuelva 
el valor del porcentaje correspondiente al número

const calcularPorcentaje=(numero,porcentaje)=>{
    return (porcentaje*numero/100)
}
console.log(calcularPorcentaje(100,15))
console.log(calcularPorcentaje(10,50))
console.log(calcularPorcentaje(200,10))

12)Crear una función calcularAreaTriangulo que tome como argumentos el ancho y el alto de un rectángulo 
y devuelva su perímetro

const calcularPerimetroRectangulo=(ancho,alto)=>{
    return 2*ancho + 2*alto
}
console.log(calcularPerimetroRectangulo(3.2,5))
console.log(calcularPerimetroRectangulo(10,20))

13)Crear una función dividir que tome como argumentos dos números y devuelva la división de ellos

const dividir=(a,b)=>{
    return a/b
}
console.log(dividir(100,2))

14)Crear una función restar que tome como argumentos dos números y devuelva la resta de ellos

const restar=(a,b)=>{
    return a-b
}
console.log(restar(10,-6))

15)Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo 
y devuelva el área del mismo

const calcularAreaTriangulo=(b,h)=>{
return b*h/2
}
console.log(calcularAreaTriangulo(10,6))

CONDICONALES II

1) Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano 
tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. 
Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.


const puedeVerPelicula=(edad, tieneAutorizacion)=>{
    if(edad>= 15 || tieneAutorizacion){
        return  true
    }
    else{
        return false
    }

}
 
console.log(puedeVerPelicula(14,true))

2)Crear una función estaEnRango que tome como argumentos tres números, un valor, 
un número minimo y un número maximo, y devuelva true si el valor se encuentra entre 
los números minimo y maximo o false si no (si el valor es igual a uno de los extremos 
se considera que está dentro del rango)

const estaEnRango = (valor, min, max) => {
    if (min < max) {
        if (valor >= min && valor <= max){
            return true
        }
        else {
            return false
        }
    }
    else{
        console.log("El intervalo no esta definido")
    }
}


console.log(estaEnRango(15, 10, 25))
console.log(estaEnRango(100, 10, 30))
console.log(estaEnRango(20,30,15))

3)Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que 
representen una jugada (piedra, papel, tijera) y dependiendo del resultado, que devuelva un string con un 
mensaje avisando qué jugada ganó (o si hubo empate)

const jugarPiedraPapelTijera =(a,b)=>{
    if(a==b){
        return "Empate!!"
    }
    else{
        if((a==="papel" && b==="piedra")|| (a==="piedra" && b==="papel")){
            return "Gano papel!"
        }
        else if((a==="papel" && b==="tijera")||(a==="tijera" && b==="papel")){
            return "Gano tijera!!"
        }
        else if((a==="piedra" && b==="tijera")||(a==="tijera" && b==="piedra")){
            return "Gano piedra!!"
        }
        else{
            return "Error!"
        }

    }
}
console.log(jugarPiedraPapelTijera("tijera","piedra"))

4) Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un 
string dependiendo del puntaje, con las siguientes reglas:

Puntaje	Nota
Menor a 6	Desaprobado
Mayor o igual a 6 y menor a 7	Regular
Mayor o igual a 7 y menor a 8	Bueno
Mayor o igual a entre 8 y menor a 10	Muy bueno
10	Excelente
Menor a 0 o mayor a 10	Puntaje inválido


const obtenerNota = (puntaje) => {
    if (puntaje < 0 || puntaje > 10) {
        return "Puntaje invalido"
    }
    else {
        if (puntaje < 6) {
            return "Desaprobado"
        }
        else if (puntaje >= 6 && puntaje < 7) {
            return "Regular"
        }
        else if (puntaje >= 7 && puntaje < 8) {
            return "Bueno"
        }
        else if (puntaje >= 8 && puntaje < 10) {
            return "Muy bueno"
        }
        else if (puntaje = 10) {
            return "Excelente"
        }
    }
}
console.log(obtenerNota(3))

5)Crear una función puedeGraduarse que tome como argumentos dos números asistencia y 
materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse 
o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas 
o más y la tesis aprobada.


const puedeGraduarse= (asistencia,materiasAprobadas,tesisAprobada) =>{
    if(asistencia>=75 && materiasAprobadas>=50 && tesisAprobada){
        return true
    }
    else {
        return false
    }
}
if (puedeGraduarse(60,49,true)){
    console.log("Puede graduarse")
}
else{
    console.log("No puede graduarse")
}
5) Crear una función esParOImpar que acepte como argumento un numero y devuelva el string 
par si el numero es par, o el string impar si el numero es impar

Tip: Investigá sobre el operador módulo % 

const esParOImpar =(num)=>{
    if(num % 2 == 0){
        return "Par"
    }
    else{
        return "Impar"
    }
}
console.log(esParOImpar(0))

6)Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y 
devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver 
un string que diga: Error: color de semáforo inválido

const puedeAvanzar=(str)=>{
    if (str=="verde" || str=="amarillo"){
        return true
    }
    else if( str=="rojo"){
        return false
    }
    else{
        return "Error:color de semaforo invalido"
    }

}
console.log(puedeAvanzar("marron"))

7)Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es 
una vocal o false si no lo es.

const esVocal=(letra)=>{
    if (letra=="a" || letra== "e" ||letra=="i" ||letra=="o" ||letra=="u"){
        return true
    }
    else{
        return false
    }
}
console.log(esVocal("z"))

8) Crear una función esConsonante que tome como argumento un string letra y devuelva true si 
letra es una consonante o false si no lo es

const esVocal=(letra)=>{
    if (letra=="a" || letra== "e" ||letra=="i" ||letra=="o" ||letra=="u"){
        return true
    }
    else{
        return false
    }
}

const esConsonante=(letra)=>{
    if(esVocal(letra)){
        return false
    }
    else{
        return true
    }
    
}
console.log(esConsonante("c"))

9) Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, 
tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar 
su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, 
no tiene multas impagas y pagó todos los impuestos

const puedeRenovarCarnet=(pasoTest,tieneMultasImpagas,pagoImpuestos)=>{
    if(pasoTest===true && tieneMultasImpagas===false && pagoImpuestos===true){
        return true
    }
    else{
        return false
    }
}
console.log(puedeRenovarCarnet(true,false,true))

10)Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el 
string positivo si el numero es positivo,  o el string negativo si el numero es negativo 

const esPositivoONegativo=(num)=>{
    if(num>0){
        return "Positivo"
    }
    else if(num==0){
        return "El numero es 0"
    }
    else{
        return "Negativo"
    }
}
console.log(esPositivoONegativo(190))

11)Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva 
un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde

const avanzarSemaforo=(colorActual)=>{
    if(colorActual=="verde"){
        return "Amarillo"
    }
    else if(colorActual=="amarillo"){
        return "Rojo"
    }
    else if(colorActual=="rojo"){
        return "Verde"
    }
    else{
        return "No es un color del semaforo"
    }
}
console.log(avanzarSemaforo("amarillo"))

12)Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un 
string dependiendo de la temperatura, con las siguientes reglas:
Temperatura	Mensaje
Menor a 0°	¡Está helando!
Mayor o igual a 0° y menor a 15°	¡Hace frío!
Mayor o igual a 15° y menor a 25°	Está lindo
Mayor o igual a entre 25° y menor a 30°	Hace calor
Mayor o igual de 30°	¡Hace mucho calor!


const obtenerSensacion=(temperatura)=>{
    if(temperatura<0){
        return "Esta helando!"
    }
    else if(temperatura>=0 && temperatura<15){
        return "Hace frio!"
    }
    else if(temperatura>=15 && temperatura<25){
        return "Esta lindo"
    }
    else if(temperatura>=25 && temperatura<30){
        return "Hace calor"
    }
    else {
        return "Hace mucho calor!"
    }

}
console.log(obtenerSensacion(49))