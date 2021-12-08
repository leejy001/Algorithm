// 섬 개수 구하기
let n = 7;
let map1 = [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
];

let map2 = [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
];

// DFS
function solution_dfs(n, arr) {
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];
    let cnt = 0;
    
    function dfs(x, y) {
        arr[x][y] = 0;
        for (let i = 0; i < 8; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
            if(arr[nx][ny]) dfs(nx, ny);  // 다음 방문 좌표
        }
    }
    
    for(let x = 0; x < n; x++) {
        for(let y = 0; y < n; y++) {
            if(arr[x][y]) {
                dfs(x, y);
                cnt++;
            }
        }
    }
    return cnt;
}

// BFS
function solution_bfs(n, arr) {
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];
    let cnt = 0;
    let queue = []
    
    function bfs(x, y) {
        arr[x][y] = 0;
        queue.push([x, y]);
        while(queue.length) {
            let [x, y] = queue.shift();  // 현재 방문 좌표 shift
            for (let i = 0; i < 8; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];
                if(nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
                if(arr[nx][ny]) {
                    arr[nx][ny] = 0;
                    queue.push([nx, ny]);  // 다음 방문 좌표 push
                }
            }
        }
    }
    
    for(let x = 0; x < n; x++) {
        for(let y = 0; y < n; y++) {
            if(arr[x][y]) {
                bfs(x, y);
                cnt++;
            }
        }
    }
    return cnt;
}

console.log(solution_dfs(n, map1));
console.log(solution_bfs(n, map2));


// 최단거리 알고리즘 
const maps = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1]
]

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

solution(maps);