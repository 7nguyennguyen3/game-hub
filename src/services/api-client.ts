import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1e95aa9aba6d4083b44b17165819451c'
    }
})