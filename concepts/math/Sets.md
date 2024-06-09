## Subsets

For Sets A and B, Set A is a Subset of Set B if every element in **Set A is
also in Set B.**

The **number of distinct subsets** of a set containing n
elements is given by **2^n.**


## Proper Subsets

For Sets A and B, Set A is a Proper Subset of Set B if every
element in Set A is also in Set B, but **Set A does not equal Set B**.

The **number of distinct proper subsets** of a set
containing n elements is given by **2^n - 1.**



## Power Set

The power set is a set which includes all the subsets including the empty set and the original set itself given by  **2^n**.

### Standard Brute Force
<pre>
def powerset(numbers):
    result = [[]]
    for number in numbers:
        new_subsets = []
        for subset in result:
            new_subset = subset + [number]
            new_subsets.append(new_subset)
        result.extend(new_subsets)
    return result
</pre>

### Depth First Search
<pre>
def powerset(numbers):
    result = []

    subset = []
    def dfs(i):
        if i >= len(numbers):
            result.append(subset.copy())
            return
        subset.append(numbers[i])
        dfs(i + 1)

        subset.pop()
        dfs(i + 1)
    
    dfs(0)
    return result


</pre>
