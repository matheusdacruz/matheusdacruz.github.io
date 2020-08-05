//=== é um operador de igualdade! é um operador de não igualdade
let meuBotao=document.querySelector('button');
let meuCabecalho=document.querySelector('h1');
function defineNomeUsuario()
{
    let meuNome=prompt('Por favor, digite seu nome');
    if(!meuNome||meuNome===null)
    {
        defineNomeUsuario();
    }else
     {
         localStorage.setItem('nome',meuNome);
         meuCabecalho.innerHTML='Jesus te ama,'+meuNome;
     }
}     
if(!localStorage.getItem('nome'))
{
    defineNomeUsuario();
}else
 {
     let nomeGuardado=localStorage.getItem('nome');
     meuCabecalho.textContent='Jesus te ama, '+nomeGuardado;
 }
 meuBotao.onclick=function()
 {
     defineNomeUsuario();
 }