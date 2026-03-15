// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio
// Ejemplos con dominios no asignables:
//   Planetario:   TICKET_PRICE = 12_000, MAX_CAPACITY = 45
//   Acuario:      DAILY_FEEDING_KG = 150, ENTRY_PRICE = 35_000
//   Museo:        ADULT_TICKET = 20_000, GUIDED_TOUR = 15_000
//   Zoológico:    FOOD_COST_PER_DAY = 500_000, MAX_VISITORS = 800
//   Observatorio: SESSION_DURATION = 90, TICKET_PRICE = 18_000
// TODO: Reemplazar con tus constantes

 const SOFA_PRICE = 900000; 
const MAX_SOFAS = 50
const BED_PRICE = 750000; 
const MAX_BEDS = 40
const TABLE_PRICE = 300000; 
const MAX_TABLES = 60
const CHAIR_PRICE = 150000; 
const MAX_CHAIRS = 30


// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Usa: +, -, *, /, %, **
// Etiqueta cada resultado con console.log()

const sofasSold = 3;
const bedsSold = 2;
const tablesSold = 1;
const chairsSold = 5;

const sofaRevenue = SOFA_PRICE * sofasSold;
console.log("Ingresos por sofás:", sofaRevenue);

const bedRevenue = BED_PRICE * bedsSold;
console.log("Ingresos por camas:", bedRevenue);

const tableRevenue = TABLE_PRICE * tablesSold;
console.log("Ingresos por mesas:", tableRevenue);

const chairRevenue = CHAIR_PRICE * chairsSold;
console.log("Ingresos por sillas:", chairRevenue);

const totalRevenue = sofaRevenue + bedRevenue + tableRevenue + chairRevenue;
console.log("Ingresos totales muebles:", totalRevenue);

const discount = 500000;
const finalPrice = totalRevenue - discount;
console.log("Total con descuento:", finalPrice);

const totalItems = sofasSold + bedsSold + tablesSold + chairsSold;
const averagePrice = totalRevenue / totalItems;
console.log("Precio promedio por producto:", averagePrice);

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

let totalVentas = 0;

console.log("Total inicia: ", totalVentas);

totalVentas += SOFA_PRICE;
console.log("Despues de vender un sofa: ", totalVentas);

totalVentas += BED_PRICE;
console.log("Después de vender una cama:", totalVentas);

totalVentas += TABLE_PRICE;
console.log("Después de vender una mesa:", totalVentas);

totalVentas += CHAIR_PRICE;
console.log("Después de vender una silla:", totalVentas);

totalVentas -= 50000;
console.log("Después de aplicar descuento:", totalVentas);

totalVentas *= 1.19;
console.log("Después de aplicar IVA:", totalVentas);

totalVentas /= 2;
console.log("Promedio por cliente:", totalVentas);

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

const soldThreeSofas = sofasSold === 3;
console.log("¿Se vendieron exactamente 3 sofás?", soldThreeSofas);

const manyChairs = chairsSold > 10;
console.log("¿Se vendieron más de 10 sillas?", manyChairs);

const reachedMaxChairs = chairsSold === MAX_CHAIRS;
console.log("¿Se alcanzó el máximo de sillas?", reachedMaxChairs);

const chairsAvailable = chairsSold < MAX_CHAIRS;
console.log("¿Aún quedan sillas disponibles?", chairsAvailable);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

const isMember = true;

const highSales = sofasSold > 2 && chairsSold > 2;
console.log("¿Se vendieron muchos sofás y sillas?", highSales);

const popularProduct = sofasSold > 5 || chairsSold > 5;
console.log("¿Algún producto tuvo muchas ventas?", popularProduct);

const qualifiesDiscount = isMember && totalVentas > 1000000;
console.log("¿Aplica descuento especial?", qualifiesDiscount);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

console.log("Ingresos por sofás:", sofaRevenue);
console.log("Ingresos por camas:", bedRevenue);
console.log("Ingresos por mesas:", tableRevenue);
console.log("Ingresos por sillas:", chairRevenue);

console.log("Total de ingresos:", totalRevenue);
console.log("Total con descuento:", finalPrice);
console.log("Promedio por producto:", averagePrice);

console.log("");