import { API_URL } from '../config/constant'


export const getLatestArticles = async (locale, slug) => {
    
    let url = `${API_URL}/api/articles`;
    const requestOptions = {
        method: "GET",
    };

    let res = [];
    try {
        res = await fetch(url, requestOptions);
        return res.json();
    } catch (e) {
        console.log("API Error");
        console.log(e);
        return res;
    }
    
}