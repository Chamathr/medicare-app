import { IReport } from "@/store";

const getScore = (data: IReport | undefined) => {
  if (data) {
    const total = Object.keys(data).reduce((acc, key) => {
      const innerObject = data[key];
      const innerTotal = Object.keys(innerObject).reduce(
        (innerAcc, innerKey) => {
          return innerAcc + innerObject[innerKey];
        },
        0
      );
      return acc + innerTotal;
    }, 0);

    return total;
  }
  return 0;
};

export { getScore };
