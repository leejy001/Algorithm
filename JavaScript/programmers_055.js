function solution(record) {
    var userInfo = {};
    var action = [];
    for(let i = 0; i < record.length; i++) {
        let [active, id, name] = record[i].split(' ')
        if(active !== 'Change') {
            action.push([active, id])
        }

        if(name) {
            userInfo[id] = name
        }
    }

    return action.map(([active, id]) => {
        if (active === 'Enter') {
            return `${userInfo[id]}님이 들어왔습니다.`   
        } else if (active === 'Leave') {
            return `${userInfo[id]}님이 나갔습니다.`
        }
    })
}