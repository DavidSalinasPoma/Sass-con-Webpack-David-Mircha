// Configuración de webpack

// Llamadas de modulos en NODE 
// Inyección de archivo js a html con plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Extrae el archivo css del bundle
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    // Entradas y salidas
    entry: {

    },
    output: {

    },

    // Modulos
    module: {
        rules: [  // Arreglo de reglas
            {
                test: /\.js$/i,               // Es una expreción regular
                exclude: /node_modules/,      // Ignora carpetas que transpila 
                use: {
                    loader: "babel-loader",   // Loaders especificos para diferentes tareas
                },
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
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ],
            },
            // Nueva regla para que soporte varios archivos
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                // "image-webpack-loader"  Activar solamente para pasar a Produccion..
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
        new HtmlWebpackPlugin({
            template: './src/index.html',     // Archivo de entrada
            filename: './index.html'          // nombre del archivo de la salida
        }),

        // Nuevo Plugin
        // new MiniCssExtractPlugin({
        //     filename: 'bundle.css'
        // })
        new MiniCssExtractPlugin(),
    ],

    // Configurar puerto del servidor
    devServer: {
        port: 5000
    },

}