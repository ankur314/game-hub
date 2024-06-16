import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '16c70ec332714c9184d052d6c0dd756f'
    }
})