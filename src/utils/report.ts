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
  } else if (score > 0 && score <= 10) {
    return SEVERITY_LEVEL.LEVEL_1;
  } else if (score > 10 && score <= 20) {
    return SEVERITY_LEVEL.LEVEL_2;
  } else if (score > 20 && score <= 30) {
    return SEVERITY_LEVEL.LEVEL_3;
  } else if (score > 30 && score <= 40) {
    return SEVERITY_LEVEL.LEVEL_4;
  } else if (score > 40) {
    return SEVERITY_LEVEL.LEVEL_5;
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

export { getScore, getScoreValue };
