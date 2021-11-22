function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let count = lottos.filter(v => win_nums.includes(v)).length;
    let zero_count = lottos.filter(v => !v).length;

    return [rank[count + zero_count], rank[count]];
}