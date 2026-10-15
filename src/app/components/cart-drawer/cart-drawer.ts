import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, input, OnChanges, OnDestroy, output, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BUSINESS_CONFIG } from '../../data/menu.data';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-drawer',
  imports: [CurrencyPipe, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.scss',
})
export class CartDrawer implements OnChanges, OnDestroy {
  readonly open = input.required<boolean>();
  readonly closed = output<void>();
  readonly copied = signal(false);
  readonly errorMessage = signal('');
  readonly config = BUSINESS_CONFIG;

  private previousFocus: HTMLElement | null = null;
  private previousOverflow = '';

  constructor(readonly cart: CartService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['open']) return;
    if (this.open()) {
      this.previousFocus = document.activeElement as HTMLElement | null;
      this.previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      window.setTimeout(() => document.getElementById('close-cart')?.focus(), 0);
    } else {
      document.body.style.overflow = this.previousOverflow;
      this.previousFocus?.focus();
    }
  }

  ngOnDestroy(): void { document.body.style.overflow = this.previousOverflow; }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.open()) return;
    if (event.key === 'Escape') { this.closed.emit(); return; }
    if (event.key !== 'Tab') return;
    const focusable = Array.from(document.querySelectorAll<HTMLElement>('.drawer button:not([disabled]), .drawer input:not([disabled]), .drawer textarea:not([disabled]), .drawer a[href]'));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  async copyOrder(): Promise<void> {
    this.errorMessage.set('');
    this.copied.set(false);
    if (!this.cart.items().length) { this.errorMessage.set('Agrega al menos un plato para continuar.'); return; }

    const clean = (value: string) => value.trim().replace(/\s+/g, ' ');
    const products = this.cart.items().map(item => {
      const price = item.product.price ?? 0;
      const subtotal = price * item.quantity;
      return `• ${item.quantity} × ${item.product.name} · S/ ${subtotal.toFixed(2)}${clean(item.notes) ? `\n  Nota: ${clean(item.notes)}` : ''}`;
    }).join('\n');
    const title = `*PEDIDO · ${this.config.name}*`;
    const message = `${title}\n\n*Productos*\n${products}\n\n*Total: S/ ${this.cart.total().toFixed(2)}*`;
    try {
      await navigator.clipboard.writeText(message);
      this.copied.set(true);
    } catch {
      this.errorMessage.set('No se pudo copiar automáticamente. Revisa los permisos del navegador e inténtalo de nuevo.');
    }
  }
}
