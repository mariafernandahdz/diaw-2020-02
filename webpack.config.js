const path = require('path')

module.exports = {
    // 1. ARCHIVO DE ENTRADA INDEX
    entry: path.join(__dirname, 'src/index.js'),
    // 2. ARCHIVO DE SALIDA 
    output: {
        path: path.join(__dirname,'dist' ),
        filename: 'bundle.js'
    },
    //3. FOLDER DONDE SERVIRA
    devServer:{
        contentBase: path.join(__dirname, 'dist')
    }
}