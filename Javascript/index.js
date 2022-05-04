

function answer (){
    let option = prompt("Qual e sua resposta?")
    let maxTentativa = 2
    while (option.toLowerCase() != "a"
    && option.toLowerCase() != "b"
    && option.toLowerCase() != "c"
    && option.toLowerCase() != "d"){
        option = prompt("Resposta inexistente. Tente Novamente!")
    } 
    if(option.toLowerCase() == "a"){
        alert("VOCE ACERTOU, PROXIMA PERGUNTA")
    }else if (option.toLowerCase() == "b"){
         maxTentativa -= 1
        alert("VOCE ERROU, VOCÊ TEM MAIS " + maxTentativa + " CHANCE")
    }
    
   
   
    
}