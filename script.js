//1. Two Sum
const twoSum = (nums, target) => {
  let result = {}
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] in result) {
      return [result[nums[i]], i];
    }
    result[target - nums[i]] = i
  }
  return [-1, -1]
}
console.log(twoSum([2, 7, 11, 15], 9));

//9. Palindrome Number
const palindromeNumber = (x) => {
  if (x < 0) return false;
  let num = x;
  let res = 0;
  while (num !== 0) {
    res = (res * 10) + (num % 10);
    num = Math.floor(num / 10);
  }
  return res === x;
}
console.log(palindromeNumber(121))

//13. Roman to Integer
const romanToInteger = (romanStr) => {
  let num = 0;
  let objRoman = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  for (let i = 0; i < romanStr.length; i++) {
    if (objRoman[romanStr[i] < objRoman[romanStr[i + 1]]]) {
      num -= objRoman[romanStr[i]];
    } else {
      num += objRoman[romanStr[i]];
    }
  }
  return num;
}
console.log(romanToInteger('III'))

//14. Longest Common Prefix
const longestCommponPrefix = (strs) => {
  let Prefix = " ";
  if (strs === null || strs.length === 0) return Prefix;
  for (let i = 0; i < strs[0].length; i++) {
    if (!strs.every((string) => string[i] === strs[0][i])) {
      return strs[0].slice(0, i);
    }

  }
  return strs[0];
};
console.log(longestCommponPrefix(["flower", "flow", "flight"]))


// 20. Valid Parentheses
const isValid = (s) => {
  var stack = [];
  var len = s.length;
  var map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (let i = 0; i < len; i++) {
    if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};
console.log(isValid("()[]{}"))




//   21. Merge Two Sorted Lists
var mergeTwoLists = function (l1, l2) {
  var head = new ListNode(0);
  var now = head;
  var p1 = l1;
  var p2 = l2;
  while (p1 || p2) {
    if (p1 === null || (p2 !== null && p2.val < p1.val)) {
      now.next = p2;
      p2 = p2.next;
    } else {
      now.next = p1;
      p1 = p1.next;
    }
    now = now.next;
  }
  return head.next;
};



// 26. Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {
  const length = nums.length;

  if (length <= 1) {
    return length;
  }

  let i = 0;

  for (let j = 1; j <= length; j++) {
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))




//27. Remove Element
var removeElement = function(nums, val) {
  var len = nums.length;
  var count = 0;
  for (var i = 0; i < len; i++) {
    if (nums[i] !== val) nums[count++] = nums[i];
  }
  return count;
};




//28. Implement strStr()
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;

  if (needle === haystack) return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (needle === haystack.substring(i, i + needle.length)) {
      return i;
    }
  } 
  return -1;
};


//35. Search Insert Position
//Using Binary Search
var searchInsert = function (nums, target) {
  let left = 0;
    let right = nums.length;

    while (left < right) {
        const middle = Math.floor((left + right) / 2);

        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    return left;
};
console.log(searchInsert([1,3,5,6], 7));


//Or
var searchInsert = function (nums, target) {

  for (let index = 0; index < nums.length; index++) {
    if (target <= nums[index]) {
      return index;
    }
  }
  return nums.length;
};






//58. Length of Last Word
var lengthOfLastWord = function (s) {
  const words = s.trim().split(" ");
  return words.length > 0 ? words[words.length - 1].length : 0;
};


//or
var lengthOfLastWord = function (s) {
  const wordArray = s.trim().split(/(\s+)/);
  const last = wordArray.length - 1;
  if (wordArray[last] === "") {
    return 0;
  } else {
    return wordArray[last].length;
  }
};
