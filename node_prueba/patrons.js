const readline = require('readline');
const expect = require('chai').expect;
function calculateSquares(n) {
    return n*n;
}

function init() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
     rl.question('¿Dame una n?\n', (n) => {
         let value = calculateSquares(n);
        console.log("El numero de cuadrados sombreados: ", value)
         process.exit(0);
    });

}
init();


before(done => {
    console.log('\n\n-----------------------\n--\n-- START TEST\n--\n-------------------------\n');
    done();
});
after(done => {
    console.log('\n\n-----------------------\n--\n-- END TEST\n--\n-------------------------\n');
    done();
});

describe("#Total de cuadrados sombreados", () => {
    it("Run calculate", () => {
        expect(calculateSquares(4)).to.equal(16);
    })
});