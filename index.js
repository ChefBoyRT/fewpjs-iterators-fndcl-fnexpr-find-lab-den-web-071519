const testVar = {}

const superbowlWin = (testVar) => {
  let winner = testVar.find(function(game) {
    return game.result === 'W'
  })
  return winner ? winner.year : undefined
}
