export type CategoryId = string;

export interface Category { id: CategoryId; name: string; shortName: string; description: string; sortOrder?: number; active?: boolean; }
export interface Product { id: string; categoryId: CategoryId; name: string; price: number | null; priceOptions?: number[]; description?: string; image?: string | null; imageAlt?: string; featured?: boolean; badge?: string; active?: boolean; sortOrder?: number; }
export function productVariant(product: Product, index: number): Product {
  if (!product.priceOptions?.length) return product;
  const price = product.priceOptions[index] ?? product.priceOptions[0];
  return { ...product, id: `${product.id}::${index}`, name: `${product.name} (S/ ${price})`, price, priceOptions: undefined };
}
export function resolveProductVariant(products: Product[], id: string): Product | undefined {
  const [baseId, option] = id.split('::');
  const product = products.find(current => current.id === baseId);
  if (!product) return undefined;
  if (option === undefined) return product.priceOptions?.length ? undefined : product;
  const index = Number(option);
  return Number.isInteger(index) && index >= 0 && index < (product.priceOptions?.length ?? 0)
    ? productVariant(product, index) : undefined;
}
export interface CartItem { product: Product; quantity: number; notes: string; }
export type DeliveryMethod = 'pickup' | 'delivery';
export interface CustomerDetails { name: string; phone: string; method: DeliveryMethod; address: string; reference: string; }
