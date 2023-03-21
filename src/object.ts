import { isArray, isPlainObject } from "./typed";
import type { Entries, ObjectFromEntries, UnionToIntersection } from "./types";

export const mergeDeeply = <T extends Array<Record<string, unknown>>>(
  ...sources: T
): UnionToIntersection<T[number]> => {
  return sources.reduce<Record<string, unknown>>((accumulator, source) => {
    Object.entries(source).forEach(([sourceKey, sourceValue]) => {
      const value = accumulator[sourceKey];

      if (isPlainObject(value) && isPlainObject(sourceValue)) {
        accumulator[sourceKey] = mergeDeeply(value, sourceValue);
        return;
      }

      if (isArray(value) && isArray(sourceValue)) {
        accumulator[sourceKey] = [...value, ...sourceValue];
        return;
      }

      accumulator[sourceKey] = sourceValue;
    });

    return accumulator;
  }, {}) as UnionToIntersection<T[number]>;
};

export const assign = Object.assign as <
  T extends object,
  U extends Array<unknown>
>(
  target: T,
  ...sources: U
) => T & UnionToIntersection<U[number]>;

export const getKeys = Object.keys as <T extends object>(
  obj: T
) => Array<keyof T>;

export const getEntries = Object.entries as <T extends object>(
  obj: T
) => Entries<T>;

export const createFromEntries = Object.fromEntries as <
  T extends ReadonlyArray<readonly [PropertyKey, unknown]>
>(
  entries: T
) => ObjectFromEntries<T>;
