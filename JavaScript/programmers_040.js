function solution(nums) {
    const set = new Set(nums);
    const setArr = [...set];
    return Math.min(nums.length / 2, setArr.length)
}