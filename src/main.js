const subtitle = document.getElementById('subtitle')
const container = document.getElementById('container')

async function addPopulars() {
    let { results } = await fetchConexion('/movie/popular')
    subtitle.innerHTML = "Populares"
    for (element of results) {
        container.append(items(element))
    }
}
addPopulars()