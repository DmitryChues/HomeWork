let str = "fffDfff1@";
if (checkString(str)) {
    console.log("The string is not valid");
} else {
    console.log("The string is valid. String = " + '"' + str + '"');
}

function checkString(str) {
    let check = false;
    if (typeof str !== "string") {
        console.log("Enter the string");
        check = true;
    } 
    if (str === "") {
        console.log("The string must not be empty");
        check = true;
    } 
    if (!isValid(str)) {
        console.log("The string must contain the letters");
        check = true;
    }
    if (str.length < 5 || str.length > 64) {
        console.log("The string must contain more than 5 simbols and no more than 64 symbols");
        check = true;
    } 
    if (register(str)) {
        console.log("The string must contain at least one uppercase letter");
        check = true;
    } 
    if (num(str)) {
        console.log("The string must contain at least one number");
        check = true;
    } 
    if (et(str)) {
        console.log("The string must contain at least one @");
        check = true;
    }
    return check;
}

function register(str) {
    for (var i = 0; i < str.length; i++) {
        symbol = str.charAt(i);
        if (isNaN(symbol) && symbol != "@" && symbol === symbol.toUpperCase()) {
            return false;
        }
    }
    return true;
}

function num(str) {
    for (var i = 0; i < str.length; i++) {
        symbol = str.charAt(i);
        if (!isNaN(symbol)) {
            return false;
        };
    }
    return true;
}

function et(str) {
    for (var i = 0; i < str.length; i++) {
        symbol = str.charAt(i);
        if (symbol === "@") {
            return false;
        };
    }
    return true;
}

function isValid(str) {
    for (var i = 0; i < str.length; i++) {
        symbol = str.charAt(i);
        return /^[a-zA-Z]+$/.test(symbol);
    }
}
