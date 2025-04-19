## Two-Pointer Tricks

### 1. Reverse a list in-place
```python
left, right = 0, len(arr) - 1
while left < right:
    arr[left], arr[right] = arr[right], arr[left]
    left += 1
    right -= 1
```

### 2. Check for Palindrome
```python
def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True
```

---

## HashMap / Set Tricks

### 3. Count characters
```python
from collections import Counter
count = Counter("leetcode")  # {'l':1, 'e':3, 't':1, 'c':1, 'o':1, 'd':1}
```

### 4. Remove duplicates from list
```python
nums = list(set(nums))
```

### 5. Frequency map
```python
freq = {}
for num in nums:
    freq[num] = freq.get(num, 0) + 1
```

---

## Stack

### 6. Valid Parentheses
```python
stack = []
mapping = {')': '(', '}': '{', ']': '['}
for char in s:
    if char in mapping:
        top = stack.pop() if stack else '#'
        if mapping[char] != top:
            return False
    else:
        stack.append(char)
return not stack
```

---

## Sliding Window

### 7. Max sum subarray of size k
```python
def max_sum_k(nums, k):
    window_sum = sum(nums[:k])
    max_sum = window_sum
    for i in range(k, len(nums)):
        window_sum += nums[i] - nums[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum
```

---

## Binary Search

### 8. Binary Search Template
```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

---

## Tree & DFS/BFS

### 9. DFS in Binary Tree
```python
def dfs(root):
    if not root:
        return
    print(root.val)
    dfs(root.left)
    dfs(root.right)
```

### 10. BFS (Level Order Traversal)
```python
from collections import deque
def bfs(root):
    queue = deque([root])
    while queue:
        node = queue.popleft()
        print(node.val)
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
```

---

## Backtracking Template

```python
def backtrack(path, options):
    if end_condition(path):
        result.append(path[:])
        return
    for i in range(len(options)):
        path.append(options[i])
        backtrack(path, options[:i] + options[i+1:])  # choose
        path.pop()                                    # un-choose
```

---

## Miscellaneous

### 11. List Comprehension with Condition
```python
evens = [x for x in nums if x % 2 == 0]
```

### 12. Sorting with Custom Key
```python
arr.sort(key=lambda x: (x[0], -x[1]))
```

### 13. Heap (Priority Queue)
```python
import heapq
min_heap = []
heapq.heappush(min_heap, 10)
heapq.heappop(min_heap)
```