
function sum(num,num2){
    let suma = num + num2;
    console.log("la suma de " + num + " y " + num2 + " es " + suma );
}
function multi(num,num2){
   let multi = num * num2;
   console.log("la multi de " + num + " y " + num2 + " es " + multi );
}
function div(num,num2){
  
    try {
        let dive  = num/num2;
        if (num2 ===0) {
            throw new Error("no se puede dividir por cero");
        }
        console.log("la division de " + num + " y " + num2 + " es " + dive );
    } catch (e) {
        console.log(e.message);
    }
}
function squareroot(num1){
   let n;
   let m;
   do{
        n = Math.floor(Math.random()*11);  
        m = Math.floor(Math.random()*11);
        let valor = n*m;
        if (n === m && n*m === num1) {
            console.log("la raiz cuadrada de " +num1 + " es " + m);
            break;
            
        }    
   }while(true);
}
function pot(num1, pot) {
  let valor = 1;
  for (let i = 0; i < pot; i++) {
    valor = valor *= num1;
    
  }
  console.log("la potencia de " +num1 + " es " + valor);
}


sum(2,2);
multi(4,4);
div(8,2);
squareroot(64);
pot(4,2);
