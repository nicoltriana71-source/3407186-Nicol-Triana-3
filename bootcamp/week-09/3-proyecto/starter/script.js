// ============================================
// PROYECTO SEMANA 09: Catálogo de Elementos
// ============================================
//
// INSTRUCCIONES:
// 1. Define tu dominio en DOMAIN_NAME y VALUE_LABEL
// 2. Completa el array `items` con datos de tu dominio
// 3. Implementa cada función siguiendo los TODOs
// 4. Ejecuta con: node script.js
//
// Tu catálogo debe tener:
//   - Mínimo 6 objetos con al menos 5 propiedades cada uno
//   - Al menos 1 propiedad numérica, 1 booleana y 1 opcional
// ============================================

// ============================================
// CONFIGURACIÓN DEL DOMINIO
// ============================================

// TODO: Reemplaza con el nombre de tu dominio
// Ejemplos: "Biblioteca", "Farmacia", "Gimnasio", "Restaurante"
const DOMAIN_NAME = "Nicolasse";

// TODO: Reemplaza con el nombre del tipo de elemento
// Ejemplos: "libros", "medicamentos", "equipos", "platillos"
const VALUE_LABEL = "muebles";

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

// TODO: Define al menos 6 objetos con mínimo 5 propiedades cada uno
// Incluye:
//   - id (número)
//   - name (string)
//   - Al menos 1 propiedad numérica (price, pages, duration, capacity, etc.)
//   - Al menos 1 propiedad booleana (available, active, inStock, visible, etc.)
//   - Al menos 1 propiedad opcional (no todos los objetos la tienen)

