/* ---------------- Iconografía lineal (trazo dorado) ---------------- */
const ICONS = {
  croissant: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M8 30c2-14 12-22 22-20 8 1.6 12 8 10 14-1.4 4.4-6 6-9 3.6-2-1.6-1-4.4 1.4-4.6"/><path d="M12 26c4 1 7 4 8 8M18 22c3 1 5 3 6 6M24 18c2.4.8 4.2 2.4 5.2 4.6"/></svg>`,
  sandwich: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 22c0-6 7.2-11 16-11s16 5 16 11"/><path d="M8 22h32v4c0 3-2 5-5 5H13c-3 0-5-2-5-5v-4Z"/><path d="M10 26l4 5M18 26l4 5M26 26l4 5M34 26l3 5"/></svg>`,
  cake: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 26l15-14 15 14"/><path d="M9 26v9c0 2 2 3.5 4 3.5h22c2 0 4-1.5 4-4v-8.5"/><path d="M24 12V7M24 7c-1.4 0-2.4-1-2.4-2.2S22.6 3 24 3s2.4.9 2.4 2.1S25.4 7 24 7Z"/><path d="M14 32c1.6-2 3.2-2 4.8 0s3.2 2 4.8 0 3.2-2 4.8 0 3.2 2 4.8 0"/></svg>`,
  cookie: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="24" cy="24" r="15.5"/><circle cx="19" cy="19" r="1.6" fill="currentColor" stroke="none"/><circle cx="28" cy="17" r="1.6" fill="currentColor" stroke="none"/><circle cx="30" cy="26" r="1.6" fill="currentColor" stroke="none"/><circle cx="20" cy="29" r="1.6" fill="currentColor" stroke="none"/><circle cx="25" cy="24" r="1.6" fill="currentColor" stroke="none"/></svg>`,
  bread: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 27c0-9 7-16 18-16s18 7 18 16c0 5-4 8-9 8H15c-5 0-9-3-9-8Z"/><path d="M16 15c-1 3-1 6 0 9M24 13c-1.3 3.4-1.3 7 0 10.4M32 15c1 3 1 6 0 9"/></svg>`,
  cup: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 18h20v11c0 5.5-4.5 10-10 10s-10-4.5-10-10V18Z"/><path d="M30 21h3.5c2.5 0 4.5 2 4.5 4.5S36 30 33.5 30H29"/><path d="M15 8c-1.5 1.8-1.5 3.2 0 5M21 8c-1.5 1.8-1.5 3.2 0 5"/><path d="M7 42h26"/></svg>`,
  star: `<svg viewBox="0 0 48 48" fill="currentColor" stroke="none"><path d="M24 6l4.6 11.6L40 21l-9 7.6L33.6 41 24 34.2 14.4 41 17 28.6 8 21l11.4-3.4L24 6Z"/></svg>`,
  /* Isotipo complementario AMP: figura dinámica de gotas/pétalos en espiral (Brandbook_AMP2.pdf).
     Elemento gráfico de uso libre, no asociado al logotipo. */
  pinwheel: `<svg viewBox="0 0 200 200" fill="currentColor" stroke="none"><path d="M100,100 C122,78 128,42 100,14 C72,42 78,78 100,100 Z" transform="rotate(0 100 100)"/><path d="M100,100 C122,78 128,42 100,14 C72,42 78,78 100,100 Z" transform="rotate(36 100 100)"/><path d="M100,100 C122,78 128,42 100,14 C72,42 78,78 100,100 Z" transform="rotate(72 100 100)"/><path d="M100,100 C122,78 128,42 100,14 C72,42 78,78 100,100 Z" transform="rotate(108 100 100)"/><path d="M100,100 C122,78 128,42 100,14 C72,42 78,78 100,100 Z" transform="rotate(144 100 100)"/><path d="M100,100 C122,78 128,42 100,14 C72,42 78,78 100,100 Z" transform="rotate(180 100 100)"/><path d="M100,100 C122,78 128,42 100,14 C72,42 78,78 100,100 Z" transform="rotate(216 100 100)"/><path d="M100,100 C122,78 128,42 100,14 C72,42 78,78 100,100 Z" transform="rotate(252 100 100)"/><path d="M100,100 C122,78 128,42 100,14 C72,42 78,78 100,100 Z" transform="rotate(288 100 100)"/><path d="M100,100 C122,78 128,42 100,14 C72,42 78,78 100,100 Z" transform="rotate(324 100 100)"/></svg>`,
  pin: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M24 44s14-13.8 14-23A14 14 0 0 0 10 21c0 9.2 14 23 14 23Z"/><circle cx="24" cy="21" r="5"/></svg>`,
  globe: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="24" cy="24" r="17"/><path d="M7 24h34M24 7c5 5 7.5 11 7.5 17S29 39 24 44M24 7c-5 5-7.5 11-7.5 17S19 39 24 44"/></svg>`,
  map: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8l-11 4v28l11-4 14 4 11-4V8l-11 4-14-4Z"/><path d="M17 8v28M31 12v28"/></svg>`
};
function icon(name){ return ICONS[name] || ICONS.cake; }
function tagPill(t){
  if(t==='fav') return `<span class="tag tag-fav">${icon('star')} AMP favorito</span>`;
  if(t==='promo') return `<span class="tag tag-promo">Promoción</span>`;
  if(t==='rec') return `<span class="tag tag-rec">${icon('star')} Recomendado</span>`;
  return '';
}

