
function adicao(numero1, numero2, funcao){
    let soma = numero1 + numero2;

    funcao(soma);
}

adicao(4, 9, (sum)=>{
    console.log("O resultado final é: "+ sum);
})