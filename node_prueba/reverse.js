const readline = require('readline');
const expect = require('chai').expect;
function reverse(cad) {
    try {
        let arr = [];
        for(letra of cad){
            arr.push(letra);
        }
        let arr2 = [];
        for (let i = arr.length-1; i > -1; i--){
            arr2.push(arr[i]);
        }
        console.log('Palabra ingresada: ', arr);
        console.log('Palabra reverse : ', arr2);
        return arr2.toString()

    } catch (e) {
        console.log(e);
    }
}


function init() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('¿Dame una palabra?\n', reverse);



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
        expect(reverse('perro')).to.equal('o,r,r,e,p');
    })
});