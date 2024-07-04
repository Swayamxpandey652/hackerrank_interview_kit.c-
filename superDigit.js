*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
    // Write your code here

    function getSuperDigit(num){
        if(num.length === 1){
            return BigInt(num);
        }
        
        let sum = BigInt(0);
        for(let char of num){
            sum += BigInt(char);
        } 
        return getSuperDigit(sum.toString());
    }
    let initialSum = BigInt(0);
    for(let char of n){
        initialSum += BigInt(char);
    }
    initialSum *= BigInt(k);
    
    return getSuperDigit(initialSum.toString());
}
