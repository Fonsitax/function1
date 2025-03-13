const reverse = (x) => {
    const maxInt = 2 ** 31 - 1;
    const minInt = -(2 ** 31);
    let num = 1;
    
    if (x < 0) {
        num = -1;
        x = Math.abs(x);
    }

    let result = 0;
    while (x !== 0) {
        let lastDigit = x % 10;
        result = result * 10 + lastDigit;
        x = Math.floor(x / 10);
    }

    result *= num;

    if (result < minInt || result > maxInt) {
        return 0;
    }
    return result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(2147483648));

