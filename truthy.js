//  create prompt 'enter a value'
const input = undefined;

// // if false boolean, return "The boolean value false is falsy";
if (input === false){
    console.log(`The boolean value false is falsy`);
}

// // if null value, return "The null value is falsy";
else if (input === null){
    console.log(`The null value is falsy`);
}

// // if undefined, return "undefined is falsy";
else if (input === undefined) {
    console.log(`undefined is falsy`);
}
// // if 0, return "The number 0 is falsy (the only falsy number)";
else if (input === 0) {
    console.log(`The number 0 is falsy (the only falsy number)`);
}
// // if empty string, return "The empty string is falsy (the only falsy string)";
else if (input === ``) {
    console.log(`The empty string is falsy (the only falsy string)`);
}

// if anything else, then return 'true'

else {
    console.log(`True`)
}
