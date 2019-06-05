const readline = require('readline');
const expect = require('chai').expect;
function reverse(cad) {
    try {
        let arr = [];
        let j = 1;
        for(letra of cad){
            arr.push(cad[cad.length-j]);
            j++;
        }
        console.log('Palabra ingresada: ', cad);
        console.log('Palabra reverse : ', arr);
        return arr.toString();

    } catch (e) {
        console.log(e);
    }
}


function init() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return rl.question('¿Dame una palabra?\n', reverse);
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

describe("#Reversa de una cadena", () => {
    it("Run reverse", () => {
        expect(reverse('gato')).to.equal('o,t,a,g');
    })
});