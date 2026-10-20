/** Prices use integer minor units (for example, cents), never floating-point totals. */
export type MenuItem = {
  id: string;
  name: string;
  description: string;
  image?: string;
  priceInMinorUnits: number;
  currency: string;
  available: boolean;
};
