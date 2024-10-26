from typing import List


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        """
        Check if two strings are anagrams of each other.
        """

        def brute_force() -> bool:
            """
            Brute Force Approach:
            Sort both strings and compare them to see if they are identical.
            
            Time Complexity: O(n log n), where n is the length of the strings.
            Sorting both strings dominates the time complexity.
            
            Space Complexity: O(n), since sorted() creates new copies of the strings.
            """
            return sorted(s) == sorted(t)  # Check if sorted versions are the same


        def frequency_counter():
            """
            This implementation uses a frequency array to count occurrences of each character
            in the first string and then decrements the counts based on the second string.
            If the counts return to zero for all characters, the strings are anagrams.

            Time Complexity: O(n), where n is the length of the longer string,
            since we iterate through each string once.

            Space Complexity: O(1) since the frequency array size is constant (26 for lowercase English letters).
            """
            freq = [
                0
            ] * 26  # Initialize a frequency array for 26 letters of the alphabet

            # Count frequency of each character in the first string
            for i in s:
                freq[ord(i) - ord("a")] += 1

            # Decrease the count for each character in the second string
            for i in t:
                freq[ord(i) - ord("a")] -= 1
                # If any character count goes negative, return False (not an anagram)
                if freq[ord(i) - ord("a")] < 0:
                    return False

            # Check if all counts return to zero
            for i in freq:
                if i != 0:  # If any count is not zero, they're not anagrams
                    return False

            return True  # All counts are zero, so they are anagrams

        return frequency_counter()
