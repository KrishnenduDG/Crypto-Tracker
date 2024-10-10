/**
 * Updates an array based on a Least Recently Used (LRU) implementation.
 * If the array reaches its maximum length, the oldest entry is removed
 * before adding the new entry.
 *
 * @param {number[]} arr - The original array to be updated.
 * @param {number} len - The maximum length of the array.
 * @param {number} newEntry - The new entry to add to the array.
 * @returns {number[]} A new array reflecting the LRU implementation,
 *                    containing the most recent entries.
 */
export const getArrayBasedOnLRUImplementation = (
  arr: number[],
  len: number,
  newEntry: number
): number[] => [...arr.slice(arr.length === len ? 1 : 0, len), newEntry];

/**
 * Calculates the standard deviation of an array of numbers.
 *
 * @param {number[]} arr - The array of numbers for which to calculate the standard deviation.
 * @returns {number} The standard deviation of the input array.
 */
export const getStandardDeviationOfAnArray = (arr: number[]): number => {
  const mean = arr.reduce((sum, value) => sum + value, 0) / arr.length;

  const variance =
    arr.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / arr.length;

  return Math.sqrt(variance);
};
