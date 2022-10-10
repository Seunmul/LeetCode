/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {


  nums.forEach((item,index)=>{
      
      if(index>0)
      nums[index]=nums[index-1]+item
  })
    return nums
};