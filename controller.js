'use restrict' ; //Modo restrito

//Limpar formuário 
const limparFormulario = (endereco) =>{
    document.getElementById('rua').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('bairro').value = '';

}

//Verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);