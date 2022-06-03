export const Random = () => {
  let min = 1;
  let max = 25;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
