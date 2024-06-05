API_URL = 'https://api.themoviedb.org/3/';

async function fetchConexion(endPonit) {
    const url = this.API_URL + endPonit + '?api_key=' + API_KEY
    let result = await fetch(url)
    return result.json()
}