import axios from "axios"

export default class PostService {
    static async getAll(limit = 10, page = 1) { //статичная асинхроная функция
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: { //таким образом в наш гет запрос в url автоматически подставиться лимит страниц и страница
                _limit: limit,
                _page: page
            }
        })
        return response
    }

    //вернем нужный пост по айди
    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response
    }

    static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response
    }
}