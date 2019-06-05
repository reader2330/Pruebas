const readline = require('readline');
const expect = require('chai').expect;


function calculate(n){
    let value = 0;
    let i = parseInt(n);
    while (i > 0) {
        value += i;
        i--;
    }
    console.log("El numero de cuadrados sombreados: ", value);
    return value;
}

function init() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('¿Dame una n?\n', (n) => {
        calculate(n);
        console.log("El numero de cuadrados sombreados: ", value);
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
        expect(calculate(4)).to.equal(10);
    })
});