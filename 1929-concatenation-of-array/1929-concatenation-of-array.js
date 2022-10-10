/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {

  const newNums=[...nums,...nums]  
  // nums.length>1000 &&(
  // nums.forEach((item,index)=>{
  //       if(item<1 && item>1000)
  //           return
  //   })
  // )

     return newNums
};