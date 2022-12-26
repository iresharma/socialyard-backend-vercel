import 'dotenv/config';
import bodyparser from 'body-parser';
import express from 'express';
import cors from 'cors';
import initRouter from '@/routes/router';
import connectDB from '@/database/database';
var morgan = require('morgan')

const app = express();
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
// Middleware
app.use(cors());
app.use(bodyparser.json({limit:'50mb'}));
app.use(bodyparser.urlencoded({ extended: true, limit:'50mb' }));
app.set('port', process.env.PORT || 3000);

connectDB();
initRouter(app);

app.listen(app.get('port'), () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env'),
  );
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;