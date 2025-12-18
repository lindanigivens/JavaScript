function countBs(str) {
    let counter = 0, occurrence = 0;
    while (counter <= str.length - 1) {
        if (str[counter] === "B") {
            counter++;
            occurrence++;
        } else { counter++; }
    }
    return occurrence;
}
console.log(countBs("BraBanBronBrie"));

// Bean Counting 2.0 

function countBs(str, character) {
    let counter = 0, occurrence = 0;
    while (counter <= str.length - 1) {
        if (str[counter] === character) {
            counter++;
            occurrence++;
        } else { counter++; }
    }
    return occurrence;
}
console.log(countBs("", ""));
