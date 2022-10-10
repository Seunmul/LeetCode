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

  nums = [...nums,...nums]
     return nums
};