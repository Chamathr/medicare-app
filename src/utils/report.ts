import { SCORES, SEVERITY_LEVEL } from "@/consts/report";
import { IReport } from "@/store";

const getScore = (data: IReport | undefined, stepData: any) => {
  if (data) {
    let totalWeight = 0;
    const total = Object.keys(data).reduce((acc, key) => {
      const innerObject = data[key];
      const innerTotal = Object.keys(innerObject).reduce(
        (innerAcc, innerKey) => {
          return innerAcc + innerObject[innerKey];
        },
        0
      );
      totalWeight += stepData[parseInt(key) - 1]?.weight;
      return acc + innerTotal * stepData[parseInt(key) - 1]?.weight;
    }, 0);
    return parseFloat((total / totalWeight)?.toFixed(1));
  }
  return 0;
};

const getSeverityLevel = (severityLevel: string, score: number) => {
  if (severityLevel) {
    return severityLevel;
  } else if (score > 0 && score <= 3) {
    return SEVERITY_LEVEL.LEVEL_1;
  } else if (score > 3 && score <= 5.5) {
    return SEVERITY_LEVEL.LEVEL_2;
  } else if (score > 5.5 && score <= 7.5) {
    return SEVERITY_LEVEL.LEVEL_3;
  } else if (score > 7.5) {
    return SEVERITY_LEVEL.LEVEL_4;
  } else {
    return "";
  }
};

const getScoreValue = (key: number) => {
  switch (key) {
    case 0:
      return SCORES.SCORE_1;
    case 1:
      return SCORES.SCORE_2;
    case 2:
      return SCORES.SCORE_3;
    case 3:
      return SCORES.SCORE_4;
    case 4:
      return SCORES.SCORE_5;
    default:
      return SCORES.SCORE_1;
  }
};

export { getScore, getScoreValue, getSeverityLevel };
