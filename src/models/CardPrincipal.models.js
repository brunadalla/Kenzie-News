export class CardPrincipal {
    constructor(urlImagem, categoria, titulo, resumo, fonte){
        this.imagem    = urlImagem
        this.categoria = categoria
        this.titulo    = titulo
        this.resumo    = resumo
        this.fonte     = fonte
    }

    criarCard(){
        const container = document.createElement('div')
        container.id    = 'cardPrincipal'

        const containerImagem = document.createElement('figure')
        containerImagem.id    = 'cardPrincipal_imagem'

        const imagem = document.createElement('img')
        imagem.src   = this.imagem
        
        const containerInfo = document.createElement('div')
        containerInfo.id    = 'cardPrincipal_info'

        const tag     = document.createElement('span')
        tag.innerText = this.categoria
        tag.id        = 'cardPrincipal_info_tag'

        const titulo     = document.createElement('h1')
        titulo.innerText = this.titulo

        const resumo     = document.createElement('p')
        resumo.innerText = this.resumo

        const fonte     = document.createElement('span')
        fonte.innerText = `Fonte: ${this.fonte}`
        fonte.id        = 'cardPrincipal_info_fonte'

        containerImagem.appendChild(imagem)
        containerInfo.append(tag, titulo, resumo, fonte)
        container.append(containerImagem, containerInfo)

        return container
    }
}