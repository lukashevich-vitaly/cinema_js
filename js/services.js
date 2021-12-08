const API_KEY = '0c1488601dcb93fdcde292e3f119d8bf';
const BASE_URL = 'https://api.themoviedb.org/3/';

//   trending/all/day?api_key=<<api_key>>

const getData = url => fetch(url)
        .then(response => {
            if(response.ok) {
                return response.json()
            }
            throw `Что-то пошло не так, ошибка ${response.status}`
        })
        .catch(err => console.error(err));



export const getTriends = async () => {
    const data = await getData('https://jsonplaceholder.typicode.com/todos/1');
    console.log('data:', data);
}