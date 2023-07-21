// LV.3 스티커 모으기(2)

function solution(sticker) {
  if (sticker.length === 1) return sticker[0];

  const len = sticker.length;
  const dp1 = new Array(len).fill(0);
  const dp2 = new Array(len).fill(0);

  dp1[0] = sticker[0];
  dp1[1] = sticker[0];
  dp2[1] = sticker[1];

  for (let i = 2; i < len; i++) {
    if (i !== len - 1) {
      dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
    } else {
      dp1[i] = dp1[i - 1];
    }

    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
  }

  return Math.max(dp1[len - 2], dp2[len - 1]);
}
