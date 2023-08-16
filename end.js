const username = document.querySelector('#username')
const savescorebtn = document.querySelector('#savescorebtn')
const finalscore = document.querySelector('#finalscore')
const mostrecentscore = localStorage.getItem('mostrecentscore')

const highscores = JSON.parse(localStorage.getItem('highscores')) || []
const MAX_HIGH_SCORES = 10

finalscore.innerText = mostrecentscore

username.addEventListener('keyup' , () => {
    savescorebtn.disabled = !username.value
})

savehighscore = e =>{
    e.preventDefault();

    const score = {
        score : mostrecentscore,
        name : username.value
    }
 
    highscores.push(score)

    highscores.sort((a,b) =>
    {
        return b.score - a.score
    })

    highscores.splice(5)

    localStorage.setItem('highscores',JSON.stringify(highscores))
    window.location.assign('./index.html')

}
