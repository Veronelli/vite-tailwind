/**
 * 
 * @param {Array} elements
 * @returns {Number} Total Price
 */

export default function totalPrice(elements?: any[]): Number {
  let sum = 0;
  elements!.forEach((element) => (sum += element.price));
  return sum;
}
