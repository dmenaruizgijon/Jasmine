describe("Testeo de la función calcularCirculo()", function () {

    it("Debería generar una excepción si no le pasamos el argumento radio", function () {
        expect(function () { calcularCirculo(); }).toThrowError();
    });

    it("Debería generar una excepción si le pasamos un argumento que no sea un número", function () {
        expect(function () { calcularCirculo("hola"); }).toThrowError();
        expect(function () { calcularCirculo(true); }).toThrowError();
        expect(function () { calcularCirculo([3]); }).toThrowError();
        expect(function () { calcularCirculo({}); }).toThrowError();
    });

    it("Debería generar una excepción si le pasamos un argumento que sea un número negativo", function () {
        expect(function () { calcularCirculo(-5); }).toThrowError();
    });

    it("Debería devolver un objeto", function () {
        expect(calcularCirculo(1)).toBeInstanceOf(Object);
    });

    it("El objeto devuelto debería contener la propiedad perimetro", function () {
        expect(calcularCirculo(1).perimetro).toBeDefined();
    });

    it("El objeto devuelto debería contener la propiedad area", function () {
        expect(calcularCirculo(1).area).toBeDefined();
    });

    const datos = [
        { radio: 1.4, valorEsperado: { perimetro: 8.80, area: 6.16 } },
        { radio: 2.7, valorEsperado: { perimetro: 16.96, area: 22.90 } },
        { radio: 5.37, valorEsperado: { perimetro: 33.74, area: 90.59 } },
        { radio: 10.412, valorEsperado: { perimetro: 65.42, area: 340.58 } },
        { radio: 12.2334, valorEsperado: { perimetro: 76.86, area: 470.16 } },
    ];

    describe("Testeo de pruebas unitarias del perímetro", function () {
        datos.forEach(function (dato) {
            it(`Para un radio de ${dato.radio} perimetro debería ser ${dato.valorEsperado.perimetro}`, function () {
                expect(calcularCirculo(dato.radio).perimetro).toBeCloseTo(dato.valorEsperado.perimetro, 2);
            });
        });
    });

    describe("Testeo de pruebas unitarias del área", function () {
        datos.forEach(function (dato) {
            it(`Para un radio de ${dato.radio} area debería ser ${dato.valorEsperado.area}`, function () {
                expect(calcularCirculo(dato.radio).area).toBeCloseTo(dato.valorEsperado.area, 2);
            });
        });
    });
});