def merge(arr, p, q, r):
    left = arr[p : q + 1]
    right = arr[q + 1 : r + 1]

    i = j = 0
    k = p

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            arr[k] = left[i]
            i += 1
        else:
            arr[k] = right[j]
            j += 1
        k += 1

    while i < len(left):
        arr[k] = left[i]
        i += 1
        k += 1

    while j < len(right):
        arr[k] = right[j]
        j += 1
        k += 1


def merge_sort(arr, p, r):
    if p >= r:
        return
    q = (p + r) // 2
    merge_sort(arr, p, q)
    merge_sort(arr, q + 1, r)
    merge(arr, p, q, r)


def sort(arr):
    merge_sort(arr, 0, len(arr) - 1)


if __name__ == "__main__":
    arr = [2, 3, 4, 1, 6, 7, 3]
    print(arr, end=" ==> ")
    sort(arr)
    print(arr)
