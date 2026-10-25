describe("Testeo de la función verCalificacion(nota)", function () {

    it("Debería lanzar una excepción si falta el argumento", function () {
        expect(function () { verCalificacion(); }).toThrowError();
    });

    it("Debería lanzar una excepción si el argumento de entrada no es un número", function () {
        expect(function () { verCalificacion("hola"); }).toThrowError();
        expect(function () { verCalificacion(true); }).toThrowError();
        expect(function () { verCalificacion([5]); }).toThrowError();
        expect(function () { verCalificacion({}); }).toThrowError();
    });

    it("Debería devolver un string para cualquier valor entre -1.0 y 11.0 con saltos de 0.5", function () {
        for (let nota = -1; nota <= 11; nota += 0.5) {
            expect(typeof verCalificacion(nota)).toBe("string");
        }
    });

    describe("Testeo unitario de caja negra", function () {

        const datos = [
            { nota: -1.5, valorEsperado: "VALOR INCORRECTO" },
            { nota: 0, valorEsperado: "INSUFICIENTE" },
            { nota: 1, valorEsperado: "INSUFICIENTE" },
            { nota: 4.5, valorEsperado: "INSUFICIENTE" },
            { nota: 4.9, valorEsperado: "INSUFICIENTE" },
            { nota: 5, valorEsperado: "SUFICIENTE" },
            { nota: 5.1, valorEsperado: "SUFICIENTE" },
            { nota: 5.9, valorEsperado: "SUFICIENTE" },
            { nota: 6, valorEsperado: "BIEN" },
            { nota: 6.9, valorEsperado: "BIEN" },
            { nota: 7, valorEsperado: "NOTABLE" },
            { nota: 7.9, valorEsperado: "NOTABLE" },
            { nota: 8, valorEsperado: "NOTABLE" },
            { nota: 8.9, valorEsperado: "NOTABLE" },
            { nota: 9, valorEsperado: "SOBRESALIENTE" },
            { nota: 9.9, valorEsperado: "SOBRESALIENTE" },
            { nota: 10, valorEsperado: "SOBRESALIENTE" },
            { nota: 11, valorEsperado: "VALOR INCORRECTO" }
        ];

        datos.forEach(function (dato) {
            it(`Para una nota de ${dato.nota} la calificación esperada es "${dato.valorEsperado}"`, function () {
                expect(verCalificacion(dato.nota)).toEqual(dato.valorEsperado);
            });
        });
    });
});