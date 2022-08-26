import loughing from './assets/chuck.png'
import generateJoke from './generateJoke'
import './styles/main.scss'

const loughImg = document.getElementById('loughImg')
loughImg.src = loughing

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()
