function rotate(arr) {
    let result = [];
    for (let i = 0; i < arr[0].length; i++) {
      result.push([]);
    }
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = arr.length - 1; j >= 0; j--) {
        result[i].push(arr[j][i]);
      }
    }
    return result;
  }
  
  function isMatch(newLock, len) {
    for (let i = len; i < len * 2; i++) {
      for (let j = len; j < len * 2; j++) {
        if (newLock[i][j] !== 1) return false;
      }
    }
    return true;
  }
  
  function solution(key, lock) {
    let len = lock.length;
    let arr = Array.from(Array(len * 3), () => Array(len * 3).fill(0));
  
    for (let i = len; i < len * 2; i++) {
      for (let j = len; j < len * 2; j++) {
        arr[i][j] = lock[i - len][j - len];
      }
    }
  
    for (let i = 0; i < 4; i++) {
      key = rotate(key);
      for (let j = 0; j <= arr.length - key.length; j++) {
        for (let k = 0; k <= arr[0].length - key[0].length; k++) {
          const newLock = arr.map((item) => item.slice());
  
          for (let m = 0; m < key.length; m++) {
            for (let n = 0; n < key.length; n++) {
              newLock[j + m][k + n] ^= key[m][n];
            }
          }
            
          if (isMatch(newLock, len)) return true;
        }
      }
    }
    return false;
  }