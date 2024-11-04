var altura = parseFloat(prompt("Informe a sua altura: "))
var sexo = prompt("Informe o seu gênero(Feminino ou Masculino) : ")
var peso = prompt("Informe o seu peso: ")
var pesoidealf
var pesoidealm
if (sexo = "Feminino"){
 pesoidealf = (62.1*altura)-44.7

 if(peso<pesoidealf){
    alert("Você está abaixo do peso "+ peso )
    alert("O seu peso ideal é: "+pesoidealf.toFixed(1))

 }
 if(peso=pesoidealf){
  alert("Você está dentro do peso "+peso.toFixed(1))
  alert("O seu peso ideal é: "+pesoidealf.toFixed(1))
 }
 else if (peso>pesoidealf){
    alert("Você está acima do peso "+peso)
    alert("O seu peso ideal é : "+pesoidealf.toFixed(1))
 }


}
else if(sexo = "Masculino"){
    pesoidealm = (72.7*altura)-58
if(peso<pesoidealm)
        alert("Você está abaixo do peso: "+peso)
        alert("O seu peso ideal é: "+pesoidealm.toFixed(1))
if(peso = pesoidealm){
    alert(pesoidealm)
}
        
}
        

