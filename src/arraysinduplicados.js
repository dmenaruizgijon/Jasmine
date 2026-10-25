function arraySinDuplicados(array) {

    if (array === undefined) throw new Error("Falta el argumento de entrada");
    if (!Array.isArray(array)) throw new Error("El argumento debe ser un array");
    if (array.some(elemento => typeof elemento !== "number")) throw new Error("El array solo puede contener números");
 

    return [...new Set(array)].sort((a, b) => a - b);
}