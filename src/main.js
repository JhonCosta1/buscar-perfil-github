class App{
    //Construtor
    constructor(){
        //Lista de repositórios
        this.repositorios = [];

        //Form
        this.formulario = document.querySelector('form');

        //Método para registrar os eventos do form
        this.registrarEventos();
    }

    registrarEventos(){
        this.formulario.onsubmit = evento => this.adicionarRepositorio(evento);
    }

    adicionarRepositorio(evento){
        //Evitar que o formulário recarregue a página
        evento.preventDefault();

        //Adicionar o repositorio a lista
        this.repositorios.pish({
            nome: 'Nerd',
            descricao: 'Iconic font',
            avatar_url: 'https:',
            link: 'https://',
        })
    }
}