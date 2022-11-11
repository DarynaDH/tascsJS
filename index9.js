function generateCards(cardsTitle, img, description, index) {
    const cards = {
        title: cardsTitle,
        imageUrl: img,
        description: description,
        index: index
    };
    const body = document.querySelector('body');
    let div = document.createElement('div');

    let h4 = document.createElement('h4');
    let br = document.createElement('br');

    let span = document.createElement('span');
    let p = document.createElement('p');

    let i = document.createElement('p');
    body.appendChild(div);
    div.classList.add('cards');

    div.appendChild(h4);
    h4.innerText = cards.title;

    div.appendChild(br);
    div.appendChild(span);
    
    span.innerHTML = cards.imageUrl;
    div.appendChild(p);
    p.innerText = cards.description;

    div.appendChild(i);
    i.innerText = cards.index;
};

imgSrc = '<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffree&psig=AOvVaw0ZUJduyyifZyB1bcUvSEAk&ust=1668251021828000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIiT1L39pfsCFQAAAAAdAAAAABAE">';

let allCards = [
    {title: 'Card1',
    imageUrl: imgSrc,
    description: 'Perfect',
    index: '1'},

    {title: 'Card2',
    imageUrl: imgSrc,
    description: 'Perfect',
    index: '2'},

    {title: 'Card3',
    imageUrl: imgSrc,
    description: 'Perfect',
    index: '3'}

];


generateCards(allCards.title, allCards.imageUrl, allCards.description,allCards.index)


