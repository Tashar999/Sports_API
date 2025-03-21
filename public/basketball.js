async function getBasketballData() {
    try {
        const response = await fetch('http://localhost:3000/api/basketball');
        if (!response.ok) {
            throw new Error('Failed to fetch basketball data');
        }
        const data = await response.json();
        
        console.log('Teams:', data.teams);
    } catch (error) {
        console.error('Error:', error);
    }
}

getBasketballData();

/* to open the local host server in terminal type node index.js*/