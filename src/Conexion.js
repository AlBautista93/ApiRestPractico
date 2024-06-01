API_URL = '';

function fetchConexion(endPonit) {
    const url = this.API_URL + endPonit + '?api_key=' + API_KEY
    let result = fetch(url)

    return result.json()
}