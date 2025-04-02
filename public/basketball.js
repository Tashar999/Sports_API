async function getBasketballData(first_name, last_name) {
    try {
        
        console.log(`Fetching data for player: ${first_name} ${last_name}`);
        
        
        const response = await fetch(`/api/basketball?first_name=${first_name}&last_name=${last_name}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch Basketball data');
        }

        
        const data = await response.json();

        
        console.log("API Response:", data);

        
        if (data.player && data.player.data && data.player.data.length > 0) {
            
            const player = data.player.data.find(p => p.first_name === first_name && p.last_name === last_name);

            
            if (player) {
                console.log("Player found:", player);
                
                displayPlayerData(player);
            } else {
                console.log(`No player found with first name. Make sure to capitalize player name: ${first_name} and last name: ${last_name}`);
                document.getElementById('BBresultContainer').innerHTML = "<p>No player data found for the provided name.</p>";
            }
        } else {
            console.log("No data found in the API response.");
            document.getElementById('BBresultContainer').innerHTML = "<p>No player data found.</p>";
        }

    } catch (error) {
        console.error('Error:', error);
        document.getElementById('BBresultContainer').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function displayPlayerData(player) {
    const resultContainer = document.getElementById('BBresultContainer');
    
    
    resultContainer.innerHTML = `

    <div class="BBresultContainer">
        <h2>Player Information</h2>
        <h5> ${player.first_name} ${player.last_name}</h5>
        <p><strong>Position:</strong> ${player.position}</p>
        <p><strong>Height:</strong> ${player.height}    <strong>Weight:</strong> ${player.weight} lbs</p>
        <p><strong>Jersey Number:</strong> ${player.jersey_number}</p>
        <p><strong>College:</strong> ${player.college}</p>
        <p><strong>Country:</strong> ${player.country}</p>
        <p><strong>Draft Year:</strong> ${player.draft_year}  <strong>Draft Round:</strong> ${player.draft_round}  <strong>Draft Number:</strong> ${player.draft_number}</p>

        
        <h2>Team Information</h2>
        <p><strong>Team:</strong> ${player.team.full_name} (${player.team.abbreviation})</p>
        <p><strong>Conference:</strong> ${player.team.conference}</p>
        <p><strong>Division:</strong> ${player.team.division}</p>
        <p><strong>City:</strong> ${player.team.city}</p>
    </div>
    `;
}


document.getElementById('BBPSearch').addEventListener('click', function() {
    const firstName = document.getElementById('BBPFirstName').value;
    const lastName = document.getElementById('BBPLastName').value;
    
    
    getBasketballData(firstName, lastName);
});