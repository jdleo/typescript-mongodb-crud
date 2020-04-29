// get app
import app from './app';

// port to listen on
const PORT: number = 3000;

// listen on port
app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
