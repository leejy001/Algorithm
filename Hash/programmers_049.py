# 정렬 했을 때
def solution(phone_book):
    phone_map = {}
    phone_book.sort()
    for phone_num in phone_book:
        st = ''
        for num in phone_num:
            st += num
            if phone_map.get(st):
                return False

        if phone_map.get(phone_num):
            phone_map[phone_num] += 1
        else:
            phone_map[phone_num] = 1
    return True

# 정렬 안하고 했을 때
def solution(phone_book):
    hash_map = {}
    for phone_number in phone_book:
        hash_map[phone_number] = 1
    for phone_number in phone_book:
        temp = ""
        for number in phone_number:
            temp += number
            if temp in hash_map and temp != phone_number:
                return False
    return True