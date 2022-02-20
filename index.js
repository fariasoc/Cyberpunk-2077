const pupils = [
    {
        name: 'Nalco',
        note: 9
    },
    {
        name: 'Ipiranga',
        note: 6
    },
    {
        name: 'Dow',
        note: 5
    },
    {
        name: 'Petrobras',
        note: 10
    },
]

function markreproved(team){

    team.reproved = false

    if (team.note < 7){
        team.reproved = true
    }

}

function sendMessage(team){

    if(team.reproved){
        console.log(`A empresa ${team.name} está reprovada. Média = ${team.note}`)
    } else {
        console.log(`Parabéns ${team.name}. Média = ${team.note} `)
    }

}

function checkallBusiness(team){

    for(let firm of team){
        markreproved(firm)
        sendMessage(firm)
    }

    console.log(`Média das ${team.length} empresas = ${calculateAverage(team)}`)

}

function calculateAverage(team){

    const tam = team.length
    var med = 0;

    for(let i = 0 ; i < tam ; i++){
        med = med + team[i].note
    }

    return med/tam

}

checkallBusiness(pupils)