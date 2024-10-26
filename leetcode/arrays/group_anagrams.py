from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        """
        Given an array of strings strs, group the anagrams together. You can return the answer in any order.
        """
        def brute_force() -> List[List[str]]:
            """
            Brute Force Approach:
            Compare each string with every other string by sorting them to group anagrams.

            Time Complexity: O(n * k * log(k)), where n is the number of strings and 
            k is the maximum length of a string. Sorting each string takes O(k * log(k)) time.

            Space Complexity: O(n * k), as we need space to store all input strings.
            """
            res = []
            visited = [False] * len(strs)  # Track which strings are already grouped

            # Compare each string with every other string
            for i in range(len(strs)):
                if visited[i]:  # Skip if already grouped
                    continue
                group = [strs[i]]
                visited[i] = True  # Mark as visited
                for j in range(i + 1, len(strs)):
                    if sorted(strs[i]) == sorted(strs[j]):  # Check if anagrams
                        group.append(strs[j])
                        visited[j] = True
                res.append(group)

            return res

        def optimized() -> List[List[str]]:
            """
            Optimized Approach:
            Use a frequency array to create a unique signature for each string and 
            group strings with the same signature.

            Time Complexity: O(n * k), where n is the number of strings and 
            k is the maximum length of a string. We traverse each string and 
            build the frequency signature in linear time.

            Space Complexity: O(n * k), for storing the input and the dictionary of grouped anagrams.
            """
            s = dict()  # Dictionary to store frequency signature -> list of anagrams

            # Build frequency signature for each string
            for i in strs:
                freq = [0] * 26  # Frequency array for 26 letters of the alphabet
                for j in i:
                    freq[ord(j) - ord('a')] += 1  # Increment frequency for each character

                # Convert frequency array to a string to use as a dictionary key
                freq_s = '_'.join(str(s_i) for s_i in freq)

                # Group strings with the same frequency signature
                if freq_s in s:
                    s[freq_s].append(i)
                else:
                    s[freq_s] = [i]

            # Collect all groups of anagrams
            return list(s.values())

        return optimized()
