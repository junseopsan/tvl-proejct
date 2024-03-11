export const cal_steps = [
  "step6_1_14", // 사업화 준비기간
  "step6_1_17", // 경제적 수명
  "step6_1_18",
  "step6_1_19",
  "step6_1_20",
  "step6_1_22", // 진부화가능성
];

// 경제적 수명
export const step6_1_17 = (economic_life_value) => {
  let score = 0;
  let reason = "";

  console.log(economic_life_value);
  if (economic_life_value < 4) {
    score = 1;
    reason = `평가대상기술의 경제적 수명이 ${economic_life_value}년이므로 ${score}점을 부여`;
  } else if (economic_life_value >= 4 && economic_life_value < 6) {
    score = 2;
    reason = `평가대상기술의 경제적 수명이 ${economic_life_value}년이므로 ${score}점을 부여`;
  } else if (economic_life_value >= 6 && economic_life_value < 8) {
    score = 3;
    reason = `평가대상기술의 경제적 수명이 ${economic_life_value}년이므로 ${score}점을 부여`;
  } else if (economic_life_value >= 8 && economic_life_value < 10) {
    score = 4;
    reason = `평가대상기술의 경제적 수명이 ${economic_life_value}년이므로 ${score}점을 부여`;
  } else {
    score = 5;
    reason = `평가대상기술의 경제적 수명이 ${economic_life_value}년이므로 ${score}점을 부여`;
  }
  return { loading: "f", score: score, reason: reason };
};

// 진부화가능성
export const step6_1_22 = (q2_value) => {
  let score = 0;
  let reason = "";

  if (q2_value <= 6) {
    score = 1;
    reason = `평가대상기술의 Q2 값이 ${q2_value}년이므로 이에 ${score}점을 부여`;
  } else if (q2_value >= 7 && q2_value <= 8) {
    score = 2;
    reason = `평가대상기술의 Q2 값이 ${q2_value}년이므로 이에 ${score}점을 부여`;
  } else if (q2_value == 9) {
    score = 3;
    reason = `평가대상기술의 Q2 값이 ${q2_value}년이므로 이에 ${score}점을 부여`;
  } else if (q2_value == 10) {
    score = 4;
    reason = `평가대상기술의 Q2 값이 ${q2_value}년이므로 이에 ${score}점을 부여`;
  } else {
    score = 5;
    reason = `평가대상기술의 Q2 값이 ${q2_value}년이므로 이에 ${score}점을 부여`;
  }
  return { loading: "f", score: score, reason: reason };
};

// 사업화 준비기간
export const step6_1_14 = (period_value) => {
  let score = 0;
  let reason = "";
  if (period_value >= 24) {
    score = 1;
    reason = `평가대상기술의 사업화를 위한 준비기간은 ${period_value}개월로 2년 이상의 준비기간이 필요하므로 ${score}점을 부여`;
  } else if (12 <= period_value && period_value < 24) {
    score = 2;
    reason = `평가대상기술의 사업화를 위한 준비기간은 ${period_value}개월로 1년 이상 2년 미만의 준비기간이 필요하므로 ${score}점을 부여`;
  } else if (6 <= period_value && period_value < 12) {
    score = 3;
    reason = `평가대상기술의 사업화를 위한 준비기간은 ${period_value}개월로 6개월 이상 1년 미만의 준비기간이 필요하므로 ${score}점을 부여`;
  } else if (period_value < 6) {
    score = 4;
    reason = `평가대상기술의 사업화를 위한 준비기간은 ${period_value}개월로 6개월 미만의 준비기간이 필요하므로 ${score}점을 부여`;
  } else {
    score = 5;
    reason =
      "평가대상기술의 사업화를 위한 별도의 준비기간이 필요하지 않고 즉시 사업화가 가능";
  }
  return { loading: "f", 평가점수: score, 평가근거: reason };
};

// 시장규모 추정
export const market_size = (data, start_year, end_year) => {
  const cagr = Number(data.CAGR.replace(/[^0-9.-]+/g, ""));
  let measured_market_size = data.조사한시장규모;
  const measured_year = data.조사한연도;

  const cash_flows = [];
  for (let year = measured_year; year < end_year + 1; year++) {
    cash_flows.push(Number(measured_market_size.toFixed(2)));
    measured_market_size *= 1 + cagr / 100;
    if (year < start_year) {
      cash_flows.shift();
    }
  }
  return cash_flows;
};
