describe("Testeo de la función arraySinDuplicados()", function () {

    it("Debería lanzar una excepción al invocarse sin argumento", function () {
        expect(function () { arraySinDuplicados(); }).toThrowError();
    });

    it("Debería lanzar una excepción si le pasamos un argumento que no sea un array", function () {
        expect(function () { arraySinDuplicados(5); }).toThrowError();
        expect(function () { arraySinDuplicados("hola"); }).toThrowError();
        expect(function () { arraySinDuplicados({}); }).toThrowError();
        expect(function () { arraySinDuplicados(true); }).toThrowError();
    });

    it("Debería lanzar una excepción si el array contiene elementos que no sean números", function () {
        expect(function () { arraySinDuplicados([1, 2, "3"]); }).toThrowError();
        expect(function () { arraySinDuplicados([1, true, 3]); }).toThrowError();
        expect(function () { arraySinDuplicados([1, null, 3]); }).toThrowError();
        expect(function () { arraySinDuplicados([1, [2], 3]); }).toThrowError();
    });

    describe("Pruebas unitarias de caja negra", function () {

        const datos = [
            { arrayEntrada: [2, 3, 2, 3, -1], valorEsperado: [-1, 2, 3] },
            { arrayEntrada: [5, 5, -2, 1, -3, 1, -3], valorEsperado: [-3, -2, 1, 5] },
            { arrayEntrada: [0, 12, -2, 0, -2, 1, 1], valorEsperado: [-2, 0, 1, 12] },
        ];

        datos.forEach(function (dato) {
            it(`Para el array [${dato.arrayEntrada}] el valor devuelto esperado es [${dato.valorEsperado}]`, function () {
                expect(arraySinDuplicados(dato.arrayEntrada)).toEqual(dato.valorEsperado);
            });
        });
    });
});