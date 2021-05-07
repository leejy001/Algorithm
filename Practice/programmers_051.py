def solution_one(nums):
    count = int(len(nums)/2)
    nums = set(nums)
    if count > len(nums):
        return len(nums)
    else:
        return count

def solution_two(nums):
    return min(len(nums)/2, len(set(nums)))