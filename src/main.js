const express = require("express");
const si = require('systeminformation');
const Logger = require("./logger");

const app = express();
const port = 8080;
const logger = new Logger();

app.use(express.static('pages'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/pages' });
});

app.get('/cpu', async (req, res) => {
    try {
        const cpuInfo = await si.cpu();
        res.status(200).json(cpuInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/memory', async (req, res) => {
    try {
        const memoryInfo = await si.mem();
        res.status(200).json(memoryInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/storage', async (req, res) => {
    try {
        const storageInfo = await si.fsSize();
        res.status(200).json(storageInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/users', async (req, res) => {
    try {
        const usersInfo = await si.users();
        res.status(200).json(usersInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/os', async (req, res) => {
    try {
        const osInfo = await si.osInfo();
        res.status(200).json(osInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/network', async (req, res) => {
    try {
        const networkInfo = await si.networkInterfaces();
        res.status(200).json(networkInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/graphics', async (req, res) => {
    try {
        const graphicsInfo = await si.graphics();
        res.status(200).json(graphicsInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/battery', async (req, res) => {
    try {
        const batteryInfo = await si.battery();
        res.status(200).json(batteryInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    logger.ok("Started server on port: " + port);
});
