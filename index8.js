



function generateCard(cardTitle, url, desc) {
    const card = {
        title: cardTitle,
        imageUrl: url,
        description: desc
    };
    const body = document.querySelector('body');
    let div = document.createElement('div');

    let h4 = document.createElement('h4');
    let br = document.createElement('br');

    let span = document.createElement('span');
    let p = document.createElement('p');
    body.appendChild(div);
    div.classList.add('card');

    div.appendChild(h4);
    h4.innerText = card.title;

    div.appendChild(br);
    div.appendChild(span);
    
    span.innerHTML = card.imageUrl;
    div.appendChild(p);
    p.innerText = card.description;
};

imgSrc = '<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffree&psig=AOvVaw0ZUJduyyifZyB1bcUvSEAk&ust=1668251021828000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIiT1L39pfsCFQAAAAAdAAAAABAE">';

const card = {
    title: 'Card1',
    imageUrl: imgSrc,
    description: 'Perfect'
};


generateCard(card.title, card.imageUrl, card.description)