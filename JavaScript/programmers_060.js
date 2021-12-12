function solution(maps) {
    let n = maps.length
    let m = maps[0].length
    let dx = [0,0,1,-1];
    let dy = [1,-1,0,0];
    let queue = [[0,0]];
    const costMap = [...maps].map((r) => r.map((c) => 1));
    while(queue.length) {
        const [x, y] = queue.shift();
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
            if (maps[nx][ny] === 1 && costMap[nx][ny] === 1) {
                costMap[nx][ny] = costMap[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    return costMap[n -1][m - 1] === 1 ? -1 : costMap[n - 1][m - 1];
}