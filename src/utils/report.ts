import { SCORES, SEVERITY_LEVEL } from "@/consts/report";
import { IReport } from "@/store";

const getScore = (data: IReport | undefined, stepData: any) => {
  if (data) {
    let totalWeight = 0;
    let total = 0;
    Object.values(data)?.map((item, index) => {
      totalWeight += stepData[index]?.weight;
      total += item * stepData[index]?.weight;
    });
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

const getScoreKey = (value: number) => {
  switch (value) {
    case SCORES.SCORE_1:
      return 0;
    case SCORES.SCORE_2:
      return 1;
    case SCORES.SCORE_3:
      return 2;
    case SCORES.SCORE_4:
      return 3;
    case SCORES.SCORE_5:
      return 4;
    default:
      return 0;
  }
};

export { getScore, getScoreValue, getSeverityLevel, getScoreKey };
