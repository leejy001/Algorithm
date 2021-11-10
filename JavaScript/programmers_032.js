function solution(sizes) {
    var answer = 0;
    var min = []
    var max = []
    for(let i = 0; i < sizes.length; i++) {
        if(sizes[i][1] >= sizes[i][0]) {
            min.push(sizes[i][0])
            max.push(sizes[i][1])
        } else if (sizes[i][1] < sizes[i][0]) {
            max.push(sizes[i][0])
            min.push(sizes[i][1])
        }
    }
    return Math.max(...max) * Math.max(...min)
}

// reduce
function solution(sizes) {
    const [width, height] = sizes.reduce(([w, h], [a, b]) => [Math.max(w, Math.max(a, b)), Math.max(h, Math.min(a, b))], [0, 0])
    return width * height;
}