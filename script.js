async function getData() {
    const url = "https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=39&season=2020&team=33";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  getData()