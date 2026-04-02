// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// ============================================
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME con el nombre de tu dominio asignado
// 2. Reemplaza VALUE_LABEL con la etiqueta de tu unidad de valor
//    Ejemplos: "unidades", "libros", "medicamentos", "miembros"
// 3. Define tu array items con objetos de tu dominio
// 4. Completa cada TODO con la implementación contextualizada
// ============================================

// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "Nicolasse"; // TODO: Cambiar por tu dominio
const VALUE_LABEL = "precio";     // TODO: Cambiar por unidad de tu dominio

// ============================================
// 1. ARRAY INICIAL — Define tu inventario
// ============================================

// TODO: Definir el array con mínimo 5 objetos de tu dominio.
// Cada objeto debe tener:
//   - id: número único
//   - name: nombre del elemento
//   - [propiedad numérica]: precio, cantidad, puntuación, etc.
//   - [propiedad booleana]: active, available, inStock, etc.
//   - [otras 2+ propiedades relevantes a tu dominio]
//
// Ejemplos por dominio:
// Biblioteca:  { id, name, author, year, available: true }
// Farmacia:    { id, name, price, stock, requiresPrescription: false }
// Gimnasio:    { id, name, memberSince, plan, active: true }
// Restaurante: { id, name, price, category, available: true }

const items = [
  {
    id: 1,
    name: "Sofa moderno",
    category: "sala",
    price: 860000,
    quantity: 1,
    inStock: true,
    material: "cuero"
  },
  {
    id: 2,
    name: "Mesa de comedor",
    category: "comedor",
    price: 740000,
    quantity: 1,
    inStock: true,
    material: "madera"
  },
  {
    id: 3,
    name: "Cama queen",
    category: "dormitorio",
    price: 1500000,
    quantity: 1,
    inStock: true,
    material: "metal"
  },
  {
    id: 4,
    name: "Espejo de baño",
    category: "baño",
    price: 120000,
    quantity: 1,
    inStock: false,
    material: "vidrio"
  },
  {
    id: 5,
    name: "Sillon individual",
    category: "sala",
    price: 320000,
    quantity: 1,
    inStock: true,
    material: "tela"
  }
]; 

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

/**
 * Agrega un nuevo elemento al inventario
 * @param {Object} newItem - Elemento a agregar
 */
const addItem = (newItem) => {
  items.push(newItem);
  // TODO: Usar push para agregar newItem al array items
  console.log(`Agregado: ${newItem.name}`);
};

/**
 * Elimina el último elemento del inventario
 * @returns {Object} El elemento eliminado
 */
const removeLastItem = () => {
  const removedItem = items.pop();
  if (removedItem) {
    console.log(`Eliminado: ${removedItem.name}`);
  } else {
    console.log("⚠️ No hay elementos para eliminar");
  }

  return removedItem;
  // TODO: Usar pop para eliminar y retornar el último elemento
  // Guardar el resultado en una variable y mostrar el nombre
};

/**
 * Agrega un elemento prioritario al inicio del inventario
 * @param {Object} priorityItem - Elemento a agregar con prioridad
 */
const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  // TODO: Usar unshift para agregar priorityItem al inicio de items
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

/**
 * Elimina un elemento por su posición (índice)
 * @param {number} index - Posición del elemento a eliminar
 */
const removeByIndex = (index) => {
  const removedItems = items.splice(index, 1);
  if (removedItems.length > 0) {
    console.log(`Eliminado: ${removedItems[0].name}`);
  } else {
    console.log("⚠️ Índice inválido");
  }
  // TODO: Usar splice para eliminar 1 elemento en la posición index
  // Mostrar el nombre del elemento eliminado
};

/**
 * Obtiene todos los elementos activos/disponibles
 * @returns {Array} Array de elementos activos
 */
const getActiveItems = () => {
  // TODO: Usar filter para retornar solo los elementos con la propiedad
  // booleana en true (ajusta el nombre de la propiedad a tu dominio)
  return items.filter(item => item.inStock === true);
};

/**
 * Busca un elemento por su nombre
 * @param {string} name - Nombre a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findByName = (name) => {
  // TODO: Usar find para retornar el primer elemento cuyo name coincida
  return items.find(item => item.name === name);
};

/**
 * Formatea un elemento para mostrar en el reporte
 * @param {Object} item - Elemento a formatear
 * @returns {string} Texto formateado
 */
const formatItem = (item) => {
  // TODO: Retornar un string con la información relevante del elemento
  // Usar template literals y mostrar las propiedades más importantes
  // Ejemplo (adaptar al dominio):
  // return `[${item.id}] ${item.name} — ...propiedades...`;
  return `[${item.id}] ${item.name} | ${item.category} | $${item.price} | Stock: ${item.inStock}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
// TODO: Usar forEach para mostrar cada elemento con formatItem
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");
addItem({
  id: 6,
  name: "Mesa de noche",
  category: "dormitorio",
  price: 200000,
  quantity: 1,
  inStock: true,
  material: "madera"
});

addPriorityItem({
  id: 0,
  name: "Sofá premium",
  category: "sala",
  price: 2500000,
  quantity: 1,
  inStock: true,
  material: "cuero"
});
removeByIndex(2);
removeLastItem();

// TODO: Crear un nuevo elemento de tu dominio y usar addItem para agregarlo
// Ejemplo: addItem({ id: 6, name: "Nuevo Elemento", ..., active: true });

// TODO: Usar addPriorityItem para agregar un elemento prioritario
// Ejemplo: addPriorityItem({ id: 0, name: "Elemento Prioritario", ..., active: true });

// TODO: Usar removeByIndex para eliminar un elemento del medio
// Ejemplo: removeByIndex(2);

// TODO: Usar removeLastItem para quitar el último elemento

console.log("\n--- Inventario después de mutaciones ---\n");
// TODO: Mostrar el inventario actualizado con forEach + formatItem
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");
const snapshot = [...items, {
  id: 999,
  name: "Producto extra",
  category: "decoración",
  price: 100000,
  quantity: 1,
  inStock: true,
  material: "plástico"
}];

console.log("Snapshot:", snapshot.length);
const encontrado = findByName("Sofa moderno");
console.log("🔍 Encontrado:", encontrado);

const activos = getActiveItems();
console.log(`✅ Activos: ${activos.length}`);

// TODO: Usar find para buscar un elemento específico por nombre
// Mostrar el resultado

// TODO: Usar getActiveItems() y mostrar cuántos están activos

// TODO: Crear un snapshot inmutable con spread [...items]
// y agregar un elemento extra sin modificar items
console.log("\n--- Transformación con map ---\n");
const preciosConDescuento = items.map(item => ({
  name: item.name,
  precioFinal: Math.round(item.price * 0.9)
}));

console.log(preciosConDescuento);
const nombres = items.map(item => item.name);
console.log("📝 Nombres:", nombres);

// TODO: Usar map para crear un array de solo los nombres de los elementos
// Mostrar los nombres

// TODO: Usar map para crear un array con alguna propiedad numérica transformada
// (ej: precios con descuento, cantidades en otra unidad, etc.)

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);
// TODO: mostrar total de activos vs total general
const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);
