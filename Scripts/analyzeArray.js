export const analyzeArray = (array) => {
    const sum = array.reduce(
        (acc, curr) => acc + curr,
         0, 
    );
    const max = array.reduce(
        (max, curr) =>  curr > max ? curr : max,
        0,
    )
    const min = array.reduce(
        (min, curr) => curr < min ? curr : min,
    )
    const length = array.length;
    const average = Math.round(sum/length*10)/10;
    

    return {average, min, max, length}
} 
