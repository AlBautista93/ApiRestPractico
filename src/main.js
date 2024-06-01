const subtitle = document.getElementById('subtitle')
const container = document.getElementById('container')

function addPopulars() {

    for (let i = 0; i <= 10; i++) {
        container.append(items())
    }
}
addPopulars()