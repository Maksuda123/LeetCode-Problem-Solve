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