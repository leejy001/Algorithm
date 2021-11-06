// sort
function solution(strings, n) {
    strings.sort(function(a, b)  {
        if(a[n] === b[n]) {
            return a === b ? 0 : a > b ? 1 : -1;
        }
        return a[n] > b[n] ? 1 : -1;
    });
    return strings;
}

// localeCompare
function solution(strings, n) {
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}