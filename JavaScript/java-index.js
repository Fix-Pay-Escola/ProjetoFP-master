
/*este comando guardou todos os elemntos que tem a classe item-menu*/
var menuItem = document.querySelectorAll('.item-menu')

/*criando uma função que deixa o botão selecionado sozinho*/
function selectLink() {
    /**vamos usar o for each : serve para fazer uma varredura nos nossos arrays*/
    /*abaixo fizemos uma arrow function : As arrow functions permitem ter um retorno implícito, que são valores retornados sem ter que usar a palavar return.*/
    /*este itemm criado é o li itens do html*/menuItem.forEach((item) =>
    item.classList.remove('ativo')) /*remover uma classe de um elemento */
/*adicionando a classe ativo quando eu clicar no item*/
    this.classList.add('ativo')
}

/*vamos criar um escutador de eventos,para que ele "escute" quando alguem clicar em algum item */
menuItem.forEach((item)=>
item.addEventListener('click', selectLink) /*chamando a função que criei la em cima*/
)

//expandir menu
var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click',function(){
    menuSide.classList.toggle('expandir')
})

