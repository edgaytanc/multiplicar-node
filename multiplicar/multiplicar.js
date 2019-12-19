//requireds
const fs = require('fs');
const color = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================================================='.blue);
    console.log(`       Tabla del ${ base } con limite ${limite}`.yellow);
    console.log('================================================='.blue);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} X ${i} = ${base*i}`.green);
    }

}

let crearArchivo = (base, limite = 10) => {


    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';


        for (let i = 1; i <= limite; i++) {
            data += `${base} X ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.green);


        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}