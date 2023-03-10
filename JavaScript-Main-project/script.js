const getComputerSelection = () => {
    let computerSelection = Math.floor(Math.random() * 3) +1
    let computerText
    switch (computerSelection) {
        case 1:
            computerText = `rock`
        break
        case 2:
            computerText = `paper`
        break
        case 3:
            computerText = `scissors`
        break
    }
    return computerText
}

const getGameResults = (userSelection, computerSelection) => {
    let results
    switch ([userSelection, computerSelection].join(``)){
        case [`rock`, `scissors`].join(``):
            results = `You WIN!`
            break
            case [`paper`, `rock`].join(``):
            results = `You WIN!`
            break
            case [`scissors`, `paper`].join(``):
            results = `You WIN!`
            break
            case [`rock`, `paper`].join(``):
            results = `You LOOSE!`
            break
            case [`paper`, `scissors`].join(``):
            results = `You LOOSE!`
            break
            case [`scissors`, `rock`].join(``):
            results = `You LOOSE!`
            break
        default:
            results = `You TIE!`
            break
    }
    return results
}

const playGame = userSelection => {
    const displayResultElement = document.getElementById(`result`)
    const computerSelection = getComputerSelection()
    console.log(computerSelection)
    const getResults = getGameResults(userSelection, computerSelection)
    displayResultElement.innerHTML = `You chose ${userSelection} and computer chose ${computerSelection}. ${getResults}`
}