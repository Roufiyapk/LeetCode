public class Solution {
    public int[] RecoverOrder(int[] order, int[] friends) {

    List<int> result = new List<int>();

    foreach (int id in order)
    {
        if (friends.Contains(id))
        {
            result.Add(id);
        }
    }

    return result.ToArray();

    }
}