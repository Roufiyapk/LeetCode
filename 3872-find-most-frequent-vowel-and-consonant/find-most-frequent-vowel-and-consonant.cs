public class Solution {
    public int MaxFreqSum(string s) {


    
        int[] freq = new int[26];

        foreach (char c in s)
        {
            freq[c - 'a']++;
        }

        int maxVowel = 0;
        int maxConsonant = 0;

        for (int i = 0; i < 26; i++)
        {
            char c = (char)('a' + i);

            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
            {
                maxVowel = Math.Max(maxVowel, freq[i]);
            }
            else
            {
                maxConsonant = Math.Max(maxConsonant, freq[i]);
            }
        }

        return maxVowel + maxConsonant;
    }

        
    
}