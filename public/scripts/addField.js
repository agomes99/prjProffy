
/* Lembretes - para verificar se uma funcionalidade está funcionando basta chamar a função exemplo
    console.log("Cheguei aquui") */


//--------------Botão Adicionar novo horário -------------------------------------

                         //procurar o botão
document.querySelector("#add-time") // chamando eventos, os ID são identificados como "#" antes do nome
                        //quando clicar no botão
.addEventListener('click', cloneField) //ouvidor de eventos
                        
//executar a ação de duplicar os campos
function cloneField(){

                        // Duplicando o campo que deseja duplicar, a função cloneNode duplica a função desejada;
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) 
                         // pegando os campos quando forem duplicados
    const fields = newFieldContainer.querySelectorAll('input')
                        // lipando campos
    fields.forEach(function(field){
                        // pegando o fild atual e limpar ele
       field.value = ""
    })
                        // inserindo os campos duplicados no local em que é necessário
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}