/* ---------------- Datos de la carta ---------------- */
const MENU = {
  pasteleria: {
    label:"Pastelería", icon:"croissant",
    subtitle:"Productos de pastelería francesa elaborados con una masa hojaldrada enriquecida con azúcar, mantequilla, leche, huevos, chocolate o frutos secos.",
    banner:"banners/pasteleria.jpg",
    blocks:[
      {type:'groupTitle', title:'El Auténtico Croissant'},
      {type:'items', items:[
        {n:"Croissant de mantequilla", d:"Pan hojaldrado, elaborado con mantequilla 100% de vaca, crujiente por fuera y esponjoso por dentro.", p:"$10.500", tags:['fav'], img:"imagenes/pasteleria/croissant-de-mantequilla.jpg"},
        {n:"Croissant integral", d:"Elaborado con harina integral, masa madre y mantequilla, cubierto con semillas de amapola, calabaza, girasol y ajonjolí.", p:"$12.000", img:"imagenes/pasteleria/croissant-integral.jpg"},
        {n:"Croissant queso", d:"Masa hojaldrada crujiente y suave, rellena generosamente con cremoso queso fresco.", p:"$14.000", img:"imagenes/pasteleria/croissant-queso.jpg"},
        {n:"Croissant de almendra", d:"Masa hojaldrada de mantequilla, rellena de crema frangipane, cubierta con almendras frescas y azúcar pulverizada.", p:"$14.000", img:"imagenes/pasteleria/croissant-de-almendra.jpg"},
        {n:"Croissant choco-nutella", d:"Masa hojaldrada crujiente y suave, generosamente rellena de cremoso chocolate y nutella con avellana.", p:"$14.000", img:"imagenes/pasteleria/croissant-choco-nutella.jpg"},
        {n:"Pain au chocolat", d:"Pan hojaldrado rectangular, crujiente por fuera y suave por dentro, relleno de  bastones de chocolate real semi amargo.", p:"$12.000", img:"imagenes/pasteleria/pain-au-chocolat.jpg"},
        {n:"Palito de queso", d:"Fresco hojaldre de mantequilla relleno con un generoso trozo de queso fresco de primera calidad.", p:"$11.000", img:"imagenes/pasteleria/palito-de-queso.jpg"},
        {n:"Muffin de queso y espinaca", d:"Esponjoso muffin elaborado artesanalmente con los mejores ingredientes, relleno de queso y fresca espinaca.", p:"$10.000", img:"imagenes/pasteleria/muffin-de-queso-y-espinaca.jpg"},
      ]},
      {type:'pairing', text:'Con café', icon:'cup'},
      {type:'divider', text:'En la tarde'},
      {type:'groupTitle', title:'De Mantequilla'},
      {type:'items', items:[
        {n:"Pastel hojaldrado jamón y queso", d:"Hojaldre artesanal de mantequilla, dorado y crujiente por fuera, suve por dentro relleno de jamón y queso.", p:"$10.500", img:"imagenes/pasteleria/pastel-hojaldrado-jamon-y-queso.jpg"},
        {n:"Pastel Caprese", d:"Hojaldre artesanal de mantequilla relleno de tomates frescos, albahaca y queso mozzarella.", p:"$9.500", img:"imagenes/pasteleria/caprese.jpg"},
        {n:"Pastel de Guayaba", d:"Finísima lámina de hojaldre crujiente, rellena generosamente con dulce de guayaba tradicional colombiano.", p:"$9.500", img:"imagenes/pasteleria/guayaba.jpg"},
        {n:"Pastel de Arequipe", d:"Hojaldre de mantequilla crujiente y delicioso, relleno generosamente con arequipe.", p:"$9.500", img:"imagenes/pasteleria/arequipe.jpg"},
        {n:"Quiche Lorraine", d:"Masa quebrada crujiente rellena de huevos batidos con crema de leche, tocineta ahumada, espinaca y queso parmesano.", p:"$18.500", tags:['rec'], img:"imagenes/pasteleria/quiche-lorraine.jpg"},
        {n:"Quiche vegetariana", d:"Tarta salada horneada, elaborada con huevos frescos batidos con crema de leche, variedad de vegetales y queso parmesano.", p:"$15.500", img:"imagenes/pasteleria/quiche-vegetariana.jpg"},
      ]},
      {type:'divider', text:'A cualquier hora'},
    ]
  },
  sandwiches: {
    label:"Sándwiches", icon:"sandwich",
    subtitle:"Pan artesanal, ingredientes frescos y combinaciones para cualquier momento del día.",
    banner:"banners/sandwiches.jpg",
    blocks:[
      {type:'groupTitle', title:'Nuestros Sándwiches'},
      {type:'items', items:[
        {n:"Recreo en sanduchera", d:"Clásico sándwich tostado de jamón y queso, preparado en sanduchera como el hecho por mamá.", p:"$10.500", img:"imagenes/sandwiches/recreo-en-sanduchera.jpg"},
        {n:"Express — frío", d:"sándwich frío con jamón, queso, tomate fresco, espinaca tierna y mayonesa casera.", p:"$14.500", img:"imagenes/sandwiches/express-frio.jpg"},
        {n:"Atún", d:"Dip cremoso de atún con espinaca sobre pan artesanal.", p:"$18.000", img:"imagenes/sandwiches/atun.jpg"},
        {n:"Carnes", d:"Pan tipo Baguette crujiente con salami, pepperoni, jamón, queso mozzarella, tomate, espinaca y salsa de la casa.", p:"$20.000", img:"imagenes/sandwiches/carnes.jpg"},
        {n:"Focaccia", d:"Focaccia horneada con pesto, tomate fresco y stracciatella cremosa.", p:"$13.500", img:"imagenes/sandwiches/focaccia.jpg"},
      ]},
    ]
  },
  reposteria: {
    label:"Repostería", icon:"cake",
    subtitle:"Postres de autor, cremosos y suntuosos, para compartir o darse un gusto.",
    banner:"banners/reposteria.jpg",
    blocks:[
      {type:'groupTitle', title:'Dulces'},
      {type:'items', items:[
        {n:"Bocado de Otoño", d:"Postre otoñal de calabaza tierna y especias aromáticas con notas de naranja, sobre galleta de chocolate y semillas.", p:"$18.000", img:"imagenes/reposteria/bocado-de-otono.jpg"},
        {n:"Cheesecake frío de maracuyá", d:"Refrescante Cheesecake De Maracuyá que combina la dulzura del queso con el agridulce sabor del maracuyá colombiano.", p:"$17.500", img:"imagenes/reposteria/cheesecake-frio-de-maracuya.jpg"},
        {n:"Cheesecake de frutos rojos", d:"Clásico cheesecake americano de textura cremosa, coronado con una irresistible combinación artesanal de fresas, arándanos y moras.", p:"$18.000", img:"imagenes/reposteria/cheesecake-de-frutos-rojos.jpg"},
        {n:"Cheesecake brownie", d:"Base de brownie y en la parte superior crema de queso horneada, bañada de una salsa de chocolate y maní", p:"$18.500", img:"imagenes/reposteria/cheesecake-brownie.jpg"},
        {n:"Crème brûlée", d:"Crema francesa con costra de caramelo crujiente.", p:"$17.500", img:"imagenes/reposteria/creme-brulee.jpg"},
        {n:"Muffin de chocolate vegano", d:"Suave mini torta vegana hecha con harina de almendra, cocoa, leche de almendra y es cubierta con ganache de chocolate vegana y una nuez pecana", p:"$17.000", img:"imagenes/reposteria/muffin-de-chocolate-vegano.jpg"},
        {n:"Torta de zanahoria", d:"Suave torta de zanahora sazonada con canela, jengibre molido, pimienta dulce, clavos de olor y nuez moscada, rellena de frosting de queso crema y cubierta de crema de mantequilla.", p:"$13.500", img:"imagenes/reposteria/torta-de-zanahoria.jpg"},
        {n:"Ópera", d:"Clásico postre ópera francés de bizcocho joconde, crema de mantequilla de café y un intenso ganache de chocolate semi amargo.", p:"$18.500", img:"imagenes/reposteria/opera.jpg"},
        {n:"Postre de arroz con leche", d:"Nuestro postre de Arroz con Leche es una delicia cremoso y con un toque de canela que te recordará al tradicional postre de la abuela.", p:"$15.000", img:"imagenes/reposteria/postre-de-arroz-con-leche.jpg"},
        {n:"Postre húmedo de 3 leches", d:"Espectacular postre húmedo de tres leches con bizcocho, jugosos duraznos, crema chantilly y ralladura de chocolate.", p:"$18.000", img:"imagenes/reposteria/postre-humedo-de-3-leches.jpg"},
      ]},
      {type:'spotlight', headline:'La mejor Milhoja de Medellín',
        item:{n:"Milhoja LA REINA DE LA CASA", d:"Capas de hojaldre 100% mantequilla, crema pastelera de vainilla, crema chantilly y arequipe", p:"$18.000", tags:['fav'], promo:"Jueves: 2 por $23.000", img:"imagenes/reposteria/milhoja-la-reina-de-la-casa.jpg"}
      },
      {type:'groupTitle', title:'Suntuosos'},
      {type:'items', items:[
        {n:"Pies", d:"A elegir: limón-merengue; chocolate-caramelo salado; vainilla-frutos rojos; manzana-canela.", p:"$18.000", addon:{n:"Nueces pecanas garapiñadas", p:"+ $500"}, img:"imagenes/reposteria/pies.jpg"},
        {n:"Selva negra", d:"Bizcocho de chocolate en almíbar de licor de cereza, relleno de sedosa mousse de chocolate y coronado con crema chantilly y mermelada de uva Isabela.", p:"$18.500", promo:"Lunes: $16.000", img:"imagenes/reposteria/selva-negra.jpg"},
        {n:"Tarta vasca", d:"Inspirados en el País Vasco: Tarta vasca con corteza dorada en la parte superior y un relleno cremoso y aterciopelado", p:"$14.000", tags:['fav'], img:"imagenes/reposteria/tarta-vasca.jpg"},
        {n:"Tarta vasca pistacho", d:"Reinterpretación vasca de corteza dorada y centro aterciopelado, elaborado con pasta artesanal de pistachos 100% reales.", p:"$18.000", img:"imagenes/reposteria/tarta-vasca-pistacho.jpg"},
        {n:"Torta Envinada", d:"Tradicional torta envinada madurada 48 horas en vino tinto, con frutas cristalizadas artesanalmente: mango biche, papaya verde, cidra, brevas y piel de cítricos, enriquecida con nueces de Brasil.", p:"$18.000", img:"imagenes/reposteria/torta-envinada.jpg"},
        {n:"Torta Marialuisa", d:"Tradicional torta Antioqueña, bizcocho elaborado con jugo de naranja, relleno de mermelada de mora y arequipe, esponjosa como una nubecita.", p:"$12.000", img:"imagenes/reposteria/torta-marialuisa.jpg"},
        {n:"Torta Matilda", d:"El mejor bizcocho de chocolate, relleno con mousse de chocolate y cubierta con una ganache de chocolate semi amargo.", p:"$18.500", img:"imagenes/reposteria/torta-matilda.jpg"},
        {n:"Torta red velvet", d:"Bizcocho aterciopelado rojo con frosting de queso crema.", p:"$17.500", img:"imagenes/reposteria/torta-red-velvet.jpg"},
      ]},
      {type:'note', kicker:'Para compartir', text:'Puedes pedir cualquiera de nuestros postres en presentaciones de 6 y 12 porciones.'},
    ]
  },
  galleteria: {
    label:"Galletería", icon:"cookie",
    subtitle:"Bocados artesanales crujientes y reconfortantes, preparados con ingredientes seleccionados para consentirte a diario. Ideales para acompañar cualquier café.",
    banner:"banners/galleteria.jpg",
    blocks:[
      {type:'groupTitle', title:'Petit'},
      {type:'items', items:[
        {n:"Alfajor", d:"Alfajor artesanal con miga que se desmorona, elaborado con mantequilla premium, relleno con cremoso arequipe y cubierto de coco rallado.", p:"$7.000", img:"imagenes/galleteria/alfajor.jpg"},
        {n:"Alfajor x5", d:"Presentación x5 de los suaves alfajores cargados de arequipe y coco rallado, ideales para regalar o compartir.", p:"$29.000", img:"imagenes/galleteria/alfajor-x5.jpg"},
        {n:"Brownie", d:"Brownie elaborado con chocolate amargo de 70% cacao, su estructura densa y melcochuda crea una textura envolvente que se desmorona delicadamente", p:"$10.000", img:"imagenes/galleteria/brownie.jpg"},
        {n:"Galleta Chips de chocolate real — red velvet", d:"Galleta artesanal crujiente con generosas chispas de chocolate oscuro de alta calidad.", p:"$8.000", img:"imagenes/galleteria/chips-de-chocolate-red-velvet.jpg"},
        {n:"Galleta Craquelina de chocolate", d:"Galleta artesanal melcochuda de chocolate, sutiles notas de café amargo y acabado craquelado de tradición pastelera.", p:"$7.500", img:"imagenes/galleteria/craquelina-de-chocolate.jpg"},
        {n:"Craquelina de chocolate x5", d:"Pack de 5 galletas craquelinas de chocolate artesanales, de centro melcochudo, sutiles notas de café y clásico acabado tradicional para compartir.", p:"$32.000", img:"imagenes/galleteria/craquelina-de-chocolate-x5.jpg"},
        {n:"Galleta escocesa", d:"Galleta escocesa de textura desmenuzable, elaborada con mantequilla de primera calidad y enriquecida con una almendra en su centro.", p:"$6.000", img:"imagenes/galleteria/galleta-escocesa.jpg"},
        {n:"Galleta escocesa x5", d:"Pack de 5 galletas escocesas artesanales, de textura suave desmenuzable con mantequilla premium y una crujiente almendra entera. Perfectas para regalar", p:"$28.000", img:"imagenes/galleteria/galleta-escocesa-x5.jpg"},
      ]},
      {type:'divider', text:'Le Macaron'},
      {type:'groupTitle', title:'Four'},
      {type:'items', items:[
        {n:"Galleta de mantequilla", d:"Delicada galleta elaborada con mantequilla premium, rellena generosamente con mermelada artesanal de mora.", p:"$6.000", img:"imagenes/galleteria/galleta-de-mantequilla.jpg"},
        {n:"Galleta de mantequilla x5", d:"Pack de 5 galletas elaboradas con mantequilla premium, rellenas generosamente con mermelada artesanal de mora.", p:"$25.000", img:"imagenes/galleteria/galleta-de-mantequilla-x5.jpg"},
        {n:"Macarrons", d:"Macarrón artesanal de tradición francesa elaborado con merengue de almendra. Disponible en limón, pistacho, chocolate, avellana y frutos rojos.", p:"$8.500", note:"Sus colores pueden variar según temporada del año.", img:"imagenes/galleteria/macarrons.jpg"},
        {n:"Macarrons x5", d:"Macarrón Party's x5 unidades de macarrons surtidas con todos nuestros sabores disponibles para que pruebes cada uno.", p:"$35.000", note:"Sus colores pueden variar según temporada del año.", tags:['fav'], img:"imagenes/galleteria/macarrons-x5.jpg"},
        {n:"Macarrons x10", d:"Macarrón Party's x10 unidades de macarrons surtidas con todos nuestros sabores disponibles. Ideal para compartir", p:"$65.000", note:"Sus colores pueden variar según temporada del año.", img:"imagenes/galleteria/macarrons-x10.jpg"},
        {n:"Macarrons x15", d:"Macarrón Party's x15 unidades de macarrons surtidas con todos nuestros sabores disponibles. Ideales para regalar o compartir en grande.", p:"$94.500", note:"Sus colores pueden variar según temporada del año.", img:"imagenes/galleteria/macarrons-x15.jpg"},
        {n:"Mazapán", d:"Mazapán artesanal de receta tradicional colombiana con leche en polvo y leche condensada, de textura suave, sabor inconfundible y sus diseños son según la temporada.", p:"$6.500", img:"imagenes/galleteria/mazapan.jpg"},
        {n:"Bolsita de merengues", d:"Mini merengues caramelizados con la mezcla perfecta de clara de huevo y azúcar para deleitar a tu paladar, perfectos para 1 o 2 personas.", p:"$5.500", img:"imagenes/galleteria/bolsita-de-merengues.jpg"},
        {n:"Profiterol", d:"Profiterol clásico, Masa choux de doble cocción rellena de cremosa crema pastelera de vainilla y coronada con fino glaseado de chocolate real.", p:"$8.000", img:"imagenes/galleteria/profiterol.jpg"},
        {n:"Profiterol x5", d:"Pack de 5 profiteroles clásicos de masa choux, rellenos de cremosa crema pastelera de vainilla y coronados con chocolate real. Ideales para compartir.", p:"$35.000", img:"imagenes/galleteria/profiterol-x5.jpg"},
        {n:"Profiterol de pistacho", d:"Masa choux de doble cocción rellena de mousse suave de pistacho y cubierta con crujiente pistacho molido intenso.", p:"$10.000", tags:['rec'], img:"imagenes/galleteria/profiterol-de-pistacho.jpg"},
      ]},
      {type:'divider', text:'Le bon bon'},
    ]
  },
  panaderia: {
    label:"Panadería", icon:"bread",
    subtitle:"Panes artesanales de masa madre con técnica tradicional, de miga suave, corteza crujiente y fermentación natural perfecta.",
    banner:"banners/panaderia.jpg",
    blocks:[
      {type:'groupTitle', title:'De nuestro horno'},
      {type:'items', items:[
        {n:"Pandeyuca", d:"Clásico pandeyuca colombiano, recién horneado, con exterior crujiente y centro suave con el sabor del queso costeño.", p:"$7.500", img:"imagenes/panaderia/pandeyuca.jpg"},
        {n:"Pan brioche", d:"Pan brioche artesanal de receta clásica francesa, enriquecido con mantequilla pura y huevo, de miga extremadamente suave y dorada.", p:"$28.500", tags:['rec'], img:"imagenes/panaderia/pan-brioche.jpg"},
        {n:"Pan de canela y nueces", d:"Pan artesanal que combina el sabor dulce de la canela con la textura de las nuces, en tamaño ideal para compartir.", p:"$32.000", img:"imagenes/panaderia/pan-canela-y-nueces.jpg"},
        {n:"Pan guayaba y queso", d:"Pan artesanal de masa suave, relleno con una irresistible combinación de conserva de guayaba dulce y queso fresco.", p:"$25.000", img:"imagenes/panaderia/pan-guayaba-y-queso.jpg"},
        {n:"Pan de queso", d:"Pan artesanal de queso elaborado sobre base de pan brioche, relleno de queso fresco y gratinado con queso parmesano.", p:"$32.000", img:"imagenes/panaderia/pan-de-queso.jpg"},
        {n:"Pan masa madre", d:"Pan artesanal de masa madre con fermentación natural, corteza crocante, miga suave y con una mezcla de semillas de ajonjolí, girasol, calabaza y amapola.", p:"$32.000", img:"imagenes/panaderia/pan-masa-madre.jpg"},
        {n:"Pan de nutella", d:"Pan dulce artesanal de miga ultra suave, generosamente relleno de Nutella 100% original (crema de avellana) con chocolate.", p:"$32.000", tags:['fav'], img:"imagenes/panaderia/pan-de-nutella.jpg"},
      ]},
      {type:'divider', text:'Al desayuno con mantequilla.\nEn la noche con pasta.'},
    ]
  },
  bebidas: {
    label:"Bebidas", icon:"cup",
    subtitle:"Café de especialidad, chocolate e infusiones — para calentar la tarde o refrescar el día.",
    banner:"banners/bebidas.jpg",
    blocks:[
      {type:'groupTitle', title:'Bebidas calientes', subtitle:'Calientes y acogedoras'},
      {type:'items', alpha:true, items:[
        {n:"Espresso", d:"Extracción pura y concentrada de café. Cuerpo denso y sabor intenso.", p:"$8.000", img:"imagenes/bebidas/espresso.jpg"},
        {n:"Espresso doble", d:"Doble dosis de café concentrado. Potencia máxima y notas profundas, para verdaderos amantes del café.", p:"$10.000", img:"imagenes/bebidas/espresso-doble.jpg"},
        {n:"Americano", d:"Carga de espresso suavizada con agua caliente. Una taza equilibrada, aromática y de cuerpo ligero.", p:"$8.000", tags:['fav'], img:"imagenes/bebidas/americano.jpg"},
        {n:"Americano doble", d:"Doble carga de espresso alargada con agua caliente. Mayor intensidad y aroma en cada sorbo.", p:"$10.000", img:"imagenes/bebidas/americano-doble.jpg"},
        {n:"Capuccino", d:"Equilibrio perfecto entre espresso intenso, leche deslactosada y una generosa capa de espuma aterciopelada.", p:"$12.000", note:"En leche almendras $14.000", img:"imagenes/bebidas/capuccino.jpg"},
        {n:"Cortado", d:"Carga de espresso suavizada con un toque de leche caliente que equilibra su intensidad natural.", p:"$8.500", img:"imagenes/bebidas/cortado.jpg"},
        {n:"Macchiato", d:"Espresso puro coronado con una ligera mancha de espuma de leche cremosa y aromática.", p:"$9.500", img:"imagenes/bebidas/macchiato.jpg"},
        {n:"Mocaccino", d:"Deliciosa fusión de espresso, chocolate y leche cremosa, coronada con una suave espuma", p:"$13.000", img:"imagenes/bebidas/mocaccino.jpg"},
        {n:"Chocolate en agua", d:"Tradicional bebida caliente de cacao batido en agua, ligera, aromática y de sabor intenso.", p:"$9.000", img:"imagenes/bebidas/chocolate-en-agua.jpg"},
        {n:"Chocolate en leche", d:"Cremoso chocolate batido en leche, reconfortante y con el dulzor tradicional perfecto.", p:"$10.500", note:"En leche almendras $13.500", img:"imagenes/bebidas/chocolate-en-leche.jpg"},
        {n:"Té chai en leche", d:"Infusión aromática de té negro y especias exóticas, preparada en leche cremosa y ligeramente espumada.", p:"$12.000", note:"En leche almendras $15.500", img:"imagenes/bebidas/te-chai-en-leche.jpg"},
        {n:"Té — Infusión Despensa de Rih Rih", d:"Selección artesanal de hebras naturales e ingredientes botánicos, infusionados para brindar aroma y bienestar.", p:"$8.000", img:"imagenes/bebidas/te-rih-rih.jpg"},
        {n:"Bretaña", d:"Soda refrescante y burbujeante, ideal para acompañar cualquier momento.", p:"$6.500", img:"imagenes/bebidas/bretana.jpg"},
        {n:"Aromática", d:"Infusión caliente de hierbas frescas y frutas seleccionadas, ideal para relajar y reconfortar.", p:"$6.500", img:"imagenes/bebidas/aromatica.jpg"},
        {n:"Tinto Campesino", d:"Café tradicional colado y endulzado artesanalmente con panela, ofreciendo un sabor dulce y reconfortante.", p:"$6.500", img:"imagenes/bebidas/tinto-campesino.jpg"}
        {n:"Milo", d:"Clásica bebida achocolatada preparada en leche, servido frío o caliente.", p:"$13.000", img:"imagenes/bebidas/milo.jpg"}
        {n:"Vaso de leche", d:"Vaso de leche de vaca simple y reconfortante.", p:"$8.000", img:"imagenes/bebidas/vaso-de-leche.jpg"}
        {n:"Vaso de leche de almendras", d:"Bebida vegetal ligera y cremosa a base de almendras.", p:"$12.000", img:"imagenes/bebidas/vaso-de-leche-almendras.jpg"},
      ]},
      {type:'groupTitle', title:'Bebidas frías', subtitle:'Frías y refrescantes'},
      {type:'items', alpha:true, items:[
        {n:"Cold brew FJB", d:"Café de especialidad infusionado en frío durante horas. Suave, refrescante, de baja acidez y notas dulces.", p:"$13.500", tags:['rec'], img:"imagenes/bebidas/cold-brew-fjb.jpg"}
        {n:"Granizado de café sencillo", d:"Refrescante mezcla café y hielo triturado, con textura suave y sabor intenso.", p:"$15.000",img:"imagenes/bebidas/granizado-cafe.jpg"}
        {n:"Granizado de café con chantilly y salsa de chocolate", d:"Café granizado coronado con chantilly y salsa de chocolate.", p:"$18.000", tags:['fav'], img:"imagenes/bebidas/granizado-cafe-chantilly.jpg"}
        {n:"Batido frutos amarillos", d:"Refrescante mezcla cremosa de frutas tropicales amarillas, balanceada entre notas dulces y ligeramente cítricas.", p:"$13.500", note:"En leche $16.500", img:"imagenes/bebidas/batido-frutos-amarillos.jpg"},
        {n:"Batido frutos rojos", d:"Cremosa combinación de frutos rojos, con un sabor dulce y refrescante.", p:"$13.500", note:"En leche $16.500", img:"imagenes/bebidas/batido-frutos-rojos.jpg"},
        {n:"Latte", d:"Suave combinación de espresso y abundante leche vaporizada cremosa, coronada con una ligera espuma.", p:"$10.500", img:"imagenes/bebidas/latte.jpg"}
        {n:"Latte en leche de almendras", d:"Nuestro latte preparado con leche de almendras.", p:"$12.500", img:"imagenes/bebidas/latte-leche-almendras.jpg"}
        {n:"Matcha", d:"Té verde molido de sabor herbal y vibrante, batido con leche cremosa y suave dulzor.", p:"$14.000", note:"En leche almendras $16.500", img:"imagenes/bebidas/matcha.jpg"}
        {n:"Kombucha Biota", d:"Bebida fermentada a base de té, ligeramente burbujeante, refrescante y rica en probióticos.", p:"$12.500", img:"imagenes/bebidas/kombucha-biota.jpg"}
        {n:"Soda Hatsu", d:"Refrescante bebida gasificada con extractos naturales de frutas y hierbas, baja en calorías.", p:"$7.500", img:"imagenes/bebidas/soda-hatsu.jpg"}
        {n:"Soda Maracuyá AMP", d:"Refrescante combinación gasificada con pulpa natural de maracuyá.", p:"$12.000", img:"imagenes/bebidas/soda-maracuya-amp.jpg"}
        {n:"Té hatsu", d:"Té aromático de origen selecto, servido frío.", p:"$9.000", img:"imagenes/bebidas/te-hatsu.jpg"}
        {n:"Coca-Cola", d:"Clásica bebida gaseosa refrescante con su inconfundible sabor original.", p:"$6.500", img:"imagenes/bebidas/coca-cola.jpg"}
        {n:"Coca-Cola Zero", d:"El clásico sabor refrescante de Coca-Cola, sin azúcar y con cero calorías.", p:"$7.000", img:"imagenes/bebidas/coca-cola-zero.jpg"},
      ]},
    ]
  },
};

