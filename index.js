import express from 'express';
import http from 'node:http';
import cors from 'cors';
import path from "path";
import { hostname } from "node:os"

const server = http.createServer();
const app = express(server);
const __dirname = process.cwd();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/index.html'));
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/index.html'));
});

app.get('/basketball', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/basketball.html'));
});

app.get('/football', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/football.html'));
});

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
})

server.listen({ port: PORT, })

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
    console.log("SIGTERM signal received: closing HTTP server");
    server.close();
    bareServer.close();
    process.exit(0);
}
