export const fetchApi = async (url)=>{
    const response = await fetch(url);
    const result = await response.json();//chuyển response thành json
    return result;
}