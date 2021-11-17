function solution(participant, completion) {
    var _participant = participant.sort()
    var _completion = completion.sort()

    for(let i = 0; i < _completion.length; i++) {
        if(_participant[i] !== _completion[i]) return _participant[i]
    }
    return _participant[_participant.length - 1];
}