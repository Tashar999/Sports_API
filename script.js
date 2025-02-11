async function getPlayerDetails() {
    const apiKey= `d0a198f9a82351d2795da1de28a3b4521eeba3dcb9581b3aa38b8d39c606bc84`
    const player= document.getElementById('search-player').value
    const url = `https://apiv3.apifootball.com/?action=get_players&player_name=${player}&APIkey=${apiKey}`


    try{
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
      displayResults(data)
    }catch (error) 
    {
      console.log("The application was not able to fetch the player", error);
    }
  }
  function displayResults(data){
    /*
    1. get the length of the json file
    2. be able to call from any line
    3. for loop to iterate over every person
    4. (optional) turn into 2 functions for ease of use
    */
    const [{player_name, player_image, player_goals, team_name, player_assists, player_type }] = data
    const htmlOutput = `
    <p><img src=${player_image} alt="player123" width="200px" height="auto" style="border-radius: 50%"></>
    <p>Player Name : ${player_name}</p>
    <p>Team: ${team_name}</p>
    <p>Goals:${player_goals}</p>
    <p>Assists: ${player_assists}</p>
    <p> Player Type: ${player_type}</p> 
    `
    const displayResults = document.getElementById('display-results')
    displayResults.innerHTML = htmlOutput 
  }
function loopArray(data){
  length
}
