const express         = require('express');
const app             = express();

const { port, dbURI } = require('./config/environment');

app.use(express.static(`${__dirname}/public`));

app.use('/api', routes);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Express is listening on port ${port}`));
