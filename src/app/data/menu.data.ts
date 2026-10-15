import { Category, Product } from '../models/menu.models';

export const BUSINESS_CONFIG = {
  name: "Barra Cevichera D'manga",
  currency: 'PEN',
  locale: 'es-PE',
  tagline: 'Pescados y mariscos',
};

export const CATEGORIES: Category[] = [
  ['ceviches', 'Ceviches', 'Ceviches', 'Frescos y llenos de sabor.'],
  ['trios', 'Tríos', 'Tríos', 'Tres favoritos en un solo plato.'],
  ['duos', 'Dúos', 'Dúos', 'Dos sabores para disfrutar.'],
  ['chilcanos', 'Chilcanos', 'Chilcanos', 'Caldos marinos.'],
  ['leche-de-tigre', 'Leche de tigre', 'Leche de tigre', 'Para abrir el apetito.'],
  ['arroces', 'Arroces', 'Arroces', 'Arroces y chaufas marinos.'],
  ['jalea-piurana', 'Jalea piurana', 'Jalea', 'En tres presentaciones.'],
  ['pescados-fritos', 'Pescados fritos', 'Fritos', 'Pescados fritos al momento.'],
  ['sudados', 'Sudados', 'Sudados', 'El sabor del mar en cada porción.'],
  ['parihuelas', 'Parihuelas', 'Parihuelas', 'Tradición marina.'],
  ['chupes', 'Chupes', 'Chupes', 'Sabores de cuchara.'],
  ['chicharrones', 'Chicharrones', 'Chicharrones', 'Jaleas y chicharrones.'],
  ['platos-carta', 'Platos a la carta', 'A la carta', 'Disponibles de lunes a sábado.'],
  ['bebidas', 'Bebidas', 'Bebidas', 'Para acompañar tu plato.'],
].map(([id, name, shortName, description]) => ({ id, name, shortName, description }));

// Los importes mantienen el orden de la lista. No se inventan tamaños para
// los platos que muestran dos o tres precios sin describir la presentación.
function dish(id: string, categoryId: string, name: string, prices: number[], extra: Partial<Product> = {}): Product {
  return { id, categoryId, name, price: prices[0], priceOptions: prices.length > 1 ? prices : undefined, ...extra };
}

