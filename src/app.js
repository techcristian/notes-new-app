import express from "express";
import exphbs from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from 'morgan';

const app = express();



/* el metodo (path.join) hace a la aplicacion mas plataformica
 porque permite concatenar directorios de __dirname tanto en linux(con slash) y en windows con (contrabarra)*/
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "/views"));
app.engine('hbs', exphbs({
    layoutsDir: path.join(app.get('views'), "layouts"),
    partialsDir: path.join(app.get('views'), "porciones"),
    //registerPartialsDir:(__dirname + "/views/partials", 
    extname: 'hbs',
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));

app.set('view engine', 'hbs');

//middlewares (funciones que se ejecutan antes de que se llegue a las rutas 'urls')
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));




app.use(indexRoutes);
app.use(express.static(path.join(__dirname, 'public')));


export default app;