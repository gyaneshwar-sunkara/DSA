def reverse_integer(n):
    rev = 0
    while n != 0:
        rev = rev * 10 + n % 10
        n //= 10
    return rev

def sum_of_digits(n):
    sum = 0
    while n != 0:
        sum += n % 10
        n //= 10
    return sum

def sum_of_squares_of_digits(n):
    sum = 0
    while n != 0:
        sum += (n % 10) ** 2
        n //= 10
    return sum

if __name__ == "__main__":
    print(reverse_integer(100))
    print(sum_of_digits(1001))
    print(sum_of_squares_of_digits(1002))