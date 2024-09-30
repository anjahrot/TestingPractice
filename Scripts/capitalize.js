export function capitalize(string) {
    let s = string;
    const firstLetter = s.slice(0,1);
    const rest = s.slice(1);
    return firstLetter.toUpperCase().concat(rest);
}


