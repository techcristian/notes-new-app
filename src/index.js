import app from "./app";
import './database'

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
});