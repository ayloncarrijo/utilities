export const intersect = <T>(arr1: Array<T>, arr2: Array<T>): Array<T> =>
  arr1.filter((item) => arr2.includes(item));

export const differAsymmetrically = <T>(
  arr1: Array<T>,
  arr2: Array<T>
): Array<T> => arr1.filter((item) => !arr2.includes(item));

export const differSymmetrically = <T>(
  arr1: Array<T>,
  arr2: Array<T>
): Array<T> => [
  ...differAsymmetrically(arr1, arr2),
  ...differAsymmetrically(arr2, arr1),
];
