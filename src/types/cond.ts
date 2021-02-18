export type Cond<T extends boolean, TTrue, TFalse> = T extends true
  ? TTrue
  : TFalse;