const FAVORITOS = [
  {cat:"pasteleria", n:"Croissant de mantequilla", p:"$10.500"},
  {cat:"reposteria", n:"Milhoja LA REINA DE LA CASA", p:"$18.000"},
  {cat:"bebidas", n:"Americano", p:"$8.000"},
  {cat:"galleteria", n:"Macarrons x5", p:"$35.000"},
  {cat:"panaderia", n:"Pan de nutella", p:"$32.000"},
];

const DIRECCION = "Multicentro Aliadas, Cl 9 #43A 45 Local 17, El Poblado, Medellín";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(DIRECCION);
const WEB_URL = "https://ampchocolate.com";
const LOGO_IMG = "imagenes/logo-amp.jpg";

/* ---------------- Render ---------------- */
const content = document.getElementById('content');
const topbar = document.getElementById('topbar');

function footerHtml(compact){
  return `
  <div class="site-footer${compact ? ' compact':''}">
    <div class="fname">AMP Chocolate</div>
    <div class="signature">LA PETITE PÂTISSERIE DE MEDELLÍN</div>
    <div class="footer-row">${icon('pin')} ${DIRECCION}</div>
    <div class="footer-row">${icon('globe')} AMPCHOCOLATE.COM</div>
    <div class="footer-links">
      <a class="footer-btn" href="${WEB_URL}" target="_blank" rel="noopener">${icon('globe')} Sitio web</a>
      <a class="footer-btn" href="${MAPS_URL}" target="_blank" rel="noopener">${icon('map')} Cómo llegar</a>
    </div>
  </div>`;
}

