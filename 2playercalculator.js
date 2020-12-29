const calculator = [[1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 5], [1, 3, 4, 5, 6], [2, 5, 6], [1, 2, 5, 7, 8], [1, 2, 3, 4, 6, 7, 8, 9], [2, 3, 5, 8, 9], [4, 5, 8], [4, 5, 6, 7, 9], [5, 6, 8]];
/*Calculator:
    789
    456
    123 */
let N = parseInt(readline());
const memoizationTable = {};
console.log(playGame(N));

function playGame(N) {
    optionList = calculator[0].filter(option => option <= N);
    return returnWinningMoveList(N, optionList).join(' ');
}
function returnWinningMoveList(N, optionList) {
    const key = N + optionList.join('');
    if (key in memoizationTable) return memoizationTable[key];

    const winningMoveList = optionList.filter(option => isWin(N, option));
    memoizationTable[key] = winningMoveList;
    return winningMoveList;
}
function isWin(N, option) {
    N -= option;
    const optionList = calculator[option].filter(option => option <= N);
    if (optionList.length === 0) return true;

    const winningMoveList = returnWinningMoveList(N, optionList);
    return winningMoveList.length === 0;
}
