import { BalldontlieAPI } from "@balldontlie/sdk";
const api = new BalldontlieAPI({ apiKey: "5325159e-4a06-4e5e-ac9d-6f95aaa5a111"});

async function getTeams() {
    try {
        const teams = await api.nba.getTeams();
        console.log(teams.data);}
        catch (error) {
            console.error(error)
        }
}
const getPlayer = (player) => {
    let data = player;

    api.nba
        .getPlayers({ search: player})
        .then((response) => data = response.data)
        .catch((error) => data = error);
    return data;
}

console.log(getPlayer("James"));

const teams = api.nba.getTeams();
const team = api.nbagetTeam(1);
const players = api.nba.getPlayers({
    search: `$player`,
})