function renderHome(){
  topbar.className = 'topbar home';
  topbar.innerHTML = `<div class="topbar-mark"><span>AMP CHOCOLATE</span></div>`;

  const favHtml = FAVORITOS.map(f=>{
    const cat = MENU[f.cat];
    const favImg = findProductImg(f.cat, f.n);
    return `
    <div class="fav-card">
      <div class="fav-photo">
        <span class="tag tag-fav">${icon('star')} AMP favorito</span>
        ${photoFrame({n:f.n, img:favImg})}
      </div>
      <div class="fav-body">
        <div class="fav-cat">${cat.label}</div>
        <div class="fav-name">${f.n}</div>
        <div class="fav-price">${f.p}</div>
      </div>
    </div>`;
  }).join('');

  const tilesHtml = Object.keys(MENU).map(key=>{
    const c = MENU[key];
    if(c.banner){
      return `
      <button class="tile tile-banner" onclick="openCategory('${key}')">
        <img src="${c.banner}" alt="${c.label}" loading="lazy" style="opacity:0;transition:opacity .5s ease;" onload="this.style.opacity=1" onerror="handleTileImgError(this,'${key}')">
        <span class="tile-banner-overlay"></span>
        <span class="tile-banner-label">${icon(c.icon)}${c.label}</span>
      </button>`;
    }
    return `
    <button class="tile" onclick="openCategory('${key}')" style="color:var(--green-deep)">
      ${icon(c.icon)}
      <div class="tile-name" style="color:var(--brown)">${c.label}</div>
    </button>`;
  }).join('');

  content.innerHTML = `
    <div class="hero">
      <div class="hero-isotipo">${icon('pinwheel')}</div>
      <div class="emblem">
        <img class="emblem-logo" src="${LOGO_IMG}" alt="AMP Chocolate" loading="lazy" onload="this.classList.add('loaded'); this.nextElementSibling.style.display='none';" onerror="this.style.display='none';">
        <span>A</span>
      </div>
      <h1 class="brand-name">AMP <em>Chocolate</em></h1>
      <div class="brand-sub">REPOSTERÍA · PASTELERÍA · PANADERÍA</div>
      <p class="tagline">Los mejores amigos del café, de la tarde, de cualquier hora.</p>
      <p class="tagline-secondary">Sabores que despiertan tus emociones</p>
      <div class="hero-rule"></div>
    </div>

    <div class="section-label">${icon('pinwheel')} Favoritos AMP</div>
    <div class="fav-rail">${favHtml}</div>

    <div class="section-label" style="margin-top:30px;">Explora la carta</div>
    <div class="cat-grid">${tilesHtml}</div>

    ${footerHtml(false)}
  `;
  content.classList.remove('fade-in'); void content.offsetWidth; content.classList.add('fade-in');
  window.scrollTo({top:0, behavior:'instant'});
}

