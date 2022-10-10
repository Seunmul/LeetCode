/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let sum=0
  let newNums=[]
  nums.forEach((item)=>{
      sum=sum+item
      newNums.push(sum)
  })
    return newNums
};