from collections import defaultdict


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

        def frequency_counter() -> bool:
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

        def hashmap_counter() -> bool:
            """
            Frequency Counter Approach (HashMap-based):
            Uses a dictionary to count occurrences of each character in the strings.

            Time Complexity: O(n), where n is the length of the strings.
            Space Complexity: O(k), where k is the number of unique characters (max 26 for lowercase).
            Slightly more flexible than the array-based version (can support any characters).
            """
            # Early exit: if lengths differ, they can't be anagrams
            if len(s) != len(t):
                return False

            # Initialize a default dictionary to count characters in 's'
            count = defaultdict(int)

            # Increment character counts for string s
            for ch in s:
                count[ch] += 1  # Track frequency of each character

            # Decrement character counts using characters from string t
            for ch in t:
                count[ch] -= 1  # Subtract frequency for each character
                if count[ch] < 0:
                    # If count goes negative, t has more of this char than s — not an anagram
                    return False

            # If all character counts balance to 0, it's an anagram
            return True

        return hashmap_counter()
