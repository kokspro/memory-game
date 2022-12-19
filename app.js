// Grabbing constants for construction
const container = document.querySelector(".container");
const attemptsCount = document.querySelector("span");
const resetButton = document.querySelector(".reset");
let attempts = 0;

attemptsCount.innerHTML = attempts;

// Adding reset function
resetButton.addEventListener('click', () => {
    location.reload();
});

// Creating picture object array
const getData = () => [
    { imgSrc: "./images/Forest1.jpg", name: "forest1"},
    { imgSrc: "./images/Forest2.jpg", name: "forest2"},
    { imgSrc: "./images/Forest3.jpg", name: "forest3"},
    { imgSrc: "./images/Forest4.jpg", name: "forest4"},
    { imgSrc: "./images/Forest5.jpg", name: "forest5"},
    { imgSrc: "./images/snow1.jpg", name: "snow1"},
    { imgSrc: "./images/snow2.jpg", name: "snow2"},
    { imgSrc: "./images/desert1.jpg", name: "desert1"},
    { imgSrc: "./images/desert2.jpg", name: "desert2"},
    { imgSrc: "./images/sky1.jpg", name: "sky1"},
    { imgSrc: "./images/Forest1.jpg", name: "forest1"},
    { imgSrc: "./images/Forest2.jpg", name: "forest2"},
    { imgSrc: "./images/Forest3.jpg", name: "forest3"},
    { imgSrc: "./images/Forest4.jpg", name: "forest4"},
    { imgSrc: "./images/Forest5.jpg", name: "forest5"},
    { imgSrc: "./images/snow1.jpg", name: "snow1"},
    { imgSrc: "./images/snow2.jpg", name: "snow2"},
    { imgSrc: "./images/desert1.jpg", name: "desert1"},
    { imgSrc: "./images/desert2.jpg", name: "desert2"},
    { imgSrc: "./images/sky1.jpg", name: "sky1"}
];

// Randomizing card order function
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

// Creating cards and placing on board
const cardGenerator = () => {
    const cardData = randomize();
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        face.src = item.imgSrc;
        card.setAttribute('name', item.name);
        container.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.add('flipCard');
            checkMatch(e);
        })
    });    
};

// Check for match function
const checkMatch = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    // Trying to debug?
    
    const flippedCards = document.querySelectorAll('.flipped');
    if ( flippedCards.length === 2) {
        if ( flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
            });
            attempts++;
            attemptsCount.innerHTML = attempts;
        } else {
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('flipCard'), 1000);

            });
            attempts++;
            attemptsCount.innerHTML = attempts;
        }
    }
    
};

// Start game
cardGenerator();
