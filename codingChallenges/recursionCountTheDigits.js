const digitsCount = n => n < 0 ? digitsCount(-n) :
	n < 10 ? 1 : 1 + digitsCount(Math.floor(n / 10));