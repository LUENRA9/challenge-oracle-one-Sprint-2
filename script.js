
var arrayPalabras=["HTML","PDF","WORD","EXCEL","GOOGLE"]
document.addEventListener('keydown', function(event){
    alert(event);
} );
function cleanDisplay(){
   
    document.getElementById("tituloId").style="display:none;";
    document.getElementById("startGame").style="display:none;";
    document.getElementById("addWord").style="display:none;";
    index=Math.floor(Math.random() * 10);
    
    console.log(arrayPalabras[index]);
    var tamaño=tamañoPalabra(arrayPalabras[index]);
    var guiones="";
    while(tamaño>0){
        guiones+="    ___    ";
        tamaño--;
    }
    document.getElementById("guiones").innerHTML=guiones;
    
}

function tamañoPalabra(palabra){
    var tamaño=palabra.length;
    console.log(tamaño);
    return tamaño;
}

function myFunction(event) {
    var x = event.code;
    console.log(x);
  }