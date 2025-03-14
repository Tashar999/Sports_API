import express from 'express';
import http from 'http';
import path from 'path';
import { hostname } from 'os';
import { BalldontlieAPI } from "@balldontlie/sdk";
const api = new BalldontlieAPI({ apiKey: "5325159e-4a06-4e5e-ac9d-6f95aaa5a111"});

const app = express();
const server = http.createServer(app);
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/basketball', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'basketball.html'));
});

app.get('/football', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'football.html'));
});

app.get('/api/basketball', async (req, res) => {
    try {
        const teamsData = await getTeams();
        const playerData = await getPlayer('LeBron James')
        res.json({
            teams: teamsData,
            player: playerData});
    }  catch (error) {
        res.status(500).json({ error: error.message });
    }
}); 
    
async function getTeams() {
        try {
            const teams = await api.nba.getTeams();
            return teams.data;}
            catch (error) {
                console.error(error);
                throw new Error('Failed to fetch teams')
            }
    }
async function getPlayer(player) {
        try{
            const response = await api.nba.getPlayers({ search: player});
            return response.data;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch player data')
        }
    }


const PORT = 3000;
server.on('listening', () => {
    const address = server.address();

    console.log("Listening on:");
    console.log(`\thttp://localhost:${address.port}`);
    console.log(`\thttp://${hostname()}:${address.port}`);
    console.log(
        `\thttp://${address.family === "IPv6" ? `[${address.address}]` : address.address
        }:${address.port}`
    );
});

server.listen(PORT);

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
    console.log("SIGTERM signal received: closing HTTP server");
    server.close(() => {
        console.log("HTTP server closed");
        process.exit(0);
    });
}
