function generateWord(n, idx = 2, str = "b, a") {
	if (n < 2) return "invalid";
	if (idx == n) return str;
	var s = str.split(", ");
	var len = s.length;
	str += ", " + s[len-1] + s[len-2];
	return generateWord(n, idx+1, str);
}