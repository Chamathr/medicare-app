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
      return (acc + innerTotal) * stepData[parseInt(key) - 1]?.weight;
    }, 0);
    return parseFloat((total / totalWeight)?.toFixed(1));
  }
  return 0;
};

const getSeverityLevel = (severityLevel: string, score: number) => {
  if (severityLevel) {
    return severityLevel;
  } else if (score > 0 && score <= 10) {
    return "No impairment";
  } else if (score > 10 && score <= 20) {
    return "Mild impairment";
  } else if (score > 20 && score <= 30) {
    return "Moderate impairment";
  } else if (score > 30) {
    return "Severe impairment";
  } else {
    return "";
  }
};

export { getScore, getSeverityLevel };
