public class Solution {
    public IList<int> FindMissingElements(int[] nums) {

List<int> result =new List<int>();
int min=nums.Min();
int max=nums.Max();

HashSet<int> set=new HashSet<int>(nums);
for(int i=min;i<=max;i++){
    if(!set.Contains(i)){
        result.Add(i);
    }
}

        
return result;
        
    }
}