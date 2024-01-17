def binary_search(arr, l, r, key):
    if (l > r):
        return -1
    mid = l + (r - l) // 2
    if(arr[mid] == key):
        return mid
    if(arr[mid] > key):
        return binary_search(arr, l, mid - 1, key)
    else:
        return binary_search(arr, mid + 1, r, key)


def binary_search_iterative(arr, l, r, key):
    while(l <= r):
        mid = (l + r) // 2
        if(arr[mid] == key):
            return mid
        if(arr[mid] < key):
            l = mid + 1
        else:
            r = mid -1

    return -1
        

def search(arr, key):
    return binary_search(arr, 0, len(arr) - 1, key)


if __name__ == "__main__":
    arr = [2, 3, 4, 1, 6, 7, 3]
    key = 72
    print(f"{arr} {key} ==> ", search(arr, key) + 1)