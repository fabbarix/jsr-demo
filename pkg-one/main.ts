/**
* This module contains functions to add two numbers.
* @module
*/

/** 
 * This function adds the two passed numbers together.
 * 
 * @param a This is the first number to add.
 * @param b This is the second number to add.
 * 
 * @returns The sum of a and  b.
 **/
export function add(a: number, b: number): number {
  return a + b;
}

if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
