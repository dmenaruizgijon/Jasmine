describe("Testeo de función lanzarDado()", function () {

    const NUM_LANZAMIENTOS = 1000;
    const resultados = [];
    for (let i = 0; i < NUM_LANZAMIENTOS; i++) {
        resultados.push(lanzarDado());
    }

    it("Tras 1000 lanzamientos siempre debería devolver un número", function () {
        resultados.forEach(function (resultado) {
            expect(typeof resultado).toBe("number");
        });
    });

    it("Tras 1000 lanzamientos siempre debería devolver un número mayor o igual que 1", function () {
        resultados.forEach(function (resultado) {
            expect(resultado).toBeGreaterThanOrEqual(1);
        });
    });

    it("Tras 1000 lanzamientos siempre debería devolver un número menor o igual que 6", function () {
        resultados.forEach(function (resultado) {
            expect(resultado).toBeLessThanOrEqual(6);
        });
    });

    describe("Tras 1000 lanzamientos debería haber devuelto todos los nº del 1 al 6", function () {
        for (let cara = 1; cara <= 6; cara++) {
            const veces = resultados.filter(function (r) { return r === cara; }).length;
            it(`Nº veces aparece cara del dado ${cara}=> ${veces} debería ser mayor que 0`, function () {
                expect(veces).toBeGreaterThan(0);
            });
        }
    });

    // BONUS
    describe("BONUS: Tras 100000 lanzamientos la probabilidad de cada cara debería ser 1/6 con un margen del ±10%", function () {
        const TOTAL = 100000;
        const probabilidadEsperada = 1 / 6;
        const minimo = probabilidadEsperada * 0.9;
        const maximo = probabilidadEsperada * 1.1;

        const contador = [0, 0, 0, 0, 0, 0, 0]; 
        for (let i = 0; i < TOTAL; i++) {
            contador[lanzarDado()]++;
        }

        for (let cara = 1; cara <= 6; cara++) {
            const probabilidad = contador[cara] / TOTAL;
            it(`La probabilidad de la cara ${cara} (${probabilidad.toFixed(4)}) debería estar entre ${minimo.toFixed(4)} y ${maximo.toFixed(4)}`, function () {
                expect(probabilidad).toBeGreaterThanOrEqual(minimo);
                expect(probabilidad).toBeLessThanOrEqual(maximo);
            });
        }
    });
});