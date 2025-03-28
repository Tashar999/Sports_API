async function getBasketballData(first_name, last_name) {
    try {
        // Log the query parameters to ensure they are being passed correctly
        console.log(`Fetching data for player: ${first_name} ${last_name}`);
        
        // Fetch player data based on the first and last name
        const response = await fetch(`http://localhost:3000/api/basketball?first_name=${first_name}&last_name=${last_name}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch Basketball data');
        }

        // Parse the JSON response
        const data = await response.json();

        // Log the API Response to check its structure
        console.log("API Response:", data);

        // Check if the 'player.data' array exists and contains data
        if (data.player && data.player.data && data.player.data.length > 0) {
            // Try finding the player exactly as entered (case-sensitive)
            const player = data.player.data.find(p => p.first_name === first_name && p.last_name === last_name);

            // Add extra log to confirm if a player was found
            if (player) {
                console.log("Player found:", player);
                // Display the player data if found
                displayPlayerData(player);
            } else {
                console.log(`No player found with first name: ${first_name} and last name: ${last_name}`);
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
    
    // Clear previous results before displaying new ones
    resultContainer.innerHTML = `
        <h2>Player Information</h2>
        <p><strong>Name:</strong> ${player.first_name} ${player.last_name}</p>
        <p><strong>Position:</strong> ${player.position}</p>
        <p><strong>Height:</strong> ${player.height}</p>
        <p><strong>Weight:</strong> ${player.weight} lbs</p>
        <p><strong>Jersey Number:</strong> ${player.jersey_number}</p>
        <p><strong>College:</strong> ${player.college}</p>
        <p><strong>Country:</strong> ${player.country}</p>
        <p><strong>Draft Year:</strong> ${player.draft_year}</p>
        <p><strong>Draft Round:</strong> ${player.draft_round}</p>
        <p><strong>Draft Number:</strong> ${player.draft_number}</p>
        
        <h3>Team Information</h3>
        <p><strong>Team:</strong> ${player.team.full_name} (${player.team.abbreviation})</p>
        <p><strong>Conference:</strong> ${player.team.conference}</p>
        <p><strong>Division:</strong> ${player.team.division}</p>
        <p><strong>City:</strong> ${player.team.city}</p>
    `;
}

// Event listener for the "submit" button
document.getElementById('BBPSearch').addEventListener('click', function() {
    const firstName = document.getElementById('BBPFirstName').value;
    const lastName = document.getElementById('BBPLastName').value;
    
    // Call the function to get and display the data
    getBasketballData(firstName, lastName);
});