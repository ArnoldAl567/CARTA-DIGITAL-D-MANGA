import { CartService } from '../../services/cart.service';
import { CartDrawer } from './cart-drawer';

describe('CartDrawer order copy', () => {
  const product = { id: 'jalea-mixta::1', categoryId: 'chicharrones', name: 'Jalea mixta (S/ 30)', price: 30 };

  function createDrawer(notes = ''): CartDrawer {
    const cart = {
      items: () => [{ product, quantity: 2, notes }],
      total: () => 60,
    } as unknown as CartService;
    return new CartDrawer(cart);
  }

  it('copies the chosen price, quantity and notes', async () => {
    const writeText = jasmine.createSpy('writeText').and.resolveTo();
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });
    const drawer = createDrawer('  sin   picante  ');

    await drawer.copyOrder();

    const message = writeText.calls.mostRecent().args[0] as string;
    expect(message).toContain("*PEDIDO · Barra Cevichera D'manga*");
    expect(message).toContain('• 2 × Jalea mixta (S/ 30) · S/ 60.00');
    expect(message).toContain('Nota: sin picante');
    expect(message).toContain('*Total: S/ 60.00*');
    expect(drawer.copied()).toBeTrue();
  });

  it('reports when the browser blocks clipboard access', async () => {
    const writeText = jasmine.createSpy('writeText').and.rejectWith(new Error('Denied'));
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });
    const drawer = createDrawer();

    await drawer.copyOrder();

    expect(drawer.copied()).toBeFalse();
    expect(drawer.errorMessage()).toContain('No se pudo copiar');
  });
});
