import type { AnyFunction, NonFalsy, Primitive } from "./types";

export const isObject = (value: unknown): value is object =>
  value != null && typeof value === "object";

export const isPlainObject = (
  value: unknown
): value is Record<string, unknown> =>
  value != null && value.constructor === Object;

export const isString = (value: unknown): value is string =>
  typeof value === "string";

export const isNumber = (value: unknown): value is number =>
  typeof value === "number" && !isNaN(value);

export const isArray = Array.isArray as (
  value: unknown
) => value is Array<unknown>;

export const isDate = (value: unknown): value is Date =>
  value instanceof Date && !isNaN(value.getTime());

export const isInt = (value: unknown): value is number =>
  isNumber(value) && value % 1 === 0;

export const isFloat = (value: unknown): value is number =>
  isNumber(value) && value % 1 !== 0;

export const isSymbol = (value: unknown): value is symbol =>
  typeof value === "symbol";

export const isTruthy = <T>(value: T): value is NonFalsy<T> => Boolean(value);

export const isDefined = <T>(value: T): value is NonNullable<T> =>
  value != null;

export const isTruthyEntry = <K, V>(value: [K, V]): value is [K, NonFalsy<V>] =>
  Boolean(value[1]);

export const isDefinedEntry = <K, V>(
  value: [K, V]
): value is [K, NonNullable<V>] => value[1] != null;

export const isFunction = (value: unknown): value is AnyFunction =>
  typeof value === "function";

export const isPrimitive = (value: unknown): value is Primitive =>
  value == null || (typeof value !== "object" && typeof value !== "function");
