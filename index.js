// code your solution here
function saturdayFun(activity = 'roller-skate') {
    console.log(`${activity}`)

return `This Saturday, I want to ${activity}!`
};


function mondayWork(workLocation = 'go to the office') {
    console.log(`${workLocation}`)
    return `This Monday, I will ${workLocation}.`
};


function wrapAdjective(flair = '*') {
    return function adjective(word = 'special') {

        return `You are ${flair}${word}${flair}!`;
    }
}
console.log(wrapAdjective());