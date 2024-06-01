function items(element) {
    const imgUrl = 'https://static.posters.cz/image/350/posters/dune-parte-1-i122815.jpg'
    const container = document.createElement('div')
    const card = document.createElement('div')
    const img = document.createElement('img')
    const cardBody = document.createElement('div')
    const cardTitle = document.createElement('h2')
    const row = document.createElement('div')
    const cardText = document.createElement('label')
    const col = document.createElement('div')
    const start = document.createElement('i')
    const eye = document.createElement('i')

    container.className = 'col-6 col-md-2'
    card.className = 'card card-item'
    img.className = 'rounder'
    img.setAttribute('src', imgUrl)
    cardBody.className = 'card-dody'
    cardTitle.className = 'card-title'
    cardTitle.innerHTML = 'Titulo'
    row.className = 'row'
    cardText.className = 'card-text col'
    cardText.innerHTML = 2020
    col.className = 'col text-right'
    start.className = 'bi bi-eye-fill icon'
    eye.className = 'bi bi-star-fill icon'

    col.append(start)
    col.append(eye)
    row.append(cardText)
    row.append(col)
    cardBody.append(cardTitle)
    cardBody.append(row)
    card.append(img)
    card.append(cardBody)
    container.append(card)

    return container
}