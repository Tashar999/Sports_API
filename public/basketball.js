import { BalldontlieAPI } from "@balldontlie/sdk";
const api = new BalldontlieAPI({ apiKey: "5325159e-4a06-4e5e-ac9d-6f95aaa5a111"});

async function getTeams() {
    try {
        const teams = await api.teams.all();
        console.log(teams)}
        catch (error) {
            console.error(error)
        }
}
const getPlayer = async (player) => {
    try{
        const players = await api.players.all({ search: players });
        return players;
    } catch (error) {
        console.error(error);
        return null;
    }
};

document.getElementById("BBPvalue");
getPlayer("BBPvalue").then(playerData => {
    console.log(playerData);
});

getTeams();

async function fetchTeam() {
    try {
        const team = await api.teams.find(1);
        console.log(team);
    } catch (error) {
        console.error(error);
    }
}

fetchTeam();