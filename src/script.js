import { Requisicao }    from "./controller/requisicao.controller.js";
import { CardPrincipal } from "./models/CardPrincipal.models.js";
import { Cards }         from "./models/Cards.models.js";

const arrayDados = await Requisicao.pegarDados()

class MostrarElementos {
    static noticiaPrincipal       = arrayDados.shift()
    static lista                  = document.getElementById('noticias_lista')
    static containerCardPrincipal = document.getElementById('noticiaPrincipal')

    static mostrarNoticiaPrincipal() {
        const cardPrincipal = new CardPrincipal(this.noticiaPrincipal.imagem, this.noticiaPrincipal.categoria, this.noticiaPrincipal.titulo, this.noticiaPrincipal.resumo, this.noticiaPrincipal.fonte).criarCard()

        this.containerCardPrincipal.appendChild(cardPrincipal)
    }

    static mostrarNaLista() {
       arrayDados.forEach((noticia) => {
            const card = new Cards(noticia.imagem, noticia.categoria, noticia.titulo, noticia.resumo, noticia.fonte).criarCard()
            this.lista.appendChild(card)
        })
    } 
}

MostrarElementos.mostrarNoticiaPrincipal()

MostrarElementos.mostrarNaLista()