export class Requisicao {
    static base_url = 'https://kenzie-news-api.herokuapp.com/api/news'

    static async pegarDados() {
        const dados = await fetch(this.base_url)
        .then((res) => res.json())
        .then((res) => res)

        return dados
    }
}
