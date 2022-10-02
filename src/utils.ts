export const invocateFunc = (f?: typeFunc) => f && f();

export type typeFunc = (cb?: any[]) => any;
