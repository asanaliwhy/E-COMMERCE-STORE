/**
 * Calculates the discounted price given the original price and a discount percentage.
 * @param price - The original price.
 * @param discountPercentage - The discount percentage (e.g. 20 for 20% off).
 */
export function calculateDiscount(price: number, discountPercentage: number): number {
  if (discountPercentage < 0 || discountPercentage > 100) {
    return price;
  }
  return price * (1 - discountPercentage / 100);
}
