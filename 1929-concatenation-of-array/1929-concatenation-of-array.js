/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    if (nums.length<1 && nums.lenght>1000){
      return null
  }
    nums.forEach((item,index)=>{
        if(item<1 && item>1000)
            return
    })
    
//   for (let i=0;i<num.length;i++){
//     if(nums[i]<1 && nums[i]>1000){
//         return null
//     }
//   }
  const newNums = [...nums,...nums]
     return newNums
};