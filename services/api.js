import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }

})

// LIST
export const getAllProducts = () => api.get('/api/products')
export const SendOtp = (data) => api.post('/api/send-otp', data)
export const VerifyOtp = (data) => api.post('/api/verify-otp', data)
export const VerifyAdminOtp = (data) => api.post('/api/verify-admin-otp', data)
export const UpdateDetails = (data) => api.post('/api/update-personal', data)
export const AddAddress = (data) => api.post('/api/address', data)
export const DeleteAddress = (data) => api.delete(`/api/address/${data}`)

api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {
        originalRequest._isRetry = true;
        try {
            await axios.get(`${process.env.NEXT_PUBLIC_API_URL}api/refresh`, {
                withCredentials: true
            })
            return api.request(originalRequest)
        } catch (err) {
            console.log(err)
        }
    }
    throw error
})

export default api