export const PRODUCTS: Product[] = [
  dish('ceviche-pescado', 'ceviches', 'Ceviche de pescado', [20,25,30], { image: '/images/ceviches/ceviche-pescado.webp', featured: true }),
  dish('ceviche-mixto', 'ceviches', 'Ceviche mixto', [20,25,30], { image: '/images/ceviches/ceviche-mixto.webp' }),
  dish('ceviche-pota', 'ceviches', 'Ceviche de pota', [15,20,25], { image: '/images/ceviches/ceviche-pota.webp' }),
  dish('ceviche-conchas-negras', 'ceviches', 'Ceviche de conchas negras', [25,30,35], { image: '/images/ceviches/ceviche-conchas-negras.webp' }),
  dish('ceviche-pulpo', 'ceviches', 'Ceviche de pulpo', [20,25,30], { image: '/images/ceviches/ceviche-pulpo.webp' }),
  dish('ceviche-caballa', 'ceviches', 'Ceviche de caballa norteño', [20,25,30], { image: '/images/ceviches/ceviche-caballa.webp' }),

  dish('trio-1', 'trios', 'Trío #1', [20,25,30], { description: 'Ceviche de pescado + chicharrón de pota + arroz con mariscos o chaufa de mariscos', image: '/images/trios/trio-1.webp' }),
  dish('trio-2', 'trios', 'Trío #2', [20,25,30], { description: 'Ceviche de pescado + chicharrón de pota + arroz con mariscos o chaufa de mariscos', image: '/images/trios/trio-2.webp' }),
  dish('trio-3', 'trios', 'Trío #3', [20,25,30], { description: 'Ceviche mixto + chicharrón de pota + arroz con mariscos o chaufa de mariscos', image: '/images/trios/trio-3.webp' }),

  dish('duo-1', 'duos', 'Dúo #1', [20,25,30], { description: 'Arroz o chaufa de mariscos + ceviche de pescado mixto', image: '/images/duos/duo-1.webp' }),
  dish('duo-2', 'duos', 'Dúo #2', [20,25,30], { description: 'Arroz con mariscos o chaufa de mariscos + ceviche de pota', image: '/images/duos/duo-2.webp' }),
  dish('duo-3', 'duos', 'Dúo #3', [20,25,30], { description: 'Arroz con mariscos o chaufa de mariscos + ceviche de pescado', image: '/images/duos/duo-3.webp' }),

  dish('chilcano-pota', 'chilcanos', 'Chilcano + chicharrón de pota', [7]),
  dish('chilcano-cangrejo', 'chilcanos', 'Chilcano con cangrejo + chicharrón de pota', [10]),
  dish('chilcano-especial', 'chilcanos', 'Chilcano especial', [15]),

  dish('leche-tigre-chica', 'leche-de-tigre', 'Leche de tigre + chicharrón de pota (chica)', [15]),
  dish('leche-tigre-grande', 'leche-de-tigre', 'Leche de tigre + chicharrón de pota (grande)', [20]),
  dish('leche-tigre-especial', 'leche-de-tigre', 'Leche de tigre especial', [25]),

  dish('arroz-marisco-cremoso', 'arroces', 'Arroz con marisco cremoso', [20,25]),
  dish('chaufa-marisco', 'arroces', 'Arroz chaufa de marisco', [25,30]),
  dish('chaufa-pescado', 'arroces', 'Arroz chaufa de pescado', [20,25]),
  dish('chaufa-langostino', 'arroces', 'Arroz chaufa de langostino', [20,25]),
  dish('arroz-conchas-negras', 'arroces', 'Arroz con conchas negras', [25,30]),

  dish('jalea-personal', 'jalea-piurana', 'Jalea piurana personal', [25]),
  dish('jalea-mediana', 'jalea-piurana', 'Jalea piurana mediana', [40]),
  dish('jalea-grande', 'jalea-piurana', 'Jalea piurana grande', [60]),

  dish('cabrilla-frita', 'pescados-fritos', 'Cabrilla frita', [25,30]),
  dish('tilapia-frita', 'pescados-fritos', 'Tilapia frita', [20,25]),
  dish('doncella-frita', 'pescados-fritos', 'Doncella frita', [20,25]),
  dish('trucha-frita', 'pescados-fritos', 'Trucha frita', [20,25]),
  dish('filete-frito', 'pescados-fritos', 'Filete de pescado frito', [20,25]),

  dish('sudado-cabrilla', 'sudados', 'Sudado de cabrilla', [30,35]),
  dish('sudado-trambollo', 'sudados', 'Sudado de trambollo', [25,30]),
  dish('sudado-filete', 'sudados', 'Sudado de filete', [20,25]),
  dish('sudado-doncella', 'sudados', 'Sudado de doncella', [25,30]),

  dish('parihuela-cambrilla', 'parihuelas', 'Parihuela de cambrilla', [30,35]),
  dish('parihuela-tramboyo', 'parihuelas', 'Parihuela de tramboyo', [25,30]),
  dish('parihuela-filete', 'parihuelas', 'Parihuela de filete', [20,25]),
  dish('parihuela-doncella', 'parihuelas', 'Parihuela de doncella', [30]),

  dish('chupe-camarones', 'chupes', 'Chupe de camarones', [25,30]),
  dish('chupe-langostinos', 'chupes', 'Chupe de langostinos', [25,30]),
  dish('chupe-cangrejo', 'chupes', 'Chupe de cangrejo', [20,25]),
  dish('chupe-pescado', 'chupes', 'Chupe de pescado', [20,25]),

  dish('jalea-mixta', 'chicharrones', 'Jalea mixta', [25,30,35]),
  dish('jalea-mixta-pescado', 'chicharrones', 'Jalea mixta + cabrilla o tilapia frita', [50,60,70]),
  dish('chicharron-pescado', 'chicharrones', 'Chicharrón de pescado', [20,25]),
  dish('chicharron-calamar', 'chicharrones', 'Chicharrón de calamar', [25,30]),
  dish('chicharron-pota', 'chicharrones', 'Chicharrón de pota', [15,20]),
  dish('chicharron-pota-filete', 'chicharrones', 'Chicharrón de pota + filete de pescado', [20,25]),

  dish('chaufa-pollo-carne', 'platos-carta', 'Chaufa de pollo o carne', [20]),
  dish('aeropuerto-pollo-carne', 'platos-carta', 'Aeropuerto de pollo o carne', [20]),
  dish('lomo-saltado-pollo-carne', 'platos-carta', 'Lomo saltado de pollo o carne', [20]),
  dish('tallarin-saltado-pollo-carne', 'platos-carta', 'Tallarín saltado de pollo o carne', [20]),

  dish('chicha-maracuya-litro', 'bebidas', 'Chicha o maracuyá 1 L', [10]),
  dish('chicha-maracuya-medio', 'bebidas', 'Chicha o maracuyá 1/2 L', [5]),
  dish('vaso-chicha', 'bebidas', 'Vaso de chicha', [2]),
  dish('vaso-maracuya', 'bebidas', 'Vaso de maracuyá', [2]),
  dish('gaseosa-personal', 'bebidas', 'Gaseosa personal (Inca Kola o Coca-Cola)', [2]),
  dish('gaseosa-gordita', 'bebidas', 'Gaseosa gordita', [5]),
  dish('gaseosa-litro', 'bebidas', 'Gaseosa 1 L (Inca Kola o Coca-Cola)', [7]),
  dish('gaseosa-litro-medio', 'bebidas', 'Gaseosa 1.5 L (Inca Kola o Coca-Cola)', [10]),
  dish('gaseosa-tres-litros', 'bebidas', 'Gaseosa 3 L (Inca Kola o Coca-Cola)', [15]),
  dish('pilsen-305', 'bebidas', 'Cerveza Pilsen 305 ml', [5]),
  dish('pilsen-trigo-630', 'bebidas', 'Cerveza Pilsen o Trigo 630 ml', [9]),
  dish('cerveza-negra-630', 'bebidas', 'Cerveza negra 630 ml', [10]),
];
