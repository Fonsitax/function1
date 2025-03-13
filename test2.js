const romanToInt = (s) => {
    const romanNum = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let total = 0;  
    let i = 0;

    while (i < s.length) {
        if (i < s.length - 1 && romanNum[s[i]] < romanNum[s[i + 1]]) {           
            total -= romanNum[s[i]];
        } else {
            total += romanNum[s[i]]; 
        }
        i++;
    }
    return total;
};

console.log(romanToInt("III")); 
console.log(romanToInt("LVIII")); 
console.log(romanToInt("MCMXCIV")); 