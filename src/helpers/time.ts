function sleep(miliseconds: number = 2000) {
  return new Promise(resolve => setTimeout(resolve, miliseconds));
}

export { sleep };
