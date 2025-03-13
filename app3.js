/*NAME FORMATTER

.charAt(0) gets the first character of the string.
.slice(1) gets everything from the second character onward/ the rest of the string.
*/


const greetingMessage = "Welcome to the platform :)";

function formatName(firstName, lastName) {
    let formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    let formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    return `Hello, ${formattedFirstName} ${formattedLastName}! ${greetingMessage}`
}

console.log(formatName("yingrak", "muansawad"));
console.log(formatName("jonni", "DOE"));
console.log(formatName("eRik", "ERIK0"));


