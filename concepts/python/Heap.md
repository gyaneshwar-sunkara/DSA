## Basic Heap Setup

Python’s built-in heap library is `heapq`. By default, it creates a **min-heap**.

```python
import heapq
```

---

## Min-Heap Operations

```python
heap = []
heapq.heappush(heap, 5)
heapq.heappush(heap, 1)
heapq.heappush(heap, 3)

smallest = heapq.heappop(heap)  # Pops 1
```

---

## Max-Heap using Negatives

Python doesn't have a built-in max-heap, so we invert the values:

```python
max_heap = []
heapq.heappush(max_heap, -5)
heapq.heappush(max_heap, -1)
heapq.heappush(max_heap, -3)

largest = -heapq.heappop(max_heap)  # Pops 5
```

---

## Heapify a List

Convert an existing list into a heap in-place.

```python
arr = [3, 1, 4, 1, 5]
heapq.heapify(arr)
```

---

## Peek at Top of Heap (without popping)

```python
top = heap[0]
```

---

## Retrieve k Smallest or Largest Elements

```python
# k smallest
heapq.nsmallest(k, arr)

# k largest
heapq.nlargest(k, arr)
```

---

## Priority Queue with Tuples (e.g., (priority, value))

```python
heap = []
heapq.heappush(heap, (2, "task2"))
heapq.heappush(heap, (1, "task1"))

_, task = heapq.heappop(heap)  # Returns "task1"
```

---

## Custom Objects in Heap

You must define the `__lt__` method to compare custom objects.

```python
class Node:
    def __init__(self, val, priority):
        self.val = val
        self.priority = priority
    def __lt__(self, other):
        return self.priority < other.priority

heap = []
heapq.heappush(heap, Node("task1", 2))
heapq.heappush(heap, Node("task2", 1))
```

---

## Heap Sort

```python
def heap_sort(nums):
    heapq.heapify(nums)
    return [heapq.heappop(nums) for _ in range(len(nums))]
```
