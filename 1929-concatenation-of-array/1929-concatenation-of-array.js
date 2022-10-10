/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {

  nums.forEach((item,index)=>{
        if(item<1 && item>1000)
            return
        else if(index>1000)
            return
    })

  const newNums = [...nums,...nums]
     return newNums
};