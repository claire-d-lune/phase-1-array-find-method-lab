// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2014", result: "N/A"}
]

// function superbowlWin(element){
//     if (element.result === "W"){
//         console.log(element.year)
//         return element.year;
//     }
// }

// console.log(superbowlWin(record))
// console.log(record.find(superbowlWin))


//Writing it below as a function which **includes** .find, but cannot
//be called actually be used in .find on the array (which was the thrust of the teaching)

function superbowlWin(array) {
    const champ = array.find((x) => x.result === "W")
    console.log(champ)
    if(champ) {
        return champ.year
    }
    return
}


console.log(superbowlWin(record))