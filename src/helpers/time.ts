// TODO: don't commit
// TODO: don't commit
// TODO: don't commit
// TODO: don't commit
// function sleep(miliseconds: number = 2000) {
function sleep(miliseconds: number = 0) {
  return new Promise(resolve => setTimeout(resolve, miliseconds));
}

export { sleep };
