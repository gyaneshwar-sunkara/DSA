def sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key


if __name__ == "__main__":
    arr = [2, 3, 4, 1, 6, 7, 3]
    print(arr, end=" ==> ")
    sort(arr)
    print(arr)