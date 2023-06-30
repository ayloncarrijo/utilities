export const abbreviateMiddleName = (fullName: string): string =>
  fullName
    .split(" ")
    .map((name, index, array) =>
      index === 0 || index + 1 === array.length || name.length < 3
        ? name
        : `${name.charAt(0)}.`
    )
    .join(" ");

export const truncate = (
  str: string,
  maxLength: number,
  omission = "..."
): string => {
  if (maxLength <= omission.length) {
    throw new Error("The maximum length is too small.");
  }

  if (str.length > maxLength) {
    return `${str.slice(0, maxLength - omission.length)}${omission}`;
  }

  return str;
};

export const capitalize = <T extends string>(str: T): Capitalize<T> =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}` as Capitalize<T>;

export const uncapitalize = <T extends string>(str: T): Uncapitalize<T> =>
  `${str.charAt(0).toLowerCase()}${str.slice(1)}` as Uncapitalize<T>;

export const splitWords = (str: string): Array<string> =>
  str
    .replace(/([A-Z])+/g, (match) => capitalize(match.toLowerCase()))
    .split(/(?=[A-Z])|[.\-\s_]/)
    .map(convertToLowerCase);

export const convertToUpperCase = <T extends string>(str: T): Uppercase<T> =>
  str.toUpperCase() as Uppercase<T>;

export const convertToLowerCase = <T extends string>(str: T): Lowercase<T> =>
  str.toLowerCase() as Lowercase<T>;

export const convertToCamelCase = (str: string): string => {
  const words = splitWords(str);

  if (words.length === 0) {
    return "";
  }

  return words.reduce(
    (accumulator, word) => `${accumulator}${capitalize(word)}`
  );
};

export const convertToSnakeCase = (str: string): string =>
  splitWords(str).join("_");

export const convertToKebabCase = (str: string): string =>
  splitWords(str).join("-");

export const convertToPascalCase = (str: string): string =>
  splitWords(str).map(capitalize).join("");
