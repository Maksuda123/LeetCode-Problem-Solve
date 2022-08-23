//1. Two Sum
const twoSum = (nums, target) => {
let result = {}
let len = nums.length;
for(let i = 0; i<len; i++){
    if(nums[i] in result){
        return [result[nums[i]], i];
    }
    result[target - nums[i]] = i
}
return [-1, -1]
}
console.log(twoSum([2,7,11,15], 9));

//9. Palindrome Number
const palindromeNumber = (x) => {
    if ( x < 0) return false;
    let num = x;
    let res = 0;
    while (num !== 0) {
        res = (res * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    return res === x;
}
console.log(palindromeNumber(121))