/**
 * Formats a rating value with a star symbol and one decimal precision.
 * @param rate - The rating value out of 5.
 */
export function formatRating(rate: number): string {
  return `${rate.toFixed(1)} ★`;
}
