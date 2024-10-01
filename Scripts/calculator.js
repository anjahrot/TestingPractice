export const calculator = {
    add: (a,b) =>  a + b,
    sub: (a,b) => a-b,
    multiply: (a,b) => a*b,
    divide: (a,b) => {
        if(b === 0) return undefined
        else return a/b
    }
}



