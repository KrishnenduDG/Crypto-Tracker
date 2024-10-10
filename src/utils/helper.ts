export const getArrayBasedOnLRUImplementation = (
  arr: number[],
  len: number,
  newEntry: number
) => [...arr.slice(arr.length === len ? 1 : 0, len), newEntry];
