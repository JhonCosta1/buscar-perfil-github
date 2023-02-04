import api from './api';

class App{
    //Construtor
    constructor(){
        //Lista de repositórios
        this.repositorios = [];

        //Form
        this.formulario = document.querySelector('form');

        //Lista
        this.lista = document.querySelector('.list-group');

        //Método para registrar os eventos do form
        this.registrarEventos();
    }

    registrarEventos(){
        this.formulario.onsubmit = evento => this.adicionarRepositorio(evento);
    }

    async adicionarRepositorio(evento){
        //Evitar que o formulário recarregue a página
        evento.preventDefault();

        //Recuperar valor do input
        let input = this.formulario.querySelector('input[id=repositorio]').value;


        //Se o input vier vazio, sai da api
        if(input.length === 0){
            return; //return sempre sai da mesma função
        }

        let response = await api.get(`/repos/${input}`);

        let {name, description, html_url, owner: {avatar_url}} = response.data;


        //Adicionar o repositorio a lista
        this.repositorios.push({
            nome: name,
            descricao: description,
            avatar_url,
            link: html_url,
        });

        //Renderizar a tela
        this.renderizarTela();
    }

    renderizarTela(){
        //Limpar o conteúdo de lista
        this.lista.innerHTML = '';

        //percorrer a lista de repositórios e criar elementos
        this.repositorios.forEach(repositorio => {

            //li
            let li = document.createElement('li');
            li.setAttribute('class', 'list-group-item list-group-item-action');

            //<img>
            let img = document.createElement('img');
            img.setAttribute('src', repositorio.avatar_url);
            li.appendChild(img);

            //<strong>
            let strong = document.createElement('strong');
            let txtNome = document.createTextNode(repositorio.nome);
            strong.appendChild(txtNome);
            li.appendChild(strong);

            //<p>
            let p = document.createElement('p');
            let txtDescricao = document.createTextNode(repositorio.descricao);
            p.appendChild(txtDrescricao);
            li.appendChild(p);

            //<a>
            let a = document.createElement('a');
            a.setAttribute('target', '_blank');
            a.setAttribute('href', repositorio.link);
            let txtA = document.createTextNode('Acessar');
            a.appendChild(txtA);
            li.appendChild(a);


            //adicionar <li></li> como filho da ul
            this.lista.appendChild(li);

            //limpar o conteudo input
            this.formulario.querySelector('input[id=repositorio]').value = '';

            //adicionar o foco no input
            this.formulario.querySelector('input[id=repositorio]').focus();

        });
    }
}

new App();
