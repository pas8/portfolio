export const useSample = (arr: any[]): any[] => {
  const randomNumber = ~~(arr.length * Math.random());
  const sampledArr = arr.slice(randomNumber, randomNumber + 1)[0];

  return sampledArr;
};
