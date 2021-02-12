function bishop(start, end, n) {
	if (start === end) return true;
	const chars = 'abcdefgh';
	const [x1, y1] = [chars.indexOf(start[0]) + 1, +start[1]];
  const [x2, y2] = [chars.indexOf(end[0]) + 1, +end[1]];
	if (Math.abs(x1-x2)%2 == Math.abs(y1-y2)%2) {
		return Math.abs(x1-x2) == Math.abs(y1-y2) ? n >= 1 : n >= 2;
	}
	return false;
}