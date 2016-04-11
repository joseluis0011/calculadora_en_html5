/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function factorial(a) {
    var r = 1;
    n = 1;
    while (n <= a) {
        r = r * (n);
        n = n + 1;
    }
    return r;
    var res = prompt("Ingresar numero: ");
    var b = factorial(res);
    alert(b);
}
function mostrar() {
    var nom = document.getElementById("nombre").value;
    alert("Bienvenido " + nom + "!!!");
}
function raiz() {
    var num = Math.sqrt(document.getElementById("numero").value);
    document.getElementById("res").innerHTML = "El resultado es: " + num;

}
var s = 0;
function escribir(a) {
    var pantalla = document.getElementById("entrada");
//    var texto = pantalla.firstChild;
    var resultado;
    if (s == 0) {
        switch (a) {
            case '=':
            {
                break;
            }
            default:
            {
                document.getElementById("entrada").innerHTML = a;
                break;
            }
        }
    }
    else {
        switch (a) {
            case '=':
            {
                resultado = eval(pantalla.innerHTML);
                pantalla = resultado;
                document.getElementById("entrada").innerHTML = pantalla;
                break;
            }
            default:
            {
                document.getElementById("entrada").innerHTML = pantalla.innerHTML + a;
                break;
            }
        }
    }
    s=1;
}
function limpiar(){
    document.getElementById("entrada").innerHTML =' ';
    s=0;
}