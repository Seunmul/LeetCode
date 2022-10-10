/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let sum=0

  nums.forEach((item,index)=>{
      sum=sum+item
      nums[index]=(sum)
  })
    return nums
};