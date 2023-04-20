getFetch()
document.querySelector('.main-button').addEventListener('click', getFetch)

function getFetch(){
  const url = `https://api.adviceslip.com/advice`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector(".advice-id").innerText = `ADVICE #${data.slip.id}`
        document.querySelector(".advice-box").innerText = `"${data.slip.advice}"`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}