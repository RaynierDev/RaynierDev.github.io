document.addEventListener('DOMContentLoaded', () => {
	const cardArray = [
		{
			name: 'manzana',
			img: '../img/manzana.jpg'
		},
		{
			name: 'verde',
			img: '../img/verde.jpg'
		},
		{
			name: 'pan',
			img: '../img/pan.jpg'
		},
		{
			name: 'amarillo',
			img: '../img/amarillo.jpg'
		},
		{
			name: 'alcohol',
			img: '../img/alcohol.jpg'
		},
		{
			name: 'rojo',
			img: '../img/rojo.jpg'
		},
		{
			name: 'manzana',
			img: '../img/manzana.jpg'
		},
		{
			name: 'verde',
			img: '../img/verdes.jpg'
		},
		{
			name: 'pan',
			img: '../img/pan.jpg'
		},
		{
			name: 'amarillo',
			img: '../img/amarillos.jpg'
		},
		{
			name: 'alcohol',
			img: '../img/alcohol.jpg'
		},
		{
			name: 'rojo',
			img: '../img/rojos.jpg'
		}
	]

	cardArray.sort(() => 0.5 - Math.random())

	const grid = document.querySelector('.grid')
	var cardsChosen = []
	var cardsChosenId = []
	const cardsWon = []
	const resultDisplay = document.querySelector('#score')

	function createBoard(){
		for(let i = 0; i<cardArray.length; i++){
			var card = 	document.createElement('img')
			card.setAttribute('src', '../img//back.jpg')
			card.setAttribute('data-id', i)
			card.addEventListener('click', flipCard)
			grid.appendChild(card)
		}
	}
	function checkForMatch(){
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]

		if(optionOneId==optionTwoId){
			cards[optionOneId].setAttribute('src', '../img/back.jpg')
			cards[optionTwoId].setAttribute('src', '../img/back.jpg')
			alert('Hey! estas dandole click a la misma carta')
		}
		else if(cardsChosen[0]===cardsChosen[1]){
			alert('Encontraste un par, ¡genial!')
			cards[optionOneId].setAttribute('src', '../img/blank.png')
			cards[optionTwoId].setAttribute('src', '../img/blank.png')
			cards[optionOneId].removeEventListener('click', flipCard)
			cards[optionTwoId].removeEventListener('click', flipCard)
			cardsWon.push(cardsChosen)
		}
		else{
			cards[optionOneId].setAttribute('src', '../img/back.jpg')
			cards[optionTwoId].setAttribute('src', '../img/back.jpg')
			alert('intenta de nuevo')
		}
		cardsChosen=[]
		cardsChosenId = []
		resultDisplay.textContent = cardsWon.length
		if(cardsWon.length===cardArray.length/2){
			resultDisplay.textContent = "Felicidades, encontraste todos los pares."
		}
	}
	function flipCard(){
		var cardId = this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute('src', cardArray[cardId].img)
		if(cardsChosen.length === 2){
			setTimeout(checkForMatch, 500)
		}

	}

	createBoard()


})
