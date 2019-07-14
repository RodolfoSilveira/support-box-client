import { create } from 'apisauce'

const api = create({
    baseURL: 'http://localhost:3333/'
})

api.addAsyncRequestTransform(request => {
    const token = localStorage.getItem('token')
    if(token){
        request.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }   
})

export default api