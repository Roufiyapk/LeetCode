public class Solution {
    public string ReversePrefix(string s, int k) {
            char[] chars = s.ToCharArray();

    Array.Reverse(chars, 0, k);

    return new string(chars);

        
    }
}