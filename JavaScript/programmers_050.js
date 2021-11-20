function solution_basic(s) {
    var answer = '';
    var word = '';
    var words = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    for(let i = 0; i <= s.length; i++) {
        if(words.includes(word)) {
            answer += words.indexOf(word)
            word = ''
        }
        if(isNaN(s[i])) {
            word += s[i]   
        } else {
            answer += s[i]
        }
    }
    return parseInt(answer);
}


//숫자 순서대로 split으로 나눠주고 join을 할 때 해당 숫자를 더해줌

function solution_split_join(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}


//정규표현식

function solution_reExp_one(s) {
    s = s.replace(/zero/g, 0)
    .replace(/one/g, 1)
    .replace(/two/g, 2)
    .replace(/three/g, 3)
    .replace(/four/g, 4)
    .replace(/five/g, 5)
    .replace(/six/g, 6)
    .replace(/seven/g, 7)
    .replace(/eight/g, 8)
    .replace(/nine/g, 9)
    return parseInt(s);
}

function solution_reExp_two(s) {
    let numChar = {"zero" : 0, "one" : 1, "two" : 2, "three" : 3, "four" : 4, "five" : 5, "six" : 6, "seven" : 7, "eight" : 8, "nine" : 9}

    for(let [key, value] of Object.entries(numChar)) {
        let re = new RegExp(`${key}`,"g");
        s = s.replace(re, value);
    }
    return parseInt(s);
}
