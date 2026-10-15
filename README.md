# Barra Cevichera D'manga — carta digital

Carta en Angular con 14 secciones, búsqueda, selección de precios y una lista de pedido que se puede copiar. La información vigente está en `src/app/data/menu.data.ts`; las imágenes de productos se muestran únicamente en ceviches, tríos y dúos cuando hay una fotografía de referencia disponible.

La carta usa el diseño Atelier marino: marfil, turquesa y detalles dorados, en sintonía con el logo de D'manga.

## Desarrollo

1. `npm install`
2. `npm start` y abrir `http://localhost:4200/`
3. `npm run build` para generar el sitio estático en `dist/sabor-a-mar/browser/`

## Editar la carta

Los platos, precios, secciones y descripciones están en `src/app/data/menu.data.ts`. Los platos con varios precios muestran opciones seleccionables. La lista proporcionada no identifica tamaños para esas opciones, así que la carta muestra los importes sin asignarles nombres de presentación.

El logo recibido está en `public/brand/barra-cevichera-d-manga.png`. Las fotografías de platos son referenciales; no se muestra ninguna en las demás secciones.

La carta usa los datos locales. El antiguo proyecto de Sanity y su carpeta `studio/` permanecen en el repositorio como material anterior, pero no alteran la carta publicada con este código.

## Pedidos

El botón **Copiar pedido** prepara el detalle con precios, cantidades, indicaciones y total. No envía el pedido a ningún número: falta el WhatsApp oficial de D'manga. Cuando se facilite, se podrá activar el envío directo.
