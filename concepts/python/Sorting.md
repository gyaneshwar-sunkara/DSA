# Sorting

## Basic Sorting

### 1. Ascending / Descending
```python
arr.sort()           # Ascending
arr.sort(reverse=True)  # Descending
```

### 2. Sorted (returns a new list)
```python
new_arr = sorted(arr)  # doesn't modify original
```

---

## Sorting with Custom Key

### 3. Sort by 2nd element in a list of tuples
```python
arr = [(1, 3), (2, 2), (4, 1)]
arr.sort(key=lambda x: x[1])
# Result: [(4, 1), (2, 2), (1, 3)]
```

### 4. Sort by multiple keys
```python
# First by first element ascending, then by second element descending
arr.sort(key=lambda x: (x[0], -x[1]))
```

---

## Sort a String

### 5. Alphabetically
```python
s = "leetcode"
sorted_s = ''.join(sorted(s))  # 'cdeeelot'
```

### 6. By character frequency
```python
from collections import Counter
s = "tree"
freq = Counter(s)
sorted_s = ''.join(sorted(s, key=lambda x: (-freq[x], x)))
# Output: "eert" or "eetr"
```

---

## Sorting with `key`

### 7. Sort list of dicts
```python
students = [{'name': 'Amy', 'score': 91},
            {'name': 'Ben', 'score': 88}]
students.sort(key=lambda x: x['score'])
```

---

## Using `itemgetter` for performance

```python
from operator import itemgetter
arr = [(1, 5), (3, 2), (2, 8)]
arr.sort(key=itemgetter(1))  # Sort by 2nd item in tuple
```

---

## Custom Comparator with `functools.cmp_to_key`

This is rare but useful when you need full control over comparisons (like in sorting strings to form the largest number):

```python
from functools import cmp_to_key

def compare(x, y):
    if x + y > y + x:
        return -1
    else:
        return 1

nums = ["9", "34", "30", "5", "3"]
nums.sort(key=cmp_to_key(compare))
result = ''.join(nums)  # "9534330"
```

---

## Heap Sort (with heapq)

```python
import heapq

nums = [5, 2, 9, 1]
heapq.heapify(nums)
sorted_nums = [heapq.heappop(nums) for _ in range(len(nums))]
```