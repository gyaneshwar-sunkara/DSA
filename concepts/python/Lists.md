##  Creating Lists

```python
nums = [1, 2, 3]
zeros = [0] * 5         # [0, 0, 0, 0, 0]
matrix = [[0]*3 for _ in range(3)]  # 3x3 matrix
```

---

##  Adding & Removing Elements

```python
nums.append(4)          # Add to end
nums.insert(1, 99)      # Insert at index
nums.pop()              # Remove last
nums.pop(2)             # Remove at index
nums.remove(3)          # Remove first occurrence of 3
del nums[1]             # Delete at index
```

---

##  List Slicing & Accessing

```python
nums[1:3]               # Slice from index 1 to 2
nums[::-1]              # Reverse the list
nums[:3]                # First 3 elements
nums[-1]                # Last element
```

---

##  Searching & Membership

```python
3 in nums              # Check existence
nums.index(3)          # Get index of first 3
nums.count(2)          # Count number of 2s
```

---

##  Looping Through Lists

```python
for i in nums: print(i)
for i, val in enumerate(nums): print(i, val)
```

---

##  List Comprehension

```python
squares = [x**2 for x in nums]
evens = [x for x in nums if x % 2 == 0]
matrix = [[i*j for j in range(3)] for i in range(3)]
```

---

##  Transforming Lists

```python
nums = list(map(int, ["1", "2", "3"]))  # Convert to int
joined = ''.join(['a', 'b', 'c'])       # "abc"
```

---

##  Common Utilities

```python
len(nums)               # Length
sum(nums)               # Sum
min(nums), max(nums)    # Min, Max
sorted(nums)            # Returns sorted list
reversed(nums)          # Returns reversed iterator
```

---

##  Remove Duplicates (while maintaining order)
```python
seen = set()
unique = [x for x in nums if not (x in seen or seen.add(x))]
```

---

##  Flatten 2D List
```python
flat = [item for row in matrix for item in row]
```

---

##  Swap Elements
```python
nums[i], nums[j] = nums[j], nums[i]
```

---

##  Initialize a List of N elements with default value
```python
default_list = [0] * 10
```

---

##  Filter with Lambda
```python
filtered = list(filter(lambda x: x % 2 == 0, nums))
```