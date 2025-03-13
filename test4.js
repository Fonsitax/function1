function reverse(x) {
    const maxInt = 2 ** 31 - 1;
    const minInt = -(2 ** 31);
    
    let result = 0;
    let num = Math.abs(x);
    
    while (num > 0) {
        result = result * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    console.log("result", result);
    if (result < minInt || result > maxInt) {
        return 0;
    }

    if (x < 0) {
        result = -result;
    }
    console.log(maxInt);
    return result;
}
console.log(reverse(2147483647));
/*console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(2147483641));
console.log(reverse(-2147483648)); */