var h=parseFloat(prompt("informe a sua altura: "))
//var sexo = prompt("Informe o seu sexo: ")
var pesoatual=parseFloat(prompt("Me informe o seu peso atual: "))
var imc = pesoatual/(h*h)
console.log(imc)
//var masculina = (72.7*h)-58
//var feminina=(62.1*h)-44.7
if(imc<18){
alert("Você está abaixo do peso"+imc.toFixed(1))

}
    else {
        alert("Você está acima do peso"+imc.toFixed(1))
   
    
}