public class Solution {
    public string ReverseVowels(string s) {

        char[] arr=s.ToCharArray();

        int left=0;
        int right=arr.Length-1;

        while(left<right){

while(left<right&&!"aeiouAEIOU".Contains(arr[left])){
    left++;
}
while(left<right&&!"aeiouAEIOU".Contains(arr[right])){
    right--;
}

char temp=arr[left];
arr[left]=arr[right];
arr[right]=temp;
left++;
right--;
        }

        
        return new string(arr);
    }
}