let litrosNecessarios;
let latas18;
let galoes;
let areaQuadrada;
let custosLatas18;
let custosGaloes;
let latasParaMistura;
let litrosRestantes
let galoesParaMistura
let custoMistura
let situacao 

alert("Digite 1 para latas de 18 Litros \n" + "Digite 2 para galões \n " + "Digite 3 para latas e galões ")

areaQuadrada = parseFloat(prompt("Digite o metro quadrado"));

litrosNecessarios = Math.ceil(areaQuadrada/ 6 * 1.1);



situacao = parseInt(prompt('digite a situação desejada'));



    if(situacao==1){

        latas18 = Math.ceil(litrosNecessarios/18);
        custosLatas18 = latas18 * 80;

        alert(' Será necessario  um total de '  +  latas18  +  ' latas com um custos de R$ ' + custosLatas18);

      
    }
      
    
    else if(situacao==2){
        galoes = Math.ceil(litrosNecessarios/3.6);
        custosGaloes = galoes * 25;
        alert(' Será necessario  um total de '  + galoes  + ' galões com um custos de R$ ' + custosGaloes);
      
    } else if(situacao==3){

        latasParaMistura = Math.floor(litrosNecessarios/18);
        litrosRestantes = litrosNecessarios - (latasParaMistura * 18);
        galoesParaMistura = Math.ceil(litrosRestantes/3.6);
        custoMistura = (latasParaMistura * 80) + (galoesParaMistura * 25);

        alert('Será necessarios um total de ' +  latasParaMistura + ' latas  com um total de galões ' + galoesParaMistura + ' com um custo total R$ ' + custoMistura);

    

    } 



    else{
        alert('Nao foi possivel calcular o valor');
    
    }
