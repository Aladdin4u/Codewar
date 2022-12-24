//PREP parameters, return, example, pseudo code
/**
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
**/  
//P: number
//R: console
//P: 
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}
// E:
GetSum(1, 0) //--> 1 (1 + 0 = 1)
GetSum(1, 2) //--> 3 (1 + 2 = 3)
GetSum(0, 1) //--> 1 (0 + 1 = 1)
GetSum(1, 1) //--> 1 (1 since both are same)
GetSum(-1, 0) //--> -1 (-1 + 0 = -1)
GetSum(-1, 2) //--> 2 (-1 + 0 + 1 + 2 = 2)