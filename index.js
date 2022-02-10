const express = require('express')
const app = express()

const port = 3000;

app.listen(port, () => {
    console.log(`Node Test App listening at http://localhost:${port}`)
});

app.get('/health/startup', function(req, res) {
    res.json({"startup": "App Startup Complete"});
})

app.get('/health/ready', function(req, res) {
    res.json({"ready": "App Ready for Traffic"});
})

app.get('/health/status', function(req, res) {
    res.json({"status": "Healthy"});
})