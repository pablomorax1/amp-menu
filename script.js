/* ---------------- Iconografía lineal (trazo dorado) ---------------- */
const ICONS = {
  croissant: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M8 30c2-14 12-22 22-20 8 1.6 12 8 10 14-1.4 4.4-6 6-9 3.6-2-1.6-1-4.4 1.4-4.6"/><path d="M12 26c4 1 7 4 8 8M18 22c3 1 5 3 6 6M24 18c2.4.8 4.2 2.4 5.2 4.6"/></svg>`,
  sandwich: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 22c0-6 7.2-11 16-11s16 5 16 11"/><path d="M8 22h32v4c0 3-2 5-5 5H13c-3 0-5-2-5-5v-4Z"/><path d="M10 26l4 5M18 26l4 5M26 26l4 5M34 26l3 5"/></svg>`,
  cake: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 26l15-14 15 14"/><path d="M9 26v9c0 2 2 3.5 4 3.5h22c2 0 4-1.5 4-4v-8.5"/><path d="M24 12V7M24 7c-1.4 0-2.4-1-2.4-2.2S22.6 3 24 3s2.4.9 2.4 2.1S25.4 7 24 7Z"/><path d="M14 32c1.6-2 3.2-2 4.8 0s3.2 2 4.8 0 3.2-2 4.8 0 3.2 2 4.8 0"/></svg>`,
  cookie: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="24" cy="24" r="15.5"/><circle cx="19" cy="19" r="1.6" fill="currentColor" stroke="none"/><circle cx="28" cy="17" r="1.6" fill="currentColor" stroke="none"/><circle cx="30" cy="26" r="1.6" fill="currentColor" stroke="none"/><circle cx="20" cy="29" r="1.6" fill="currentColor" stroke="none"/><circle cx="25" cy="24" r="1.6" fill="currentColor" stroke="none"/></svg>`,
  bread: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 27c0-9 7-16 18-16s18 7 18 16c0 5-4 8-9 8H15c-5 0-9-3-9-8Z"/><path d="M16 15c-1 3-1 6 0 9M24 13c-1.3 3.4-1.3 7 0 10.4M32 15c1 3 1 6 0 9"/></svg>`,
  cup: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 18h20v11c0 5.5-4.5 10-10 10s-10-4.5-10-10V18Z"/><path d="M30 21h3.5c2.5 0 4.5 2 4.5 4.5S36 30 33.5 30H29"/><path d="M15 8c-1.5 1.8-1.5 3.2 0 5M21 8c-1.5 1.8-1.5 3.2 0 5"/><path d="M7 42h26"/></svg>`,
  star: `<svg viewBox="0 0 48 48" fill="currentColor" stroke="none"><path d="M24 6l4.6 11.6L40 21l-9 7.6L33.6 41 24 34.2 14.4 41 17 28.6 8 21l11.4-3.4L24 6Z"/></svg>`,
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
    subtitle:"Hojaldres recién horneados, al estilo de una boulangerie francesa.",
    banner:"banners/pasteleria.jpg",
    blocks:[
      {type:'groupTitle', title:'El Auténtico Croissant'},
      {type:'items', items:[
        {n:"Croissant de mantequilla", d:"Hojaldre dorado y crujiente, horneado con mantequilla francesa pura.", p:"$10.500", tags:['fav'], img:"imagenes/pasteleria/croissant-de-mantequilla.jpg"},
        {n:"Croissant integral", d:"La versión integral del clásico: ligero, tostado y menos dulce.", p:"$12.000", img:"imagenes/pasteleria/croissant-integral.jpg"},
        {n:"Croissant queso", d:"Relleno generoso de queso fundido dentro de un hojaldre crocante.", p:"$14.000", img:"imagenes/pasteleria/croissant-queso.jpg"},
        {n:"Croissant de almendra", d:"Relleno de crema de almendras, coronado con almendras laminadas.", p:"$14.000", img:"imagenes/pasteleria/croissant-de-almendra.jpg"},
        {n:"Croissant choco-nutella", d:"Hojaldre tibio relleno de nutella cremosa; un clásico irresistible.", p:"$14.000", img:"imagenes/pasteleria/croissant-choco-nutella.jpg"},
        {n:"Pain au chocolat", d:"Bastones de chocolate envueltos en hojaldre de mantequilla dorado.", p:"$12.000", img:"imagenes/pasteleria/pain-au-chocolat.jpg"},
        {n:"Palito de queso", d:"Crujiente palito horneado con queso, ideal para acompañar el café.", p:"$11.000", img:"imagenes/pasteleria/palito-de-queso.jpg"},
        {n:"Muffin de queso y espinaca", d:"Muffin salado y esponjoso con queso fundido y espinaca fresca.", p:"$10.000", img:"imagenes/pasteleria/muffin-de-queso-y-espinaca.jpg"},
      ]},
      {type:'pairing', text:'Con café', icon:'cup'},
      {type:'divider', text:'En la tarde'},
      {type:'groupTitle', title:'De Mantequilla'},
      {type:'items', items:[
        {n:"Pastel hojaldrado jamón y queso", d:"Hojaldre relleno de jamón y queso derretido, horneado al punto.", p:"$10.500", img:"imagenes/pasteleria/pastel-hojaldrado-jamon-y-queso.jpg"},
        {n:"Caprese", d:"Hojaldre con tomate, queso fresco y albahaca aromática.", p:"$9.500", img:"imagenes/pasteleria/caprese.jpg"},
        {n:"Guayaba", d:"Hojaldre relleno de guayaba dulce, un clásico colombiano.", p:"$9.500", img:"imagenes/pasteleria/guayaba.jpg"},
        {n:"Arequipe", d:"Hojaldre relleno de arequipe artesanal, dulce y cremoso.", p:"$9.500", img:"imagenes/pasteleria/arequipe.jpg"},
        {n:"Quiche Lorraine", d:"Tarta francesa de huevo, crema, tocineta y queso gratinado.", p:"$18.500", tags:['rec'], img:"imagenes/pasteleria/quiche-lorraine.jpg"},
        {n:"Quiche vegetariana", d:"Tarta de huevo y crema con vegetales de temporada.", p:"$15.500", img:"imagenes/pasteleria/quiche-vegetariana.jpg"},
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
        {n:"Recreo en sanduchera", d:"Sándwich clásico de jamón y queso, prensado y calientito.", p:"$10.500", img:"imagenes/sandwiches/recreo-en-sanduchera.jpg"},
        {n:"Express — frío", d:"Jamón, queso, tomate y espinaca fresca en pan artesanal frío.", p:"$14.500", img:"imagenes/sandwiches/express-frio.jpg"},
        {n:"Atún", d:"Dip cremoso de atún con espinaca sobre pan artesanal.", p:"$18.000"},
        {n:"Carnes", d:"Jamón, salami, pepperoni, espinaca, queso y tomate en una sola creación.", p:"$20.000", img:"imagenes/sandwiches/carnes.jpg"},
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
        {n:"Bocado de Otoño", d:"Postre de temporada con capas de sabores otoñales.", p:"$18.000", img:"imagenes/reposteria/bocado-de-otono.jpg"},
        {n:"Cheesecake frío de maracuyá", d:"Cheesecake cremoso con la acidez fresca del maracuyá.", p:"$17.500", img:"imagenes/reposteria/cheesecake-frio-de-maracuya.jpg"},
        {n:"Cheesecake de frutos rojos", d:"Cheesecake suave cubierto con frutos rojos frescos.", p:"$18.000", img:"imagenes/reposteria/cheesecake-de-frutos-rojos.jpg"},
        {n:"Cheesecake brownie", d:"Fusión de cheesecake cremoso y brownie de chocolate intenso.", p:"$18.500", img:"imagenes/reposteria/cheesecake-brownie.jpg"},
        {n:"Crème brûlée", d:"Crema francesa con costra de caramelo crujiente.", p:"$17.500", img:"imagenes/reposteria/creme-brulee.jpg"},
        {n:"Muffin de chocolate vegano", d:"Muffin de chocolate 100% vegano, húmedo y sabroso.", p:"$17.000", img:"imagenes/reposteria/muffin-de-chocolate-vegano.jpg"},
        {n:"Torta de zanahoria", d:"Torta húmeda de zanahoria con especias y frosting cremoso.", p:"$13.500", img:"imagenes/reposteria/torta-de-zanahoria.jpg"},
        {n:"Ópera", d:"Capas de bizcocho de almendra, café y ganache de chocolate.", p:"$18.500", img:"imagenes/reposteria/opera.jpg"},
        {n:"Postre de arroz con leche", d:"Arroz con leche cremoso, un clásico reconfortante.", p:"$15.000", img:"imagenes/reposteria/postre-de-arroz-con-leche.jpg"},
        {n:"Postre húmedo de 3 leches", d:"Bizcocho empapado en tres leches, suave y dulce.", p:"$18.000", img:"imagenes/reposteria/postre-humedo-de-3-leches.jpg"},
      ]},
      {type:'spotlight', headline:'La mejor Milhoja de Medellín',
        item:{n:"Milhoja LA REINA DE LA CASA", d:"Capas de hojaldre crujiente y crema pastelera, horneadas y armadas a mano cada día. La pieza insignia de AMP Chocolate.", p:"$18.000", tags:['fav'], promo:"Jueves: 2 por $23.000", img:"imagenes/reposteria/milhoja-la-reina-de-la-casa.jpg"}
      },
      {type:'groupTitle', title:'Suntuosos'},
      {type:'items', items:[
        {n:"Pies", d:"A elegir: limón-merengue, chocolate-caramelo salado, vainilla-frutos rojos o manzana-canela.", p:"$18.000", addon:{n:"Nueces pecanas garapiñadas", p:"+ $500"}, img:"imagenes/reposteria/pies.jpg"},
        {n:"Selva negra", d:"Bizcocho de chocolate, cerezas y crema chantilly; el clásico alemán.", p:"$18.500", promo:"Lunes: $16.000", img:"imagenes/reposteria/selva-negra.jpg"},
        {n:"Tarta vasca", d:"Tarta de queso estilo vasco: cremosa por dentro, quemada por fuera.", p:"$14.000", tags:['fav'], img:"imagenes/reposteria/tarta-vasca.jpg"},
        {n:"Tarta vasca pistacho", d:"Tarta vasca clásica con un delicado toque de pistacho.", p:"$18.000", img:"imagenes/reposteria/tarta-vasca-pistacho.jpg"},
        {n:"Torta Envinada", d:"Torta húmeda con licor, especiada y llena de sabor.", p:"$18.000", img:"imagenes/reposteria/torta-envinada.jpg"},
        {n:"Torta Marialuisa", d:"Capas delgadas de bizcocho con arequipe; un clásico de la casa.", p:"$12.000", img:"imagenes/reposteria/torta-marialuisa.jpg"},
        {n:"Torta Matilda", d:"Torta de chocolate intensa y húmeda, para los amantes del cacao.", p:"$18.500", img:"imagenes/reposteria/torta-matilda.jpg"},
        {n:"Torta red velvet", d:"Bizcocho aterciopelado rojo con frosting de queso crema.", p:"$17.500", img:"imagenes/reposteria/torta-red-velvet.jpg"},
      ]},
      {type:'note', kicker:'Para compartir', text:'Puedes pedir cualquiera de nuestros postres en presentaciones de 6 y 12 porciones.'},
    ]
  },
  galleteria: {
    label:"Galletería", icon:"cookie",
    subtitle:"Piezas pequeñas de mantequilla, chocolate y almendra para acompañar cualquier café.",
    banner:"banners/galleteria.jpg",
    blocks:[
      {type:'groupTitle', title:'Petit'},
      {type:'items', items:[
        {n:"Alfajor", d:"Galletas suaves rellenas de arequipe, bañadas en coco.", p:"$7.000", img:"imagenes/galleteria/alfajor.jpg"},
        {n:"Alfajor x5", d:"Cinco alfajores artesanales rellenos de arequipe.", p:"$29.000", img:"imagenes/galleteria/alfajor-x5.jpg"},
        {n:"Brownie", d:"Brownie denso y húmedo de chocolate intenso.", p:"$10.000", img:"imagenes/galleteria/brownie.jpg"},
        {n:"Chips de chocolate — red velvet", d:"Galleta suave con chips de chocolate y sabor red velvet.", p:"$8.000", img:"imagenes/galleteria/chips-de-chocolate-red-velvet.jpg"},
        {n:"Craquelina de chocolate", d:"Galleta agrietada de chocolate, crocante por fuera y suave por dentro.", p:"$7.500", img:"imagenes/galleteria/craquelina-de-chocolate.jpg"},
        {n:"Craquelina de chocolate x5", d:"Cinco craquelinas de chocolate para compartir.", p:"$32.000", img:"imagenes/galleteria/craquelina-de-chocolate-x5.jpg"},
        {n:"Galleta escocesa", d:"Galleta de mantequilla estilo escocés, crocante y ligera.", p:"$6.000", img:"imagenes/galleteria/galleta-escocesa.jpg"},
        {n:"Galleta escocesa x5", d:"Cinco galletas escocesas de mantequilla.", p:"$28.000", img:"imagenes/galleteria/galleta-escocesa-x5.jpg"},
        {n:"Profiterol de pistacho", d:"Profiterol relleno de crema de pistacho.", p:"$10.000", tags:['rec'], img:"imagenes/galleteria/profiterol-de-pistacho.jpg"},
      ]},
      {type:'divider', text:'Le Macaron'},
      {type:'groupTitle', title:'Four'},
      {type:'items', items:[
        {n:"Galleta de mantequilla", d:"Galleta clásica de mantequilla, simple y deliciosa.", p:"$6.000", img:"imagenes/galleteria/galleta-de-mantequilla.jpg"},
        {n:"Galleta de mantequilla x5", d:"Cinco galletas de mantequilla artesanales.", p:"$25.000", img:"imagenes/galleteria/galleta-de-mantequilla-x5.jpg"},
        {n:"Macarrons", d:"Macarrón francés, crujiente por fuera y suave por dentro.", p:"$8.500", img:"imagenes/galleteria/macarrons.jpg"},
        {n:"Macarrons x5", d:"Cinco macarrons en variedad de sabores.", p:"$35.000", tags:['fav'], img:"imagenes/galleteria/macarrons-x5.jpg"},
        {n:"Macarrons x10", d:"Diez macarrons franceses para compartir.", p:"$65.000", img:"imagenes/galleteria/macarrons-x10.jpg"},
        {n:"Macarrons x15", d:"Quince macarrons, ideales para regalar o compartir en grande.", p:"$94.500", img:"imagenes/galleteria/macarrons-x15.jpg"},
        {n:"Mazapán", d:"Dulce artesanal de almendra, suave y aromático.", p:"$6.500", img:"imagenes/galleteria/mazapan.jpg"},
        {n:"Bolsita de merengues", d:"Merengues ligeros y crujientes en bolsita para disfrutar.", p:"$5.500", img:"imagenes/galleteria/bolsita-de-merengues.jpg"},
        {n:"Profiterol", d:"Profiterol clásico relleno de crema.", p:"$8.000", img:"imagenes/galleteria/profiterol.jpg"},
        {n:"Profiterol x5", d:"Cinco profiteroles clásicos para compartir.", p:"$35.000", img:"imagenes/galleteria/profiterol-x5.jpg"},
      ]},
      {type:'divider', text:'Le bon bon'},
    ]
  },
  panaderia: {
    label:"Panadería", icon:"bread",
    subtitle:"Masas madre, esponjosas y suaves — horneadas a diario con fermentación lenta.",
    banner:"banners/panaderia.jpg",
    blocks:[
      {type:'groupTitle', title:'De nuestro horno'},
      {type:'items', items:[
        {n:"Pandeyuca", d:"Pan de yuca y queso, suave y esponjoso.", p:"$7.500"},
        {n:"Pan brioche", d:"Pan brioche artesanal, suave y ligeramente dulce.", p:"$28.500", tags:['rec'], img:"imagenes/panaderia/pan-brioche.jpg"},
        {n:"Pan canela y nueces", d:"Pan de masa madre con canela y nueces.", p:"$32.000", img:"imagenes/panaderia/pan-canela-y-nueces.jpg"},
        {n:"Pan guayaba y queso", d:"Pan artesanal relleno de guayaba y queso.", p:"$25.000", img:"imagenes/panaderia/pan-guayaba-y-queso.jpg"},
        {n:"Pan de queso", d:"Pan artesanal relleno de queso derretido.", p:"$32.000", img:"imagenes/panaderia/pan-de-queso.jpg"},
        {n:"Pan masa madre", d:"Pan de fermentación natural: corteza crujiente y miga suave.", p:"$32.000", img:"imagenes/panaderia/pan-masa-madre.jpg"},
        {n:"Pan de nutella", d:"Pan artesanal relleno de nutella cremosa.", p:"$32.000", tags:['fav'], img:"imagenes/panaderia/pan-de-nutella.jpg"},
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
        {n:"Espresso", d:"Shot de café puro, intenso y aromático.", p:"$8.000"},
        {n:"Espresso doble", d:"Doble shot de espresso para los amantes del café fuerte.", p:"$10.000"},
        {n:"Americano", d:"Café negro, intenso y aromático.", p:"$8.000", tags:['fav'], img:"imagenes/bebidas/americano.jpg"},
        {n:"Americano doble", d:"Doble shot de espresso con agua caliente.", p:"$10.000", img:"imagenes/bebidas/americano-doble.jpg"},
        {n:"Capuccino", d:"Espresso con leche vaporizada y espuma cremosa.", p:"$12.000", note:"En leche almendras $14.000", img:"imagenes/bebidas/capuccino.jpg"},
        {n:"Cortado", d:"Espresso cortado con un toque de leche.", p:"$8.500"},
        {n:"Macchiato", d:"Espresso marcado con un toque de espuma de leche.", p:"$9.500"},
        {n:"Mocaccino", d:"Espresso con chocolate y leche vaporizada.", p:"$13.000"},
        {n:"Chocolate en agua", d:"Chocolate caliente preparado en agua, intenso en sabor.", p:"$9.000", img:"imagenes/bebidas/chocolate-en-agua.jpg"},
        {n:"Chocolate en leche", d:"Chocolate caliente cremoso preparado con leche.", p:"$10.500", note:"En leche almendras $13.500", img:"imagenes/bebidas/chocolate-en-leche.jpg"},
        {n:"Té chai en leche", d:"Té chai especiado con leche cremosa, servido caliente.", p:"$12.000", note:"En leche almendras $15.500"},
        {n:"Té — Infusión Despensa de Rih Rih", d:"Infusión artesanal de hierbas seleccionadas.", p:"$8.000"},
        {n:"Bretaña", d:"Infusión aromática de hierbas seleccionadas.", p:"$6.500"},
        {n:"Aromática", d:"Infusión de frutas, cálida y reconfortante.", p:"$6.500"},
        {n:"Tinto Campesino", d:"Café negro tradicional colombiano.", p:"$6.500"},
        {n:"Milo", d:"Bebida de chocolate malteado, a elegir frío o caliente.", p:"$13.000"},
        {n:"Vaso de leche", d:"Leche entera, simple y reconfortante.", p:"$8.000"},
        {n:"Vaso de leche de almendras", d:"Leche de almendras, ligera y natural.", p:"$12.000"},
      ]},
      {type:'groupTitle', title:'Bebidas frías', subtitle:'Frías y refrescantes'},
      {type:'items', alpha:true, items:[
        {n:"Cold brew FBK", d:"Café frío de extracción lenta, suave e intenso.", p:"$13.500", tags:['rec']},
        {n:"Granizado de café sencillo", d:"Café granizado, frío y refrescante.", p:"$15.000"},
        {n:"Granizado de café con chantilly y salsa de chocolate", d:"Café granizado coronado con chantilly y salsa de chocolate.", p:"$18.000", tags:['fav']},
        {n:"Batido frutos amarillos", d:"Batido refrescante de frutos amarillos de temporada.", p:"$13.500", note:"En leche $16.500", img:"imagenes/bebidas/batido-frutos-amarillos.jpg"},
        {n:"Batido frutos rojos", d:"Batido de frutos rojos frescos y jugosos.", p:"$13.500", note:"En leche $16.500", img:"imagenes/bebidas/batido-frutos-rojos.jpg"},
        {n:"Latte", d:"Espresso suave con leche cremosa, servido frío.", p:"$10.500"},
        {n:"Latte en leche de almendras", d:"Nuestro latte frío preparado con leche de almendras.", p:"$12.500"},
        {n:"Matcha", d:"Té matcha ceremonial, frío, cremoso y vibrante.", p:"$14.000", note:"En leche almendras $16.500"},
        {n:"Kombucha Biota", d:"Kombucha artesanal, fermentada y refrescante.", p:"$12.500"},
        {n:"Soda Hatsu", d:"Soda artesanal, ligera y refrescante.", p:"$7.500"},
        {n:"Soda Maracuyá AMP", d:"Soda de maracuyá fresca, ácida y refrescante.", p:"$12.000"},
        {n:"Té hatsu", d:"Té aromático de origen selecto, servido frío.", p:"$9.000"},
        {n:"Coca-Cola", d:"Gaseosa clásica bien fría.", p:"$6.500"},
        {n:"Coca-Cola Zero", d:"Gaseosa sin azúcar, bien fría.", p:"$7.000"},
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
  {cat:"bebidas", n:"Granizado de café con chantilly y salsa de chocolate", p:"$18.000"},
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
    <button class="tile" onclick="openCategory('${key}')" style="color:var(--gold-deep)">
      ${icon(c.icon)}
      <div class="tile-name" style="color:var(--cacao)">${c.label}</div>
    </button>`;
  }).join('');

  content.innerHTML = `
    <div class="hero">
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

    <div class="section-label">${icon('star')} Favoritos AMP</div>
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
  btn.outerHTML = `<button class="tile" onclick="openCategory('${key}')" style="color:var(--gold-deep)">${icon(c.icon)}<div class="tile-name" style="color:var(--cacao)">${c.label}</div></button>`;
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
        <div class="cat-hero-icon" style="color:var(--gold-deep)">${icon(c.icon)}</div>
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
