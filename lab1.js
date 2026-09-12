//Q1
function capitalizeWords(str) {

    let words = str.split(" ");

    let newWords = words.map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    });

    return newWords.join(" ");
}

console.log(capitalizeWords("the quick brown fox"));


//Q2
function max(a, b, c) {

    let largest = a;

    if (b > largest) {
        largest = b;
    }

    if (c > largest) {
        largest = c;
    }

    return largest;
}

console.log(max(1,0,1));
console.log(max(0,-10,-20));
console.log(max(1000,510,440));

//Q3

function right(str) {

    if (str.length < 3) {
        return str;
    }

    let lastThree = str.slice(-3);
    let remaining = str.slice(0,-3);

    return lastThree + remaining;
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

//Q4

function angle_Type(angle) {

    if (angle < 90) {
        return "Acute angle";
    }
    else if (angle === 90) {
        return "Right angle";
    }
    else if (angle < 180) {
        return "Obtuse angle";
    }
    else if (angle === 180) {
        return "Straight angle";
    }
}

console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));