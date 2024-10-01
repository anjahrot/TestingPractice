export const caesarCipher = (string, shift) => {
    let code = [];

    for(let i=0; i<string.length; i++){
        let number = string.charCodeAt(i);
        let numberShifted = number + shift
        //not a letter, no shifting
        if ( number < 65 || (number > 90 && number < 97) || number > 122) {
            code[i] = number;
        }
        //need wrapping
        else if((numberShifted > 90 && numberShifted < 97) || (numberShifted > 122)) {
            code[i] = numberShifted - 26;
        }
        else {
            code[i] = numberShifted;
        }
    }
    
    return String.fromCharCode.apply(null, code);
}
