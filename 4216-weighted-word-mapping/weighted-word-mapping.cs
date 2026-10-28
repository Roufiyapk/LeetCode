public class Solution {
    public string MapWordWeights(string[] words, int[] weights) {
         string result = "";

        foreach (string word in words)
        {
            int sum = 0;

            foreach (char ch in word)
            {
                sum += weights[ch - 'a'];
            }

            int remainder = sum % 26;

            result += (char)('z' - remainder);
        }

        return result;
    }
}