// Configuración de webpack

// Llamadas de modulos en NODE 
// Inyección de archivo js a html con plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Extrae el archivo css del bundle
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    // Entradas y salidas
    entry: {
        js: "./src/index.js",
        react: "./src/index_react.js",
        ts: "./src/index_ts.js",
    },
    output: {
        filename: "[name].[chunkhash].js"
    },

    // Modulos
    module: {
        rules: [  // Arreglo de reglas
            {
                test: /\.jsx?$/i,               // Es una expreción regular
                exclude: /node_modules/,      // Ignora carpetas que transpila 
                use: {
                    loader: "babel-loader",   // Loaders especificos para diferentes tareas
                },
            },
            {  // Nueva regla   para typescript
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
            { // Nueva regla   Inyección de archivo js a html con plugin
                test: /\.html$/i,
                use: [  // Extrae mas de un loader
                    {
                        loader: "html-loader",        // Cada loader tiene diferentes caracteristicas
                        options: { minimize: true },  // Entrega minificado el html
                    },
                ],
            },
            // { // Nueva regla Plugin Css
            //     test: /\.css$/i,
            //     use: [MiniCssExtractPlugin.loader, "css-loader"],
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "./"   // Para las rutas de imagenes de el scss
                        }
                    },
                    // { loader: 'css-loader' },
                    // { loader: 'sass-loader' }
                    "css-loader",
                    "sass-loader",
                ],
            },
            // Nueva regla para que soporte varios archivos
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                // ,"image-webpack-loader"  Activar solamente para pasar a Produccion..
                use: ["file-loader?name=assets/[name].[ext]"],
            },
            // Nueva regla para trabajar con arreglos tipograficos
            {
                test: /\.(woff)$/i,
                // test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: ["file-loader?name=assets/[name].[ext]"],
            },
        ]
    },

    // Plugin para inyección de archivo js a html  

    plugins: [                                 // Nuevo plugin
        // Paraun solo punto de entrada
        /*   new HtmlWebpackPlugin({
             //  template: './src/index.html',     // Archivo de entrada
               filename: './index.html'          // nombre del archivo de la salida
           }),*/

        // Nuevo Plugin
        // new MiniCssExtractPlugin({
        //     filename: 'bundle.css'
        // })

        // Salidas para js, react  y ts
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            chunks: ["js"],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./react.html",
            chunks: ["react"],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./ts.html",
            chunks: ["ts"],
            hash: true,
        }),

        new MiniCssExtractPlugin(),
    ],

    // Configurar puerto del servidor
    devServer: {
        port: 5000
    },

}