# 📚 Python Dictionary Cheatsheet

### 1. **Creating a Dictionary**
```python
# Empty dictionary
my_dict = {}

# Dictionary with key-value pairs
person = {"name": "Alice", "age": 25, "city": "New York"}

# Using dict() constructor
person = dict(name="Alice", age=25, city="New York")
```

---

### 2. **Accessing Elements**
```python
# Access value by key
print(person["name"])  # Output: Alice

# Using .get() (returns None if key not found)
print(person.get("age", "Not found"))  # Output: 25
print(person.get("gender", "Not found"))  # Output: Not found
```

---

### 3. **Adding and Updating Elements**
```python
# Adding a new key-value pair
person["gender"] = "Female"

# Updating an existing key's value
person["age"] = 26

# Add multiple key-value pairs using update()
person.update({"job": "Engineer", "age": 27})
print(person)  # {'name': 'Alice', 'age': 27, 'city': 'New York', 'gender': 'Female', 'job': 'Engineer'}
```

---

### 4. **Removing Elements**
```python
# Remove a key-value pair using pop() (returns the value)
age = person.pop("age", None)  # Output: 27

# Remove the last inserted key-value pair (for Python 3.7+)
last_item = person.popitem()  # Output: ('job', 'Engineer')

# Delete a key using del
del person["city"]

# Clear the entire dictionary
person.clear()
print(person)  # Output: {}
```

---

### 5. **Dictionary Traversal (Loops)**
```python
# Iterate over keys
for key in person:
    print(key)  # name, age, city

# Iterate over values
for value in person.values():
    print(value)  # Alice, 27, New York

# Iterate over key-value pairs
for key, value in person.items():
    print(f"{key}: {value}")
    # Output: name: Alice, age: 27, city: New York
```

---

### 6. **Dictionary Comprehension**
```python
# Create a dictionary with squares of numbers from 1 to 5
squares = {x: x ** 2 for x in range(1, 6)}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Filter out values greater than 10
filtered = {k: v for k, v in squares.items() if v > 10}
print(filtered)  # {4: 16, 5: 25}
```

---

### 7. **Checking for Keys**
```python
# Check if a key exists
if "name" in person:
    print("Name is present")

# Using .get() to avoid KeyError
value = person.get("age", "Not found")  # Output: Not found if key doesn't exist
```

---

### 8. **Merging Dictionaries (Python 3.9+)**
```python
dict1 = {"a": 1, "b": 2}
dict2 = {"b": 3, "c": 4}

# Merge using | (overwrites duplicates)
merged = dict1 | dict2  # Output: {'a': 1, 'b': 3, 'c': 4}

# Merge in-place using |=
dict1 |= dict2
print(dict1)  # Output: {'a': 1, 'b': 3, 'c': 4}
```

---

### 9. **Default Dictionary (from collections)**
```python
from collections import defaultdict

# Create a defaultdict with default type int (default value 0)
d = defaultdict(int)
d["count"] += 1
print(d)  # Output: {'count': 1}

# Create a defaultdict with list as the default type
d = defaultdict(list)
d["numbers"].append(10)
print(d)  # Output: {'numbers': [10]}
```

---

### 10. **Using `Counter` from `collections`**
```python
from collections import Counter

# Create a Counter from a list
count = Counter([1, 2, 2, 3, 3, 3])
print(count)  # Output: Counter({3: 3, 2: 2, 1: 1})

# Most common elements
print(count.most_common(2))  # Output: [(3, 3), (2, 2)]

# Update counts
count.update([1, 2])
print(count)  # Output: Counter({3: 3, 2: 3, 1: 2})
```

---

### 11. **Sorting a Dictionary**
```python
# Sort by keys
sorted_by_keys = dict(sorted(person.items()))

# Sort by values
sorted_by_values = dict(sorted(person.items(), key=lambda item: item[1]))

print(sorted_by_keys)   # Output: Sorted by keys
print(sorted_by_values) # Output: Sorted by values
```

---

### 12. **Handling Missing Keys Gracefully**
```python
# Use .get() to avoid KeyError
print(person.get("name", "No Name"))  # Output: Alice

# Use defaultdict to provide a default value
from collections import defaultdict
d = defaultdict(lambda: "Not Found")
print(d["missing_key"])  # Output: Not Found
```

---

### 13. **Dictionary Methods Overview**
| **Method**          | **Description**                                    |
|---------------------|----------------------------------------------------|
| `dict.get(key)`     | Returns the value for the key if present, else None |
| `dict.pop(key)`     | Removes and returns the value for the given key     |
| `dict.popitem()`    | Removes and returns the last inserted key-value pair |
| `dict.update()`     | Updates dictionary with key-value pairs from another dictionary or iterable |
| `dict.keys()`       | Returns a view of all keys in the dictionary        |
| `dict.values()`     | Returns a view of all values in the dictionary      |
| `dict.items()`      | Returns a view of all key-value pairs               |
| `dict.clear()`      | Removes all elements from the dictionary            |
| `dict.copy()`       | Returns a shallow copy of the dictionary            |


---

### 14. **Common Interview Patterns Using Dictionaries**
1. **Two Sum Problem**  
   Use a dictionary to store seen elements and their indices.
   ```python
   def two_sum(nums, target):
       seen = {}
       for i, num in enumerate(nums):
           diff = target - num
           if diff in seen:
               return [seen[diff], i]
           seen[num] = i
   print(two_sum([2, 7, 11, 15], 9))  # Output: [0, 1]
   ```

2. **Group Anagrams**  
   Use a dictionary to group words with the same character set.
   ```python
   from collections import defaultdict

   def group_anagrams(words):
       anagrams = defaultdict(list)
       for word in words:
           key = ''.join(sorted(word))
           anagrams[key].append(word)
       return list(anagrams.values())

   print(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
   # Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
   ```

---