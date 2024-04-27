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
    return total / totalWeight;
  }
  return 0;
};

export { getScore };
