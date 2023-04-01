export type ObjectFromEntries<
  T extends ReadonlyArray<readonly [PropertyKey, unknown]>
> = {
  [K in T[number][0]]: ([K, T[number][1]] & T[number])[1];
};

export type Optional<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;

export type LeftJoin<L, R> = L & Omit<R, keyof L>;

export type RightJoin<L, R> = R & Omit<L, keyof R>;

export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | undefined
  | null;

export type Falsy = null | undefined | false | 0 | "";

export type NonFalsy<T> = Exclude<T, Falsy>;

export type ValueOf<T> = T[keyof T];

export type IsUnion<T, True = true, False = false> = [T] extends [
  UnionToIntersection<T>
]
  ? False
  : True;

export type Entries<T> = Array<
  T extends unknown
    ? {
        [K in keyof T]-?: [K, T[K]];
      }[keyof T]
    : never
>;

export type AnyFunction = (...args: Array<never>) => unknown;

export type UnionToIntersection<T> = (
  T extends unknown ? (arg: T) => void : never
) extends (arg: infer U) => void
  ? U
  : never;
