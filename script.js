// esto agrega a la pantalla el valor del boton de la calculadora que toquemos
function agregar(valor){
    document.getElementById('pantalla').value += valor
}
// esta accion vacia la pantalla 
function borrar(){
    document.getElementById('pantalla').value = ""
}
// esta accion toma el valor de la pantalla y ejecuta los calculos
function resultado(){
    const valorPantalla = document.getElementById('pantalla').value
    const calcular = eval(valorPantalla)
    document.getElementById('pantalla').value = calcular
}
