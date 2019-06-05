const readline = require('readline');
const expect = require('chai').expect;
function calculatePlus(value , n) {
    if (n === 0) {
        return value
    }else {
        return calculatePlus(value+n, n-1);
    }
}

function init() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('¿Dame una n?\n', (n) => {
        let value = calculatePlus(0, parseInt(n));
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
        expect(calculatePlus(0, 4)).to.equal(10);
    })
});