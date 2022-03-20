import app from './app'

app.listen(app.get('port'), () => {
    console.log(`listening on port in http://localhost:${app.get('port')}`);
});