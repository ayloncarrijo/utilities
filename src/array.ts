export const intersect = <T>(arr1: Array<T>, arr2: Array<T>): Array<T> =>
  arr1.filter((item) => arr2.includes(item));

export const getDiffAsymmetrically = <T>(
  arr1: Array<T>,
  arr2: Array<T>
): Array<T> => arr1.filter((item) => !arr2.includes(item));

export const getDiffSymmetrically = <T>(
  arr1: Array<T>,
  arr2: Array<T>
): Array<T> => [
  ...getDiffAsymmetrically(arr1, arr2),
  ...getDiffAsymmetrically(arr2, arr1),
];
