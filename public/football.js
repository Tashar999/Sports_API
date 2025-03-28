async function getFootballData(first_name, last_name) {
    try {
        const response = await fetch(`http://localhost:3000/api/football?first_name=${first_name}&last_name=${last_name}`);
            if (!response.ok) {
            throw new Error('Failed to fetch Football data');
        }
        const data = await response.json();

        console.log(data)
        console.log(data.player.data[0])
    } catch (error) {
        console.error('Error:', error);
    }
}

document.getElementById('FBPSearch').addEventListener('click', function() {
    const firstName = document.getElementById('FBPFirstName').value;
    const lastName = document.getElementById('FBPLastName').value;
    
    getFootballData(firstName, lastName);
});