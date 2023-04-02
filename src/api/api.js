import axios from "axios";
const CLIENT_ID = 'x4MR8cB4IFK5_9NBeOdP5MuaK3lqPI3HpOe8Tjel1dY';



export const asyncFunc = {
    async getImagesAPI(query, loader, error, page, order, orientation, color) {
        if(!query) query = 'photos';
        if(orientation) orientation = `&orientation=${orientation}`;
        if(color) color = `&color=${color}`

        try {
            loader(true)
            let responce = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=24&order_by=${order}${orientation}${color}&client_id=${CLIENT_ID}`)
            return responce.data
        } catch (err) {
            error(true)
        } finally {
            setTimeout(() => loader(false), 500)
        }
    },
   async getRandomImages(error) {
        try {
            let responce = await axios.get(`https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}`)
            return responce.data
        } catch (err) {
            error(true)
        } 
    },
    async getUser(username, error) {
        try {    
            let responce = await axios.get(`https://api.unsplash.com/users/${username}?client_id=${CLIENT_ID}`)
            return responce.data
        } catch (err) {
            error(true)
        } 
    },
    async getPhoto(id, error) {
        try {
            let responce = await axios.get(`https://api.unsplash.com/photos/${id}?client_id=${CLIENT_ID}`)
            return responce.data
        } catch (err) {
            error(true)
        }
    },
    async getStats(error) {
       try {
            let responce = await axios.get(`https://api.unsplash.com/stats/month?client_id=${CLIENT_ID}`)
            return responce.data
       } catch (err) {
            error(true)
       } 
    }
}