const items = [
  // TODO: Objeto 1
  {
    id: 1,
    name: "Sofá moderno",
    price: 860000,
    inStock: true,
    material: "cuero",
    color: "gris"
  },
  // TODO: Objeto 2
  {
    id: 2,
    name: "Mesa de comedor",
    price: 740000,
    inStock: true,
    size: "doble",
    hasStorage: true
  },
  // TODO: Objeto 3
   {
    id: 3,
    name: "Cama queen",
    price: 1500000,
    inStock: false,
    material: "metal",
    shape: "rectangular"
  },
  // TODO: Objeto 4
  {
    id: 4,
    name: "Espejo de baño",
    price: 120000,
    inStock: true,
    adjustable: true,
    color: "negro"
  },
  // TODO: Objeto 5
  {
    id: 5,
    name: "Sillon individual",
    price: 320000,
    inStock: true,
    energySaving: true,
    color: "negro"
  },
  // TODO: Objeto 6
  {
    id: 6,
    name: "Estantería de madera",
    price: 400000,
    inStock: false,
    shelves: 5,
    material: "metal",
  },
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

/**
 * Muestra las claves y valores de un objeto usando Object.entries()
 * @param {Object} item - El objeto a inspeccionar
 */
const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name}`);
  // TODO: Usar Object.entries() + forEach para imprimir cada clave y valor
  // Alinear las claves con padEnd para formato de tabla
  Object.entries(item).forEach(([key, value]) => {
    console.log(`${key.padEnd(15)} : ${value}`);
  });
};

/**
 * Calcula estadísticas numéricas del catálogo
 * @param {string} numericKey - El nombre de la propiedad numérica a analizar
 */
const calculateStats = (numericKey) => {
  // TODO: Usar Object.values() sobre el array de valores numéricos
  // Calcular: total, promedio, máximo, mínimo
  // Imprimir los resultados
  const values = items
    .map(item => item[numericKey])
    .filter(value => typeof value === "number");
    if (values.length === 0) {
    console.log(`⚠️ No hay valores numéricos para "${numericKey}"`);
    return;
  }
  const numericValues = Object.values(values);
  const total = numericValues.reduce((acc, val) => acc + val, 0);
  const promedio = total / numericValues.length;
  const max = Math.max(...numericValues);
  const min = Math.min(...numericValues)
  console.log(`\n📊 Estadísticas para: ${numericKey}`);
  console.log(`Total     : ${total}`);
  console.log(`Promedio  : ${promedio.toFixed(2)}`);
  console.log(`Máximo    : ${max}`);
  console.log(`Mínimo    : ${min}`);
};

// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

/**
 * Muestra el detalle de un elemento, incluyendo propiedades opcionales
 * si existen en ese objeto
 * @param {Object} item - El objeto a mostrar
 */
const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  // TODO: Mostrar propiedades básicas siempre
  // TODO: Usar Object.hasOwn() para verificar propiedades opcionales
  //       y mostrarlas solo si existen
  console.log(`ID        : ${item.id}`);
  console.log(`Precio    : ${item.price}`);
  console.log(`Disponible: ${item.inStock}`);

    if (Object.hasOwn(item, "material")) {
    console.log(`Material  : ${item.material}`);
  }

  if (Object.hasOwn(item, "color")) {
    console.log(`Color     : ${item.color}`);
  }

  if (Object.hasOwn(item, "size")) {
    console.log(`Tamaño    : ${item.size}`);
  }

  if (Object.hasOwn(item, "style")) {
    console.log(`Estilo    : ${item.style}`);
  }

  if (Object.hasOwn(item, "shelves")) {
    console.log(`Estantes  : ${item.shelves}`);
  }

  if (Object.hasOwn(item, "wallMount")) {
    console.log(`Montaje   : ${item.wallMount}`);
  }
};

// ============================================
// ITERACIÓN CON for...in
// ============================================

/**
 * Imprime todas las propiedades de un objeto usando for...in
 * @param {Object} item - El objeto a recorrer
 */
const printAllProperties = (item) => {
  console.log(`\n🔍 Propiedades de "${item.name}":`);
  // TODO: Usar for...in + Object.hasOwn() para recorrer propiedades propias
  // Imprimir cada clave y su valor
  for (const key in item) {
     if (Object.hasOwn(item, key)) {
      console.log(`${key.padEnd(15)} : ${item[key]}`);
    }
  }
};

// ============================================
// SPREAD OPERATOR
// ============================================

/**
 * Aplica una actualización inmutable a un elemento
 * @param {Object} item - El objeto original
 * @param {Object} changes - Las propiedades a actualizar
 * @returns {Object} Nuevo objeto con los cambios aplicados
 */
const updateItem = (item, changes) => {
  // TODO: Retornar un nuevo objeto usando spread + changes
  // El objeto original NO debe modificarse
  return { ...item, ...changes };
};

// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

/**
 * Filtra los elementos disponibles/activos
 * @returns {Object[]} Array de elementos disponibles
 */
const getAvailable = () => {
  // TODO: Usar filter() por la propiedad booleana de tu dominio
  return items.filter(item => item.inStock === true);
};

/**
 * Busca un elemento por su id
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findById = (id) => {
  // TODO: Usar find()
  return items.find(item => item.id === id);
};

/**
 * Agrega una propiedad calculada a cada elemento
 * @returns {Object[]} Nuevo array con la propiedad adicional
 */
const addCalculatedProp = () => {
  const taxRate = 0.19;
  // TODO: Usar map() para agregar una propiedad calculada
  // Ejemplos: priceWithTax, totalPages, formattedDuration
  // Recuerda: item => ({ ...item, newProp: calculation })
  return items.map(item => ({
    ...item,
    priceWithTax: item.price + item.price * taxRate
  }));
};

/**
 * Ordena los elementos por valor numérico (sin mutar el original)
 * @param {boolean} ascending - true para ascendente, false para descendente
 * @returns {Object[]} Nuevo array ordenado
 */
const sortByNumericProp = (ascending = true) => {
  // TODO: Usar [...items].sort() con un comparador
  // No mutar el array original
  return [...items].sort((a, b) => {
    return ascending ? a.price - b.price : b.price - a.price;
  });
};

// ============================================
// REPORTE FINAL
// ============================================

/**
 * Imprime el reporte completo del catálogo
 */
const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  // TODO: Mostrar cantidad total de elementos
  console.log(`Total de elementos: ${items.length}`);
  // TODO: Mostrar cuántos están disponibles/activos
  const disponibles = getAvailable();
  console.log(`Disponibles       : ${disponibles.length}`);
  // TODO: Mostrar estadísticas de la propiedad numérica principal
  calculateStats("price");
  // TODO: Listar todos los elementos ordenados (usar sortByNumericProp)
  const sortedItems = sortByNumericProp(true);
  console.log("\n📝 Lista de elementos ordenados por precio:");
  sortedItems.forEach(item => {
    console.log(`- ${item.name} (Precio: ${item.price})`);
  });
  // TODO: Mostrar el elemento con el valor numérico más alto y más bajo
  const maxPriceItem = sortedItems[sortedItems.length - 1];
  const minPriceItem = sortedItems[0];
  console.log(`\n💰 Elemento más caro : ${maxPriceItem.name} - ${maxPriceItem.price}`);
  console.log(`💸 Elemento más barato: ${minPriceItem.name} - ${minPriceItem.price}`);

  console.log("=".repeat(50));
};

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`   Total de ${VALUE_LABEL}: ${items.length}`);

// TODO: Llamar a las funciones implementadas en este orden:
// 1. inspectItem(items[0])
inspectItem(items[0]);
// 2. calculateStats("nombreDeTuPropiedadNumerica")
calculateStats("price");
// 3. items.forEach(showWithOptionals)
items.forEach(showWithOptionals)
// 4. printAllProperties(items[0])
printAllProperties(items[0]);
// 5. Demostrar updateItem con un ejemplo
const sofaActualizado = updateItem(items[0], { price: 1300000, color: "azul" });
console.log("\n🛠️ Actualización inmutable:");
console.log("Original:", items[0]);
console.log("Actualizado:", sofaActualizado);
// 6. Mostrar elementos disponibles con getAvailable()
const disponibles = getAvailable();
console.log("\n✅ Elementos disponibles:");
disponibles.forEach(item => console.log(`- ${item.name}`));
// 7. Demostrar findById con un id válido y uno inexistente
console.log("\n🔎 Buscar por ID:");
console.log("ID 1:", findById(1));
console.log("ID 999:", findById(999));
// 8. Mostrar addCalculatedProp()
const itemsConPropCalculada = addCalculatedProp();
console.log("\n💡 Propiedad calculada (priceWithTax):");
itemsConPropCalculada.forEach(item => 
  console.log(`${item.name} - Precio con IVA: ${item.priceWithTax}`)
);
// 9. Mostrar sortByNumericProp()
console.log("\n📊 Elementos ordenados por precio (ascendente):");
const ordenados = sortByNumericProp(true);
ordenados.forEach(item => console.log(`${item.name} - ${item.price}`));
// 10. buildReport()
buildReport();
