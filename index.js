// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]

function superbowlWin(records) {
    const result = records.find((record) => {
        return record.result === 'W';
    })
    if (result === undefined) {
        return undefined
    } else {
        return result.year
    }
}

