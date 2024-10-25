def powerset(numbers):
    result = [[]]
    for number in numbers:
        new_subsets = []
        for subset in result:
            new_subset = subset + [number]
            new_subsets.append(new_subset)
        result.extend(new_subsets)
    return result


def powerset2(numbers):
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


def powerset3(numbers):
    result = []

    print(numbers)
    
    return result


if __name__ == "__main__":
    res = powerset2([1, 2, 3])
    print(res)