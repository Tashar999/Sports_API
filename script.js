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
    }catch (error) 
    {
      console.log("The application was not able to fetch the player", error);
    }
  }
  function displayResults(data){
    const [{player_name, player_image, player_goals, team_name, player_assists }] = data
    const htmlOutput = `
    <p><img src=${player_image} alt="player123" width="200px" height="auto" style="border-radius: 50%"></>
    <p>Player Name : ${player_name}</p>
    <p>Belongs to ${team_name}</p>
    <p>Has Scored ${player_goals}</p>
    <p>with a total of ${player_assists} assists.</p>
    `
    const displayResults = document.getElementById('display-results')
    displayResults.innerHTML = htmlOutput 
  }
