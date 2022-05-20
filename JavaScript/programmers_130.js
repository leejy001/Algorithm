// LV.3 베스트앨범

function solution(genres, plays) {
    var answer = [];
    let genresRank = {}
    let genresTotal = []
    for(let i = 0; i < genres.length; i++) {
        if(genresRank[genres[i]]) {
            genresRank[genres[i]].push([plays[i], i])
            genresTotal[genres[i]] += plays[i]
        } else {
            genresRank[genres[i]] = [[plays[i], i]]
            genresTotal[genres[i]] = plays[i]
        }
    }
    
    for(let [key, value] of Object.entries(genresRank)) {
        genresRank[key] = value.sort((a, b) => { return b[0] - a[0] })
    }
    
    var sortable = [];
    
    for (var genres in genresTotal) {
        sortable.push([genres, genresTotal[genres]]);
    }
       
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    
    for(let i in sortable) {
        answer.push(...genresRank[sortable[i][0]].slice(0, 2))
    }

    return answer.map(item => item[1]);
}