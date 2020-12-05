const express = require('express')
const path = require('path');
const fs = require('fs');
const https = require('https');
const helmet = require('helmet');

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/step9productions.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/step9productions.com/fullchain.pem'),
};

const app = express();

app.use(helmet());

app.use((req, res) => {
    res.writeHead(200);
    res.end('This is Step 9 Productions. The website is undergoing maintenance and will be up again shortly.')
});

app.listen(8000);

https.createServer(options, app).listen(8080, () => {
    console.log('Server listening on port 443');
});