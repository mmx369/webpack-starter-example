import axios from 'axios'

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  axios.get('https://api.chucknorris.io/jokes/random', config).then((res) => {
    document.getElementById('joke').innerHTML = res.data.value
  })
}

export default generateJoke
