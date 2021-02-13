function additivePersistence(n) {
  let count = 0;
  while (n.toString().length > 1) {
    count++
    let splitStr = n.toString().split('');
    n = splitStr.reduce((a,b) => a + Number(b),0);
  }
  return count;
}

function multiplicativePersistence(n) {
	let count = 0;
  while (n.toString().length > 1) {
    count++
    let splitStr = n.toString().split('');
    n = splitStr.reduce((a,b) => a * Number(b),1);
  }
  return count;
}