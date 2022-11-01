import Axios from 'axios'

const axios = Axios.create({
    baseURL: import.meta.env.SECRET_URI,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios