/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {

    let ans=nums[0]


    for(num of nums){
        if(Math.abs(num)<Math.abs(ans)){
            ans=num
        }else if(Math.abs(num)===Math.abs(ans)){
            ans=Math.max(num,ans)

        }
    }
    return ans


    
};

