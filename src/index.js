module.exports = function toReadable (number) {

let numbersNameToTwenty = [`zero`,`one`,`two`,`three`,`four`,`five`,`six`,`seven`,`eight`,`nine`,`ten`,`eleven`,`twelve`,`thirteen`,`fourteen`,`fifteen`,`sixteen`,`seventeen`,`eighteen`,`nineteen`];
let numbersNameElevenTwenty = [`eleven`,`twelve`,`thirteen`,`fourteen`,`fifteen`,`sixteen`,`seventeen`,`eighteen`,`nineteen`];
let numbersNameToHundret = [`zero`, `ten`,`twenty`,`thirty`,`forty`,`fifty`,`sixty`,`seventy`,`eighty`,`ninety`];

let numbersSelect = number.toString().split('');
let secondAndThirdNumbers = Number(numbersSelect[1] + numbersSelect[2]);

 

if (number < 20) {
    return numbersNameToTwenty[number]
}
else if (number === 20 || number === 30 || number === 40 || number === 50 || number === 60 || number === 70 || number === 80 || number === 90) {
    return numbersNameToHundret[numbersSelect[0]]
}
else if (number < 100) {
    return numbersNameToHundret[numbersSelect[0]] + " "+ numbersNameToTwenty[numbersSelect[1]]}

else if (numbersSelect[1] === `0` && numbersSelect[2] === `0`)  {
    return `${numbersNameToTwenty[numbersSelect[0]]} hundred`}

else if (secondAndThirdNumbers < 20)  {
    return `${numbersNameToTwenty[numbersSelect[0]]} hundred ${numbersNameToTwenty[secondAndThirdNumbers]}`}

else if (numbersSelect[2] === `0`)  {
    return `${numbersNameToTwenty[numbersSelect[0]]} hundred ${numbersNameToHundret[numbersSelect[1]]}`}

else  {
    return `${numbersNameToTwenty[numbersSelect[0]]} hundred ${numbersNameToHundret[numbersSelect[1]]} ${numbersNameToTwenty[numbersSelect[2]]}`}
}





