import { SEVERITY_LEVEL } from "@/consts/report";
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

export { getScore, getSeverityLevel };