function tagsHtml(tags){
  if(!tags || !tags.length) return '';
  return `<div class="tags">${tags.map(tagPill).join('')}</div>`;
}

/* ---------------- Sistema de foto / placeholder AMP ----------------
   Cada producto puede tener una propiedad opcional "img", por ejemplo:
     {n:"Croissant de mantequilla", d:"...", p:"$10.500", img:"imagenes/croissant-mantequilla.jpg"}
   Si "img" no existe (o la ruta falla al cargar), se muestra el placeholder
   elegante (círculo dorado con "A" + nombre del producto) sin tocar más código.
   Basta con crear la carpeta "imagenes/" y agregar el archivo con esa ruta. */
function photoFrame(item){
  const alt = (item.n || '').replace(/"/g, '&quot;');
  const placeholder = `
    <div class="photo-placeholder"${item.img ? ' style="display:none;"' : ''}>
      <div class="ph-circle"><span>A</span></div>
      <div class="ph-label">${item.n || ''}</div>
    </div>`;
  const imgTag = item.img
    ? `<img src="${item.img}" alt="${alt}" loading="lazy" style="opacity:0;transition:opacity .5s ease;" onload="this.style.opacity=1" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
    : '';
  return imgTag + placeholder;
}

/* Busca si el producto de un Favorito ya tiene "img" definida en MENU,
   para que el riel de Favoritos use la misma foto automáticamente. */
function findProductImg(catKey, name){
  const cat = MENU[catKey];
  if(!cat) return null;
  for(const b of cat.blocks){
    if(b.type === 'items'){
      const found = b.items.find(it => it.n === name);
      if(found && found.img) return found.img;
    }
    if(b.type === 'spotlight' && b.item.n === name && b.item.img) return b.item.img;
  }
  return null;
}

function cardHtml(item, catIconName){
  const noteHtml = item.note ? `<div class="card-note">${item.note}</div>` : '';
  const promoHtml = item.promo ? `<div class="promo-badge">${icon('star')} ${item.promo}</div>` : '';
  const addonHtml = item.addon ? `<div class="card-addon">Opción adicional: ${item.addon.n} <strong>${item.addon.p}</strong></div>` : '';
  return `
    <div class="card">
      <div class="card-photo">${photoFrame(item)}</div>
      <div class="card-body">
        ${tagsHtml(item.tags)}
        <div class="card-name">${item.n}</div>
        <div class="card-desc">${item.d}</div>
        <div class="card-foot">
          <span class="card-price">${item.p}</span>
          ${noteHtml}
        </div>
        ${promoHtml}
        ${addonHtml}
      </div>
    </div>`;
}

function blockHtml(block, catIconName){
  switch(block.type){
    case 'groupTitle':
      return `<div class="group-title">${block.title}</div>${block.subtitle ? `<div class="group-subtitle">${block.subtitle}</div>` : ''}<div class="group-rule"></div>`;
    case 'items':{
      const list = block.alpha ? block.items.slice().sort((a,b)=>a.n.localeCompare(b.n,'es')) : block.items;
      const items = list.map(it=>cardHtml(it, catIconName)).join('');
      const addon = block.addon ? `<div class="addon-row"><span>${block.addon.n}</span><span class="p">${block.addon.p}</span></div>` : '';
      return `<div class="card-list">${items}</div>${addon}`;
    }
    case 'pairing':
      return `<div class="pairing-note">${icon(block.icon||'cup')} ${block.text}</div>`;
    case 'divider':
      return `<div class="phrase-divider"><span class="line"></span><span class="txt">${block.text}</span><span class="line"></span></div>`;
    case 'spotlight':{
      const it = block.item;
      const promoHtml = it.promo ? `<div class="promo-badge">${icon('star')} ${it.promo}</div>` : '';
      return `
      <div class="spotlight">
        <div class="spotlight-band">${block.headline}</div>
        <div class="spotlight-photo">${photoFrame(it)}</div>
        <div class="spotlight-body">
          ${tagsHtml(it.tags)}
          <div class="spotlight-name">${it.n}</div>
          <div class="spotlight-desc">${it.d}</div>
          <div class="spotlight-foot"><span class="spotlight-price">${it.p}</span></div>
          ${promoHtml}
        </div>
      </div>`;
    }
    case 'note':
      return `<div class="note-box"><div class="note-kicker">${block.kicker}</div><div class="note-text">${block.text}</div></div>`;
    default: return '';
  }
}

function handleTileImgError(imgEl, key){
  const c = MENU[key];
  const btn = imgEl.closest('.tile-banner');
  if(!btn) return;
  btn.outerHTML = `<button class="tile" onclick="openCategory('${key}')" style="color:var(--green-deep)">${icon(c.icon)}<div class="tile-name" style="color:var(--brown)">${c.label}</div></button>`;
}

function openCategory(key){
  const c = MENU[key];
  topbar.className = 'topbar';
  topbar.innerHTML = `
    <button class="back-btn" onclick="renderHome()" aria-label="Volver al inicio">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
    <div class="topbar-title">${c.label}<span class="sub">AMP Chocolate</span></div>
  `;

  const blocksHtml = c.blocks.map(b=>blockHtml(b, c.icon)).join('');

  content.innerHTML = `
    <div class="cat-hero">
      <div class="cat-hero-top">
        <div class="cat-hero-icon" style="color:var(--green-deep)">${icon(c.icon)}</div>
        <div><h1>${c.label}</h1></div>
      </div>
      <p>${c.subtitle}</p>
    </div>
    ${blocksHtml}
    <button class="cat-back" onclick="renderHome()">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      Volver al menú
    </button>
    ${footerHtml(true)}
  `;
  content.classList.remove('fade-in'); void content.offsetWidth; content.classList.add('fade-in');
  window.scrollTo({top:0, behavior:'instant'});
}

renderHome();
