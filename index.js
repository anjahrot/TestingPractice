function capitalize(string) {
    let word = string;
    const firstLetter = word.slice(0,1);
    const rest = word.slice(1);
    return firstLetter.toUpperCase().concat(rest);
}


module.exports = capitalize;