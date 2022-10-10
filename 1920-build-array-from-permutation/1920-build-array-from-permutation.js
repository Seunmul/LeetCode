/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  let newNums=[]
    nums.forEach((item,index)=>{
      newNums[index]=nums[item]
  })  
    return newNums
};