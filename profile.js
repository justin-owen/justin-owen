

const linkedIn = document.querySelector('#linked-in')
const gitHub = document.querySelector('#git-hub')


function goToGithub(){
    window.open('https://github.com/justin-owen')
    
}
function goToLinkedin(){
    window.open('https://www.linkedin.com/in/justin-owen1')
}
linkedIn.addEventListener('click', goToLinkedin)
gitHub.addEventListener('click', goToGithub)
