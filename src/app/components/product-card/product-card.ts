import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { Product, productVariant } from '../../models/menu.models';
@Component({ selector: 'app-product-card', imports: [CurrencyPipe], changeDetection: ChangeDetectionStrategy.OnPush, templateUrl: './product-card.html', styleUrl: './product-card.scss' })
export class ProductCard {
  readonly product = input.required<Product>();
  readonly quantities = input.required<Map<string, number>>();
  readonly added = output<Product>();
  readonly decreased = output<Product>();
  readonly justAdded = signal(false);
  readonly selectedIndex = signal(0);
  readonly selectedProduct = computed(() => productVariant(this.product(), this.selectedIndex()));
  readonly quantity = computed(() => this.quantities().get(this.selectedProduct().id) ?? 0);
  add(): void { if (this.selectedProduct().price === null) return; this.added.emit(this.selectedProduct()); this.justAdded.set(true); window.setTimeout(() => this.justAdded.set(false), 850); }
  decrease(): void { this.decreased.emit(this.selectedProduct()); }
}
