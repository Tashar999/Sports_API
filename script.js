async function getData() {
    const url = 'https://apiv3.apifootball.com/?action=get_players&player_name=Benzema&APIkey=${apiKey}'
    const apiKey= 'd0a198f9a82351d2795da1de28a3b4521eeba3dcb9581b3aa38b8d39c606bc84'
    const player= 

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