import axios from 'axios';
export const options = {
    headers: {
        'X-RapidAPI-Key': 'ac3e79d3efmsh5790252316b588ep1319c2jsnbd9737dab9ff',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': ''
    },
    params: {
        locationExternalIDs: '5002,6020',
        purpose: 'for-rent',
        hitsPerPage: '4',
        page: '0',
        lang: 'en',
        sort: 'city-level-score',
        rentFrequency: 'monthly',
        categoryExternalID: '4',
        roomsMin: 1,
        bathsMin: 1,
        priceMin: '',
        priceMax: '',
    }
}


export const getData = async (url, options) => {
    const response = await axios.get(url, options);
    return response.data;
}