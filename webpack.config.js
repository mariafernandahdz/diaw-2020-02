const path = require('path')
const EslintPlugin = require('eslint-webpack-plugin')

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
    },
    module:{
        rules: [
            {
                /*
                LE INDICO QUE TODOS LOS ARCHIVOS JAVASCRIPT LOS VAA OPERAR
                CON BABEL
                // SIGNIFICAN EXPRESIONES REGULARES
                \ SE AGREGAR ESTA SECUENCIA DE ESCAPE INDICANDO QUE TODO LO
                QUE TERMINE CON PUNTO JS LO OPERARA EN BABEL
                $ SIGNIFICA QUE ESTARÁ AL FINAL DE LA CADENA */
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                //SE EJECUTAN EN EL ORDEN DEL ULTIMO AL PRIMERO
                //css-loader LEE TODOS LOS ARCHIVOS CSS Y LOS REGRESA EN UN UNICO STRING
                //style-loader INYECTA AL HTML TODOS LOS ESTILOS
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [new EslintPlugin()]
}