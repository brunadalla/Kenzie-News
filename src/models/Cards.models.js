export class Cards {
    constructor(urlImagem, categoria, titulo, resumo, fonte){
        this.imagem    = urlImagem
        this.categoria = categoria
        this.titulo    = titulo
        this.resumo    = resumo
        this.fonte     = fonte
    }

    criarCard(){
        const itemLista = document.createElement('li')
        itemLista.classList.add('card')

        const containerInfo = document.createElement('div')
        containerInfo.classList.add('card_info')

        const tag     = document.createElement('span')
        tag.innerText = this.categoria
        tag.classList.add('card_info_tag')

        const titulo     = document.createElement('h1')
        titulo.innerText = this.titulo

        const resumo     = document.createElement('p')
        resumo.innerText = this.resumo

        const fonte     = document.createElement('span')
        fonte.innerText = `Fonte: ${this.fonte}`
        fonte.classList.add('card_info_fonte')

        const containerImagem = document.createElement('figure')
        containerImagem.classList.add('card_imagem')

        const imagem = document.createElement('img')
        imagem.src   = this.imagem
        
        containerInfo.append(tag, titulo, resumo, fonte)
        containerImagem.appendChild(imagem)
        itemLista.append(containerImagem, containerInfo)

        return itemLista
    }
}